const mongoose = require("mongoose");
const Message = require("../models/Message");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/urstupid';

function connectToDb() {
  mongoose.connect(MONGODB_URI);
}

connectToDb();

function generateSlug() {
  return (Math.random()*1000).toString(36).slice(3,8).toUpperCase()
}

exports.handler = async (event, context, cb) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const method = event.httpMethod;

    if (method === "GET") {
      const slug = event.queryStringParameters.slug;

      if (!slug)  {
        cb(null, {
          statusCode: 400,
          body: JSON.stringify({ error: "no slug was provided" })
        });
      } else {
        const message = await Message.findOne({ urlSlug: slug });

        if (!message) {
          cb(null, {
            statusCode: 404,
            body: JSON.stringify({ error: "could not find a message with that slug" })
          });
        } else {
          cb(null, {
            statusCode: 200,
            body: JSON.stringify({ message })
          });
        }
      }
    } else if (method === "POST") {
      const { message, fromName, targetName } = JSON.parse(event.body);

      let generatedSlug = generateSlug();
      let existingMessage = await Message.findOne({urlSlug: generatedSlug});

      while(!!existingMessage) {
        generatedSlug = generateSlug();
        existingMessage = await Message.findOne({urlSlug: generatedSlug});
      }

      const newMessage = new Message({
        urlSlug: generatedSlug,
        message,
        fromName,
        targetName
      });

      await newMessage.save();

      cb(null, {
        statusCode: 200,
        body: JSON.stringify({ message: newMessage })
      });
    }
  } catch (err) {
    cb(null, { 
      statusCode: 500, 
      body: JSON.stringify({
        error: err.toString() 
      })
    });
  }
}

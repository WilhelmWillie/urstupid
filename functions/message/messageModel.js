const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    maxlength: 280,
    required: true,
  },
  targetName: {
    type: String,
    maxlength: 64,
    required: true,
  },
  fromName: {
    type: String,
    maxlength: 64,
    required: true,
  },
  urlSlug: {
    type: String,
    unique: true,
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
exports.handler = async (event, context) => {
  try {
    console.log(event.httpMethod);

    const method = event.httpMethod;

    if (method === "GET") {
      console.log(JSON.stringify(event.queryStringParameters));
      const id = event.queryStringParameters.id;

      if  (!id)  {
        const response = {
          error: "could not find a message with that ID"
        }

        return {
          statusCode: 404,
          body: JSON.stringify(response)
        }
      } else {
        return {
          statusCode: 404,
          body: JSON.stringify({ id })
        }
      }
    } else if (method === "POST") {
      const data = JSON.parse(event.body);

      return  {
        statusCode: 200,
        body: JSON.stringify({ data })
      }
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
  response.end("Merhabalar");
}

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log('Server is running on port ${port}');
});

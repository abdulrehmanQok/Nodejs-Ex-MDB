const http = require('http');
const request_handler= require('./user');
const server = http.createServer(request_handler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
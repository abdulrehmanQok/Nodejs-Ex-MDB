const sum_request_handler = require('./sum');

const request_handler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <h1>Welcome in Calculator using Node.js</h1>
        <a href="/calculator">Go to Calculator</a>
      </html>
    `);
    return res.end();
  } 
  
  else if (req.url === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>Here is the calculator</h1>
          <form action="/calculator-result" method="POST">
            <input type="text" placeholder="Enter first number" name="first"/>
            <input type="text" placeholder="Enter second number" name="second"/>
            <button type="submit" value="sum">Sum</button>
          </form>
        </body>
      </html>
    `);
    return res.end();     
  } 
  
  else if (req.url === "/calculator-result" && req.method === 'POST') {
    // Delegate to sum_request_handler
    return sum_request_handler(req, res);
  }
};

module.exports = request_handler;

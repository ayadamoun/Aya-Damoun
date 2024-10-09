import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify();

  fastify.get("/feature/:code", async function handler(request, reply) {
    const  code  = request.params.code;
    return reply.send({ code, enabled: true });
  });

  return fastify;
}

/*const express = require('express');
const app = express();
const port = 3000;

app.get('/feature/:code', (req, res) => {
  const { code } = req.params;
  res.json({ code: code, enabled: true });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});*/


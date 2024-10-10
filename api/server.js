import Fastify from "fastify";
import { featureStore } from "./featureStore.js";

export function createServer() {
  const fastify = Fastify();

  fastify.get("/feature/:code", async function handler(request, reply) {
    const  code  = request.params.code;
    const enabled = await featureStore.isEnabled(code);
    return reply.send({ code, enabled });
  });

  return fastify;
}
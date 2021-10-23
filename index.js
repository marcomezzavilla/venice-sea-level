import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
const url = "https://dati.venezia.it/sites/default/files/dataset/opendata/livello.json";

async function handler(_req) {
  const resp = await fetch(url, {
    headers: {
      accept: "application/json",
    },
  });
  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    },
  });
}

console.log("Listening on http://localhost:8080");
await listenAndServe(":8080", handler);

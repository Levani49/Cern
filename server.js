import http from "http";

import finalhandler from "finalhandler";
import serveStatic from "serve-static";

const YEAR = 31536000;
const serve = serveStatic("dist", { cacheControl: `max-age=${YEAR}` });

const server = http.createServer(function (req, res) {
  serve(req, res, finalhandler(req, res));
});

server.listen(8080);

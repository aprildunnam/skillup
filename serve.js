#!/usr/bin/env node
/* Dev server. Serves docs/ under the site's baseUrl so local links match production.
   No dependencies. */
const http = require("http");
const fs = require("fs");
const path = require("path");
const config = require("./site.config.js");

const ROOT = path.join(__dirname, "docs");
const BASE = config.baseUrl;
const PORT = process.env.PORT || 8080;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg"
};

http.createServer(function (req, res) {
  let url;
  try {
    url = decodeURIComponent(req.url.split("?")[0]);
  } catch (error) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Bad request");
  }

  if (url === "/") {
    res.writeHead(302, { Location: BASE });
    return res.end();
  }
  if (!url.startsWith(BASE)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Not found. The site lives at " + BASE);
  }

  let rel = url.slice(BASE.length);
  if (rel === "" || rel.endsWith("/")) rel += "index.html";

  const file = path.resolve(ROOT, rel);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(file, function (err, buf) {
    if (err) {
      const fallback = path.join(ROOT, "404.html");
      return fs.readFile(fallback, function (e2, b2) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(e2 ? "Not found" : b2);
      });
    }
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(buf);
  });
}).listen(PORT, function () {
  console.log("SkillUp running at http://localhost:" + PORT + BASE);
});

import path from "path";
import { fileURLToPath } from "url";

import compression from "compression";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());

app.use(
  express.static(path.join(__dirname, "dist"), {
    etag: true
  })
);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

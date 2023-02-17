import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

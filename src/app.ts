import "express-async-error";
import express from "express";
import path from "node:path";

import { router } from "./routes";
const app = express();


app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use((err, res) => {
  console.log({ "ERROR": err });
  return res.status(400).json(err);
});
export { app };


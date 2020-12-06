import { Router } from "express";
const rt = Router();

rt.get("/", (req, res) => {
  res.send("ehlo");
});

export default rt;

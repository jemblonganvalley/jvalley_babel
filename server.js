import express from "express";
import cors from "cors";
import rt from "./routes/main";
const app = express();

app.use(cors());
app.use(express.json());
app.use(rt);

app.listen(3000, () => {
  console.log("listen 3000");
});

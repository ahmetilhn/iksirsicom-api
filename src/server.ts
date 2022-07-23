import express, { Request, Response } from "express";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  console.log("Hello world");
  res.status(200).json({
    msg: "İsteğe cevap verildi",
  });
});

const port = 8080;

app.listen(port, (): void => {
  console.log(`App is listening at http://localhost:${port}`);
});

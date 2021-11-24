import express, { Application, Request, Response } from "express";
const app: Application = express();

const PORT = 5000;

app.get("/", (request: Request, response: Response) => {
    response.status(200).send({ status: "OK", message: 'Typescript app is running..' });
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})
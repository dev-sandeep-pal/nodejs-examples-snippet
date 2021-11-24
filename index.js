const express = require('express');
const app = express();

const PORT = 5000;

app.get("/", (request, response) => {
    response.status(200).send({ status: "OK", message: 'App is running..' });
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})
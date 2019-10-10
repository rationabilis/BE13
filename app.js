const express = require("express");
const path = require("path");
const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");
const wrongRouter = require("./routes/wrong");
const mongoose = require('mongoose');
const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


app.listen(PORT);
app.use(express.static(path.join(__dirname, "public")));

app.use("/cards", cardsRouter);
app.use("/users", usersRouter);
app.use("/*", wrongRouter);

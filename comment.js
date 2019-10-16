/* Этот файл добавлен для получения разницы между ветвями и возможности объявить pull request */
const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const path = require("path");
const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");
const wrongRouter = require("./routes/wrong");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const contactFormRouter = require('./routes/contactForm');
app.use('/contactForm', contactFormRouter);

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});

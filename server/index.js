const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://www.oxiprojekt.com',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));


const contactFormRouter = require('./routes/contactForm');
app.use('/contactForm', contactFormRouter);

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

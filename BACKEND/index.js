require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");


const { HoldingModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrderModel } = require("./models/ordersModel");

const { createSecretToken } = require("./utils/createSecretToken");
const authRoute = require("./routes/AuthRoute");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const DBURL = process.env.MONGO_URL;
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

app.use(
  cors({
    origin: "http://localhost:5174", // No extra array
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/allholding", async (req, res) => {
  try {
    const allholding = await HoldingModel.find({});
    const allorder = await OrderModel.find({});
    res.json({ holdings: allholding, orders: allorder });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});


app.get("/allposition", async (req, res) => {
  const allposition = await PositionsModel.find({});
  res.json(allposition);
});

app.post("/neworder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
});

app.post("/sellorder", async (req, res) => {
  let sellOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  sellOrder.save();
});

app.get("/oderlist", async (req, res) => {
  const orderList = await OrderModel.find({});
  res.json(orderList);
});

app.use("/", authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App is running on port 3000");
  console.log("App started");
});

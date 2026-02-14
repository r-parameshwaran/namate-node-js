const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
const cors = require("cors");
const User = require("./models/user");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

app.post("/user", async (req, res) => {
  const { emailId } = req.body;
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log("userId", userId);
  try {
    await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(userId, data, { returnDocument: "after" });
    res.send("User updated successfully");
  } catch {
    res.status(400).send("Update failed:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connected DB successfully");
    app.listen("8000", async () => {
      try {
        console.log("listening successfully");
      } catch (e) {
        console.log("Error creating server");
      }
    });
  })
  .catch((e) => {
    console.log(e, "Error connecting database");
  });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/* ---------- Middlewares ---------- */
app.use(cors());
app.use(express.json());

/* ---------- MongoDB Connection ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

/* ---------- Contact Schema ---------- */
const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

const Contact = mongoose.model("Contact", contactSchema);

/* ---------- Contact API ---------- */
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        code: 400,
        message: "Required fields missing",
      });
    }

    await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    return res.status(200).json({
      code: 200,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return res.status(500).json({
      code: 500,
      message: "Server error",
    });
  }
});

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.send("Portfolio backend running 🚀");
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

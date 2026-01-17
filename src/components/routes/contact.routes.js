const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        code: 400, //Invalid or Bad Request
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

    res.status(200).json({
      code: 200,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({
      code: 500,
      message: "Server error",
    });
  }
});

module.exports = router;

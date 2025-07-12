const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(cors())
function validateTitle(title) {
  const forbiddenChars = /[\/,+&:\-]/;
  if (forbiddenChars.test(title)) {
    return "Please ADD 1 bill only. Buy SplitWise Pro to add more bills. Get SplitWise Pro at 30% OFF NOW";
  }
  if (title.length > 50) {
    return "Title is too long. Maximum 50 characters allowed.";
  }
  const forbiddenWords = [
    "and",
    "plus",
    "also",
    "with",
    "along",
    "as well as",
    "including",
    "includes",
  ];
  const lowerTitle = title.toLowerCase();
  for (const word of forbiddenWords) {
    if (lowerTitle.includes(word)) {
      return `Please ADD 1 bill only. Buy SplitWise Pro to add more bills. Get SplitWise Pro at 30% OFF NOW`;
    }
  }
  return null;
}

app.post("/bills", async (req, res) => {
  const { user_id, title, description, amount } = req.body;

  const error = validateTitle(title);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    const insertQuery = `
      INSERT INTO bills (user_id, title, description, amount)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const result = await pool.query(insertQuery, [
      user_id,
      title,
      description,
      amount,
    ]);
    res.json({ message: "Bill created successfully!", bill: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

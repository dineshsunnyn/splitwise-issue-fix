# Splitwise Bill Entry Fix – A Minimal Clone with Real Constraints

Hi there 👋

This project is a simple Splitwise clone I built to highlight and fix a specific issue I noticed: users on the free tier can technically bypass the 3-bill limit by merging multiple expenses into a single bill using words like `and`, `+`, `,`, etc.

---

## 🎯 What This Project Does

- Prevents users from entering titles like:
  - `"Coffee, Groceries, Laundry"`
  - `"Lunch + Snacks"`
  - `"Uber and Lyft"`
- Enforces a **title word/character restriction** to avoid bypassing the bill count
- Adds a proper **description** field to explain what the bill is about
- Keeps it super lightweight — no login/auth as this is more of a proof of concept

---

## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Frontend:** HTML, CSS, JS (no frameworks)
- **Testing:** Postman

---

## 🧪 How to Run It Locally

### 1. Clone the Repo

```bash
git clone https://github.com/dineshsunnyn/splitwise-issue-fix.git
cd splitwise-issue-fix
```
### 2. Backend Setup
```bash
cd splitwise-backend
npm install

```
Create a .env file like this:
```env
DB_USER=your_username #replace with your actual PostgreSQL username
DB_HOST=localhost
DB_NAME=splitwise_clone
DB_PASSWORD=
DB_PORT=5432

```
Make sure your PostgreSQL is up and running, and your database + tables are created.
Then run:
```bash
node index.js

```
### 3. Frontend Setup
Open the index.html file in your browser. The frontend is minimal and assumes the user id is always 1 for demo purposes.

### 📋 Validation Rules

1. Restricts use of delimiters: +, -, &, ,
2. Blocks words like: and, plus, also, including in the bill title
3. Enforces maximum character length on titles
4. Uses title as the main column for bills (not description)
5. Keeps a separate description field for details

### 💡 Why I Built This
I found a loophole in the Splitwise free plan limit that lets users bypass the 3-bill restriction. This project demonstrates a practical fix to that problem while showcasing my backend and frontend skills.

### 📬 Get in Touch
Feel free to reach out at dineshsunnynarsinga@gmail.com if you want to chat or collaborate!

### ⚠️ Disclaimer
This is a personal project for learning and demonstration only. Not affiliated with or endorsed by Splitwise.

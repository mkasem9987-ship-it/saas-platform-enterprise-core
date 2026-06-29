const express = require("express");
const app = express();

app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    system: "saas-platform",
    time: new Date()
  });
});

// Simple Login Mock
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@saas.com" && password === "123456") {
    return res.json({
      token: "fake-jwt-token",
      role: "admin"
    });
  }

  return res.status(401).json({
    error: "Invalid credentials"
  });
});

// Start Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});

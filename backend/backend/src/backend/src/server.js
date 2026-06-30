import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware أساسي
app.use(express.json());

// Route تجريبي للتأكد أن السيرفر يعمل
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Backend is running successfully",
    status: "OK",
    timestamp: new Date()
  });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

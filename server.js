const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

// in built middleware to parse body json
app.use(express.json());

// routes
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";
import "express-async-errors";
import router from "@/router";

const PORT = 8000;

const app = express();
router.register(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

import express from "express";

const router = express.Router();

router.get("/", getHomepage);

export default router;
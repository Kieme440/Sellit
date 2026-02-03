import express from "express";

const router = express.Router();

router.get("/", getHomepage);
router.get("/", getOurServices);
router.get("/", getAboutUs);

export default router;

import express from 'express'
import apiRouter from './api/api_routes.js';
const router = express.Router();

router.use("/api", apiRouter)

export default router;

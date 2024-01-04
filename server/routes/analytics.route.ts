import express from "express"
import { isAuthenticated } from "../middleware/auth";
import { authorizeRole } from "../controllers/user.controller";
import { getCoursesAnalytics, getOrdersAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";

const analyticsRouter = express.Router();

analyticsRouter.get("/get-users-analytics", isAuthenticated, authorizeRole("admin"), getUsersAnalytics)

analyticsRouter.get("/get-courses-analytics", isAuthenticated, authorizeRole("admin"), getCoursesAnalytics)

analyticsRouter.get("/get-orders-analytics", isAuthenticated, authorizeRole("admin"), getOrdersAnalytics)

export default analyticsRouter
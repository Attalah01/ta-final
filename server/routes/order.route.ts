import express from "express"
import { isAuthenticated } from "../middleware/auth"
import { createOrder, getAllOrders } from "../controllers/order.controller"
import { authorizeRole } from "../controllers/user.controller"

const orederRouter = express.Router()

orederRouter.post("/create-order", isAuthenticated, createOrder)

orederRouter.get("/get-orders", isAuthenticated, authorizeRole("admin"), getAllOrders)

export default orederRouter
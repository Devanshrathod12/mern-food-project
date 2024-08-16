import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, VarifyOrder , userOrders , listOrders , UpdateStatus} from "../controllers/ordercontroller.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",VarifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",UpdateStatus)

export default orderRouter;
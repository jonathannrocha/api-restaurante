import { Router } from "express";

import { ControllersCategories } from "./Controllers/categories";
import { ControllersProducts } from "./Controllers/products";
import { ControllersOrders } from "./Controllers/orders";

import { upload } from "./middlewares/multer";

const router = Router();

const controllerCategories = new ControllersCategories();
const controllersProducts = new ControllersProducts();
const controllerOrders = new ControllersOrders();

router.get("/categories", controllerCategories.getCateegories);
router.post("/categories", controllerCategories.createCategory);


router.post("/products", upload.single("image"), controllersProducts.create);
router.get("/products", controllersProducts.get);
router.get("/categories/:categoryId/products", controllersProducts.getProductsByCategory);

router.post("/orders", controllerOrders.create);
router.get("/orders", controllerOrders.get);
router.patch("/orders/:orderId", controllerOrders.update);



export { router };

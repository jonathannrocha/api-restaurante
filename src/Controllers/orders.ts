import { Request, Response } from "express";

import { ModelOrdes } from "../Models/orders";
import { ModelProducts } from "../Models/products";

const model = new ModelOrdes();

class ControllersOrders {
  async get(req: Request, res: Response) {

    const list = await model.get();

    return res.json(list);

  }

  async create(req: Request, res: Response) {

    const { table, products } = req.body;

    if (!table)
      return res.status(400).json({ error: "Table is requerid!" });

    if (!products)
      return res.status(400).json({ error: "Products is requerid!" });

    const productsText = JSON.stringify(products);

    const newOrder = await model.create(table, productsText);

    res.json(newOrder);
  }

  async update(req: Request, res: Response) {

    const { orderId, status } = req.body;

    if (!(orderId && status))
      throw new Error("Invalid data!");

    const order = await model.getUnique(orderId);

    if (!order)
      throw new Error("Order not exist!");

    const orderUpadte = await model.upadteStatus(orderId, status);

    return orderUpadte;
  }
}



export { ControllersOrders };

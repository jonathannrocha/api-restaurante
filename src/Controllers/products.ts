import e, { Request, Response } from "express";
import { ModelProducts } from "../Models/products";


const model = new ModelProducts();

class ControllersProducts {

  async get(req: Request, res: Response) {

    const products = await model.get();
    return res.json({ products });
  }

  async create(req: Request, res: Response) {

    const { name, description, price, ingredients, categoryId } = req.body;

    if (!req.file?.filename)
      return res.status(401).json({ status: "Image produtc is requerid" });

    const imagePath = req.file?.filename;

    if (!name)
      return res.status(401).json({ status: "Name produtc is requerid" });

    if (!description)
      return res.status(401).json({ status: "Description produtc is requerid" });

    if (!price)
      return res.status(401).json({ status: "Price produtc is requerid" });


    if (!categoryId)
      return res.status(401).json({ status: "Ingredients produtc is requerid" });


    const produtcsAlreadyExist = await model.getByName(name);

    if (produtcsAlreadyExist)
      return res.status(401).json({ status: "Produtc alread exist!" });

    const newProdutc = await model.create({ name, description, price, ingredients, categoryId, imagePath });

    return res.json(newProdutc.id);

  }

  async getProductsByCategory(req: Request, res: Response) {

    const { categoryId } = req.params;

    const list = await model.getProdutcbyCategory(categoryId);

    res.json(list);
  }
}


export { ControllersProducts };

import { Request, Response } from "express";
import { ModelCategories } from "../Models/categories";

const model = new ModelCategories();

class ControllersCategories {

  async getCateegories(req: Request, res: Response) {

    const list = await model.list();

    return res.json(list);
  }

  async createCategory(req: Request, res: Response) {

    const { name, icon } = req.body;

    if (!name)
      return res.status(400).json({ error: "Name is requerid!" });

    if (!icon)
      return res.status(400).json({ error: "Icon is requerid!" });

    const categoryAlreadExist = await model.list();

    const validator = categoryAlreadExist
      .map(value => value.name)
      .includes(name);

    if (validator)
      return res.status(400).json({ error: "Category alread exist!" });

    const newCategory = await model.create(name, icon);

    res.json(newCategory);
  }



}

export { ControllersCategories };




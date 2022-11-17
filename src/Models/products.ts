import { Prisma } from "../prisma/db.cofing";

interface requestProducts {
  name: string,
  description: string,
  imagePath: string,
  price: string,
  ingredients: string[]
  categoryId: string
}

class ModelProducts {

  async get() {
    const list = await Prisma.products.findMany();

    list.map(value => {
      return value.ingredients != "" ? value.ingredients = JSON.parse(value.ingredients) : value.ingredients;
    });
    return list;
  }

  async create({ name, description, imagePath, price, ingredients, categoryId }: requestProducts) {

    return await Prisma.products.create({
      data: {
        name,
        description,
        imagePath,
        price: Number(price) * 100,
        ingredients: String(ingredients),
        categoryId
      }
    });
  }

  async getProdutcbyCategory(categoryId: string) {

    const list = await Prisma.products.findMany({
      orderBy: {
        creatAt: "desc"
      },
      where: {
        categoryId
      }
    });

    list.map(value => {
      return value.ingredients != "" ? value.ingredients = JSON.parse(value.ingredients) : value.ingredients;
    });
    return list;
  }

  async getByName(name: string) {

    return await Prisma.products.findFirst({
      orderBy: {
        creatAt: "desc"
      },
      where: {
        name
      }
    });
  }


}


export { ModelProducts };

import { Prisma } from "../prisma/db.cofing";


class ModelCategories {
  async list() {
    return await Prisma.category.findMany({
      orderBy: {
        name: "asc"
      }
    });
  }

  async create(name: string, icon: string) {

    return await Prisma.category.create({
      data: {
        name: name.trim(),
        icon
      }
    });
  }

}


export { ModelCategories }
  ;

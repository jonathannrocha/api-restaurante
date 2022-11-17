import { Prisma } from "../prisma/db.cofing";
class ModelOrdes {

  async get() {
    const list = await Prisma.order.findMany();

    list.map(value => {
      return value.products != "" ? value.products = JSON.parse(value.products) : value.products;
    });

    return list;
  }

  async getUnique(id: string) {
    return await Prisma.order.findFirst(
      {
        where: {
          id
        }
      }
    );
  }

  async create(table: string, products: string) {
    return await Prisma.order.create({
      data: {
        table,
        products
      }
    });
  }

  async upadteStatus(orderId: string, status: string) {

    return await Prisma.order.update({
      where: {
        id: orderId
      },
      data: {
        status
      }
    });
  }
}

export { ModelOrdes };

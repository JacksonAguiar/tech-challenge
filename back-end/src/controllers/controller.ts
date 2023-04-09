import { Prisma, Sale } from "@prisma/client";
import prisma from "../prisma";

export default class Controller {
  async create(req, res) {
    try {
      const sales: any[] = req.body;

      const data = await prisma.sale.createMany({ data: sales });
      res.json(data);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        res.json({"code":e.code,"message": "Dados submetidos inválidos, verifique o arquivo e tente novamente."});
      }
      res.json(e);
    }
  }
  async fetch(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);
      const take = Number(limit);

      const sales = await prisma.sale.findMany({
        skip,
        take,
      });

      const total = await prisma.sale.count();

      res.json({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        sales,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

import { prisma } from "../../config/database.js";
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from "./category.types.js";

export class CategoryRepository {
  async create(data: CreateCategoryDto) {
    return prisma.category.create({
      data,
    });
  }

  async findAll() {
    return prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        children: true,
      },
    });
  }

  async findById(id: string) {
    return prisma.category.findUnique({
      where: { id },
      include: {
        children: true,
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.category.findUnique({
      where: { slug },
    });
  }

  async update(id: string, data: UpdateCategoryDto) {
    return prisma.category.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.category.delete({
      where: { id },
    });
  }
}
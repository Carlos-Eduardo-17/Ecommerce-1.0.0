import { Author } from "../schemas/author.schema.js";

export const authorRepository = {
  findAll() {
    return Author.find({ deletedAt: null });
  },

  findById(id) {
    return Author.findOne({ _id: id, deletedAt: null });
  },

  findByName(name) {
    return Author.findOne({
      name: new RegExp(`^${name}$`, "i"), // búsqueda case-insensitive exacta
      deletedAt: null,
    });
  },

  create(data) {
    return Author.create(data);
  },

  updateById(id, data) {
    return Author.findByIdAndUpdate(id, data, { new: true });
  },

  softDeleteById(id) {
    return Author.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
  },
};

import { Book } from "../schemas/book.schema.js";

export const bookRepository = {
  // Crear libro
  create(data) {
    return Book.create(data);
  },

  // Buscar libro por ID (incluye filtro soft delete)
  findById(id) {
    return Book.findOne({
      _id: id,
      deletedAt: null,
    })
      .populate("author")
      .populate("tags");
  },

  // Listar libros activos
  findAll() {
    return Book.find({ deletedAt: null })
      .populate("author")
      .populate("tags");
  },

  // Buscar por filtros (ej: tags, autor, título)
  findByFilter(filter = {}) {
    return Book.find({
      ...filter,
      deletedAt: null,
    })
      .populate("author")
      .populate("tags");
  },

  // Actualizar libro
  updateById(id, data) {
    return Book.findOneAndUpdate(
      { _id: id, deletedAt: null },
      data,
      { new: true }
    );
  },

  // Soft delete
  softDelete(id) {
    return Book.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
  },

  // Verificar existencia (útil para carrito, pedido, etc.)
  existsById(id) {
    return Book.exists({
      _id: id,
      deletedAt: null,
    });
  },
};

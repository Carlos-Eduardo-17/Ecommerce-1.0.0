import { Review } from "../schemas/review.schema.js";

export const reviewRepository = {
  // Crear reseña
  create(data) {
    return Review.create(data);
  },

  // Buscar reseña por ID
  findById(id) {
    return Review.findById(id);
  },

  // Obtener reseñas de un libro
  findByBook(bookId) {
    return Review.find({ book: bookId })
      .populate("user", "firstName lastName")
      .sort({ createdAt: -1 });
  },

  // Verificar si un usuario ya reseñó un libro
  existsByUserAndBook(userId, bookId) {
    return Review.exists({
      user: userId,
      book: bookId,
    });
  },

  // Listar todas (uso admin)
  findAll() {
    return Review.find()
      .populate("user", "firstName lastName")
      .populate("book", "title");
  },

  // Actualizar reseña (ej: ocultar / moderar)
  updateById(id, data) {
    return Review.findByIdAndUpdate(id, data, { new: true });
  },

  // Eliminar reseña (hard delete es aceptable aquí)
  deleteById(id) {
    return Review.findByIdAndDelete(id);
  },
};

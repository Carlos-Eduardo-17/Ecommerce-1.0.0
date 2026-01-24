import { Cart } from "../schemas/cart.schema.js";

export const cartRepository = {
  // Crear carrito
  create(data) {
    return Cart.create(data);
  },

  // Obtener carrito activo del usuario
  findActiveByUser(userId) {
    return Cart.findOne({
      user: userId,
      status: "ACTIVE",
    });
  },

  // Buscar carrito por ID
  findById(id) {
    return Cart.findById(id);
  },

  // Marcar carrito como convertido en pedido
  markAsConverted(cartId) {
    return Cart.findByIdAndUpdate(
      cartId,
      { status: "CONVERTED" },
      { new: true }
    );
  },

  // Cancelar carrito (opcional)
  cancel(cartId) {
    return Cart.findByIdAndUpdate(
      cartId,
      { status: "CANCELLED" },
      { new: true }
    );
  },
};

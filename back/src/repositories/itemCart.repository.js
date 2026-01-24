import { ItemCart } from "../schemas/itemCart.schema.js";

export const itemCartRepository = {
  // Agregar item al carrito
  create(data) {
    return ItemCart.create(data);
  },

  // Buscar item por carrito + libro
  findByCartAndBook(cartId, bookId) {
    return ItemCart.findOne({
      cart: cartId,
      book: bookId,
    });
  },

  // Obtener todos los items de un carrito
  findByCart(cartId) {
    return ItemCart.find({ cart: cartId })
      .populate("book", "title price imageString");
  },

  // Actualizar cantidad
  updateQuantity(itemId, quantity) {
    return ItemCart.findByIdAndUpdate(
      itemId,
      { quantity },
      { new: true }
    );
  },

  // Eliminar item del carrito
  deleteById(itemId) {
    return ItemCart.findByIdAndDelete(itemId);
  },

  // Eliminar todos los items de un carrito (ej: al convertir en pedido)
  deleteByCart(cartId) {
    return ItemCart.deleteMany({ cart: cartId });
  },
};

/*
Manejar los items congelados del pedido
Cada registro representa un libro comprado
Snapshot del libro comprado
Precio congelado
Cantidad
Relación directa con Order
*/

import { OrderDetail } from "../schemas/orderDetail.schema.js";

export const orderDetailRepository = {
  // Crear un detalle de pedido
  create(data) {
    return OrderDetail.create(data);
  },

  // Crear múltiples detalles (bulk insert)
  createMany(details) {
    return OrderDetail.insertMany(details);
  },

  // Obtener detalles por pedido
  findByOrder(orderId) {
    return OrderDetail.find({ order: orderId })
      .populate("book", "title imageString");
  },
};

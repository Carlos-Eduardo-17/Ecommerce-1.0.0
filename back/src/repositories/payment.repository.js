/*
Persistir pagos / transacciones
Consultar pagos por pedido
Actualizar estado del pago
NO habla con Stripe
NO valida reglas de negocio
*/

import { Payment } from "../schemas/payment.schema.js";

export const paymentRepository = {
  // Crear registro de pago
  create(data) {
    return Payment.create(data);
  },

  // Buscar pago por ID
  findById(id) {
    return Payment.findById(id)
      .populate("order", "status totalAmount")
      .populate("user", "firstName lastName email");
  },

  // Obtener pagos de un pedido
  findByOrder(orderId) {
    return Payment.find({ order: orderId }).sort({ createdAt: -1 });
  },

  // Obtener pagos de un usuario (historial)
  findByUser(userId) {
    return Payment.find({ user: userId }).sort({ createdAt: -1 });
  },

  // Actualizar estado del pago
  updateStatus(paymentId, status) {
    return Payment.findByIdAndUpdate(
      paymentId,
      { status },
      { new: true }
    );
  },

  // Guardar referencia del proveedor (Stripe, etc.)
  updateProviderReference(paymentId, providerData) {
    return Payment.findByIdAndUpdate(
      paymentId,
      providerData,
      { new: true }
    );
  },
};

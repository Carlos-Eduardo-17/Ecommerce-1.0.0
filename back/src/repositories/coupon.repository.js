import { Coupon } from "../schemas/coupon.schema.js";

export const couponRepository = {
  // Crear cupón
  create(data) {
    return Coupon.create(data);
  },

  // Buscar cupón por ID (activo)
  findById(id) {
    return Coupon.findOne({
      _id: id,
      deletedAt: null,
    });
  },

  // Buscar cupón por código (uso común en checkout)
  findByCode(code) {
    return Coupon.findOne({
      code,
      deletedAt: null,
    });
  },

  // Listar todos los cupones activos
  findAll() {
    return Coupon.find({ deletedAt: null });
  },

  // Actualizar cupón
  updateById(id, data) {
    return Coupon.findOneAndUpdate(
      { _id: id, deletedAt: null },
      data,
      { new: true }
    );
  },

  // Soft delete
  softDelete(id) {
    return Coupon.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
  },

  // Incrementar uso del cupón (atómico)
  incrementUsage(id) { // El service decide cuándo llamarlo
    return Coupon.findByIdAndUpdate(
      id,
      { $inc: { usedCount: 1 } },
      { new: true }
    );
  },

  // Verificar existencia (activo)
  existsById(id) {
    return Coupon.exists({
      _id: id,
      deletedAt: null,
    });
  },
};

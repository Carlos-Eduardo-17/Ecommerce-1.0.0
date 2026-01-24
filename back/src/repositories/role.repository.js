import { Role } from "../schemas/role.schema.js";

export const roleRepository = {
  findAll() {
    return Role.find();
  },

  findById(id) {
    return Role.findById(id);
  },

  findByName(name) {
    return Role.findOne({ name: name.toUpperCase() });
  },

  create(data) {
    return Role.create(data);
  },
};

import { Role } from "../schemas/role.schema.js";

export async function seedRoles() {
  const roles = ["USER", "ADMIN"];

  for (const name of roles) {
    const exists = await Role.findOne({ name });
    if (!exists) {
      await Role.create({ name });
      console.log(`✅ Role creado: ${name}`);
    }
  }
}

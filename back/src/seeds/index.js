import { seedRoles } from "./role.seed.js";
import { seedAdmin } from "./admin.seed.js";

export async function runSeeds() {
  await seedRoles();
  await seedAdmin();
}

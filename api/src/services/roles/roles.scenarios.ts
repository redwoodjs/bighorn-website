import type { Prisma, Role } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: { data: { name: "String8011696" } },
    two: { data: { name: "String661016" } },
  },
});

export type StandardScenario = ScenarioData<Role, "role">;

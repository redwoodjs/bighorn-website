import type { Prisma, User } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: "String",
        email: "String8078478",
        hashedPassword: "String",
        salt: "String",
        role: { create: { name: "String1041311" } },
      },
    },
    two: {
      data: {
        name: "String",
        email: "String6952991",
        hashedPassword: "String",
        salt: "String",
        role: { create: { name: "String2590398" } },
      },
    },
  },
});

export type StandardScenario = ScenarioData<User, "user">;

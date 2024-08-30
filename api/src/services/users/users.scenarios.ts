import type { Prisma, User } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: "String",
        email: "String3589616",
        hashedPassword: "String",
        salt: "String",
        role: { create: { name: "String6543646" } },
      },
    },
    two: {
      data: {
        name: "String",
        email: "String6926820",
        hashedPassword: "String",
        salt: "String",
        role: { create: { name: "String3167547" } },
      },
    },
  },
});

export type StandardScenario = ScenarioData<User, "user">;

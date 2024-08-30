import type { Prisma, Like } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.LikeCreateArgs>({
  like: {
    one: {
      data: {
        comment: {
          create: {
            comment: "String",
            updatedAt: "2024-08-29T20:27:58.406Z",
            author: {
              create: {
                name: "String",
                email: "String6673011",
                hashedPassword: "String",
                salt: "String",
                role: { create: { id: "String" } },
              },
            },
          },
        },
        user: {
          create: {
            name: "String",
            email: "String8874424",
            hashedPassword: "String",
            salt: "String",
            role: { create: { id: "String" } },
          },
        },
      },
    },
    two: {
      data: {
        comment: {
          create: {
            comment: "String",
            updatedAt: "2024-08-29T20:27:58.406Z",
            author: {
              create: {
                name: "String",
                email: "String5026625",
                hashedPassword: "String",
                salt: "String",
                role: { create: { id: "String" } },
              },
            },
          },
        },
        user: {
          create: {
            name: "String",
            email: "String642095",
            hashedPassword: "String",
            salt: "String",
            role: { create: { id: "String" } },
          },
        },
      },
    },
  },
});

export type StandardScenario = ScenarioData<Like, "like">;

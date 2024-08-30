import type { Prisma, SubscribeUserToComment } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.SubscribeUserToCommentCreateArgs>(
  {
    subscribeUserToComment: {
      one: {
        data: {
          comment: {
            create: {
              upgradeGuide: "String",
              comment: "String",
              updatedAt: "2024-08-30T02:57:27.192Z",
              author: {
                create: {
                  name: "String",
                  email: "String8981765",
                  hashedPassword: "String",
                  salt: "String",
                  role: { create: { name: "String6754836" } },
                },
              },
            },
          },
          user: {
            create: {
              name: "String",
              email: "String2999395",
              hashedPassword: "String",
              salt: "String",
              role: { create: { name: "String9780151" } },
            },
          },
        },
      },
      two: {
        data: {
          comment: {
            create: {
              upgradeGuide: "String",
              comment: "String",
              updatedAt: "2024-08-30T02:57:27.192Z",
              author: {
                create: {
                  name: "String",
                  email: "String6044296",
                  hashedPassword: "String",
                  salt: "String",
                  role: { create: { name: "String962634" } },
                },
              },
            },
          },
          user: {
            create: {
              name: "String",
              email: "String2723593",
              hashedPassword: "String",
              salt: "String",
              role: { create: { name: "String7978715" } },
            },
          },
        },
      },
    },
  },
);

export type StandardScenario = ScenarioData<
  SubscribeUserToComment,
  "subscribeUserToComment"
>;

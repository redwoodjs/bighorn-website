import type { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        upgradeGuide: 'String',
        comment: 'String',
        updatedAt: '2024-08-29T22:43:25.305Z',
        author: {
          create: {
            name: 'String',
            email: 'String2028131',
            hashedPassword: 'String',
            salt: 'String',
            role: { create: { name: 'String9117193' } },
          },
        },
      },
    },
    two: {
      data: {
        upgradeGuide: 'String',
        comment: 'String',
        updatedAt: '2024-08-29T22:43:25.305Z',
        author: {
          create: {
            name: 'String',
            email: 'String5678155',
            hashedPassword: 'String',
            salt: 'String',
            role: { create: { name: 'String1991678' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>

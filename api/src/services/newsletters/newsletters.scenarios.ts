import type { Prisma, Newsletter } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NewsletterCreateArgs>({
  newsletter: {
    one: { data: { email: 'String9087863' } },
    two: { data: { email: 'String3595541' } },
  },
})

export type StandardScenario = ScenarioData<Newsletter, 'newsletter'>

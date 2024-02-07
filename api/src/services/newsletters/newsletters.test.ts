import type { Newsletter } from '@prisma/client'

import {
  newsletters,
  newsletter,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from './newsletters'
import type { StandardScenario } from './newsletters.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('newsletters', () => {
  scenario('returns all newsletters', async (scenario: StandardScenario) => {
    const result = await newsletters()

    expect(result.length).toEqual(Object.keys(scenario.newsletter).length)
  })

  scenario(
    'returns a single newsletter',
    async (scenario: StandardScenario) => {
      const result = await newsletter({ id: scenario.newsletter.one.id })

      expect(result).toEqual(scenario.newsletter.one)
    }
  )

  scenario('creates a newsletter', async () => {
    const result = await createNewsletter({
      input: { email: 'String2709358' },
    })

    expect(result.email).toEqual('String2709358')
  })

  scenario('updates a newsletter', async (scenario: StandardScenario) => {
    const original = (await newsletter({
      id: scenario.newsletter.one.id,
    })) as Newsletter
    const result = await updateNewsletter({
      id: original.id,
      input: { email: 'String50264442' },
    })

    expect(result.email).toEqual('String50264442')
  })

  scenario('deletes a newsletter', async (scenario: StandardScenario) => {
    const original = (await deleteNewsletter({
      id: scenario.newsletter.one.id,
    })) as Newsletter
    const result = await newsletter({ id: original.id })

    expect(result).toEqual(null)
  })
})

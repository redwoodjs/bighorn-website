import { ROLES } from 'api/src/lib/auth'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    // Seed the roles
    for (const role of Object.values(ROLES)) {
      await db.role.upsert({
        where: { id: role.id },
        create: {
          id: role.id,
        },
        update: {},
      })
    }
  } catch (error) {
    console.error(error)
  }
}

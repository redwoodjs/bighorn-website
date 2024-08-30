import type { SubscribeUserToComment } from "@prisma/client";

import {
  subscribeUserToComments,
  subscribeUserToComment,
  createSubscribeUserToComment,
  updateSubscribeUserToComment,
  deleteSubscribeUserToComment,
} from "./subscribeUserToComments";
import type { StandardScenario } from "./subscribeUserToComments.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("subscribeUserToComments", () => {
  scenario(
    "returns all subscribeUserToComments",
    async (scenario: StandardScenario) => {
      const result = await subscribeUserToComments();

      expect(result.length).toEqual(
        Object.keys(scenario.subscribeUserToComment).length,
      );
    },
  );

  scenario(
    "returns a single subscribeUserToComment",
    async (scenario: StandardScenario) => {
      const result = await subscribeUserToComment({
        id: scenario.subscribeUserToComment.one.id,
      });

      expect(result).toEqual(scenario.subscribeUserToComment.one);
    },
  );

  scenario(
    "creates a subscribeUserToComment",
    async (scenario: StandardScenario) => {
      const result = await createSubscribeUserToComment({
        input: {
          commentId: scenario.subscribeUserToComment.two.commentId,
          userId: scenario.subscribeUserToComment.two.userId,
        },
      });

      expect(result.commentId).toEqual(
        scenario.subscribeUserToComment.two.commentId,
      );
      expect(result.userId).toEqual(scenario.subscribeUserToComment.two.userId);
    },
  );

  scenario(
    "updates a subscribeUserToComment",
    async (scenario: StandardScenario) => {
      const original = (await subscribeUserToComment({
        id: scenario.subscribeUserToComment.one.id,
      })) as SubscribeUserToComment;
      const result = await updateSubscribeUserToComment({
        id: original.id,
        input: { commentId: scenario.subscribeUserToComment.two.commentId },
      });

      expect(result.commentId).toEqual(
        scenario.subscribeUserToComment.two.commentId,
      );
    },
  );

  scenario(
    "deletes a subscribeUserToComment",
    async (scenario: StandardScenario) => {
      const original = (await deleteSubscribeUserToComment({
        id: scenario.subscribeUserToComment.one.id,
      })) as SubscribeUserToComment;
      const result = await subscribeUserToComment({ id: original.id });

      expect(result).toEqual(null);
    },
  );
});

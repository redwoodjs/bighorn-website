import type { Comment } from "@prisma/client";

import {
  comments,
  comment,
  createComment,
  updateComment,
  deleteComment,
} from "./comments";
import type { StandardScenario } from "./comments.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("comments", () => {
  scenario("returns all comments", async (scenario: StandardScenario) => {
    const result = await comments();

    expect(result.length).toEqual(Object.keys(scenario.comment).length);
  });

  scenario("returns a single comment", async (scenario: StandardScenario) => {
    const result = await comment({ id: scenario.comment.one.id });

    expect(result).toEqual(scenario.comment.one);
  });

  scenario("creates a comment", async (scenario: StandardScenario) => {
    const result = await createComment({
      input: {
        authorId: scenario.comment.two.authorId,
        upgradeGuide: "String",
        comment: "String",
        updatedAt: "2024-08-29T22:43:25.279Z",
      },
    });

    expect(result.authorId).toEqual(scenario.comment.two.authorId);
    expect(result.upgradeGuide).toEqual("String");
    expect(result.comment).toEqual("String");
    expect(result.updatedAt).toEqual(new Date("2024-08-29T22:43:25.279Z"));
  });

  scenario("updates a comment", async (scenario: StandardScenario) => {
    const original = (await comment({
      id: scenario.comment.one.id,
    })) as Comment;
    const result = await updateComment({
      id: original.id,
      input: { upgradeGuide: "String2" },
    });

    expect(result.upgradeGuide).toEqual("String2");
  });

  scenario("deletes a comment", async (scenario: StandardScenario) => {
    const original = (await deleteComment({
      id: scenario.comment.one.id,
    })) as Comment;
    const result = await comment({ id: original.id });

    expect(result).toEqual(null);
  });
});

export async function sendNewCommentSlackNotification({
  comment,
  upgradeGuide,
  commentLink,
  isReply,
}: {
  comment: string
  upgradeGuide: string
  commentLink: string
  isReply: boolean
}): Promise<void> {
  const preview = comment.substring(0, 61) + (comment.length > 61 ? '...' : '')
  const response = await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `💬 New ${isReply ? 'Reply' : 'Comment'} (${upgradeGuide})`,
            emoji: true,
          },
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `"${preview}"`,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View',
              emoji: true,
            },
            value: 'click_me_123',
            url: commentLink,
            action_id: 'button-action',
          },
        },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to send Slack message')
  }
}

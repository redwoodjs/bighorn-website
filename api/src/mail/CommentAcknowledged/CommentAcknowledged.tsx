import React from 'react'

import {
  Html,
  Text,
  Hr,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
  Img,
} from '@react-email/components'

export function CommentAcknowledged({ comment }: { comment: string }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>💬 We hear you load and clear 💬</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Img
              alt="RedwoodJS Logo"
              className="mx-auto rounded-[12px]"
              height={64}
              src="https://redwoodjs.com/favicon.png"
            />
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              💬 We hear you load and clear 💬
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              We have received your comment! Our team will look into it and get
              back to you as soon as possible.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[14px] leading-[24px] text-black">
              Your comment:
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {comment}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[14px] leading-[24px] text-black">
              Thanks for using RedwoodJS!
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

import React from 'react'

import {
  Html,
  Text,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
  Img,
  Button,
} from '@react-email/components'

export function NewReply({ commentLink }: { commentLink: string }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>💬 New reply to your comment 💬</Preview>
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
              💬 New reply to your comment 💬
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              We have received your comment! Our team will look into it and get
              back to you as soon as possible.
            </Text>
            <Button
              className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
              href={commentLink}
            >
              View reply
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

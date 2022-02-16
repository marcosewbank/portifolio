import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    transform: rotate(20deg);
  }
`

function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke={useColorModeValue('gray', 'whiteAlpha.900')}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Roboto"
            fontWeight="bold"
            ml={3}
          >
            Marcos Ewbank
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo

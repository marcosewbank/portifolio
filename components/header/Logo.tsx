import React from 'react'
import Link from 'next/link'
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
    transform: rotate(25deg);
    transition: transform 1s;
  }
`

function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="'Nunito', serif"
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

import React from 'react'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv: any = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    transition={{ duration: 0.8, delay }}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section

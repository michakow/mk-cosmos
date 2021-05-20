import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const StyledLinks = styled.div`
  display: flex;
  width: 350px;
  height: 448px;
  margin-left: 260px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`

const Links = () => {
  return (
    <StyledLinks>
      <Link type="capsule" />
      <Link type="crew" />
      <Link type="rocket" />
      <Link type="starlink" />
    </StyledLinks>
  )
}

export default Links

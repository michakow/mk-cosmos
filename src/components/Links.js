import styled from 'styled-components'
import Link from './Link'

const StyledLinks = styled.div`
  display: flex;
  width: 350px;
  min-height: 448px;
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

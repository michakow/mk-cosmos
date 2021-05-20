import styled from 'styled-components'
import Links from './Links';
import Animation from './Animation'

const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`

const StyledLinks = styled(Links)`
  flex-basis: 50%;
  align-self: flex-end;
`

const StyledAnimation = styled(Animation)`
  flex-basis: 50%;
`

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledLinks />
      <StyledAnimation />
    </StyledWrapper>
  )
}

export default Wrapper

import styled from 'styled-components'
import Links from './Links'
import Animation from './Animation'
// import Modal from './Modal'

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 32px 235px 0 260px;
  width: 100vw;
  justify-content: space-around;
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
      {/* <Modal /> */}
    </StyledWrapper>
  )
}

export default Wrapper

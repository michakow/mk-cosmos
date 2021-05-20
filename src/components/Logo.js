import logo from '../images/Logo.png'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 36px 0 0 165px;
`

const StyledLogo = styled.img`
  display: block;
  position: relative;
`

const Logo = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
    </StyledHeader>
  )
}

export default Logo

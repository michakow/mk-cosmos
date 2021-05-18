import logo from '../images/Logo.png';
import styled from 'styled-components'

const StyledLogo = styled.img`
  display: block;
  margin: 36px 0 0 165px;
`

const Logo = () => {
  return <StyledLogo src={logo} alt="logo" />
}

export default Logo

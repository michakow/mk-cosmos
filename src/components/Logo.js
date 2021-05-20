import logo from '../images/Logo.png';
import styled from 'styled-components'

const StyledLogo = styled.img`
  display: block;
  position: absolute;
  top: 36px;
  left: 165px;
`

const Logo = () => {
  return <StyledLogo src={logo} alt="logo" />
}

export default Logo

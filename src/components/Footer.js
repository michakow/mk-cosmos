import styled, { css } from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
`

const StyledParagraph = styled.p`
  flex-basis: 50%;
  padding: 28px 165px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: .4px;
  color: #8D7FBC;
  
  ${(props) => props.left && css`
    text-align: left;
  `}

  ${(props) => props.right && css`
    text-align: right;
  `}
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledParagraph left>Copyright &copy; Usertive &#38; SpaceX API</StyledParagraph>
      <StyledParagraph right>Recruiment Task / Summer 2021</StyledParagraph>
    </StyledFooter>
  )
}

export default Footer

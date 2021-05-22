import styled from 'styled-components'

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.p`
  padding: 5px;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #C3B8E8;
`

const ModalError = () => {
  return (
    <StyledError>
      <StyledText>Coś poszło nie tak...</StyledText>
      <StyledText>Sprawdź swoje połączenie lub wróć później.</StyledText>
    </StyledError>
  )
}

export default ModalError

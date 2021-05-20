import styled from 'styled-components'

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 540px;
  height: 360px;
  background-color: #2B224A;
  border: 1px solid #342957;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(22, 13, 49, .4);
  transform: translate(-50%,-50%);
  z-index: 4;
`

const Modal = () => {
  return (
    <StyledModal>
      
    </StyledModal>
  )
}

export default Modal

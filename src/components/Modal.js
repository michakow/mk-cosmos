import { useData } from './useData'
import styled from 'styled-components'
import ModalLoader from './ModalLoader'
import ModalResult from './ModalResult'
import closeIcon from '../images/close.svg'
import ModalError from './ModalError'

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 540px;
  height: 360px;
  padding: 20px 24px;
  background-color: #2B224A;
  border: 1px solid #342957;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(22, 13, 49, .4);
  transform: translate(-50%,-50%);
  z-index: 4;
`

const StyledHeading = styled.div`
  margin-bottom: 16px;
  display: flex;
`

const StyledIcon = styled.img`
  display: block;
  margin: 9px 5px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`

const StyledTitle = styled.p`
  flex-grow: 1;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 32px;
  color: #ffffff;
  text-transform: capitalize;
`

const Modal = ({ type, onCloseModal }) => {
  const modalData = useData({ type })

  return (
    <StyledModal>
      <StyledHeading>
        <StyledTitle>{type}</StyledTitle>
        <StyledIcon src={closeIcon} alt="close icon" onClick={onCloseModal} />
      </StyledHeading>
      {modalData.state === "loading" ? (
        <ModalLoader />
      ) : modalData.state === "error" ? (
        <ModalError />
      ) : (
        <ModalResult type={type} modalData={modalData} />
      )}
    </StyledModal>
  )
}

export default Modal

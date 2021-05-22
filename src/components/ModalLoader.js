import { IoRocket } from 'react-icons/io5'
import { BsDot } from 'react-icons/bs'
import styled, { css, keyframes } from 'styled-components'

const StyledLoader = styled.div`
  position: relative;
  flex-grow: 1;
`

const rocketMove = keyframes`
  from { transform: translate(calc(-50% + 60px),calc(-50% - 5px)) rotate(43deg); }
  to { transform: translate(calc(-50% + 60px),calc(-50% + 5px)) rotate(45eg); }
`

const StyledRocket = styled(IoRocket)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 150px;
  transform: translate(calc(-50% + 60px),-50%) rotate(45deg);
  color: #afa0ea;
  animation: ${rocketMove} 1.2s linear infinite alternate;
`

const dotShow = keyframes`
  from { opacity: 1 }
  to { opacity: 0; }
`

const StyledDot = styled(BsDot)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 120px;
  transform: translate(calc(-50% - 45px),-50%);
  color: #7860D7;
  animation: ${dotShow} 1s linear infinite;

  ${({order}) => order === "second" && css`
    transform: translate(calc(-50% - 80px),-50%);
    font-size: 100px;
    animation: ${dotShow} 1s linear .2s infinite;
  `}

  ${({order}) => order === "last" && css`
    transform: translate(calc(-50% - 110px),-50%);
    font-size: 80px;
    animation: ${dotShow} 1s linear .4s infinite;
  `}
`

const ModalLoader = () => {
  return (
    <StyledLoader>
      <StyledDot order="last" />
      <StyledDot order="second" />
      <StyledDot />
      <StyledRocket />
    </StyledLoader>
  )
}

export default ModalLoader
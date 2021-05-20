import styled, { css } from 'styled-components'

const StyledPath = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 50%;

  ${(props) => props.pos === 'left' && css`
    top: 18.75%;
    left: 81px;
    background-color: #E34A67;
  `}

  ${(props) => props.pos === 'top' && css`
    top: 84px;
    right: 38.68%;
    background-color: #00C9B7;
  `}

  ${(props) => props.pos === 'right' && css`
    bottom: 27.88%;
    right: 12.81%;
    background-color: #E34A67;
  `}

  ${(props) => props.pos === 'bottom' && css`
    bottom: 14.86%;
    left: 45.83%;
    background-color: #7860D7;
  `}

`

const Path = ({ pos }) => {
  return (
    <>
      <StyledPath pos={pos} />
    </>
  )
}

export default Path

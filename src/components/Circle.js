import styled, { css } from 'styled-components'

const StyledCircle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 346.42px;
  height: 346.42px;
  background-image: linear-gradient(180deg, #2B2347 0%, #221B3A 100%);
  border-radius: 50%;

  ${(props) => props.pos === 'left' && css`
    bottom: 12.97%;
    left: -177px;
  `}

  ${(props) => props.pos === 'top' && css`
    top: -206px;
    left: 33.61%;
  `}

  ${(props) => props.pos === 'right' && css`
    top: 14.86%;
    right: -177px;
  `}
`

const StyledInnerCircle = styled.div`
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  background-color: #221B3A;
  border-radius: 50%;
`

const Circle = ({ pos }) => {
  return (
    <StyledCircle pos={pos}>
      <StyledInnerCircle />
    </StyledCircle>
  )
}

export default Circle

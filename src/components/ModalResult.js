import styled from 'styled-components'
import DataTable from './DataTable'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 272px;
`

const StyledHeading = styled.div`
  display: flex;
`

const StyledHeader = styled.div`
  flex-basis: 50%;
  padding: 10px 0 10px 16px;
  background-color: #342A56;
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    background-color: #251D42;
  }
`

const StyledText = styled.h1`
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 20px;
  color: #A094C6;
`

const StyledTable = styled.div`
  margin-top: 16px;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 4px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track{
    background-color: #221A3C;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #53477D;
  }
`

const StyledGradient = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 5px;
  height: 52px;
  background-image: linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, #2B224A 100%);
  z-index: 5;
`

const ModalResult = ({ type, modalData }) => {
  let leftTitle, rightTitle, leftData, rightData
  switch (type) {
    case 'capsules':
      leftTitle = "Type"
      rightTitle = "Status"
      leftData = "type"
      rightData = "status"
      break;
    case 'crew':
      leftTitle = "Name"
      rightTitle = "Status"
      leftData = "name"
      rightData = "status"
      break;
    case 'rockets':
      leftTitle = "Name"
      rightTitle = "Country"
      leftData = "name"
      rightData = "country"
      break;
    case 'starlink':
      leftTitle = "Object name"
      rightTitle = "Object id"
      break;
    default:
      break;
  }

  return (
    <StyledContainer>
      <StyledHeading>
        <StyledHeader>
          <StyledText>{leftTitle}</StyledText>
        </StyledHeader>
        <StyledHeader>
          <StyledText>{rightTitle}</StyledText>
        </StyledHeader>
      </StyledHeading>
      <StyledTable>
        <DataTable modalData={modalData} leftData={leftData} rightData={rightData} />
      </StyledTable>
      <StyledGradient />
    </StyledContainer>
  )
}

export default ModalResult

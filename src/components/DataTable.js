import styled, { css } from 'styled-components'

const StyledTable = styled.table`
  display: flex;
`

const StyledTBody = styled.tbody`
  width: 100%;
  min-height: 277px;
`

const StyledRow = styled.tr`
  display: flex;
  width: 100%;

  ${(props) => props.last && css`
    height: 20px;
  `}
`

const StyledCell = styled.td`
  flex-basis: 50%;
  padding: 14px 16px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 20px;
  color: #D2CBE9;
`

const DataTable = ({ modalData, leftData, rightData }) => {
  return (
    <StyledTable>
      <StyledTBody>
        {modalData.data.map((element) => (
          <StyledRow key={element.id}>
            <StyledCell>{element.spaceTrack ? element.spaceTrack['OBJECT_NAME'] : element[leftData]}</StyledCell>
            <StyledCell>{element.spaceTrack ? element.spaceTrack['OBJECT_ID'] : element[rightData]}</StyledCell>
          </StyledRow>
        ))}
        <StyledRow last={true}/>
      </StyledTBody>
    </StyledTable>
  )
}

export default DataTable
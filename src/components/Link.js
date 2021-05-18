import { useState } from 'react';
import styled from 'styled-components'
import capsules from '../images/linkCapsules.png';
import crew from '../images/linkCrew.png';
import rockets from '../images/linkRockets.png';
import starlink from '../images/linkStarlink.png';

const StyledLink = styled.div`
  position: relative;
  width: 160px;
  height: 208px;
  overflow: hidden;
  border-radius: 16px;

  &:hover{
    cursor: pointer;
  }

  &:hover div{
    background-image: linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%);
  }

  &:hover img{
    filter: blur(2px);
  }

  &:hover p{
    bottom: 50%;
    transform: translateY(50%);
  }
`

const StyledGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(360deg, #2B224A 0%, rgba(43, 34, 74, 0) 100%);
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const StyledParagraph = styled.p`
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
  text-align: center;
  color: #ffffff;
`

const Link = ({ type }) => {
  const [hover, setHover] = useState(false)
  let img;
  switch (type) {
    case 'capsules':
      img = capsules;
      break;
    case 'crew':
      img = crew;
      break;
    case 'rockets':
      img = rockets;
      break;
    case 'starlink':
      img = starlink;
      break;
    default:
      break;
  }

  return (
    <StyledLink
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledImage src={img} alt="capsules" />
      <StyledGradient />
      <StyledParagraph>{!hover ? type : 'Details'}</StyledParagraph>
    </StyledLink>
  )
}

export default Link

import styled from 'styled-components'
import rocket from '../images/Rocket.png'
import smokeL from '../images/Smoke2.png'
import smokeR from '../images/Smoke1.png'
import platform from '../images/landingGear.png'
import planet from '../images/Planet.png'

const StyledContainer = styled.div`

`

const StyledIlustration = styled.div`
  position: relative;
  width: 375px;
  height: 444px;
`

const StyledPlanet = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 372px;
  z-index: 1;
`

const StyledRocket = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  width: 102px;
  height: 140px;
  transform: translateX(-50%);
  z-index: 3;
`

const StyledPlatform = styled.img`
  position: absolute;
  top: 122px;
  left: 50%;
  width: 68px;
  height: 23px;
  transform: translateX(-50%);
  z-index: 2;
`

const StyledSmokeL = styled.img`
  position: absolute;
  top: 82px;
  left: 87px;
  width: 65px;
  height: 62px;
  z-index: 2;
`

const StyledSmokeR = styled.img`
  position: absolute;
  top: 95px;
  right: 103px;
  width: 52px;
  height: 50px;
  z-index: 2;
`

const StyledButton = styled.button`
  display: block;
  margin: 24px auto 68px auto;
  padding: 12px 32px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
  background-color: #7860D7;
  border: none;
  border-radius: 8px;
`

const Animation = () => {
  return (
    <StyledContainer>
      <StyledIlustration>
        <StyledRocket src={rocket} alt='rocket' />
        <StyledPlatform src={platform} alt='rocket platform' />
        <StyledSmokeL src={smokeL} alt='left smoke' />
        <StyledSmokeR src={smokeR} alt='right smoke' />
        <StyledPlanet src={planet} alt='planet' />
      </StyledIlustration>
      <StyledButton>Launch Rocket!</StyledButton>
    </StyledContainer>
  )
}

export default Animation

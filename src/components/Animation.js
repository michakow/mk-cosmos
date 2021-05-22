import styled, { css, keyframes } from 'styled-components'
import rocket from '../images/Rocket.png'
import smokeL from '../images/Smoke2.png'
import smokeR from '../images/Smoke1.png'
import platform from '../images/landingGear.png'
import planet from '../images/Planet.png'
import explosion from '../images/explosion.png'
import { useState } from 'react'

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

const rocketMove = keyframes`
  0%{
    transform: translateX(-50%);
  }
  5%{
    transform: translate(-50%, -30px);
  }
  8%{
    transform: translate(0%, -70px) rotate(25deg);
  }
  12%{
    transform: translate(100px, -150px) rotate(90deg);
  }
  16%{
    transform: translate(150px, -150px) rotate(90deg);
  }
  22%{
    transform: translate(250px, -100px) rotate(135deg);
  }
  27%{
    transform: translate(300px, 30px) rotate(155deg);
  }
  32%{
    transform: translate(350px, 170px) rotate(180deg);
  }
  42%{
    transform: translate(300px, 450px) rotate(200deg);
  }
  48%{
    transform: translate(200px, 500px) rotate(225deg);
  }
  54%{
    transform: translate(-50%, 600px) rotate(270deg);
  }
  65%{
    transform: translate(calc(-50% - 700px), 550px) rotate(300deg);
  }
  67%{
    transform: translate(calc(-50% - 800px), 460px) rotate(360deg);
  }
  70%{
    transform: translate(calc(-50% - 800px), 350px) rotate(400deg);
  }
  74%{
    transform: translate(calc(-50% - 600px), 220px) rotate(420deg);
  }
  78%{
    transform: translate(-50%, 100px) rotate(450deg);
    opacity: 1;
  }
  79%{
    transform: translate(-50%, 100px) rotate(450deg);
    opacity: 0;
  }
  89%{
    transform: translate(-50%, -310px);
    opacity: 0;
  }
  90%{
    transform: translate(-50%, -310px);
    opacity: 1;
  }
  100%{
    transform: translateX(-50%);
  }
`

const StyledRocket = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  width: 102px;
  height: 140px;
  transform: translateX(-50%);
  z-index: 3;

  ${(props) => props.animate && css`
    animation: ${rocketMove} 7s linear;
  `}
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

const leftSmokeMove = keyframes`
  0%{
    transform: translateX(20px);
    opacity: 1;
  }
  13%{
    transform: translateX(-10px);
    opacity: 0;
  }
  94%{
    transform: translateX(20px);
    opacity: 0;
  }
  98%{
    transform: translateX(20px);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`

const rightSmokeMove = keyframes`
  0%{
    transform: translateX(-20px);
    opacity: 1;
  }
  13%{
    transform: translateX(10px);
    opacity: 0;
  }
  94%{
    transform: translateX(-20px);
    opacity: 0;
  }
  98%{
    transform: translateX(-20px);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`

const StyledSmokeL = styled.img`
  position: absolute;
  top: 82px;
  left: 87px;
  width: 65px;
  height: 62px;
  z-index: 2;

  ${(props) => props.animate && css`
    animation: ${leftSmokeMove} 7s linear;
  `}
`

const StyledSmokeR = styled.img`
  position: absolute;
  top: 95px;
  right: 103px;
  width: 52px;
  height: 50px;
  z-index: 2;

  ${(props) => props.animate && css`
    animation: ${rightSmokeMove} 7s linear;
  `}
`

const showExplosion = keyframes`
  0%{
    opacity: 0;
  }
  20%{
    transform: scale(1.5);
    opacity: 1;
  }
  60%{
    transform: scale(1.5);
    opacity: 1;
  }
  80%{
    transform: scale(1);
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`

const StyledExplosion = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  opacity: 0;
  
  ${(props) => props.animate && css`
    animation: ${showExplosion} 1s 5.5s linear;
  `}
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
  cursor: pointer;
`

const Animation = () => {
  const [animate, setAnimate] = useState(false)

  return (
    <StyledContainer>
      <StyledIlustration>
        <StyledRocket src={rocket} alt='rocket' animate={animate} onAnimationEnd={() => setAnimate(false)} />
        <StyledPlatform src={platform} alt='rocket platform' />
        <StyledSmokeL src={smokeL} alt='left smoke' animate={animate} />
        <StyledSmokeR src={smokeR} alt='right smoke' animate={animate} />
        <StyledPlanet src={planet} alt='planet' />
        {animate && <StyledExplosion src={explosion} alt='explosion' animate={animate} />}
      </StyledIlustration>
      <StyledButton onClick={() => setAnimate(!animate)}>{!animate ? 'Launch Rocket!' : 'Stop Rocket!'}</StyledButton>
    </StyledContainer>
  )
}

export default Animation

import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { GRADIENT_COLORS } from "@lib/consts"
import { GradientColorIndex, IGradientColor } from "@types"

const getGradientColor = (index: GradientColorIndex) => GRADIENT_COLORS[index]

const getAnimDirection = (index: GradientColorIndex) => {
  switch (index) {
    case 0:
    case 2:
      return "backwards"
    case 1:
    case 3:
    default:
      return "alternate"
  }
}

const animMovement = keyframes`
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 60%;
    transform: scale(2) rotate(0deg) translate(10%, 10%);
  }
  100% {
    border-radius: 88% 10% 22% 58% / 73% 56% 34% 77%;
    transform: scale(2) rotate(180deg) translate(10%, -10%);
  }
`

export const GradientColor = styled.div<IGradientColor>`
  width: 50%;
  height: 50%;
  display: flex;
  border-radius: 30% 80% 75% 40% / 40% 40% 70% 50%;
  animation-name: ${animMovement};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: ${(props) => getAnimDirection(props.index)};
  background-color: ${(props) => getGradientColor(props.index)};
`

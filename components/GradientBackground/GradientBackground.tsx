import { GradientBackdrop } from "@components/GradientBackdrop"
import { GradientColor } from "@components/GradientColor"
import styled from "@emotion/styled"
import { COLOR_DODGER_BLUE_2 } from "@lib/colors"

const AbsoluteDivHolder = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`
const GradientsWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  background: ${COLOR_DODGER_BLUE_2};
  flex-wrap: wrap;
  overflow: hidden;
`

export const GradientBackground = () => {
  return (
    <AbsoluteDivHolder>
      <GradientsWrapper>
        <GradientColor index={0} />
        <GradientColor index={1} />
        <GradientColor index={2} />
        <GradientColor index={3} />
        <GradientBackdrop />
      </GradientsWrapper>
    </AbsoluteDivHolder>
  )
}

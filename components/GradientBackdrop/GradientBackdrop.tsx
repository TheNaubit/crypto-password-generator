import styled from "@emotion/styled"
import { BLUR_AMOUNT } from "@lib/consts"

export const GradientBackdrop = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background: transparent;
  backdrop-filter: blur(${BLUR_AMOUNT});
`

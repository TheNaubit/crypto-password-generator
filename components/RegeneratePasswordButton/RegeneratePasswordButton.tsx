import { COLOR_PURE_WHITE, COLOR_ROYAL_BLUE_2 } from "@lib/colors"
import { Button } from "@mantine/core"
import { IRegeneratePasswordButton } from "@types"

export const RegeneratePasswordButton = ({
  generateNewPassword,
}: IRegeneratePasswordButton) => {
  return (
    <Button
      style={{
        borderColor: COLOR_ROYAL_BLUE_2,
        color: COLOR_PURE_WHITE,
        fontSize: 14,
      }}
      variant="outline"
      radius="md"
      size="md"
      onClick={() => generateNewPassword()}
    >
      Regenerate
    </Button>
  )
}

import { COLOR_ROYAL_BLUE, COLOR_ROYAL_BLUE_2 } from "@lib/colors"
import { Button, CopyButton } from "@mantine/core"
import { ICopyPasswordButton } from "@types"

export const CopyPasswordButton = ({
  generatedPassword,
}: ICopyPasswordButton) => {
  return (
    <CopyButton value={generatedPassword}>
      {({ copied, copy }) => (
        <Button
          radius="md"
          onClick={copy}
          variant="gradient"
          size="md"
          gradient={{
            from: COLOR_ROYAL_BLUE,
            to: COLOR_ROYAL_BLUE_2,
            deg: 30,
          }}
          style={{
            fontSize: 14,
          }}
        >
          {copied ? "🎉 Copied!" : "Copy password"}
        </Button>
      )}
    </CopyButton>
  )
}

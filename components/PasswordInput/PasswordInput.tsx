import { COLOR_DOWNRIVER, COLOR_PURE_WHITE } from "@lib/colors"
import { Input, Tooltip } from "@mantine/core"
import { IPasswordInput } from "@types"
import { useEffect } from "react"
import { useState } from "react"

export const PasswordInput = ({ generatedPassword }: IPasswordInput) => {
  const [isCopied, setIsCopied] = useState(false)

  const getInputPasswordFontSize = () => {
    const _passLength = generatedPassword.length

    if (_passLength <= 20) {
      return 16
    }

    if (_passLength <= 24) {
      return 14
    }

    if (_passLength <= 26) {
      return 12
    }

    if (_passLength > 26) {
      return 10
    }
  }

  const onClick = () => {
    navigator.clipboard.writeText(generatedPassword)
    setIsCopied(true)
  }

  useEffect(() => {
    if (isCopied) setTimeout(() => setIsCopied(false), 2000)
  }, [isCopied])

  return (
    <Tooltip
      label={isCopied ? "✅ Copied!" : "Click to copy!"}
      color={isCopied ? "green" : "dark"}
      position="bottom"
      withArrow
      events={{ hover: true, focus: true, touch: true }}
    >
      <Input
        radius="md"
        size="lg"
        variant="unstyled"
        readOnly
        value={generatedPassword}
        onClick={onClick}
        styles={{
          input: {
            textAlign: "center",
            backgroundColor: COLOR_DOWNRIVER,
            color: COLOR_PURE_WHITE,
            fontWeight: "bold",
            letterSpacing: 2,
            cursor: "pointer",
            fontSize: getInputPasswordFontSize(),
          },
        }}
      />
    </Tooltip>
  )
}

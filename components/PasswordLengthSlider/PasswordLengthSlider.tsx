import { COLOR_DOWNRIVER } from "@lib/colors"
import { Slider } from "@mantine/core"
import { IPasswordLengthSlider } from "@types"

export const PasswordLengthSlider = ({
  passwordLength,
  onChange,
}: IPasswordLengthSlider) => {
  return (
    <Slider
      defaultValue={16}
      min={4}
      max={32}
      step={1}
      size="xs"
      value={passwordLength}
      onChange={(value) => {
        // We have to ts-ignore because value will be always between 4 and 32 (due to min and max props)
        // but TS doesn't get it so it is throwing an error
        // @ts-ignore
        if (onChange) onChange(value)
      }}
      marks={[
        { value: 4, label: "4" },
        { value: 32, label: "32" },
      ]}
      style={{
        backgroundColor: COLOR_DOWNRIVER,
        borderRadius: 6,
        padding: "32px 12px 42px 12px",
      }}
      thumbSize={20}
      label={null}
    />
  )
}

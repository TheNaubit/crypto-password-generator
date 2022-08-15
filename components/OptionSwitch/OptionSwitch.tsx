import {
  COLOR_AZURE_RADIANCE,
  COLOR_BUNTING,
  COLOR_DOWNRIVER,
  COLOR_PURE_WHITE,
} from "@lib/colors"
import { Switch } from "@mantine/core"
import { IOptionSwitch } from "@types"

export const OptionSwitch = ({ checked, onChange, label }: IOptionSwitch) => {
  return (
    <Switch
      label={label}
      checked={checked}
      onChange={(event) => {
        if (onChange) onChange(event)
      }}
      py={16}
      px={12}
      style={{
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        backgroundColor: COLOR_DOWNRIVER,
        borderRadius: 6,
      }}
      styles={{
        label: {
          color: COLOR_PURE_WHITE,
          paddingLeft: 0,
        },
        input: {
          backgroundColor: checked ? COLOR_AZURE_RADIANCE : COLOR_BUNTING,
          borderColor: "transparent",
        },
      }}
    />
  )
}

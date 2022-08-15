import { ChangeEvent } from "react"

export interface ICopyPasswordButton {
  generatedPassword: string
}

export interface IRegeneratePasswordButton {
  generateNewPassword: Function
}

export interface IOptionSwitch {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => Boolean
  label: string
}

export type TPasswordLength =
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32

export interface IPasswordLengthSlider {
  // Not a really "beautiful" way to cap the number options but... the only way that TS currently supports
  passwordLength: TPasswordLength
  onChange?: (value: TPasswordLength) => void
}

export interface IPasswordInput {
  generatedPassword: string
}

export type GradientColorIndex = 0 | 1 | 2 | 3

export interface IGradientColor {
  index: GradientColorIndex
}

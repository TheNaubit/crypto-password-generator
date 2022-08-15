import { Card, Container, Input, SimpleGrid, Stack, Text } from "@mantine/core"
import type { NextPage } from "next"
import Head from "next/head"
import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { LETTERS, NUMBERS, SYMBOLS } from "../lib/consts"
// @ts-ignore
import { rando } from "@nastyox/rando.js"
import { CopyPasswordButton } from "@components/CopyPasswordButton"
import { RegeneratePasswordButton } from "@components/RegeneratePasswordButton"
import { OptionSwitch } from "@components/OptionSwitch"
import { PasswordLengthSlider } from "@components/PasswordLengthSlider"
import { PasswordInput } from "@components/PasswordInput"
import { TPasswordLength } from "@types"
import { useCallback } from "react"
import { GradientBackground } from "@components/GradientBackground"
import { AppContainer } from "@components/AppContainer"
import { NextLink } from "@mantine/next"
import {
  COLOR_BLACK_PEARL,
  COLOR_DODGER_BLUE,
  COLOR_EAST_BAY,
  COLOR_PURE_WHITE,
  COLOR_ROYAL_BLUE,
} from "@lib/colors"

const Home: NextPage = () => {
  const [passwordLength, setPasswordLength] = useState<TPasswordLength>(16)
  const [generatedPassword, setGeneratedPassword] = useState("")
  const [useNumbers, setUseNumbers] = useState(true)
  const [useLetters, setUseLetters] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)

  const passwordDictionary = useMemo(() => {
    let _retDict = ""
    if (useNumbers) _retDict = _retDict + NUMBERS
    if (useLetters) _retDict = _retDict + LETTERS
    if (useSymbols) _retDict = _retDict + SYMBOLS

    return _retDict
  }, [useNumbers, useLetters, useSymbols])

  const generateNewPassword = useCallback(() => {
    let _newPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      _newPassword = _newPassword + rando(passwordDictionary)
    }
    setGeneratedPassword(_newPassword)
  }, [passwordDictionary, passwordLength])

  const changeNumbersSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    let _newValue = e.currentTarget.checked
    if (!useLetters && !useSymbols && !_newValue) {
      e.preventDefault()
      return false
    }

    setUseNumbers(_newValue)
    return true
  }

  const changeLettersSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    let _newValue = e.currentTarget.checked
    if (!useNumbers && !useSymbols && !_newValue) {
      e.preventDefault()
      return false
    }

    setUseLetters(_newValue)
    return true
  }

  const changeSymbolsSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    let _newValue = e.currentTarget.checked
    if (!useNumbers && !useLetters && !_newValue) {
      e.preventDefault()
      return false
    }

    setUseSymbols(_newValue)
    return true
  }

  useEffect(() => {
    generateNewPassword()
  }, [useNumbers, useLetters, useSymbols, passwordLength, generateNewPassword])

  return (
    <>
      <Head>
        <title>@thenaubit Password Generator</title>
        <meta
          name="description"
          content="🦄 A cryptographically secure password generator!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientBackground />

      <AppContainer>
        <Card
          sx={{
            width: 350,
            minHeight: 650,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
            backgroundColor: COLOR_BLACK_PEARL,
          }}
          shadow="sm"
          radius="md"
          px={20}
          py={30}
        >
          <Text
            color={COLOR_PURE_WHITE}
            align="center"
            size={23}
            weight={900}
            transform="uppercase"
            mb={0}
            mt={5}
          >
            Generate Password
          </Text>

          <Stack spacing={30}>
            <Input.Wrapper>
              <Input.Label size="xs" mb={6} sx={{ color: COLOR_EAST_BAY }}>
                GENERATED PASSWORD
              </Input.Label>
              <PasswordInput generatedPassword={generatedPassword} />
            </Input.Wrapper>
            <Container sx={{ width: "100%", padding: 0 }}>
              <Text size="xs" mb={6} color={COLOR_EAST_BAY}>
                LENGTH: {passwordLength}
              </Text>
              <PasswordLengthSlider
                passwordLength={passwordLength}
                onChange={setPasswordLength}
              />
            </Container>

            <Container mt={0} sx={{ width: "100%", padding: 0 }}>
              <Text size="xs" mb={6} color={COLOR_EAST_BAY}>
                SETTINGS
              </Text>
              <Stack spacing="sm">
                <OptionSwitch
                  label="Include numbers"
                  checked={useNumbers}
                  onChange={changeNumbersSwitch}
                />
                <OptionSwitch
                  label="Include letters"
                  checked={useLetters}
                  onChange={changeLettersSwitch}
                />

                <OptionSwitch
                  label="Include symbols"
                  checked={useSymbols}
                  onChange={changeSymbolsSwitch}
                />
              </Stack>
            </Container>
          </Stack>

          <SimpleGrid cols={2}>
            <RegeneratePasswordButton
              generateNewPassword={generateNewPassword}
            />
            <CopyPasswordButton generatedPassword={generatedPassword} />
          </SimpleGrid>
        </Card>
        <Text
          size="xs"
          variant="gradient"
          gradient={{
            from: COLOR_DODGER_BLUE,
            to: COLOR_ROYAL_BLUE,
            deg: 90,
          }}
        >
          Created with 💙 by{" "}
          <NextLink href="https://twitter.com/thenaubit" target={"_blank"}>
            @thenaubit
          </NextLink>
        </Text>
      </AppContainer>
    </>
  )
}

export default Home

import { Slot, Stack, Tabs } from "expo-router";

import tamaguiConfig from '../tamagui.config'
import { TamaguiProvider, Theme } from "tamagui";

export default function RootLayout () {
    return(
        <TamaguiProvider config={tamaguiConfig}>
            <Theme name='active'>
            <Stack/>
            </Theme>
        </TamaguiProvider>
    )
}
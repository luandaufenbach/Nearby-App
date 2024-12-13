import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";

import { router } from "expo-router";

import { s } from "./styles"
import { Button } from "@/components/button"

type props = {
    uri: string
}

export function Cover({ uri }: props) {
    return (
        <ImageBackground source={{ uri }} style={s.container}>
            <View>
                <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}
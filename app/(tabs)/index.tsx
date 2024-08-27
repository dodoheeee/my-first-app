import { StyleSheet, View, Image, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import React from "react";

const Header = () => {
    return <ThemedText></ThemedText>;
};
const MyProfile = () => {
    return <ThemedText></ThemedText>;
};

const Division = () => {
    return <ThemedText></ThemedText>;
};

const FriendSection = () => {
    return <ThemedText></ThemedText>;
};

const FriendList = () => {
    return (
        <View style={styles.container}>
            <Profile
                uri={
                    "https://i.namu.wiki/i/AatouDbVMi8h7PdA0OafnL1qJbabCR37p4x_sXo3YOGr_RJwAjo1x429j8MFesFyAJuARmJ0EoLfPG8-_ZWCu_D3NiR2jATDuP4WP2lGL5Y23E08hUAgSCza79mB_r4_OxDRQmCD4sCQQyY3htXgwg.webp"
                }
                name={"김민수"}
                profileSize={50}
            />
            <Profile
                uri={"https://file.osen.co.kr/article_thumb/2024/02/16/202402161226777866_65ced5ea683e5_320x.jpg"}
                name={"신유"}
                profileSize={50}
            />
            <Profile
                uri={
                    "https://i.namu.wiki/i/AatouDbVMi8h7PdA0OafnL1qJbabCR37p4x_sXo3YOGr_RJwAjo1x429j8MFesFyAJuARmJ0EoLfPG8-_ZWCu_D3NiR2jATDuP4WP2lGL5Y23E08hUAgSCza79mB_r4_OxDRQmCD4sCQQyY3htXgwg.webp"
                }
                name={"데이식스"}
                profileSize={50}
            />
            <Profile
                uri={"https://file.osen.co.kr/article_thumb/2024/02/16/202402161226777866_65ced5ea683e5_320x.jpg"}
                name={"영케이"}
                profileSize={50}
            />
            <Profile
                uri={
                    "https://i.namu.wiki/i/AatouDbVMi8h7PdA0OafnL1qJbabCR37p4x_sXo3YOGr_RJwAjo1x429j8MFesFyAJuARmJ0EoLfPG8-_ZWCu_D3NiR2jATDuP4WP2lGL5Y23E08hUAgSCza79mB_r4_OxDRQmCD4sCQQyY3htXgwg.webp"
                }
                name={"도희"}
                profileSize={50}
            />
        </View>
    );
};

const Profile = (props: any) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image
                source={{ uri: props.uri }}
                style={{
                    width: props.profileSize,
                    height: props.profileSize,
                }}
            />
            <Text>{props.name}</Text>
        </View>
    );
};

export default function HomeScreen() {
    return (
        <View style={styles.box}>
            <Header />
            <MyProfile />
            <Division />
            <FriendSection />
            <FriendList />
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 250,
        width: 400,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "lightblue",
    },
    box: {
        display: "flex",
        width: "100%",
        height: 700,
    },
    input: {
        color: "white",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        width: "100%",
        height: 52,
        backgroundColor: "lightblue",
        borderRadius: 8,
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    switch: {
        marginTop: 20,
    },
});

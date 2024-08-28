import React, { useEffect, useState } from "react";
import { View, Text, Button, Switch, TextInput, ActivityIndicator } from "react-native";

const Component = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [text, setText] = useState("");
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        if (isRefreshing) {
            setTimeout(() => {
                setIsRefreshing(false);
            }, 2000);
        }
    }, [isRefreshing]);

    return (
        <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Text>You clicked {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} />
            <Switch value={isOn} onValueChange={setIsOn} style={{ marginTop: 20 }} />
            <TextInput
                value={text}
                onChange={setText}
                style={{
                    marginTop: 20,
                    borderWidth: "1px",
                    borderColor: "#EAF3FF",
                    width: 200,
                    height: 40,
                    color: "#4A5BF7",
                }}
            />
            <Button title="Refresh" onPress={() => setIsRefreshing(true)} />
            <ActivityIndicator animating={isRefreshing} size="large" color="#4A5BF7" />
        </View>
    );
};

export default Component;

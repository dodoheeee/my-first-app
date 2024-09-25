import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

// 반복되는 UI 컴포넌트화
export const InputBox = (props) => {
    return (
        <View
            style={{
                flexDirection: "row",
            }}>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={{ borderBottomWidth: 1, width: 200 }}
                placeholder={props.placeholder}
            />
            <Button title={"초기화"} onPress={props.onRest} />
        </View>
    );
};

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const resetValue = () => {
        setValue(initialValue);
    };

    return {
        value,
        setValue,
        resetValue,
    };
};

const CustomHook = () => {
    const { value: name, setValue: setName, resetValue: resetName } = useInput("");
    const { value: age, setValue: setAge, resetValue: resetAge } = useInput("");
    const { value: city, setValue: setCity, resetValue: resetCity } = useInput("");

    return (
        <View>
            <InputBox value={name} onChangeText={setName} placeholder="이름을 입력해주세요" onRest={resetName} />
            <InputBox value={age} onChangeText={setAge} placeholder="나이를 입력해주세요" onRest={resetAge} />
            <InputBox value={city} onChangeText={setCity} placeholder="도시를 입력해주세요" onRest={resetCity} />
        </View>
    );
};

export default CustomHook;

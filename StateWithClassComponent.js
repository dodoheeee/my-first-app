import React from "react";
import { View, Text, Button } from "react-native";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }
    render() {
        return (
            <View>
                <Text>You clicked {this.state.count} times</Text>
                <Button title="Click me" onPress={() => this.setState({ count: this.state.count + 1 })} />
            </View>
        );
    }
}

export default Component;

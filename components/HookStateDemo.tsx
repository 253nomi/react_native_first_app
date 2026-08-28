import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function HookStateDemo() {
  const [state, setState] = useState(10);

  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 100,
        }}
      >
        {state}
      </Text>
      <Button title="Increase" onPress={() => setState(state + 1)} />
      <Button title="Decrease" onPress={() => setState(state - 1)} />
    </View>
  );
}

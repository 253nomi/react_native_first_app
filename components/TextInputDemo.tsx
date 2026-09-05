import { ImageBackground, TextInput, View } from "react-native";

export default function TextInputDemo() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Enter text"
        style={{
          width: "80%",
          height: 40,
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 4,
          paddingHorizontal: 10,
        }}
        // secureTextEntry={true}
      />
    </View>
  );
}

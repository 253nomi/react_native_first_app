import { ImageBackground, View } from "react-native";

export default function BackgroundImageDemo() {
  return (
    <ImageBackground source={require("../assets/icon.png")}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "black",
        }}
      />
    </ImageBackground>
  );
}

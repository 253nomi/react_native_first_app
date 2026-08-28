import React from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function InteractiveDemo() {
  const onButtonPress = () => Alert.alert("Button Pressed");

  return (
    <>
      <Pressable onPress={onButtonPress}>
        <Image
          source={require("../assets/splash-icon.png")}
          style={styles.imageStyle}
        />
      </Pressable>
      <TouchableOpacity onPress={onButtonPress}>
        <Image
          source={require("../assets/splash-icon.png")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>

      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.imageStyle}
      />
      <Button title="Press on me" onPress={onButtonPress} />
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});

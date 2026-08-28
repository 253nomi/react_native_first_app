import React from "react";
import { ActivityIndicator, Platform, Text } from "react-native";

export default function PlatformDemo() {
  return (
    <>
      <Text>
        This is {Platform.OS === "android" ? "Android" : "iOS"} Device
      </Text>
      <ActivityIndicator size={"large"} color={"red"} />
    </>
  );
}

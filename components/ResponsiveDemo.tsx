import React from "react";
import { View } from "react-native";
import { scale, s, verticalScale, vs } from "react-native-size-matters";

export default function ResponsiveDemo() {
  return (
    <>
      <View
        style={{
          backgroundColor: "red",
          height: verticalScale(300),
          width: scale(300),
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
          height: vs(300),
          width: s(300),
        }}
      />
    </>
  );
}

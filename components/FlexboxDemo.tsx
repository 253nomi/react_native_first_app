import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FlexboxDemo() {
  return (
    <>
      <View
        style={[
          styles.view1,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <Text>Text1</Text>
        <Text>Text2</Text>
        <Text>Text3</Text>
      </View>
      <View
        style={[
          styles.view2,
          { flexDirection: "column", justifyContent: "space-between" },
        ]}
      >
        <Text>Text1</Text>
        <Text>Text2</Text>
        <View style={styles.childView2}></View>
        <Text>Text3</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 200,
    width: 200,
    backgroundColor: "red",
    marginTop: 50,
    marginLeft: 100,
  },
  view2: {
    height: 200,
    width: 200,
    backgroundColor: "red",
    marginTop: 50,
    marginLeft: 100,
  },
  childView2: {
    height: 50,
    width: 50,
    paddingTop: 30,
    paddingLeft: 100,
    marginLeft: 20,
    backgroundColor: "black",
  },
});

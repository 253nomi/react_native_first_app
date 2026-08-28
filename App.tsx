import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlexboxDemo from "./components/FlexboxDemo";
import HelloWorldText from "./components/HelloWorldText";
import InteractiveDemo from "./components/InteractiveDemo";
import PlatformDemo from "./components/PlatformDemo";
import ResponsiveDemo from "./components/ResponsiveDemo";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HelloWorldText />
          <InteractiveDemo />
          <PlatformDemo />
          <FlexboxDemo />
          <ResponsiveDemo />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

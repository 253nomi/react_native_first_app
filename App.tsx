import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlexboxDemo from "./components/FlexboxDemo";
import HelloWorldText from "./components/HelloWorldText";
import InteractiveDemo from "./components/InteractiveDemo";
import PlatformDemo from "./components/PlatformDemo";
import ResponsiveDemo from "./components/ResponsiveDemo";
import HookStateDemo from "./components/HookStateDemo";
import ModalDemo from "./components/ModalDemo";
import BackgroundImageDemo from "./components/BackgroundImageDemo";
import TextInputDemo from "./components/TextInputDemo";

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
          <HookStateDemo />
          <ModalDemo />
          <BackgroundImageDemo />
          <TextInputDemo />
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

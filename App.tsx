// import { StatusBar } from 'expo-status-bar';
import {
  Alert, // To Show Alert
  StyleSheet, // To Create Design Guidelines
  Text, // For Text
  View,
  Image, // To Render Image
  Button, // To Create Button
  TouchableOpacity, // To Create Tap with Effect
  Pressable, // To Create Tap without Effect
  ScrollView, // To Make Screen Scrollable
  Platform, // To Check Platform i.e "android" or "ios"
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const onButtonPress = () => Alert.alert("Button Pressed");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.titleText}>Hello World!</Text>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Lorem ipsum dolor sit
            <Text
              style={styles.underLineText}
              onPress={() => Alert.alert("Text Pressed")}
            >
              Press here
            </Text>
            amet consectetur adipisicing elit. Voluptatum commodi fugit
            explicabo ab quas enim beatae error nostrum quae rem? Odio dolor a
            possimus eaque perferendis adipisci accusamus dolores minus.
          </Text>
          <Pressable onPress={onButtonPress}>
            <Image
              source={require("./assets/splash-icon.png")}
              style={styles.imageStyle}
            />
          </Pressable>
          <TouchableOpacity onPress={onButtonPress}>
            <Image
              source={require("./assets/splash-icon.png")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>

          <Image
            source={require("./assets/splash-icon.png")}
            style={styles.imageStyle}
          />
          <Button title="Press on me" onPress={onButtonPress} />

          <Text>
            This is {Platform.OS == "android" ? "Android" : "IOS"} Device
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "red",
  },
  underLineText: {
    color: "red",
    textDecorationLine: "underline",
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});

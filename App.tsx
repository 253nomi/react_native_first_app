// import { StatusBar } from 'expo-status-bar';
import {
  Alert, // To Show Alert Component
  StyleSheet, // To Create Design Guidelines
  Text, // For Text Component
  View, // To Create a wrapper around other components
  Image, // To Render Image Component
  Button, // To Create Button Component
  TouchableOpacity, // To Create Tap with Effect
  Pressable, // To Create Tap without Effect
  ScrollView, // To Make Screen Scrollable
  Platform, // To Check Platform i.e "android" or "ios",
  ActivityIndicator,
  Dimensions, // To Crate a Loader Component
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { scale, verticalScale, s, vs } from "react-native-size-matters";

export default function App() {
  const onButtonPress = () => Alert.alert("Button Pressed");
  console.log(Dimensions.get("screen"));

  const phoneHeight = Dimensions.get("screen").height;
  const phoneWidth = Dimensions.get("screen").width;

  // Techniques for Responsiveness
  // 1.Percentage
  // 2.Dimensions
  // 3.Libraries

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
          <ActivityIndicator size={"large"} color={"red"} />
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
          {/* <View style={{ height: 400 }}>
            <View
              style={{
                backgroundColor: "red",
                flex: 1,
              }}
            />
            <View
              style={{
                backgroundColor: "tomato",
                flex: 1,
              }}
            />
            <View
              style={{
                backgroundColor: "yellow",
                flex: 1,
              }}
            />
          </View> */}
          {/* <View
            style={{
              backgroundColor: "tomato",
              height: "50%",
              width: "100%",
            }}
          ></View> */}
          <View
            style={{
              backgroundColor: "red",
              height: verticalScale(300),
              width: scale(300),
            }}
          ></View>
          <View
            style={{
              backgroundColor: "orange",
              height: vs(300),
              width: s(300),
            }}
          ></View>
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

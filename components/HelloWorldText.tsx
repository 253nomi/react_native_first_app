import { Alert, StyleSheet, Text } from "react-native";

export default function HelloWorldText() {
  return (
    <>
      <Text style={styles.titleText}>Hello World!</Text>
      <Text style={styles.bodyText}>
        Lorem ipsum dolor sit{" "}
        <Text
          style={styles.underLineText}
          onPress={() => Alert.alert("Text Pressed")}
        >
          Press here
        </Text>{" "}
        amet consectetur adipisicing elit. Voluptatum commodi fugit explicabo ab
        quas enim beatae error nostrum quae rem? Odio dolor a possimus eaque
        perferendis adipisci accusamus dolores minus.
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "red",
  },
  bodyText: {
    fontSize: 20,
  },
  underLineText: {
    color: "red",
    textDecorationLine: "underline",
  },
});

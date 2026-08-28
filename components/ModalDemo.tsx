import { useState } from "react";
import { View, Text, Button, Modal } from "react-native";

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible}>
        <View>
          <Text style={{ marginTop: 50, justifyContent: "center" }}>
            This is my Modal
          </Text>

          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

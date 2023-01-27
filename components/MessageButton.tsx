import * as React from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MessageButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={[
        styles.wrapper,
        styles.badgeBorder,
        styles.wrapperPosition,
        styles.rectangleLayout1,
      ]}
      underlayColor="#fff"
      onPress={() => navigation.navigate("NetworkMessages")}
    >
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
});

export default MessageButton;

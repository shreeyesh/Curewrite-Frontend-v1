import * as React from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateAccountButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={[styles.wrapper, styles.wrapperLayout]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => navigation.navigate("Publish")}
    >
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    top: 415,
  },
});

export default CreateAccountButton;

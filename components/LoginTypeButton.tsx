import * as React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoginTypeButton = () => {
  return (
    <TouchableOpacity
      style={styles.groupItem}
      activeOpacity={0.2}
      onPress={() => {}}
    />
  );
};

const styles = StyleSheet.create({
  groupItem: {
    left: 10,
    borderTopLeftRadius: Border.br_4xs,
    borderBottomLeftRadius: Border.br_4xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 153,
    elevation: 2,
    shadowRadius: 2,
    backgroundColor: Color.gray_2600,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    top: 0,
    position: "absolute",
  },
});

export default LoginTypeButton;

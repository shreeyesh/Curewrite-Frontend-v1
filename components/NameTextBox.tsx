import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

type NameTextBoxType = {
  rectangle26Focusable?: boolean;
};

const NameTextBox = ({ rectangle26Focusable }: NameTextBoxType) => {
  return <View style={styles.groupChild} focusable={rectangle26Focusable} />;
};

const styles = StyleSheet.create({
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderColor: "#818181",
    borderRadius: Border.br_2xs,
    height: 55,
    width: 339,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
});

export default NameTextBox;

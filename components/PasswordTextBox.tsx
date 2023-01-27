import * as React from "react";
import { View, StyleSheet } from "react-native";

type PasswordTextBoxType = {
  passwordFocusable?: boolean;
};

const PasswordTextBox = ({ passwordFocusable }: PasswordTextBoxType) => {
  return (
    <View
      style={[
        styles.rectangleView,
        styles.wrapperLayout,
        styles.groupInnerShadowBox,
      ]}
      focusable={passwordFocusable}
    />
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    top: 166,
  },
});

export default PasswordTextBox;

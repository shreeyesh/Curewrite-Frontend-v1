import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Color } from "../GlobalStyles";

const CitationsButton = () => {
  return (
    <Pressable
      style={[
        styles.container,
        styles.rectangleParentLayout,
        styles.containerLayout,
        styles.badgeBorder,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#d7deea",
    backgroundColor: Color.white3,
  },
});

export default CitationsButton;

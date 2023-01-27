import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

type StatDisplayType = {
  rectangle12Focusable?: boolean;
};

const StatDisplay = ({ rectangle12Focusable }: StatDisplayType) => {
  return (
    <View
      style={[
        styles.groupChild3,
        styles.containerLayout,
        styles.rectangleParentLayout1,
      ]}
      focusable={rectangle12Focusable}
    />
  );
};

const styles = StyleSheet.create({
  groupChild3: {
    backgroundColor: Color.gray_600,
    left: 0,
  },
});

export default StatDisplay;

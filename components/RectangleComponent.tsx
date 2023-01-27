import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";

type RectangleComponentType = {
  style?: StyleProp<ViewStyle>;
};

const RectangleComponent = ({ style }: RectangleComponentType) => {
  return (
    <SafeAreaView style={[styles.parent, style]}>
      <View style={styles.view} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#d9d9d9",
  },
  view: {
    width: 375,
    height: 62,
  },
});

export default RectangleComponent;

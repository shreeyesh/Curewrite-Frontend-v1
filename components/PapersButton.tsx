import * as React from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const PapersButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={[
        styles.container,
        styles.rectangleParentLayout,
        styles.containerLayout,
        styles.badgeBorder,
      ]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => navigation.navigate("false")}
    >
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#d7deea",
    backgroundColor: Color.white3,
  },
});

export default PapersButton;

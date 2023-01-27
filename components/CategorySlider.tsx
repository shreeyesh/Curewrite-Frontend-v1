import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border } from "../GlobalStyles";

type CategorySliderType = {
  rectangle73Collapsable?: boolean;
};

const CategorySlider = ({ rectangle73Collapsable }: CategorySliderType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectanglePressable, styles.groupChild9Bg]}
      onPress={() => navigation.goBack()}
      collapsable={rectangle73Collapsable}
    />
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    top: 146,
    left: -1,
    borderTopLeftRadius: Border.br_7xl,
    borderTopRightRadius: Border.br_7xl,
    height: 669,
    width: 375,
  },
});

export default CategorySlider;

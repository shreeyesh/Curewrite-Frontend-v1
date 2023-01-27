import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

type BackButtonType = {
  /** Style props */
  rectangle10BackgroundColor?: string;
  rectangle10BorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BackButton = ({
  rectangle10BackgroundColor,
  rectangle10BorderColor,
}: BackButtonType) => {
  const rectangleView4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangle10BackgroundColor),
      ...getStyleValue("borderColor", rectangle10BorderColor),
    };
  }, [rectangle10BackgroundColor, rectangle10BorderColor]);

  return (
    <View
      style={[
        styles.groupChild2,
        styles.badgeBorder,
        styles.groupLayout,
        styles.borderPosition,
        rectangleView4Style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  groupChild2: {
    borderRadius: Border.br_sm,
    borderColor: "#d7deea",
    left: 0,
    backgroundColor: Color.white3,
  },
});

export default BackButton;

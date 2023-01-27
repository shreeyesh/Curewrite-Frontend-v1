import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

type CategoryButtonType = {
  /** Style props */
  rectangle54BorderRadius?: number;
  rectangle54BorderStyle?: string;
  rectangle54BorderColor?: string;
  rectangle54BorderWidth?: number;
  rectangle54Width?: number | string;
  rectangle54Height?: number | string;
  rectangle54Position?: string;
  rectangle54Top?: number | string;
  rectangle54Left?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CategoryButton = ({
  rectangle54BorderRadius,
  rectangle54BorderStyle,
  rectangle54BorderColor,
  rectangle54BorderWidth,
  rectangle54Width,
  rectangle54Height,
  rectangle54Position,
  rectangle54Top,
  rectangle54Left,
}: CategoryButtonType) => {
  const rectangleView3Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", rectangle54BorderRadius),
      ...getStyleValue("borderStyle", rectangle54BorderStyle),
      ...getStyleValue("borderColor", rectangle54BorderColor),
      ...getStyleValue("borderWidth", rectangle54BorderWidth),
      ...getStyleValue("width", rectangle54Width),
      ...getStyleValue("height", rectangle54Height),
      ...getStyleValue("position", rectangle54Position),
      ...getStyleValue("top", rectangle54Top),
      ...getStyleValue("left", rectangle54Left),
    };
  }, [
    rectangle54BorderRadius,
    rectangle54BorderStyle,
    rectangle54BorderColor,
    rectangle54BorderWidth,
    rectangle54Width,
    rectangle54Height,
    rectangle54Position,
    rectangle54Top,
    rectangle54Left,
  ]);

  return (
    <View
      style={[
        styles.groupChild3,
        styles.borderBorder,
        styles.groupChild3Layout,
        rectangleView3Style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  groupChild3: {
    borderRadius: Border.br_lg,
    borderColor: "#1c6ba4",
    left: 0,
  },
});

export default CategoryButton;

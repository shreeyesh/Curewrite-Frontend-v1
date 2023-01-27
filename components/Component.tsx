import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet } from "react-native";

type ComponentType = {
  /** Style props */
  linkedInTop?: number | string;
  linkedInLeft?: number | string;
  linkedInPosition?: string;
  linkedInFontSize?: number;
  linkedInFontWeight?: string;
  linkedInFontFamily?: string;
  linkedInColor?: string;
  linkedInTextAlign?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Component = ({
  linkedInTop,
  linkedInLeft,
  linkedInPosition,
  linkedInFontSize,
  linkedInFontWeight,
  linkedInFontFamily,
  linkedInColor,
  linkedInTextAlign,
}: ComponentType) => {
  const linkedInStyle = useMemo(() => {
    return {
      ...getStyleValue("top", linkedInTop),
      ...getStyleValue("left", linkedInLeft),
      ...getStyleValue("position", linkedInPosition),
      ...getStyleValue("fontSize", linkedInFontSize),
      ...getStyleValue("fontWeight", linkedInFontWeight),
      ...getStyleValue("fontFamily", linkedInFontFamily),
      ...getStyleValue("color", linkedInColor),
      ...getStyleValue("textAlign", linkedInTextAlign),
    };
  }, [
    linkedInTop,
    linkedInLeft,
    linkedInPosition,
    linkedInFontSize,
    linkedInFontWeight,
    linkedInFontFamily,
    linkedInColor,
    linkedInTextAlign,
  ]);

  return (
    <Text style={[styles.linkedin, styles.googleTypo, linkedInStyle]}>
      LinkedIn
    </Text>
  );
};

const styles = StyleSheet.create({
  linkedin: {
    left: 29,
    top: 2,
    fontWeight: "500",
  },
});

export default Component;

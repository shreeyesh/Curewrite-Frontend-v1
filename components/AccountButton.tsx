import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

type AccountButtonType = {
  rectangle9: ImageSourcePropType;

  /** Style props */
  rectangle9Position?: string;
  rectangle9Top?: number | string;
  rectangle9Left?: number | string;
  rectangle9BorderRadius?: number;
  rectangle9Width?: number | string;
  rectangle9Height?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const AccountButton = ({
  rectangle9,
  rectangle9Position,
  rectangle9Top,
  rectangle9Left,
  rectangle9BorderRadius,
  rectangle9Width,
  rectangle9Height,
}: AccountButtonType) => {
  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rectangle9Position),
      ...getStyleValue("top", rectangle9Top),
      ...getStyleValue("left", rectangle9Left),
      ...getStyleValue("borderRadius", rectangle9BorderRadius),
      ...getStyleValue("width", rectangle9Width),
      ...getStyleValue("height", rectangle9Height),
    };
  }, [
    rectangle9Position,
    rectangle9Top,
    rectangle9Left,
    rectangle9BorderRadius,
    rectangle9Width,
    rectangle9Height,
  ]);

  return (
    <Image
      style={[styles.rectangleIcon, rectangleIconStyle]}
      resizeMode="cover"
      source={rectangle9}
    />
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    borderRadius: Border.br_md,
    height: 48,
    width: 48,
    top: 1,
    left: 0,
    position: "absolute",
  },
});

export default AccountButton;

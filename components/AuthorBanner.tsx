import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

type AuthorBannerType = {
  rectangle13Focusable?: boolean;

  /** Style props */
  rectangle13BackgroundColor?: string;
  rectangle13Height?: number | string;
  rectangle13Elevation?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const AuthorBanner = ({
  rectangle13Focusable,
  rectangle13BackgroundColor,
  rectangle13Height,
  rectangle13Elevation,
}: AuthorBannerType) => {
  const rectangleView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangle13BackgroundColor),
      ...getStyleValue("height", rectangle13Height),
      ...getStyleValue("elevation", rectangle13Elevation),
    };
  }, [rectangle13BackgroundColor, rectangle13Height, rectangle13Elevation]);

  return (
    <View
      style={[styles.groupChild8, styles.groupChildLayout, rectangleView2Style]}
      focusable={rectangle13Focusable}
    />
  );
};

const styles = StyleSheet.create({
  groupChild8: {
    backgroundColor: Color.gray_2600,
    top: 0,
  },
});

export default AuthorBanner;

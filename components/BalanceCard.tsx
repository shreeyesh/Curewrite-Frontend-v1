import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

type BalanceCardType = {
  rectangle50Focusable?: boolean;

  /** Style props */
  rectangle50Left?: number | string;
  rectangle50BackgroundColor?: string;
  rectangle50Width?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BalanceCard = ({
  rectangle50Focusable,
  rectangle50Left,
  rectangle50BackgroundColor,
  rectangle50Width,
}: BalanceCardType) => {
  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", rectangle50Left),
      ...getStyleValue("backgroundColor", rectangle50BackgroundColor),
      ...getStyleValue("width", rectangle50Width),
    };
  }, [rectangle50Left, rectangle50BackgroundColor, rectangle50Width]);

  return (
    <View
      style={[styles.groupChild2, styles.groupChildLayout, rectangleView1Style]}
      focusable={rectangle50Focusable}
    />
  );
};

const styles = StyleSheet.create({
  groupChild2: {
    backgroundColor: Color.brandBlue,
    width: 311,
    borderRadius: Border.br_2xl,
    left: 0,
  },
});

export default BalanceCard;

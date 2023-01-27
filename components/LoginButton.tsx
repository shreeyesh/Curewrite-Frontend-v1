import * as React from "react";
import { useMemo } from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

type LoginButtonType = {
  /** Style props */
  rectangle28Top?: number | string;
  rectangle28Left?: number | string;

  /** Action props */
  onRectangleTouchableHighligPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const LoginButton = ({
  onRectangleTouchableHighligPress,
  rectangle28Top,
  rectangle28Left,
}: LoginButtonType) => {
  const rectangleTouchableHighlightStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle28Top),
      ...getStyleValue("left", rectangle28Left),
    };
  }, [rectangle28Top, rectangle28Left]);

  return (
    <TouchableHighlight
      style={[styles.wrapper, rectangleTouchableHighlightStyle]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onRectangleTouchableHighligPress}
    >
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    top: 206,
    height: 55,
    backgroundColor: Color.gray_2600,
    borderRadius: Border.br_2xs,
    width: 339,
    left: 0,
    position: "absolute",
  },
});

export default LoginButton;

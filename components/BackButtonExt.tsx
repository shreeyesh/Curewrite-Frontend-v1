import * as React from "react";
import { useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";

type BackButtonExtType = {
  /** Style props */
  rectangle10BorderColor?: string;
  rectangle10BackgroundColor?: string;

  /** Action props */
  onRectanglePressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BackButtonExt = ({
  onRectanglePressablePress,
  rectangle10BorderColor,
  rectangle10BackgroundColor,
}: BackButtonExtType) => {
  const rectanglePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", rectangle10BorderColor),
      ...getStyleValue("backgroundColor", rectangle10BackgroundColor),
    };
  }, [rectangle10BorderColor, rectangle10BackgroundColor]);

  return (
    <Pressable
      style={[
        styles.wrapper,
        styles.badgeBorder,
        styles.wrapperPosition,
        styles.rectangleLayout1,
        rectanglePressableStyle,
      ]}
      onPress={onRectanglePressablePress}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
});

export default BackButtonExt;

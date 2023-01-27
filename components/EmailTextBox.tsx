import * as React from "react";
import { useMemo } from "react";
import { View, StyleSheet } from "react-native";

type EmailTextBoxType = {
  emailFocusable?: boolean;

  /** Style props */
  rectangle26Top?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const EmailTextBox = ({ emailFocusable, rectangle26Top }: EmailTextBoxType) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle26Top),
    };
  }, [rectangle26Top]);

  return (
    <View
      style={[
        styles.groupInner,
        styles.wrapperLayout,
        styles.groupInnerShadowBox,
        rectangleViewStyle,
      ]}
      focusable={emailFocusable}
    />
  );
};

const styles = StyleSheet.create({
  groupInner: {
    top: 98,
  },
});

export default EmailTextBox;

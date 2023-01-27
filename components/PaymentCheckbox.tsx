import * as React from "react";
import { useState } from "react";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const PaymentCheckbox = () => {
  const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(undefined);

  return (
    <RNKCheckBox
      style={styles.badgeFlexBox}
      status="basic"
      checked={frameCheckboxchecked}
      onChange={() => setFrameCheckboxchecked(!frameCheckboxchecked)}
      color="#4a545e"
    />
  );
};

const styles = StyleSheet.create({
  badgeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default PaymentCheckbox;

import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

type PasswordInputType = {
  passwordKeyboardType?: string;
};

const PasswordInput = ({ passwordKeyboardType }: PasswordInputType) => {
  return (
    <TextInput
      style={[styles.password, styles.passwordPosition]}
      placeholder="Password"
      keyboardType={passwordKeyboardType}
      autoCapitalize="none"
      secureTextEntry
      placeholderTextColor="#6f6f6f"
    />
  );
};

const styles = StyleSheet.create({
  password: {
    top: 185,
  },
});

export default PasswordInput;

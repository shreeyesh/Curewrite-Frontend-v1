import * as React from "react";
import { Image, StyleSheet } from "react-native";

const CountryDropdown = () => {
  return (
    <Image
      style={styles.indiaIcon}
      resizeMode="cover"
      source={require("../assets/india.png")}
    />
  );
};

const styles = StyleSheet.create({
  indiaIcon: {
    left: 322,
    width: 32,
    height: 32,
    top: 55,
    position: "absolute",
  },
});

export default CountryDropdown;

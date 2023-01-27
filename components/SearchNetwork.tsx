import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

type SearchNetworkType = {
  group51AutoCorrect?: boolean;
};

const SearchNetwork = ({ group51AutoCorrect }: SearchNetworkType) => {
  return (
    <TextInput
      style={[styles.networkDoctorSearchChild, styles.groupParentPosition]}
      placeholder="Search Network.."
      keyboardType="default"
      secureTextEntry
      placeholderTextColor="#8aa0bc"
      autoCorrect={group51AutoCorrect}
    />
  );
};

const styles = StyleSheet.create({
  networkDoctorSearchChild: {
    top: 127,
    width: 319,
    height: 56,
    left: 28,
  },
});

export default SearchNetwork;

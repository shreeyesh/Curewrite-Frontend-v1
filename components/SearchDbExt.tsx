import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

type SearchDbExtType = {
  searchDbExt?: string;
};

const SearchDbExt = ({ searchDbExt }: SearchDbExtType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.frameChild, styles.groupViewLayout]}
      onPress={() => navigation.navigate("DatabaseSearchResult")}
    >
      {searchDbExt}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    top: 17,
    left: 1,
    backgroundColor: Color.gray_300,
    height: 56,
    borderRadius: Border.br_md,
  },
});

export default SearchDbExt;

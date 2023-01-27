import * as React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Margin } from "../GlobalStyles";

type SearchBoxType = {
  searchDatabaseEditable?: boolean;
};

const SearchBox = ({ searchDatabaseEditable }: SearchBoxType) => {
  return (
    <View style={styles.interfaceAdjustHorizontalParent}>
      <Image
        style={[
          styles.interfaceAdjustHorizontal,
          styles.basicsSearchLayout,
          styles.basicsSearchParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/interface--adjusthorizontalalt.png")}
      />
      <View
        style={[
          styles.basicsSearchParent,
          styles.basicsSearchParentFlexBox,
          styles.basicsSearchParentPosition,
        ]}
      >
        <Image
          style={styles.basicsSearchLayout}
          resizeMode="cover"
          source={require("../assets/basics--search1.png")}
        />
        <TextInput
          placeholder="Search Database.."
          keyboardType="default"
          placeholderTextColor="#8aa0bc"
          editable={searchDatabaseEditable}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: Margin.m_xs,
  },
  basicsSearchParentPosition: {
    top: 0,
    position: "absolute",
  },
  interfaceAdjustHorizontal: {
    left: 264,
  },
  basicsSearchLayout: {
    width: 20,
    height: 20,
  },
  basicsSearchParent: {
    flexDirection: "row",
    left: 0,
  },
  interfaceAdjustHorizontalParent: {
    top: 18,
    left: 15,
    width: 284,
    position: "absolute",
    height: 20,
  },
});

export default SearchBox;

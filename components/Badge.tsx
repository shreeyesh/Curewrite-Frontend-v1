import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Badge = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={[styles.badge, styles.badgeFlexBox]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => navigation.navigate("ReadModeDownloadExt")}
    >
      <Text style={styles.labelText}>Continue</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0.4,
    lineHeight: 18,
    textAlign: "center",
    color: Color.white3,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  badge: {
    height: "6.9%",
    width: "85.07%",
    top: "87.56%",
    right: "7.47%",
    bottom: "5.54%",
    left: "7.47%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_2600,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    position: "absolute",
  },
});

export default Badge;

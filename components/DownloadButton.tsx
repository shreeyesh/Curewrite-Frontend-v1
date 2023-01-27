import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const DownloadButton = () => {
  return (
    <View style={[styles.badge, styles.badgeBorder]}>
      <Text style={styles.labelText}>Download</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    letterSpacing: 0.4,
    lineHeight: 18,
    color: Color.white3,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    textAlign: "center",
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
    borderColor: "#000",
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DownloadButton;

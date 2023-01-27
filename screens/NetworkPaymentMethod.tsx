import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const NetworkPaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.networkPaymentMethod}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <TouchableHighlight
        style={styles.badge}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("NetworkPaper")}
      >
        <Text style={styles.labelText}>Continue</Text>
      </TouchableHighlight>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame9.png")}
      />
      <Text style={styles.sucessfullyPostedOn}>
        Sucessfully Posted on the networking platform
      </Text>
      <Image
        style={styles.horizontalLogo1Icon}
        resizeMode="cover"
        source={require("../assets/horizontallogo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 75,
    backgroundColor: Color.gray_1100,
    top: 0,
    height: 28,
    position: "absolute",
  },
  groupChild1Layout: {
    backgroundColor: Color.gray8,
    width: 75,
    top: 0,
    height: 28,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    backgroundColor: Color.gray_1100,
    top: 0,
  },
  groupItem: {
    left: 150,
  },
  groupInner: {
    left: 300,
  },
  rectangleView: {
    left: 75,
  },
  groupChild1: {
    left: 225,
  },
  rectangleParent: {
    top: 777,
    width: 375,
    display: "none",
    height: 28,
    left: 0,
    position: "absolute",
  },
  labelText: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    color: Color.white3,
    textAlign: "center",
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
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  frameIcon: {
    top: 107,
    left: 102,
    width: 171,
    height: 171,
    position: "absolute",
    overflow: "hidden",
  },
  sucessfullyPostedOn: {
    top: 343,
    left: 41,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.gray_2600,
    width: 294,
    height: 63,
    textAlign: "center",
    position: "absolute",
  },
  horizontalLogo1Icon: {
    top: 501,
    left: 69,
    width: 238,
    height: 115,
    position: "absolute",
  },
  networkPaymentMethod: {
    backgroundColor: Color.white3,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default NetworkPaymentMethod;

import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Badge from "../components/Badge";
import PaymentCheckbox from "../components/PaymentCheckbox";
import { useNavigation } from "@react-navigation/native";
import AvailablePayments from "../components/AvailablePayments";
import { Margin, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Badge />
      <Text
        style={[
          styles.selectOption,
          styles.selectOptionTypo,
          styles.parentGroupPosition,
        ]}
      >
        Select Option
      </Text>
      <View style={[styles.frameParent, styles.parentGroupPosition]}>
        <PaymentCheckbox />
        <View style={[styles.badgeFlexBox, styles.mt18]}>
          <View style={[styles.frameItem, styles.borderBorder]} />
          <Image
            style={[styles.d9aca849c40004f9a1341Icon, styles.ml17]}
            resizeMode="cover"
            source={require("../assets/6102d9aca849c40004f9a134-1.png")}
          />
        </View>
        <View style={[styles.badgeFlexBox, styles.mt18]}>
          <View style={[styles.frameItem, styles.borderBorder]} />
          <Image
            style={[styles.cef1014c0b5e49c11Icon, styles.ml16]}
            resizeMode="cover"
            source={require("../assets/58482363cef1014c0b5e49c1-1.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.groupParent,
          styles.parentGroupPosition,
          styles.badgeFlexBox,
        ]}
      >
        <Pressable
          style={styles.pressableLayout}
          onPress={() => navigation.navigate("ReadModeDownload")}
        >
          <Pressable
            style={[
              styles.rectanglePressable,
              styles.pressableLayout,
              styles.borderBorder,
              styles.borderPosition,
            ]}
            onPress={() => navigation.goBack()}
          />
          <Image
            style={styles.basicsArrowLeft}
            resizeMode="cover"
            source={require("../assets/basics--arrowleft6.png")}
          />
        </Pressable>
        <Text
          style={[styles.paymentMethod1, styles.ml43, styles.selectOptionTypo]}
        >
          Payment Method
        </Text>
      </View>
      <AvailablePayments
        availableBalance="Available balance"
        balanceAmount="$3,578.99"
        cardNumber="5172 4567 8888 0000"
      />
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View
            style={[styles.border, styles.borderBorder, styles.borderPosition]}
          />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap2.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi3.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml17: {
    marginLeft: Margin.m_xl,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt18: {
    marginTop: Margin.m_2xl,
  },
  ml43: {
    marginLeft: Margin.m_7xl,
  },
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
  badgeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectOptionTypo: {
    color: Color.black01,
    letterSpacing: 0.2,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  parentGroupPosition: {
    left: 28,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  pressableLayout: {
    height: 44,
    width: 44,
  },
  borderPosition: {
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_2xl,
    height: 183,
    top: 0,
    position: "absolute",
  },
  text1Position: {
    left: 23,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  groupChild: {
    left: 0,
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
  selectOption: {
    top: 384,
    fontSize: FontSize.size_3xl,
    lineHeight: 23,
    textAlign: "left",
  },
  frameItem: {
    borderRadius: Border.br_5xs,
    borderColor: "#4a545e",
    height: 24,
    width: 24,
  },
  d9aca849c40004f9a1341Icon: {
    width: 180,
    height: 64,
  },
  cef1014c0b5e49c11Icon: {
    width: 110,
    height: 45,
  },
  frameParent: {
    top: 443,
  },
  rectanglePressable: {
    borderRadius: Border.br_sm,
    borderColor: "#d7deea",
    left: 0,
    backgroundColor: Color.white3,
  },
  basicsArrowLeft: {
    top: 15,
    left: 15,
    height: 15,
    width: 15,
    position: "absolute",
  },
  paymentMethod1: {
    lineHeight: 24,
    fontSize: FontSize.nunitoSansSubheadline_size,
    textAlign: "center",
  },
  groupParent: {
    top: 58,
  },
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderColor: "#141023",
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_2800,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 3,
    right: 1,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -9.17,
    top: "50%",
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.roboto,
    color: Color.gray_2800,
    width: 54,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    height: "100%",
    width: "15.88%",
    top: "0%",
    right: "84.12%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  barsstatusonLight: {
    top: 14,
    left: 17,
    width: 340,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  paymentMethod: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white3,
  },
});

export default PaymentMethod;

import * as React from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import BalanceCard from "../components/BalanceCard";
import { Margin, Color, FontSize, FontFamily } from "../GlobalStyles";

type AvailablePaymentsType = {
  availableBalance?: string;
  balanceAmount?: string;
  cardNumber?: string;
};

const AvailablePayments = ({
  availableBalance,
  balanceAmount = "$3,578.99",
  cardNumber = "5172 4567 8888 0000",
}: AvailablePaymentsType) => {
  return (
    <View style={[styles.groupContainer, styles.parentGroupPosition]}>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupView, styles.groupPosition]}>
          <BalanceCard rectangle50Focusable />
          <ImageBackground
            style={styles.visaPng1Icon}
            resizeMode="cover"
            source={require("../assets/81810053visapng1.png")}
          />
          <View style={[styles.availableBalanceParent, styles.text1Position]}>
            <Text style={[styles.availableBalance, styles.textTypo]}>
              {availableBalance}
            </Text>
            <Text style={[styles.text, styles.mt16, styles.textTypo]}>
              {balanceAmount}
            </Text>
          </View>
        </View>
        <Text style={[styles.text1, styles.text1Position]}>{cardNumber}</Text>
      </View>
      <BalanceCard
        rectangle50Left={326}
        rectangle50BackgroundColor="#e09f1f"
        rectangle50Width={282}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ml8]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ml8]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: Margin.m_lg,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  groupPosition: {
    left: 0,
    width: 311,
  },
  visaPng1Icon: {
    left: 231,
    width: 56,
    height: 31,
    top: 22,
    position: "absolute",
  },
  availableBalance: {
    lineHeight: 20,
    color: Color.gray_3400,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.size_10xl,
    letterSpacing: -0.3,
    lineHeight: 34,
    fontWeight: "600",
    color: Color.white3,
  },
  availableBalanceParent: {
    top: 22,
  },
  groupView: {
    height: 183,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 137,
    fontFamily: FontFamily.robotoMono,
    color: Color.gray_3500,
    fontSize: FontSize.nunitoSansSubheadline_size,
    textAlign: "left",
    fontWeight: "500",
  },
  ellipseIcon: {
    width: 8,
    height: 8,
  },
  ellipseParent: {
    top: 209,
    left: 140,
    flexDirection: "row",
    position: "absolute",
  },
  groupContainer: {
    top: 126,
    width: 608,
    height: 217,
  },
});

export default AvailablePayments;

import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PaymentMethodExt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethodExt}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Pressable
        style={styles.badge}
        onPress={() => navigation.navigate("Publish")}
      >
        <Text style={styles.labelText}>Continue</Text>
      </Pressable>
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame9.png")}
      />
      <Text style={[styles.sucessfullySubmitedFor, styles.ourTeamWillLayout]}>
        Sucessfully submited for review to
      </Text>
      <Text
        style={[styles.ourTeamWill, styles.ourTeamWillLayout]}
      >{`Our Team will get back to you after screening of the paper `}</Text>
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
  ourTeamWillLayout: {
    height: 63,
    width: 294,
    color: Color.gray_2600,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    position: "absolute",
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
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "#141023",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
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
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -9.17,
    top: "50%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.roboto,
    color: Color.gray_2800,
    width: 54,
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
  frameIcon: {
    top: 113,
    left: 95,
    width: 171,
    height: 171,
    position: "absolute",
    overflow: "hidden",
  },
  sucessfullySubmitedFor: {
    top: 310,
    left: 41,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
  },
  ourTeamWill: {
    top: 578,
    left: 33,
    fontSize: FontSize.size_2xl,
    fontWeight: "300",
  },
  horizontalLogo1Icon: {
    top: 418,
    left: 69,
    width: 238,
    height: 115,
    position: "absolute",
  },
  paymentMethodExt: {
    backgroundColor: Color.white3,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PaymentMethodExt;

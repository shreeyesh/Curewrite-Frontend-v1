import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
} from "../GlobalStyles";

const PaymentMethod1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <View style={[styles.groupInner, styles.groupLayout1]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Pressable
        style={[styles.badge, styles.groupFlexBox]}
        onPress={() => navigation.navigate("ReadModeDownload2")}
      >
        <Text style={styles.labelText}>Continue</Text>
      </Pressable>
      <Text
        style={[
          styles.selectOption,
          styles.text1FlexBox,
          styles.selectOptionTypo,
        ]}
      >
        Select Option
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.groupFlexBox}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Image
            style={[styles.b57fcd9996e24bc43c5301Icon, styles.ml17]}
            resizeMode="cover"
            source={require("../assets/580b57fcd9996e24bc43c530-1.png")}
          />
        </View>
        <View style={[styles.groupFlexBox, styles.mt18]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Image
            style={[styles.d9aca849c40004f9a1341Icon, styles.ml17]}
            resizeMode="cover"
            source={require("../assets/6102d9aca849c40004f9a134-1.png")}
          />
        </View>
        <View style={[styles.groupFlexBox, styles.mt18]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Image
            style={[styles.cef1014c0b5e49c11Icon, styles.ml16]}
            resizeMode="cover"
            source={require("../assets/58482363cef1014c0b5e49c1-1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupFlexBox]}
        onPress={() => navigation.navigate("ReadModeDownload3")}
      >
        <View style={styles.groupLayout}>
          <View
            style={[styles.groupChild2, styles.groupLayout, styles.childBorder]}
          />
          <Image
            style={styles.basicsArrowLeft}
            resizeMode="cover"
            source={require("../assets/basics--arrowleft6.png")}
          />
        </View>
        <Text
          style={[styles.paymentMethod1, styles.ml43, styles.selectOptionTypo]}
        >
          Payment Method
        </Text>
      </Pressable>
      <View style={styles.rectangleParent1}>
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={[styles.visaPng1Parent, styles.groupContainerLayout]}>
            <Image
              style={styles.visaPng1Icon}
              resizeMode="cover"
              source={require("../assets/81810053visapng1.png")}
            />
            <View style={styles.availableBalanceParent}>
              <Text style={[styles.availableBalance, styles.textTypo]}>
                Available balance
              </Text>
              <Text style={[styles.text, styles.mt16, styles.textTypo]}>
                $3,578.99
              </Text>
            </View>
          </View>
          <Text style={[styles.text1, styles.text1FlexBox]}>
            5172 4567 8888 0000
          </Text>
        </View>
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
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
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.childBorder]} />
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
  mt16: {
    marginTop: Margin.m_lg,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  groupLayout1: {
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
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  selectOptionTypo: {
    color: Color.black01,
    letterSpacing: 0.2,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupLayout: {
    height: 44,
    width: 44,
  },
  groupChildLayout: {
    height: 183,
    borderRadius: Border.br_2xl,
    top: 0,
    position: "absolute",
  },
  groupContainerLayout: {
    width: 264,
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
  selectOption: {
    top: 384,
    fontSize: FontSize.size_3xl,
    lineHeight: 23,
    left: 28,
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    borderColor: "#4a545e",
    height: 24,
    width: 24,
  },
  b57fcd9996e24bc43c5301Icon: {
    height: 51,
    width: 180,
  },
  d9aca849c40004f9a1341Icon: {
    height: 64,
    width: 180,
  },
  cef1014c0b5e49c11Icon: {
    width: 110,
    height: 45,
  },
  frameParent: {
    top: 443,
    left: 28,
    position: "absolute",
  },
  groupChild2: {
    borderRadius: Border.br_sm,
    borderColor: "#d7deea",
    top: 0,
    left: 0,
    position: "absolute",
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
    left: 28,
    position: "absolute",
  },
  groupChild3: {
    backgroundColor: Color.brandBlue,
    width: 311,
    left: 0,
  },
  visaPng1Icon: {
    left: 208,
    width: 56,
    height: 31,
    top: 0,
    position: "absolute",
  },
  availableBalance: {
    lineHeight: 20,
    color: Color.gray_3400,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  text: {
    fontSize: FontSize.size_10xl,
    letterSpacing: -0.3,
    lineHeight: 34,
    fontWeight: "600",
    color: Color.white3,
  },
  availableBalanceParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  visaPng1Parent: {
    height: 70,
    top: 0,
    left: 0,
  },
  text1: {
    top: 115,
    fontFamily: FontFamily.robotoMono,
    color: Color.gray_3500,
    fontWeight: "500",
    fontSize: FontSize.nunitoSansSubheadline_size,
    left: 0,
  },
  groupContainer: {
    top: 22,
    left: 23,
    height: 139,
  },
  groupChild4: {
    left: 326,
    backgroundColor: Color.brandYellow1,
    width: 282,
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
  rectangleParent1: {
    top: 126,
    width: 608,
    height: 217,
    left: 28,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderColor: "#141023",
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
    fontFamily: FontFamily.roboto,
    color: Color.gray_2800,
    width: 54,
    fontWeight: "600",
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

export default PaymentMethod1;

import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CountryDropdown from "../components/CountryDropdown";
import NumberLogin from "../components/NumberLogin";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ProfileExt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileext}>
      <View style={[styles.barsstatusonLight, styles.userIconLayout]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={[styles.capIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityLayout]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <View style={styles.barsstatusonLight1}>
          <View style={styles.battery}>
            <View style={[styles.border1, styles.borderLayout]} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cap2.png")}
            />
            <View style={[styles.capacity1, styles.capacityLayout]} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection2.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={[styles.time1, styles.timePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.loginAccount, styles.indiaIconPosition]}
      >{`Login Account `}</Text>
      <Text
        style={[
          styles.helloWelcome,
          styles.google1Typo,
          styles.helloWelcomeTypo,
        ]}
      >
        Hello , welcome back to our account !
      </Text>
      <Image
        style={[styles.shapeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/shape.png")}
      />
      <CountryDropdown />
      <Image
        style={[styles.userIcon, styles.userIconLayout]}
        resizeMode="cover"
        source={require("../assets/user.png")}
      />
      <NumberLogin enterPhoneNumberKeyboardT="phone-pad" />
    </View>
  );
};

const styles = StyleSheet.create({
  userIconLayout: {
    height: 19,
    position: "absolute",
  },
  borderLayout: {
    opacity: 0.35,
    borderRadius: Border.br_7xs,
    right: 2,
    top: 0,
    width: 22,
    borderWidth: 1,
    borderStyle: "solid",
    height: 11,
    position: "absolute",
  },
  iconLayout: {
    height: 4,
    position: "absolute",
  },
  capacityLayout: {
    height: 7,
    width: 18,
    borderRadius: Border.br_8xs,
    right: 4,
    top: 2,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "50%",
    marginTop: -9.17,
    left: 0,
    position: "absolute",
  },
  indiaIconPosition: {
    top: 55,
    position: "absolute",
  },
  google1Typo: {
    fontFamily: FontFamily.poppins,
    textAlign: "left",
  },
  helloWelcomeTypo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.outfit,
    textAlign: "left",
  },
  loginTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.outfit,
  },
  loginTypo2: {
    fontSize: FontSize.nunitoSansSubheadline_size,
    fontWeight: "600",
  },
  groupLayout: {
    height: 1,
    width: 105,
    top: 321,
    position: "absolute",
  },
  containerPosition: {
    top: 352,
    position: "absolute",
  },
  groupChild1ShadowBox: {
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: 0,
    position: "absolute",
  },
  emailPosition: {
    top: 15,
    position: "absolute",
  },
  border: {
    borderColor: "#fff",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    backgroundColor: Color.white3,
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
    fontWeight: "900",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    color: Color.white3,
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
  border1: {
    borderColor: "#141023",
  },
  capacity1: {
    backgroundColor: Color.gray_2800,
  },
  time1: {
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.roboto,
    color: Color.gray_2800,
  },
  barsstatusonLight1: {
    left: 0,
    top: 0,
    height: 19,
    width: 340,
    position: "absolute",
    overflow: "hidden",
  },
  barsstatusonLight: {
    top: 14,
    left: 17,
    width: 340,
    height: 19,
    overflow: "hidden",
  },
  loginAccount: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.raleway,
    width: 146,
    height: 21,
    textAlign: "left",
    color: Color.black,
    left: 18,
  },
  helloWelcome: {
    top: 83,
    color: Color.gray_2000,
    left: 18,
  },
  shapeIcon: {
    top: 71,
    left: 358,
    width: 6,
  },
  userIcon: {
    top: 57,
    left: 164,
    width: 20,
  },
  profileext: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white3,
  },
});

export default ProfileExt;

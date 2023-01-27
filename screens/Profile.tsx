import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import CountryDropdown from "../components/CountryDropdown";
import { useNavigation } from "@react-navigation/native";
import LoginTypeButton from "../components/LoginTypeButton";
import EmailTextBox from "../components/EmailTextBox";
import PasswordTextBox from "../components/PasswordTextBox";
import PasswordInput from "../components/PasswordInput";
import Component from "../components/Component";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View
        style={[
          styles.barsstatusonLight,
          styles.barsstatusonLayout,
          styles.barsstatusonLayout1,
        ]}
      >
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={[styles.capIcon, styles.iconLayout1]}
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
        <View
          style={[
            styles.barsstatusonLight1,
            styles.barsstatusonLayout,
            styles.barsstatusonLayout1,
          ]}
        >
          <View style={styles.battery}>
            <View style={[styles.border1, styles.borderLayout]} />
            <Image
              style={[styles.capIcon, styles.iconLayout1]}
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
      <Text style={styles.loginAccount}>{`Login Account `}</Text>
      <Text style={styles.helloWelcome}>
        Hello , welcome back to our account !
      </Text>
      <Image
        style={[styles.shapeIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/shape.png")}
      />
      <CountryDropdown />
      <Image
        style={[styles.userIcon, styles.barsstatusonLayout]}
        resizeMode="cover"
        source={require("../assets/user.png")}
      />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("Publish")}
      >
        <TextInput
          style={styles.groupChild}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <LoginTypeButton />
        <EmailTextBox emailFocusable />
        <PasswordTextBox passwordFocusable />
        <TouchableHighlight
          style={[styles.wrapper, styles.wrapperLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Publish")}
        >
          <View />
        </TouchableHighlight>
        <Text style={[styles.forgotPassword, styles.emailAddressTypo]}>
          Forgot Password ?
        </Text>
        <Text
          style={[styles.login, styles.loginTypo, styles.loginTypo1]}
        >{`Login `}</Text>
        <Text
          style={[
            styles.emailAddress,
            styles.passwordPosition,
            styles.emailAddressTypo,
          ]}
        >
          Email address
        </Text>
        <PasswordInput passwordKeyboardType="default" />
        <Text style={[styles.email, styles.loginTypo, styles.loginTypo1]}>
          Email
        </Text>
        <Pressable
          style={styles.phoneNumber}
          onPress={() => navigation.navigate("ProfileExt")}
        >
          <Text style={[styles.phoneNumber1, styles.loginTypo]}>
            Phone Number
          </Text>
        </Pressable>
        <Pressable
          style={styles.notRegisterYetContainer}
          onPress={() => navigation.navigate("CreateProfile")}
        >
          <Text style={styles.notRegisterYet}>{`Not register yet ? `}</Text>
          <Text style={[styles.createAccount, styles.loginTypo]}>
            Create Account
          </Text>
        </Pressable>
        <Component linkedInTop={415} linkedInLeft={66} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-24.png")}
        />
        <Image
          style={[styles.groupChild1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-24.png")}
        />
        <Text style={styles.orSignUp}>Or sign up with</Text>
        <Image
          style={[styles.googleLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/google-logo.png")}
        />
        <View style={styles.linkedinParent}>
          <Component />
          <Image
            style={[styles.image7Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-7.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  barsstatusonLayout: {
    height: 19,
    position: "absolute",
  },
  barsstatusonLayout1: {
    width: 340,
    height: 19,
    overflow: "hidden",
  },
  borderLayout: {
    opacity: 0.35,
    width: 22,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    right: 2,
    top: 0,
    height: 11,
    position: "absolute",
  },
  iconLayout1: {
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
  wrapperLayout: {
    height: 55,
    borderRadius: Border.br_2xs,
    width: 339,
    left: 0,
    position: "absolute",
  },
  groupInnerShadowBox: {
    borderColor: "#818181",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    height: 55,
    borderRadius: Border.br_2xs,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderWidth: 1,
    borderStyle: "solid",
  },
  emailAddressTypo: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    fontFamily: FontFamily.outfit,
    textAlign: "left",
  },
  loginTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.outfit,
  },
  loginTypo1: {
    fontSize: FontSize.nunitoSansSubheadline_size,
    fontWeight: "600",
    textAlign: "left",
    color: Color.white3,
    position: "absolute",
  },
  passwordPosition: {
    left: 16,
    position: "absolute",
  },
  googleTypo: {
    fontWeight: "500",
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 1,
    width: 105,
    top: 382,
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    width: 22,
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
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "50%",
    marginTop: -9.17,
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
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "50%",
    marginTop: -9.17,
  },
  barsstatusonLight1: {
    top: 1,
    left: 0,
  },
  barsstatusonLight: {
    top: 14,
    left: 17,
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
    top: 55,
    position: "absolute",
  },
  helloWelcome: {
    top: 83,
    color: Color.gray_2000,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 18,
    position: "absolute",
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
  groupChild: {
    left: 9,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    borderColor: "#000",
    width: 320,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  wrapper: {
    top: 281,
    height: 55,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.gray_2600,
  },
  forgotPassword: {
    top: 227,
    left: 218,
    color: "#4285f4",
    fontFamily: FontFamily.outfit,
    position: "absolute",
  },
  login: {
    top: 297,
    left: 148,
  },
  emailAddress: {
    top: 116,
    color: "#6f6f6f",
    fontFamily: FontFamily.outfit,
  },
  email: {
    top: 15,
    left: 67,
  },
  phoneNumber1: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.black,
  },
  phoneNumber: {
    left: 200,
    top: 16,
    position: "absolute",
  },
  notRegisterYet: {
    fontFamily: FontFamily.outfit,
    color: Color.gray_2000,
  },
  createAccount: {
    color: Color.black,
  },
  notRegisterYetContainer: {
    top: 466,
    left: 65,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    left: 22,
  },
  groupChild1: {
    left: 215,
  },
  orSignUp: {
    top: 372,
    left: 130,
    fontSize: FontSize.size_sm,
    color: Color.gray_1900,
    fontFamily: FontFamily.outfit,
    textAlign: "left",
    position: "absolute",
  },
  googleLogoIcon: {
    left: 36,
    top: 413,
    overflow: "hidden",
  },
  image7Icon: {
    left: 0,
    top: 0,
    height: 22,
  },
  linkedinParent: {
    left: 210,
    width: 87,
    height: 23,
    top: 413,
    position: "absolute",
  },
  rectangleParent: {
    top: 148,
    height: 482,
    width: 339,
    left: 18,
    position: "absolute",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white3,
  },
});

export default Profile;

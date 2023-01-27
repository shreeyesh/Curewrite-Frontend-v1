import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/LoginButton";
import { Border, Color, FontSize } from "../GlobalStyles";

type NumberLoginType = {
  enterPhoneNumberKeyboardT?: string;
};

const NumberLogin = ({ enterPhoneNumberKeyboardT }: NumberLoginType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.rectangleParent}
      onPress={() => navigation.navigate("Publish")}
    >
      <LoginButton
        onRectangleTouchableHighligPress={() => navigation.navigate("Publish")}
      />
      <Text
        style={[
          styles.login,
          styles.loginTypo,
          styles.loginTypo1,
          styles.loginTypo2,
        ]}
      >{`Login `}</Text>
      <TouchableHighlight
        style={[styles.notRegisterYetContainer, styles.helloWelcomeTypo]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("CreateProfile")}
      >
        <>
          <Text>{`Not register yet ? `}</Text>
          <Text>Create Account</Text>
        </>
      </TouchableHighlight>
      <Pressable style={styles.google} onPress={() => {}}>
        <Text style={[styles.google1, styles.google1Typo]}>Google</Text>
      </Pressable>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/vector-24.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/vector-24.png")}
      />
      <Text style={[styles.orSignUp, styles.loginTypo]}>Or sign up with</Text>
      <Image
        style={[styles.googleLogoIcon, styles.containerPosition]}
        resizeMode="cover"
        source={require("../assets/google-logo.png")}
      />
      <TouchableHighlight
        style={[styles.container, styles.containerPosition]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <>
          <Text>LinkedIn</Text>
          <Image resizeMode="cover" source={require("../assets/image-7.png")} />
        </>
      </TouchableHighlight>
      <View
        style={[
          styles.groupInner,
          styles.groupInnerBorder,
          styles.groupShadowBox,
          styles.wrapperLayout,
        ]}
      />
      <TextInput
        style={styles.enterPhoneNumber}
        placeholder="Enter Phone Number"
        keyboardType={enterPhoneNumberKeyboardT}
        autoCapitalize="none"
        placeholderTextColor="#6f6f6f"
      />
      <View
        style={[
          styles.rectangleView,
          styles.groupChild1ShadowBox,
          styles.groupInnerBorder,
        ]}
      />
      <View
        style={[
          styles.groupChild1,
          styles.groupChild1ShadowBox,
          styles.groupShadowBox,
        ]}
      />
      <Pressable
        style={[styles.email, styles.emailPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text
          style={[
            styles.email1,
            styles.loginTypo,
            styles.loginTypo1,
            styles.loginTypo2,
          ]}
        >
          Email
        </Text>
      </Pressable>
      <TouchableHighlight
        style={[styles.phoneNumber, styles.emailPosition]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text
          style={[styles.phoneNumber1, styles.loginTypo, styles.loginTypo1]}
        >
          Phone Number
        </Text>
      </TouchableHighlight>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    left: 0,
    borderRadius: Border.br_2xs,
    height: 55,
    position: "absolute",
    width: 339,
  },
  groupInnerBorder: {
    borderStyle: "solid",
    borderWidth: 1,
  },
  groupShadowBox: {
    shadowRadius: 2,
    elevation: 2,
  },
  login: {
    top: 222,
    left: 148,
    color: Color.white3,
    position: "absolute",
  },
  notRegisterYetContainer: {
    top: 405,
    left: 59,
    textAlign: "left",
  },
  google1: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    fontWeight: "500",
    color: Color.black,
  },
  google: {
    left: 60,
    top: 354,
    position: "absolute",
  },
  groupChild: {
    left: 16,
  },
  groupItem: {
    left: 209,
  },
  orSignUp: {
    top: 311,
    left: 124,
    fontSize: FontSize.size_sm,
    color: Color.gray_1900,
    position: "absolute",
  },
  googleLogoIcon: {
    left: 30,
    height: 22,
    width: 22,
    top: 352,
    overflow: "hidden",
  },
  container: {
    width: 87,
    height: 23,
    left: 204,
  },
  groupInner: {
    top: 101,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderColor: "#818181",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  enterPhoneNumber: {
    top: 119,
    left: 16,
    position: "absolute",
  },
  rectangleView: {
    left: 10,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    borderColor: "#000",
    width: 320,
    height: 52,
  },
  groupChild1: {
    left: 330,
    borderTopLeftRadius: Border.br_4xs,
    borderBottomLeftRadius: Border.br_4xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 161,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 52,
    backgroundColor: Color.gray_2600,
  },
  email1: {
    color: Color.black,
  },
  email: {
    left: 67,
  },
  phoneNumber1: {
    fontSize: FontSize.size_2xl,
    color: Color.white3,
  },
  phoneNumber: {
    left: 204,
  },
  rectangleParent: {
    top: 148,
    height: 421,
    left: 18,
    position: "absolute",
    width: 339,
  },
});

export default NumberLogin;

import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NameTextBox from "../components/NameTextBox";
import EmailTextBox from "../components/EmailTextBox";
import PhoneCountryTextBox from "../components/PhoneCountryTextBox";
import CreateAccountButton from "../components/CreateAccountButton";
import LoginButton from "../components/LoginButton";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const CreateProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createProfile}>
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
        <View
          style={[
            styles.barsstatusonLight1,
            styles.rectangleGroupPosition,
            styles.barsstatusonLayout,
            styles.barsstatusonLayout1,
          ]}
        >
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
      <Text style={[styles.createProfile1, styles.helloWelcomePosition]}>
        Create Profile
      </Text>
      <Text style={[styles.helloWelcome, styles.helloWelcomePosition]}>
        Hello , welcome !
      </Text>
      <Image
        style={[styles.shapeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/shape.png")}
      />
      <Image
        style={styles.indiaIcon}
        resizeMode="cover"
        source={require("../assets/india.png")}
      />
      <Image
        style={[styles.userIcon, styles.barsstatusonLayout]}
        resizeMode="cover"
        source={require("../assets/user.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <NameTextBox rectangle26Focusable />
        <TextInput
          style={[styles.fullName, styles.fullNamePosition]}
          placeholder="Full Name"
          keyboardType="default"
          autoCapitalize="words"
          placeholderTextColor="#6f6f6f"
        />
      </View>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.rectangleGroup,
            styles.rectangleLayout,
            styles.rectangleGroupPosition,
          ]}
        >
          <EmailTextBox rectangle26Top={0} />
          <TextInput
            style={[styles.fullName, styles.fullNamePosition]}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#6f6f6f"
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <PhoneCountryTextBox rectangle27Focusable />
          <TextInput
            style={[styles.mobileNo, styles.fullNamePosition]}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            autoCapitalize="none"
            placeholderTextColor="#6f6f6f"
          />
        </View>
      </View>
      <CreateAccountButton />
      <LoginButton
        onRectangleTouchableHighligPress={() => navigation.navigate("Publish")}
        rectangle28Top={492}
        rectangle28Left={19}
      />
      <Text style={[styles.createAccount, styles.loginTypo]}>
        Create Account
      </Text>
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
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
  rectangleGroupPosition: {
    top: 0,
    left: 0,
  },
  helloWelcomePosition: {
    textAlign: "left",
    left: 18,
    position: "absolute",
  },
  rectangleLayout: {
    height: 55,
    width: 339,
    position: "absolute",
  },
  fullNamePosition: {
    top: 18,
    position: "absolute",
  },
  wrapperLayout: {
    backgroundColor: Color.gray_2600,
    left: 19,
    borderRadius: Border.br_2xs,
    height: 55,
    width: 339,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.outfit,
    fontWeight: "600",
    fontSize: FontSize.nunitoSansSubheadline_size,
    textAlign: "left",
    color: Color.white3,
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
    left: 0,
  },
  barsstatusonLight: {
    top: 14,
    left: 17,
  },
  createProfile1: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.raleway,
    color: Color.black,
    width: 146,
    height: 21,
    top: 55,
  },
  helloWelcome: {
    top: 83,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    color: Color.gray_2000,
  },
  shapeIcon: {
    top: 71,
    left: 358,
    width: 6,
  },
  indiaIcon: {
    left: 322,
    width: 32,
    height: 32,
    top: 55,
    position: "absolute",
  },
  userIcon: {
    top: 57,
    left: 164,
    width: 20,
  },
  fullName: {
    left: 16,
  },
  rectangleParent: {
    top: 153,
    left: 17,
  },
  rectangleGroup: {
    left: 0,
  },
  mobileNo: {
    left: 17,
  },
  rectangleContainer: {
    top: 78,
    left: 0,
  },
  groupParent: {
    top: 232,
    height: 133,
    width: 339,
    left: 17,
    position: "absolute",
  },
  createAccount: {
    top: 431,
    left: 124,
  },
  login: {
    top: 508,
    left: 170,
  },
  image8Icon: {
    top: 326,
    left: 298,
    width: 46,
    height: 24,
    position: "absolute",
  },
  createProfile: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white3,
  },
});

export default CreateProfile;

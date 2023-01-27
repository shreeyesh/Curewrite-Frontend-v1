import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import UserProfileButton from "../components/UserProfileButton";
import LogoutButton from "../components/LogoutButton";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { Margin, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userProfile}>
      <Text style={[styles.introduction, styles.introductionTypo]}>
        Shahin Alam
      </Text>
      <Text style={[styles.cancerSpecialistMbbs, styles.introductionTypo]}>
        Cancer Specialist, MBBS
      </Text>
      <View style={styles.groupParent}>
        <TouchableHighlight
          style={styles.wrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <UserProfileButton base={require("../assets/base.png")} />
            <View>
              <Image
                resizeMode="cover"
                source={require("../assets/settings-2-1.png")}
              />
              <Text style={styles.ml18}>Account Settings</Text>
            </View>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.wrapper, styles.mt20]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <UserProfileButton base={require("../assets/base.png")} />
            <View>
              <Image
                resizeMode="cover"
                source={require("../assets/compass-1.png")}
              />
              <Text style={styles.ml19}>{`Privacy Policy `}</Text>
            </View>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.wrapper, styles.mt20]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <UserProfileButton base={require("../assets/base.png")} />
            <View>
              <Image
                resizeMode="cover"
                source={require("../assets/creditcard-1.png")}
              />
              <Text style={styles.ml18}>Payment Settings</Text>
            </View>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.wrapper, styles.mt20]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <UserProfileButton base={require("../assets/base.png")} />
            <View>
              <Image
                resizeMode="cover"
                source={require("../assets/creditcard-1.png")}
              />
              <Text style={styles.ml18}>Payment Settings</Text>
            </View>
          </>
        </TouchableHighlight>
      </View>
      <LogoutButton />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.goBack()}
      >
        <BackButton
          rectangle10BackgroundColor="unset"
          rectangle10BorderColor="rgba(255, 255, 255, 0.4)"
        />
        <Image
          style={styles.basicsArrowLeft}
          resizeMode="cover"
          source={require("../assets/basics--arrowleft3.png")}
        />
      </Pressable>
      <ImageBackground
        style={styles.userProfileChild}
        resizeMode="cover"
        source={require("../assets/rectangle11.png")}
      />
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  ml19: {
    marginLeft: 19,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  introductionTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.white3,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 44,
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  introduction: {
    marginTop: -168,
    left: "32.53%",
    fontSize: FontSize.size_6xl,
    lineHeight: 28,
    fontWeight: "700",
    top: "50%",
  },
  cancerSpecialistMbbs: {
    top: 266,
    left: 110,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  wrapper: {
    width: 335,
    height: 68,
  },
  groupParent: {
    top: 329,
    left: 20,
    position: "absolute",
  },
  basicsArrowLeft: {
    top: 15,
    left: 15,
    height: 15,
    width: 15,
    position: "absolute",
  },
  rectangleParent: {
    top: 58,
    left: 28,
    position: "absolute",
  },
  userProfileChild: {
    top: 141,
    left: 149,
    borderRadius: Border.br_3xl,
    width: 77,
    height: 77,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderColor: "#fff",
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
    backgroundColor: Color.white3,
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
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -9.17,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    textAlign: "center",
    width: 54,
    left: 0,
    color: Color.white3,
    top: "50%",
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
  userProfile: {
    backgroundColor: Color.gray_2600,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default UserProfile;

import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButtonExt from "../components/BackButtonExt";
import SearchNetwork from "../components/SearchNetwork";
import UserProfileButton from "../components/UserProfileButton";
import ChatCards from "../components/ChatCards";
import ChatCardsExt from "../components/ChatCardsExt";
import { Margin, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NetworkDoctorSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.networkDoctorSearch}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout3]} />
        <View style={[styles.groupItem, styles.groupLayout3]} />
        <View style={[styles.groupInner, styles.groupLayout3]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.goBack()}
      >
        <BackButtonExt
          onRectanglePressablePress={() => navigation.goBack()}
          rectangle10BorderColor="#d7deea"
          rectangle10BackgroundColor="#fff"
        />
        <Image
          style={[styles.basicsArrowLeft, styles.basicsLayout]}
          resizeMode="cover"
          source={require("../assets/basics--arrowleft6.png")}
        />
      </Pressable>
      <Text style={styles.chat}>Chat</Text>
      <SearchNetwork group51AutoCorrect />
      <Text
        style={[styles.liveDoctors, styles.doctorsTypo, styles.doctorsTypo1]}
      >
        Live Doctors
      </Text>
      <Text
        style={[styles.popularDoctors, styles.doctorsTypo, styles.doctorsTypo1]}
      >
        Popular Doctors
      </Text>
      <Text style={styles.seeAll}>See All</Text>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.rectangleContainer}>
          <TouchableHighlight
            style={styles.wrapperPosition}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkMessages")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/rectangle-83.png")}
            />
          </TouchableHighlight>
          <Image
            style={[
              styles.ellipseIcon,
              styles.groupLayout2,
              styles.ellipseIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-114.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.ml5]}>
          <TouchableHighlight
            style={styles.wrapperPosition}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkMessages")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/rectangle-84.png")}
            />
          </TouchableHighlight>
          <Image
            style={[
              styles.ellipseIcon,
              styles.groupLayout2,
              styles.ellipseIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-115.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.ml5]}>
          <TouchableHighlight
            style={styles.wrapperPosition}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkMessages")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/rectangle-85.png")}
            />
          </TouchableHighlight>
          <Image
            style={[
              styles.ellipseIcon,
              styles.groupLayout2,
              styles.ellipseIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-116.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.ml5]}>
          <UserProfileButton base={require("../assets/rectangle-86.png")} />
          <Image
            style={[
              styles.groupChild4,
              styles.groupLayout2,
              styles.ellipseIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-117.png")}
          />
        </View>
      </View>
      <ChatCards
        userName="Dr. Mim Akhter"
        bio="Cardiologist in apolo hospital"
        rating="4.5"
        reviewCount="(17 reviews)"
      />
      <ChatCardsExt
        bio="Cardiologist in apolo hospital"
        userName="Dr. Jon Sina"
        rating="4.5"
        reviewCount="(17 reviews)"
        onGroupPressablePress={() => navigation.navigate("NetworkMessages")}
        rectangle11={require("../assets/rectangle-114.png")}
      />
      <ChatCardsExt
        bio="Cardiologist in apolo hospital"
        userName="Dr. Zim Khan"
        rating="4.5"
        reviewCount="(17 reviews)"
        onGroupPressablePress={() => navigation.navigate("NetworkMessages")}
        group117Top={685}
        rectangle11={require("../assets/rectangle-115.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: Margin.m_5xs,
  },
  groupLayout3: {
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
  rectangleLayout: {
    height: 44,
    width: 44,
    position: "absolute",
  },
  basicsLayout: {
    height: 15,
    width: 15,
    position: "absolute",
  },
  groupParentPosition: {
    position: "absolute",
    left: 28,
  },
  doctorsTypo: {
    textAlign: "left",
    color: Color.black01,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    letterSpacing: 0.2,
    position: "absolute",
  },
  doctorsTypo1: {
    lineHeight: 23,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    left: 28,
  },
  groupLayout2: {
    height: 22,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 22,
    height: 22,
    top: 0,
  },
  wrapperPosition: {
    width: 92,
    height: 92,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 115,
    position: "absolute",
  },
  groupLayout1: {
    width: 311,
    height: 115,
    left: 28,
  },
  reviewsTypo: {
    color: Color.black02,
    lineHeight: 19,
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
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
  basicsArrowLeft: {
    top: 15,
    left: 15,
  },
  rectangleGroup: {
    top: 58,
    left: 28,
  },
  chat: {
    top: 68,
    left: 167,
    fontSize: FontSize.nunitoSansSubheadline_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.black01,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    letterSpacing: 0.2,
    position: "absolute",
  },
  liveDoctors: {
    top: 202,
  },
  popularDoctors: {
    top: 365,
  },
  seeAll: {
    top: 369,
    left: 304,
    color: Color.brandBlue,
    lineHeight: 19,
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_4xl,
    width: "100%",
  },
  ellipseIcon: {
    left: 72,
  },
  rectangleContainer: {
    width: 94,
    height: 92,
  },
  groupChild4: {
    left: 370,
  },
  groupParent: {
    top: 242,
    flexDirection: "row",
    left: 28,
  },
  networkDoctorSearch: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default NetworkDoctorSearch;

import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import AbstractRead from "../components/AbstractRead";
import AboutAuthor from "../components/AboutAuthor";
import RecognizationRead from "../components/RecognizationRead";
import BuyButton from "../components/BuyButton";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ReadModeDownload3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.readModeDownload}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <View style={[styles.groupInner, styles.groupLayout1]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Pressable
        style={[
          styles.rectangleGroup,
          styles.groupLayout,
          styles.rectangleGroupPosition,
        ]}
        onPress={() => navigation.navigate("Database")}
      >
        <BackButton />
        <Image
          style={styles.basicsArrowLeft}
          resizeMode="cover"
          source={require("../assets/basics--arrowleft6.png")}
        />
      </Pressable>
      <Text style={[styles.readMode, styles.timeFlexBox]}>Read Mode</Text>
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View
            style={[styles.border, styles.badgeBorder, styles.borderPosition]}
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <AbstractRead
        abstract="Abstract"
        theAbstractForYourMedical="The abstract for your medical research is arguably the most important piece of your manuscript. Although brief, typically between 300-500 words, the abstract is a summary of the key aspects of your research."
        frame18Collapsable
      />
      <AboutAuthor aboutAuthor="About Author" />
      <RecognizationRead
        recognization="Recognization"
        publishedInCurewriteJourn="Published in Curewrite Journal"
      />
      <Text
        style={[
          styles.dentalHealthcare,
          styles.abstractTypo,
          styles.rectangleGroupPosition,
        ]}
      >
        Dental Healthcare
      </Text>
      <BuyButton />
    </View>
  );
};

const styles = StyleSheet.create({
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
  groupLayout: {
    height: 44,
    width: 44,
  },
  rectangleGroupPosition: {
    left: 28,
    position: "absolute",
  },
  badgeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    borderStyle: "solid",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  abstractTypo: {
    textAlign: "left",
    color: Color.black01,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    letterSpacing: 0.2,
  },
  containerLayout: {
    height: 126,
    width: 319,
    color: Color.black02,
    lineHeight: 19,
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
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
  basicsArrowLeft: {
    top: 15,
    left: 15,
    height: 15,
    width: 15,
    position: "absolute",
  },
  rectangleGroup: {
    top: 58,
  },
  readMode: {
    top: 68,
    left: 139,
    fontSize: FontSize.nunitoSansSubheadline_size,
    lineHeight: 24,
    color: Color.black01,
    letterSpacing: 0.2,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
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
    top: "50%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    color: Color.gray_2800,
    width: 54,
    left: 0,
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
  dentalHealthcare: {
    top: 127,
    fontSize: FontSize.size_8xl,
    lineHeight: 32,
    fontWeight: "800",
  },
  readModeDownload: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white3,
  },
});

export default ReadModeDownload3;

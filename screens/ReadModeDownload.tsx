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
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const ReadModeDownload = () => {
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
        onPress={() => navigation.goBack()}
      >
        <View
          style={[
            styles.groupChild2,
            styles.badgeBorder,
            styles.groupLayout,
            styles.borderPosition,
          ]}
        />
        <View style={styles.basicsArrowLeft}>
          <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector57.png")}
            />
          </Pressable>
        </View>
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
        <View style={[styles.timeStyle, styles.iconLayout]}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.abstractParent, styles.rectangleGroupPosition]}>
        <Text style={[styles.abstract, styles.abstractTypo]}>Abstract</Text>
        <Text
          style={[
            styles.theAbstractForContainer,
            styles.mt12,
            styles.containerLayout,
          ]}
        >
          <Text style={styles.theAbstractFor}>
            The abstract for your medical research is arguably the most
            important piece of your manuscript. Although brief, typically
            between 300-500 words, the abstract is a summary of the key aspects
            of your research.
          </Text>
        </Text>
      </View>
      <View style={styles.aboutAuthorParent}>
        <Text style={[styles.abstract, styles.abstractTypo]}>About Author</Text>
        <Text style={[styles.containerLayout, styles.mt12]}>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.drJohnDoe1}>Dr. John Doe</Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}> </Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}>
              MBBS, Ph.D., Fellow, College of Surgeons.
            </Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}>{`Ex- Professor & Head of Department
`}</Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}>Department of Neurosurgery</Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text
              style={styles.blankLine1}
            >{`Dhaka Medical College & Hospital`}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.recognizationParent}>
        <Text style={[styles.abstract, styles.abstractTypo]}>
          Recognization
        </Text>
        <Text style={[styles.containerLayout, styles.mt12]}>
          <Text style={styles.theAbstractFor}>
            <Text>Published in Curewrite Journal</Text>
            <Text style={styles.blankLine1}>{` `}</Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}>500+ purchases</Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}>1000+ citations</Text>
          </Text>
          <Text style={styles.theAbstractFor}>
            <Text style={styles.blankLine1}>10000+ times download</Text>
          </Text>
        </Text>
      </View>
      <Text
        style={[
          styles.dentalHealthcare,
          styles.abstractTypo,
          styles.rectangleGroupPosition,
        ]}
      >
        Dental Healthcare
      </Text>
      <TouchableHighlight
        style={[styles.badge, styles.badgeBorder]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PaymentMethod")}
      >
        <Text style={styles.labelText}>Buy Now</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: Margin.m_sm,
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
  iconLayout: {
    height: "100%",
    overflow: "hidden",
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
  groupChild2: {
    borderRadius: Border.br_sm,
    borderColor: "#d7deea",
    left: 0,
    backgroundColor: Color.white3,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  vector: {
    left: "4.31%",
    top: "18.62%",
    right: "3.62%",
    bottom: "18.62%",
    width: "92.07%",
    height: "62.76%",
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
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.roboto,
    color: Color.gray_2800,
    width: 54,
    left: 0,
  },
  timeStyle: {
    width: "15.88%",
    top: "0%",
    right: "84.12%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  barsstatusonLight: {
    top: 14,
    left: 17,
    width: 340,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  abstract: {
    fontSize: FontSize.size_3xl,
    lineHeight: 23,
    fontWeight: "700",
  },
  theAbstractFor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theAbstractForContainer: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  abstractParent: {
    top: 184,
  },
  drJohnDoe1: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  blankLine1: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  aboutAuthorParent: {
    top: 345,
    left: 24,
    position: "absolute",
  },
  recognizationParent: {
    top: 532,
    left: 27,
    position: "absolute",
  },
  dentalHealthcare: {
    top: 127,
    fontSize: FontSize.size_8xl,
    lineHeight: 32,
    fontWeight: "800",
  },
  labelText: {
    letterSpacing: 0.4,
    lineHeight: 18,
    color: Color.white3,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    textAlign: "center",
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
    borderColor: "#000",
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
  },
  readModeDownload: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default ReadModeDownload;

import * as React from "react";
import { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
} from "../GlobalStyles";

const NetworkProfiles1 = () => {
  const navigation = useNavigation();

  const onBadgeClick = useCallback(() => {
    Alert.alert("Request Sent!", "");
  }, []);

  const onLabelTextClick = useCallback(() => {
    Alert.alert("Request Sent!", "");
  }, []);

  return (
    <View style={[styles.networkProfiles, styles.iconLayout]}>
      <View style={styles.networkProfilesChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout3]} />
        <View style={[styles.groupItem, styles.groupLayout3]} />
        <View style={[styles.groupInner, styles.groupLayout3]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <View style={styles.networkParent}>
        <Text style={styles.network}>Network</Text>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <TouchableHighlight
            style={[
              styles.wrapper,
              styles.badgeBorder,
              styles.wrapperPosition,
              styles.rectangleLayout,
            ]}
            underlayColor="#fff"
            onPress={() => navigation.navigate("NetworkMessages")}
          >
            <View />
          </TouchableHighlight>
          <Image
            style={styles.authoringLink}
            resizeMode="cover"
            source={require("../assets/group-167.png")}
          />
        </View>
        <Pressable
          style={[styles.rectangleContainer, styles.rectangleLayout]}
          onPress={() => navigation.navigate("NetworkPaper")}
        >
          <Pressable
            style={[
              styles.wrapper,
              styles.badgeBorder,
              styles.wrapperPosition,
              styles.rectangleLayout,
            ]}
            onPress={() => navigation.goBack()}
          />
          <Image
            style={styles.authoringLink}
            resizeMode="cover"
            source={require("../assets/basics--arrowleft.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.groupLayout2]}>
        <View style={[styles.groupChild2, styles.groupLayout2]} />
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupContainer, styles.groupLayout1]}>
            <View style={[styles.groupContainer, styles.groupLayout1]}>
              <Text style={[styles.dentist, styles.dentistTypo]}>Dentist</Text>
              <Text
                style={[
                  styles.drMathewHayden,
                  styles.yrTypo,
                  styles.yrTypo1,
                  styles.aboutClr,
                ]}
              >
                Dr. Mathew Hayden
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.networkProfilesInner}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupLayout}>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={styles.groupParent1}>
              <View
                style={[styles.rectangleParent1, styles.rectangleParentLayout1]}
              >
                <View
                  style={[
                    styles.groupChild3,
                    styles.groupChildLayout,
                    styles.rectangleParentLayout1,
                  ]}
                />
                <View style={styles.patientsParent}>
                  <Text style={[styles.patients, styles.textTypo]}>
                    Patients
                  </Text>
                  <Text
                    style={[
                      styles.textTypo,
                      styles.mt6,
                      styles.yrTypo1,
                      styles.yrTypo2,
                    ]}
                  >
                    150+
                  </Text>
                </View>
              </View>
              <View
                style={[styles.rectangleParent2, styles.rectangleParentLayout1]}
              >
                <View
                  style={[
                    styles.groupChild3,
                    styles.groupChildLayout,
                    styles.rectangleParentLayout1,
                  ]}
                />
                <View style={styles.patientsParent}>
                  <Text style={[styles.exp, styles.yrTypo]}>Exp.</Text>
                  <Text
                    style={[
                      styles.yrTypo,
                      styles.mt6,
                      styles.yrTypo1,
                      styles.yrTypo2,
                    ]}
                  >
                    14 yr
                  </Text>
                </View>
              </View>
              <View
                style={[styles.rectangleParent3, styles.rectangleParentLayout1]}
              >
                <View
                  style={[
                    styles.groupChild3,
                    styles.groupChildLayout,
                    styles.rectangleParentLayout1,
                  ]}
                />
                <View style={styles.patientsParent}>
                  <Text style={[styles.exp, styles.yrTypo]}>Rating</Text>
                  <Text style={[styles.yrTypo1, styles.mt6, styles.yrTypo2]}>
                    4.8
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.aboutParent}>
              <Text
                style={[
                  styles.about,
                  styles.yrTypo,
                  styles.yrTypo1,
                  styles.aboutClr,
                ]}
              >
                About
              </Text>
              <Text
                style={[
                  styles.mbbsPhdFellowContainer,
                  styles.mt12,
                  styles.dentistTypo,
                ]}
              >
                <Text style={styles.mbbsPhdFellow}>
                  MBBS, Ph.D., Fellow, International College of Surgeons.
                </Text>
                <Text style={styles.mbbsPhdFellow}> </Text>
                <Text
                  style={styles.mbbsPhdFellow}
                >{`Ex- Professor & Head of Department
`}</Text>
                <Text style={styles.mbbsPhdFellow}>
                  Department of Neurosurgery
                </Text>
                <Text
                  style={styles.dhakaMedicalCollege}
                >{`Dhaka Medical College & Hospital`}</Text>
              </Text>
            </View>
            <View
              style={[styles.rectangleParent4, styles.rectangleParentLayout]}
            >
              <Pressable
                style={[
                  styles.groupChild6,
                  styles.rectangleParentLayout,
                  styles.groupChildLayout,
                  styles.badgeBorder,
                ]}
              />
              <Image
                style={styles.basicsRightArrow}
                resizeMode="cover"
                source={require("../assets/basics--rightarrow.png")}
              />
              <View style={styles.papersParent}>
                <Text style={[styles.exp, styles.yrTypo]}>Papers</Text>
                <Text
                  style={[
                    styles.about,
                    styles.mt6,
                    styles.yrTypo,
                    styles.yrTypo1,
                    styles.aboutClr,
                  ]}
                >
                  13
                </Text>
              </View>
              <View style={[styles.rectangleParent5, styles.groupChild7Layout]}>
                <View
                  style={[
                    styles.groupChild7,
                    styles.groupChild7Layout,
                    styles.wrapperPosition,
                  ]}
                />
                <Image
                  style={[styles.essentialsClock, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/essentials--clock.png")}
                />
              </View>
            </View>
            <View
              style={[styles.rectangleParent6, styles.rectangleParentLayout]}
            >
              <Pressable
                style={[
                  styles.groupChild6,
                  styles.rectangleParentLayout,
                  styles.groupChildLayout,
                  styles.badgeBorder,
                ]}
              />
              <Image
                style={styles.basicsRightArrow}
                resizeMode="cover"
                source={require("../assets/basics--rightarrow.png")}
              />
              <View style={styles.papersParent}>
                <Text style={[styles.exp, styles.yrTypo]}>Citations</Text>
                <Text
                  style={[
                    styles.about,
                    styles.mt6,
                    styles.yrTypo,
                    styles.yrTypo1,
                    styles.aboutClr,
                  ]}
                >
                  123
                </Text>
              </View>
              <View style={[styles.rectangleParent5, styles.groupChild7Layout]}>
                <View
                  style={[
                    styles.groupChild7,
                    styles.groupChild7Layout,
                    styles.wrapperPosition,
                  ]}
                />
                <Image
                  style={[styles.essentialsClock, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/essentials--clock.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("NetworkMessages")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
      </Pressable>
      <TouchableHighlight
        style={[styles.badge, styles.badgeBorder]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onBadgeClick}
      >
        <TouchableHighlight
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={onLabelTextClick}
        >
          <Text style={[styles.sendRequest, styles.mTypo]}>Send Request</Text>
        </TouchableHighlight>
      </TouchableHighlight>
      <Image
        style={[styles.networkProfilesItem, styles.mPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.m, styles.mPosition, styles.mTypo]}>M</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: Margin.m_4xs,
  },
  mt12: {
    marginTop: Margin.m_sm,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupLayout3: {
    width: 75,
    backgroundColor: Color.gray_1100,
    height: 28,
    top: 0,
    position: "absolute",
  },
  groupChild1Layout: {
    backgroundColor: Color.gray8,
    width: 75,
    height: 28,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 44,
    height: 44,
    position: "absolute",
  },
  badgeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  wrapperPosition: {
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  groupLayout2: {
    height: 109,
    width: 319,
    position: "absolute",
  },
  groupLayout1: {
    height: 47,
    width: 179,
    position: "absolute",
  },
  dentistTypo: {
    textAlign: "left",
    color: Color.black02,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  yrTypo: {
    color: Color.black01,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  yrTypo1: {
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  aboutClr: {
    letterSpacing: 0.2,
    color: Color.black01,
    fontWeight: "700",
  },
  groupLayout: {
    height: 492,
    width: 321,
  },
  rectangleParentLayout1: {
    width: 98,
    height: 95,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_2xl,
    top: 0,
  },
  textTypo: {
    color: Color.gray_2400,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  yrTypo2: {
    lineHeight: 24,
    fontSize: FontSize.nunitoSansSubheadline_size,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  rectangleParentLayout: {
    height: 85,
    width: 320,
    left: 0,
    position: "absolute",
  },
  groupChild7Layout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  frameLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  mTypo: {
    color: Color.white3,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  mPosition: {
    top: 159,
    position: "absolute",
  },
  networkProfilesChild: {
    height: 191,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white3,
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
    display: "none",
    height: 28,
    width: 375,
    left: 0,
    position: "absolute",
  },
  network: {
    top: 10,
    left: 122,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontSize: FontSize.nunitoSansSubheadline_size,
    position: "absolute",
  },
  wrapper: {
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
  authoringLink: {
    left: 15,
    width: 15,
    height: 15,
    top: 15,
    position: "absolute",
  },
  rectangleGroup: {
    left: 275,
    top: 0,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  networkParent: {
    top: 58,
    height: 44,
    width: 319,
    left: 28,
    position: "absolute",
  },
  groupChild2: {
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(107, 134, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.white3,
  },
  dentist: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0.4,
    top: 31,
    left: 0,
    position: "absolute",
  },
  drMathewHayden: {
    fontSize: FontSize.size_5xl,
    lineHeight: 26,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 109,
    top: 31,
  },
  groupView: {
    top: 134,
    left: 28,
    height: 109,
  },
  groupChild3: {
    backgroundColor: Color.gray_600,
    left: 0,
  },
  patients: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    lineHeight: 16,
  },
  patientsParent: {
    top: 25,
    left: 16,
    position: "absolute",
  },
  rectangleParent1: {
    left: 0,
    top: 0,
  },
  exp: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    lineHeight: 16,
  },
  rectangleParent2: {
    left: 111,
    top: 0,
  },
  rectangleParent3: {
    left: 222,
    top: 0,
  },
  groupParent1: {
    height: 95,
    width: 320,
    left: 1,
    top: 0,
    position: "absolute",
  },
  about: {
    fontSize: FontSize.size_3xl,
    lineHeight: 23,
  },
  mbbsPhdFellow: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  dhakaMedicalCollege: {
    margin: Margin.m_7xs,
  },
  mbbsPhdFellowContainer: {
    letterSpacing: 0.1,
    lineHeight: 19,
    height: 126,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    width: 319,
    textAlign: "left",
    color: Color.black02,
  },
  aboutParent: {
    top: 127,
    left: 1,
    position: "absolute",
  },
  groupChild6: {
    borderColor: "#d7deea",
    backgroundColor: Color.white3,
  },
  basicsRightArrow: {
    top: 27,
    left: 277,
    width: 32,
    height: 32,
    position: "absolute",
  },
  papersParent: {
    top: 20,
    left: 86,
    position: "absolute",
  },
  groupChild7: {
    backgroundColor: Color.gray_700,
  },
  essentialsClock: {
    top: 16,
    left: 16,
  },
  rectangleParent5: {
    left: 14,
    top: 15,
  },
  rectangleParent4: {
    top: 308,
  },
  rectangleParent6: {
    top: 407,
  },
  groupParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  networkProfilesInner: {
    top: 264,
    left: 27,
    position: "absolute",
    flex: 1,
  },
  icon: {
    height: "100%",
  },
  frame: {
    left: 313,
    top: 68,
  },
  sendRequest: {
    lineHeight: 18,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0.4,
  },
  badge: {
    height: "6.9%",
    width: "85.07%",
    top: "88.67%",
    right: "7.47%",
    bottom: "4.43%",
    left: "7.47%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_2600,
    borderColor: "#000",
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  networkProfilesItem: {
    left: 52,
    width: 63,
    height: 63,
  },
  m: {
    left: 48,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.5,
    lineHeight: 65,
    width: 72,
    height: 61,
  },
  networkProfiles: {
    height: 812,
    flex: 1,
    backgroundColor: Color.white3,
  },
});

export default NetworkProfiles1;

import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MessageButton from "../components/MessageButton";
import BackButtonExt from "../components/BackButtonExt";
import AuthorBanner from "../components/AuthorBanner";
import StatDisplay from "../components/StatDisplay";
import PapersButton from "../components/PapersButton";
import CitationsButton from "../components/CitationsButton";
import SendReqButton from "../components/SendReqButton";
import { Margin, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NetworkProfiles2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.networkProfiles, styles.iconLayout]}>
      <View style={styles.networkProfilesChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout2]} />
        <View style={[styles.groupItem, styles.groupLayout2]} />
        <View style={[styles.groupInner, styles.groupLayout2]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <View style={styles.networkParent}>
        <Text style={[styles.network, styles.networkTypo, styles.yrLayout]}>
          Network
        </Text>
        <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
          <MessageButton />
          <Image
            style={styles.authoringLink}
            resizeMode="cover"
            source={require("../assets/group-167.png")}
          />
        </View>
        <Pressable
          style={[styles.rectangleContainer, styles.rectangleLayout1]}
          onPress={() => navigation.navigate("NetworkPaper")}
        >
          <BackButtonExt
            onRectanglePressablePress={() => navigation.goBack()}
          />
          <Image
            style={styles.authoringLink}
            resizeMode="cover"
            source={require("../assets/basics--arrowleft.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <AuthorBanner
          rectangle13BackgroundColor="#fff"
          rectangle13Height={109}
          rectangle13Elevation={12}
        />
        <View
          style={[
            styles.rectangleParent1,
            styles.rectangleLayout,
            styles.essentialsClockPosition,
          ]}
        >
          <Image
            style={[styles.rectangleIcon, styles.rectangleLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-117.png")}
          />
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <View
              style={[
                styles.cardiologistInApolloHospitaParent,
                styles.groupWrapperLayout,
              ]}
            >
              <Text
                style={[
                  styles.cardiologistInApollo,
                  styles.cardiologistInApolloTypo,
                ]}
              >
                Cardiologist in apollo hospital
              </Text>
              <Text style={[styles.drMimAkhter, styles.yrTypo, styles.yrTypo1]}>
                Dr. Mim Akhter
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
                style={[styles.rectangleParent2, styles.rectangleParentLayout1]}
              >
                <StatDisplay rectangle12Focusable />
                <View style={styles.patientsParent}>
                  <Text style={[styles.patients, styles.textTypo]}>
                    Patients
                  </Text>
                  <Text
                    style={[
                      styles.textTypo,
                      styles.mt6,
                      styles.yrTypo1,
                      styles.yrLayout,
                      styles.yrTypo2,
                    ]}
                  >
                    100+
                  </Text>
                </View>
              </View>
              <View
                style={[styles.rectangleParent3, styles.rectangleParentLayout1]}
              >
                <StatDisplay />
                <View style={styles.patientsParent}>
                  <Text style={[styles.exp, styles.yrTypo]}>Exp.</Text>
                  <Text
                    style={[
                      styles.yrTypo,
                      styles.mt6,
                      styles.yrTypo1,
                      styles.yrLayout,
                      styles.yrTypo2,
                    ]}
                  >
                    10 yr
                  </Text>
                </View>
              </View>
              <View
                style={[styles.rectangleParent4, styles.rectangleParentLayout1]}
              >
                <StatDisplay />
                <View style={styles.patientsParent}>
                  <Text style={[styles.exp, styles.yrTypo]}>Rating</Text>
                  <Text
                    style={[
                      styles.yrTypo1,
                      styles.mt6,
                      styles.yrLayout,
                      styles.yrTypo2,
                    ]}
                  >
                    4.67
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.aboutParent}>
              <Text style={[styles.about, styles.yrTypo, styles.yrTypo1]}>
                About
              </Text>
              <Text
                style={[
                  styles.mbbsPhdFellowContainer,
                  styles.mt12,
                  styles.cardiologistInApolloTypo,
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
              style={[styles.rectangleParent5, styles.rectangleParentLayout]}
            >
              <PapersButton />
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
                  ]}
                >
                  23
                </Text>
              </View>
              <View style={[styles.rectangleParent6, styles.groupChild6Layout]}>
                <View
                  style={[
                    styles.groupChild6,
                    styles.groupChild6Layout,
                    styles.wrapperPosition,
                  ]}
                />
                <Image
                  style={[
                    styles.essentialsClock,
                    styles.frameLayout,
                    styles.essentialsClockPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/essentials--clock.png")}
                />
              </View>
            </View>
            <View
              style={[styles.rectangleParent7, styles.rectangleParentLayout]}
            >
              <CitationsButton />
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
                  ]}
                >
                  123
                </Text>
              </View>
              <View style={[styles.rectangleParent6, styles.groupChild6Layout]}>
                <View
                  style={[
                    styles.groupChild6,
                    styles.groupChild6Layout,
                    styles.wrapperPosition,
                  ]}
                />
                <Image
                  style={[
                    styles.essentialsClock,
                    styles.frameLayout,
                    styles.essentialsClockPosition,
                  ]}
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
      <SendReqButton />
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
  groupLayout2: {
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
  networkTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  yrLayout: {
    lineHeight: 24,
    fontSize: FontSize.nunitoSansSubheadline_size,
  },
  rectangleLayout1: {
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
  groupLayout1: {
    height: 109,
    width: 319,
    position: "absolute",
  },
  rectangleLayout: {
    height: 77,
    position: "absolute",
  },
  essentialsClockPosition: {
    top: 16,
    left: 16,
  },
  groupWrapperLayout: {
    height: 47,
    width: 175,
    position: "absolute",
  },
  cardiologistInApolloTypo: {
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
  groupLayout: {
    height: 492,
    width: 321,
  },
  rectangleParentLayout1: {
    width: 98,
    height: 95,
    position: "absolute",
  },
  containerLayout: {
    borderRadius: Border.br_2xl,
    top: 0,
  },
  textTypo: {
    color: Color.gray_2400,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  yrTypo2: {
    fontSize: FontSize.nunitoSansSubheadline_size,
    fontWeight: "700",
    lineHeight: 24,
  },
  rectangleParentLayout: {
    height: 85,
    width: 320,
    left: 0,
    position: "absolute",
  },
  groupChild6Layout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  frameLayout: {
    height: 24,
    width: 24,
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
    letterSpacing: 0.2,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 24,
    fontSize: FontSize.nunitoSansSubheadline_size,
    position: "absolute",
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
  rectangleIcon: {
    borderRadius: Border.br_3xl,
    width: 77,
    left: 0,
    top: 0,
  },
  cardiologistInApollo: {
    top: 31,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0.4,
    left: 0,
    position: "absolute",
  },
  drMimAkhter: {
    fontSize: FontSize.size_5xl,
    lineHeight: 26,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardiologistInApolloHospitaParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 93,
    top: 15,
  },
  rectangleParent1: {
    width: 268,
    left: 16,
  },
  groupView: {
    top: 134,
    left: 28,
    height: 109,
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
  rectangleParent2: {
    left: 0,
    top: 0,
  },
  exp: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    lineHeight: 16,
  },
  rectangleParent3: {
    left: 111,
    top: 0,
  },
  rectangleParent4: {
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
  groupChild6: {
    backgroundColor: Color.gray_700,
  },
  essentialsClock: {
    left: 16,
  },
  rectangleParent6: {
    left: 14,
    top: 15,
  },
  rectangleParent5: {
    top: 308,
  },
  rectangleParent7: {
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
  networkProfiles: {
    height: 812,
    flex: 1,
    backgroundColor: Color.white3,
  },
});

export default NetworkProfiles2;

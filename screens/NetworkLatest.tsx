import * as React from "react";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  Modal,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import CreatePost from "../components/CreatePost";
import { useNavigation } from "@react-navigation/native";
import AccountButton from "../components/AccountButton";
import PostCard from "../components/PostCard";
import BottomTabs from "../components/BottomTabs";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const NetworkLatest = () => {
  const [vectorIcon1Visible, setVectorIcon1Visible] = useState(false);
  const navigation = useNavigation();

  const openVectorIcon1 = useCallback(() => {
    setVectorIcon1Visible(true);
  }, []);

  const closeVectorIcon1 = useCallback(() => {
    setVectorIcon1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.networkLatest}>
        <View style={[styles.rectangleParent, styles.networkPosition]}>
          <View style={[styles.groupChild, styles.groupLayout3]} />
          <View style={[styles.groupItem, styles.groupLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout3]} />
          <View style={[styles.rectangleView, styles.groupChild1Layout]} />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Image
          style={[styles.networkLatestChild, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.networkLatestItem, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <View style={[styles.networkWrapper, styles.papersParentPosition]}>
          <Text style={[styles.network, styles.networkTypo]}>Network</Text>
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout2]}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <AccountButton rectangle9={require("../assets/rectangle-9.png")} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </Pressable>
        <View style={[styles.networkLatestInner, styles.groupChild2Layout]} />
        <Pressable
          style={[styles.message, styles.messageLayout]}
          onPress={() => navigation.navigate("NetworkDoctorSearch")}
        >
          <Image
            style={styles.iconLayout4}
            resizeMode="cover"
            source={require("../assets/message6.png")}
          />
        </Pressable>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("false")}
        >
          <TouchableOpacity
            style={styles.addPosition}
            activeOpacity={0.2}
            onPress={openVectorIcon1}
          >
            <Image
              style={[styles.iconLayout3, styles.iconLayout4]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </TouchableOpacity>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.groupLayout1]}
          onPress={() => navigation.navigate("NetworkProfiles2")}
        >
          <View style={[styles.groupParent, styles.groupLayout1]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.groupView, styles.groupLayout]}>
                <View style={[styles.rectangleContainer, styles.groupLayout1]}>
                  <View
                    style={[
                      styles.groupChild2,
                      styles.groupLayout1,
                      styles.groupChild2Layout,
                    ]}
                  />
                  <Text
                    style={[styles.experimentalModelOf, styles.networkTypo]}
                  >
                    Experimental Model of Diseases in Dental Healthcare
                  </Text>
                  <Image
                    style={[
                      styles.archiveAddIcon,
                      styles.iconLayout1,
                      styles.iconLayout2,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd.png")}
                  />
                  <Image
                    style={[
                      styles.arrowUpIcon,
                      styles.iconLayout1,
                      styles.iconLayout2,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd.png")}
                  />
                  <Image
                    style={[styles.arrowPosition, styles.arrowLayout]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd.png")}
                  />
                  <Text style={[styles.k, styles.kTypo]}>56.9k</Text>
                  <View style={[styles.messageParent, styles.iconLayout1]}>
                    <Image
                      style={[
                        styles.messageIcon,
                        styles.iconLayout1,
                        styles.iconLayout2,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/message.png")}
                    />
                    <Text style={[styles.text, styles.kTypo]}>4682</Text>
                  </View>
                  <View
                    style={[
                      styles.curewriteWrapper,
                      styles.paperWrapperSpaceBlock,
                      styles.wrapperPosition1,
                    ]}
                  >
                    <Text style={[styles.curewrite, styles.mTypo]}>
                      Curewrite
                    </Text>
                  </View>
                  <Image
                    style={[styles.akarIconsshareBox, styles.arrowLayout]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd.png")}
                  />
                  <View
                    style={[styles.groupChild3, styles.groupChildPosition]}
                  />
                </View>
                <View style={styles.groupParent1}>
                  <Image
                    style={styles.wrapperPosition}
                    resizeMode="cover"
                    source={require("../assets/group-2.png")}
                  />
                  <Image
                    style={[styles.groupChild4, styles.messageLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Text style={[styles.m, styles.mTypo]}>M</Text>
                  <Text
                    style={[
                      styles.drMinAkhter,
                      styles.drMinAkhterTypo,
                      styles.hoursAgoPosition,
                    ]}
                  >
                    Dr. Min Akhter
                  </Text>
                  <Text
                    style={[
                      styles.hoursAgo,
                      styles.hoursAgoPosition,
                      styles.networkTypo,
                    ]}
                  >
                    15 hours ago
                  </Text>
                </View>
              </View>
              <View
                style={[styles.paperWrapper, styles.paperWrapperSpaceBlock]}
              >
                <Text style={[styles.curewrite, styles.mTypo]}>Paper</Text>
              </View>
              <Image
                style={[styles.image5Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-8.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View
                style={[styles.paperContainer, styles.paperWrapperSpaceBlock]}
              >
                <Text style={[styles.curewrite, styles.mTypo]}>Paper</Text>
              </View>
              <PostCard
                postTitle="Diet plan affect on Immune system of Human beings"
                likes="26.9k"
                tags="AIIMS"
                hoursAgo="21 hours ago"
                userName="Dr Mathew Hayden"
              />
              <ImageBackground
                style={[styles.image6Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/image6.png")}
              />
            </View>
          </View>
        </Pressable>
        <BottomTabs
          onFrameTouchableHighlightPress={() => navigation.navigate("Publish")}
          essentialsHome={require("../assets/vector.png")}
          onFrameTouchableHighlightPress1={() =>
            navigation.navigate("NetworkPaper")
          }
          frame={require("../assets/frame1.png")}
          onFrameTouchableHighlightPress2={() => {}}
          onFrameTouchableHighlightPress3={() => navigation.navigate("Vault")}
          report={require("../assets/report.png")}
        />
        <View style={[styles.papersParent, styles.papersParentPosition]}>
          <Pressable
            style={styles.papers}
            onPress={() => navigation.navigate("NetworkPaper")}
          >
            <Text style={[styles.papers1, styles.latestTypo]}>PAPERS</Text>
          </Pressable>
          <TouchableHighlight
            style={[styles.articles, styles.arrowPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkArticle")}
          >
            <Text style={[styles.articles1, styles.kTypo]}>ARTICLES</Text>
          </TouchableHighlight>
          <Text style={[styles.latest, styles.latestTypo]}>LATEST</Text>
          <View style={[styles.groupChild8, styles.groupLayout2]} />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={vectorIcon1Visible}>
        <View style={styles.vectorIcon1Overlay}>
          <Pressable style={styles.vectorIcon1Bg} onPress={closeVectorIcon1} />
          <CreatePost onClose={closeVectorIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vectorIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  networkPosition: {
    display: "none",
    position: "absolute",
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
  papersParentPosition: {
    left: 28,
    position: "absolute",
  },
  networkTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  groupLayout2: {
    width: 55,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 8,
    backgroundColor: Color.gray_400,
    left: 0,
  },
  messageLayout: {
    height: 36,
    width: 36,
    position: "absolute",
  },
  iconLayout4: {
    height: "100%",
    width: "100%",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout1: {
    width: 357,
    position: "absolute",
  },
  groupLayout: {
    height: 498,
    width: 357,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    position: "absolute",
  },
  iconLayout2: {
    width: 20,
    height: 24,
  },
  arrowLayout: {
    top: 408,
    height: 24,
    width: 20,
  },
  kTypo: {
    color: Color.gray_1800,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  paperWrapperSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    backgroundColor: Color.brandBlue,
    position: "absolute",
  },
  wrapperPosition1: {
    top: 64,
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_xl,
    left: 13,
  },
  mTypo: {
    color: Color.white3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  groupChildPosition: {
    height: 9,
    width: 7,
    left: 306,
    top: 416,
    position: "absolute",
  },
  drMinAkhterTypo: {
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  hoursAgoPosition: {
    left: 42,
    position: "absolute",
  },
  iconLayout: {
    height: 303,
    width: 357,
    left: 0,
    position: "absolute",
  },
  addPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  latestTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  arrowPosition: {
    left: 76,
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
    height: 28,
    display: "none",
    width: 375,
    left: 0,
  },
  networkLatestChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
  },
  networkLatestItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
  },
  network: {
    fontSize: FontSize.size_9xl,
    letterSpacing: 0.3,
    lineHeight: 36,
    color: Color.black01,
    fontWeight: "700",
  },
  networkWrapper: {
    top: 58,
  },
  ellipseIcon: {
    left: 37,
    width: 18,
    height: 18,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 52,
    left: 290,
    height: 49,
  },
  networkLatestInner: {
    top: 112,
    width: 375,
    backgroundColor: Color.gray_400,
    position: "absolute",
  },
  message: {
    left: 314,
    top: 134,
  },
  vectorIcon: {
    top: 130,
    left: 337,
    width: 19,
    height: 19,
    position: "absolute",
  },
  vectorIcon1: {
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
    position: "absolute",
  },
  frame: {
    left: 266,
    width: 31,
    height: 31,
    top: 134,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild2: {
    top: 442,
  },
  experimentalModelOf: {
    left: 14,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    color: Color.neutral900,
    width: 343,
    fontWeight: "900",
    top: 0,
    position: "absolute",
  },
  archiveAddIcon: {
    left: 299,
    top: 409,
  },
  arrowUpIcon: {
    left: 18,
    top: 409,
  },
  k: {
    top: 412,
    left: 41,
    width: 35,
    fontWeight: "900",
    position: "absolute",
  },
  messageIcon: {
    top: 0,
    left: 0,
  },
  text: {
    top: 3,
    left: 26,
    width: 33,
    fontWeight: "900",
    position: "absolute",
  },
  messageParent: {
    left: 145,
    width: 58,
    top: 409,
  },
  curewrite: {
    fontSize: FontSize.size_2xs,
    fontWeight: "900",
  },
  curewriteWrapper: {
    width: 71,
    left: 13,
  },
  akarIconsshareBox: {
    left: 324,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild3: {
    backgroundColor: Color.brandBlue,
  },
  rectangleContainer: {
    top: 48,
    height: 450,
    left: 0,
  },
  wrapperPosition: {
    height: 4,
    width: 15,
    left: 302,
    top: 12,
    position: "absolute",
  },
  groupChild4: {
    top: 0,
    left: 0,
  },
  m: {
    top: 8,
    left: 11,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
    position: "absolute",
  },
  drMinAkhter: {
    top: 1,
  },
  hoursAgo: {
    top: 19,
    fontSize: FontSize.size_base,
    color: Color.gray_1600,
  },
  groupParent1: {
    width: 317,
    height: 37,
    left: 13,
    top: 0,
    position: "absolute",
  },
  groupView: {
    top: 0,
  },
  paperWrapper: {
    left: 86,
    top: 112,
    width: 48,
  },
  image5Icon: {
    top: 141,
  },
  groupContainer: {
    top: 538,
  },
  paperContainer: {
    top: 112,
    width: 48,
    left: 75,
  },
  image6Icon: {
    top: 144,
  },
  groupParent: {
    height: 1036,
    top: 0,
    left: 0,
  },
  framePressable: {
    top: 202,
    left: 9,
    height: 511,
  },
  papers1: {
    color: Color.gray_1500,
    width: 66,
  },
  papers: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  articles1: {
    width: 69,
    fontWeight: "700",
  },
  articles: {
    top: 0,
  },
  latest: {
    left: 160,
    color: Color.brandBlue,
    width: 62,
    top: 0,
    position: "absolute",
  },
  groupChild8: {
    top: 24,
    left: 154,
    height: 3,
    backgroundColor: Color.brandBlue,
  },
  papersParent: {
    top: 138,
    width: 222,
    height: 27,
  },
  networkLatest: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default NetworkLatest;

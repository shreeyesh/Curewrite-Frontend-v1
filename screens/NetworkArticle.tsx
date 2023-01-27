import * as React from "react";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
} from "react-native";
import CreatePost from "../components/CreatePost";
import BottomTabsExt from "../components/BottomTabsExt";
import { useNavigation } from "@react-navigation/native";
import ArticlesCard from "../components/ArticlesCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NetworkArticle = () => {
  const [vectorIcon4Visible, setVectorIcon4Visible] = useState(false);
  const navigation = useNavigation();

  const openVectorIcon4 = useCallback(() => {
    setVectorIcon4Visible(true);
  }, []);

  const closeVectorIcon4 = useCallback(() => {
    setVectorIcon4Visible(false);
  }, []);
  return (
    <>
      <View style={styles.networkArticle}>
        <View style={[styles.rectangleParent, styles.networkPosition]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChild1Layout]} />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Image
          style={[styles.networkArticleChild, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.networkArticleItem, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <View style={styles.networkWrapper}>
          <Text style={[styles.network, styles.kTypo]}>Network</Text>
        </View>
        <BottomTabsExt />
        <View style={styles.rectangleGroup}>
          <Pressable
            style={styles.rectanglePressable}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-9.png")}
            />
          </Pressable>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
        <View style={[styles.networkArticleInner, styles.groupChild2Layout]} />
        <Pressable
          style={[styles.message, styles.messageLayout]}
          onPress={() => navigation.navigate("NetworkDoctorSearch")}
        >
          <View
            style={[
              styles.vuesaxboldmessage,
              styles.vectorPosition1,
              styles.iconLayout1,
            ]}
          >
            <View
              style={[
                styles.vuesaxboldmessage,
                styles.vectorPosition1,
                styles.iconLayout1,
              ]}
            >
              <TouchableHighlight
                style={styles.vector}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.navigate("NetworkDoctorSearch")}
              >
                <Image
                  style={[styles.iconLayout, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vector4.png")}
                />
              </TouchableHighlight>
              <Image
                style={[styles.vectorIconLayout, styles.vectorPosition1]}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("NetworkDoctorSearch")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        <Pressable
          style={styles.frame1}
          onPress={() => navigation.navigate("false")}
        >
          <TouchableOpacity
            style={[styles.vector1, styles.vectorPosition1, styles.iconLayout1]}
            activeOpacity={0.2}
            onPress={openVectorIcon4}
          >
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </TouchableOpacity>
          <Image
            style={[styles.vectorIcon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.networkArticleInner1, styles.groupParentLayout]}
          onPress={() => navigation.navigate("NetworkProfiles2")}
        >
          <ArticlesCard
            postTitle={`Study of Modern business management & Healthcare`}
            articleTags="Article Post"
            likes="56.9k"
            commentAmount="1000"
            username="Sunny Fernandes"
            hoursAgo="21 hours ago"
            postImage={require("../assets/rectangle8.png")}
            pfp={require("../assets/ellipse-122.png")}
          />
        </Pressable>
        <View style={styles.papersParent}>
          <Pressable
            style={styles.papers}
            onPress={() => navigation.navigate("NetworkPaper")}
          >
            <Text style={[styles.papers1, styles.kTypo]}>PAPERS</Text>
          </Pressable>
          <TouchableHighlight
            style={[styles.articles, styles.articlesPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkArticle")}
          >
            <Text style={[styles.articles1, styles.kTypo]}>ARTICLES</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.latest}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkLatest")}
          >
            <Text style={[styles.latest1, styles.latest1Typo]}>LATEST</Text>
          </TouchableHighlight>
          <View style={[styles.groupChild5, styles.groupChildBg]} />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={vectorIcon4Visible}>
        <View style={styles.vectorIcon4Overlay}>
          <Pressable style={styles.vectorIcon4Bg} onPress={closeVectorIcon4} />
          <CreatePost onClose={closeVectorIcon4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vectorIcon4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon4Bg: {
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
  groupLayout: {
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
  kTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  groupChild2Layout: {
    height: 8,
    backgroundColor: Color.gray_400,
  },
  messageLayout: {
    height: 36,
    width: 36,
    position: "absolute",
  },
  vectorPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  vectorIconLayout: {
    opacity: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 498,
    width: 357,
    position: "absolute",
  },
  rectanglePosition: {
    width: 357,
    left: 0,
    position: "absolute",
  },
  archiveAddPosition: {
    height: 24,
    top: 409,
    position: "absolute",
  },
  archiveAddLayout: {
    width: 20,
    height: 24,
    top: 409,
  },
  arrowDownIconLayout: {
    top: 408,
    height: 24,
    width: 20,
  },
  groupChildBg: {
    backgroundColor: Color.brandBlue,
    position: "absolute",
  },
  sTypo: {
    color: Color.white3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  hoursAgoPosition: {
    left: 42,
    position: "absolute",
  },
  latest1Typo: {
    color: Color.gray_1600,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  articlesPosition: {
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
  networkArticleChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
  },
  networkArticleItem: {
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
    left: 28,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_md,
  },
  rectanglePressable: {
    width: 48,
    height: 48,
    top: 1,
    left: 0,
    position: "absolute",
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
    width: 55,
    position: "absolute",
  },
  networkArticleInner: {
    top: 112,
    width: 375,
    backgroundColor: Color.gray_400,
    left: 0,
    position: "absolute",
  },
  vector: {
    left: "8.33%",
    right: "8.33%",
    bottom: "8.37%",
    width: "83.33%",
    height: "83.29%",
    top: "8.33%",
    position: "absolute",
  },
  vectorIcon1: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
  },
  vuesaxboldmessage: {
    position: "absolute",
  },
  message: {
    left: 314,
    top: 134,
  },
  groupPressable: {
    left: 337,
    top: 130,
    width: 19,
    height: 19,
    position: "absolute",
  },
  vector1: {
    position: "absolute",
  },
  vectorIcon2: {
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
    position: "absolute",
  },
  frame1: {
    left: 266,
    width: 31,
    height: 31,
    top: 134,
    position: "absolute",
    overflow: "hidden",
  },
  networkArticleInner1: {
    top: 202,
    left: 9,
  },
  papers1: {
    color: Color.gray_1500,
    width: 66,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
  },
  papers: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  articles1: {
    color: Color.brandBlue,
    width: 69,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
  },
  articles: {
    top: 0,
  },
  latest1: {
    width: 62,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
  },
  latest: {
    left: 160,
    top: 0,
    position: "absolute",
  },
  groupChild5: {
    top: 24,
    left: 77,
    height: 3,
    width: 55,
  },
  papersParent: {
    top: 138,
    left: 32,
    width: 222,
    height: 27,
    position: "absolute",
  },
  networkArticle: {
    backgroundColor: Color.white3,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default NetworkArticle;

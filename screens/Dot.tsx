import * as React from "react";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
} from "react-native";
import CreatePost from "../components/CreatePost";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Dot = () => {
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
      <View style={styles.dot}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChild1Layout]} />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Image
          style={styles.dotChild}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.dotItem}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <View style={styles.papersParent}>
          <Pressable
            style={[styles.papers, styles.papersPosition]}
            onPress={() => navigation.navigate("Dot")}
          >
            <Text style={[styles.papers1, styles.papers1Typo]}>PAPERS</Text>
          </Pressable>
          <TouchableHighlight
            style={[styles.articles, styles.papersPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Vault")}
          >
            <Text style={[styles.articles1, styles.papers1Typo]}>ARTICLES</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.latest, styles.papersPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkPaper")}
          >
            <Text style={[styles.latest1, styles.papers1Typo]}>LATEST</Text>
          </TouchableHighlight>
          <View style={styles.groupChild2} />
        </View>
        <Pressable
          style={[styles.message, styles.framePosition]}
          onPress={() => navigation.navigate("NetworkDoctorSearch")}
        >
          <Image
            style={styles.iconLayout1}
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
          style={[styles.frame, styles.framePosition]}
          onPress={() => navigation.navigate("false")}
        >
          <TouchableOpacity
            style={[styles.vector, styles.iconLayout1]}
            activeOpacity={0.2}
            onPress={openVectorIcon1}
          >
            <Image
              style={[styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </TouchableOpacity>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <Pressable
          style={styles.dotInner}
          onPress={() => navigation.navigate("NetworkProfiles2")}
        />
        <View style={styles.frameParent}>
          <View style={styles.frameChild} />
          <View style={[styles.frameChild, styles.ml42]} />
          <View style={[styles.frameChild, styles.ml42]} />
          <View style={[styles.frameChild, styles.ml42]} />
        </View>
        <View style={styles.dotChild1} />
        <View style={styles.frameGroup}>
          <View style={styles.emailWrapper}>
            <View style={[styles.email, styles.emailPosition]}>
              <Text style={styles.sharePost}>Share Post</Text>
            </View>
          </View>
          <View style={[styles.emailWrapper, styles.mt20]}>
            <View style={[styles.email, styles.emailPosition]}>
              <Text style={styles.sharePost}>Share Profile</Text>
            </View>
          </View>
          <View style={styles.mt20}>
            <View style={styles.emailWrapper}>
              <View style={[styles.email, styles.emailPosition]}>
                <Text style={styles.sharePost}>Save to Collection</Text>
              </View>
            </View>
            <View style={[styles.emailWrapper, styles.mt20]}>
              <View style={[styles.email, styles.emailPosition]}>
                <Text style={styles.sharePost}>Block This Post</Text>
              </View>
            </View>
            <View style={[styles.emailWrapper, styles.mt20]}>
              <View style={[styles.password, styles.emailPosition]} />
              <View style={[styles.email, styles.emailPosition]}>
                <Text style={styles.sharePost}>Send Friend Request</Text>
              </View>
            </View>
          </View>
          <View style={[styles.emailWrapper, styles.mt20]}>
            <View style={[styles.password, styles.emailPosition]} />
            <View style={[styles.email, styles.emailPosition]}>
              <Text style={styles.sharePost}>View Profile</Text>
            </View>
          </View>
        </View>
        <View style={styles.networkParent}>
          <Text style={styles.network}>Network</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-167.png")}
          />
          <Pressable
            style={styles.rectanglePosition}
            onPress={() => navigation.navigate("NetworkPaper")}
          >
            <Pressable
              style={[styles.rectanglePressable, styles.rectanglePosition]}
              onPress={() => navigation.goBack()}
            />
            <Image
              style={[styles.basicsArrowLeft, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/basics--arrowleft.png")}
            />
          </Pressable>
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
  ml42: {
    marginLeft: Margin.m_6xl,
  },
  mt20: {
    marginTop: Margin.m_3xl,
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
  papersPosition: {
    top: 0,
    position: "absolute",
  },
  papers1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  framePosition: {
    top: 134,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  emailPosition: {
    alignItems: "center",
    top: 14,
    left: 20,
    position: "absolute",
  },
  groupIconLayout: {
    height: 15,
    width: 15,
    top: 15,
    position: "absolute",
  },
  rectanglePosition: {
    width: 44,
    height: 44,
    top: 0,
    left: 0,
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
  dotChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
    display: "none",
    position: "absolute",
  },
  dotItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
    display: "none",
    position: "absolute",
  },
  papers1: {
    color: Color.gray_1600,
    width: 66,
  },
  papers: {
    left: 0,
  },
  articles1: {
    color: Color.gray_1800,
    width: 69,
  },
  articles: {
    left: 76,
  },
  latest1: {
    color: Color.brandBlue,
    width: 62,
  },
  latest: {
    left: 160,
  },
  groupChild2: {
    top: 24,
    left: 154,
    backgroundColor: Color.brandBlue,
    width: 56,
    height: 3,
    position: "absolute",
  },
  papersParent: {
    top: 138,
    left: 28,
    width: 222,
    height: 27,
    position: "absolute",
  },
  message: {
    left: 314,
    width: 36,
    height: 36,
  },
  vectorIcon: {
    top: 130,
    left: 337,
    width: 19,
    height: 19,
    position: "absolute",
  },
  vector: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
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
    overflow: "hidden",
  },
  dotInner: {
    top: 202,
    left: 9,
    width: 357,
    height: 511,
    position: "absolute",
  },
  frameChild: {
    display: "none",
  },
  frameParent: {
    top: 747,
    left: 43,
    flexDirection: "row",
    position: "absolute",
  },
  dotChild1: {
    top: 214,
    borderRadius: 50,
    backgroundColor: "#f8f8f8",
    height: 472,
    width: 335,
    left: 20,
    position: "absolute",
  },
  sharePost: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.poppins,
    color: Color.gray_3900,
    textAlign: "center",
  },
  email: {
    flexDirection: "row",
  },
  emailWrapper: {
    borderRadius: Border.br_6xs,
    borderColor: "rgba(24, 115, 185, 0.8)",
    borderBottomWidth: 1,
    height: 50,
    borderStyle: "solid",
    width: 335,
    overflow: "hidden",
    backgroundColor: Color.white3,
  },
  password: {
    justifyContent: "center",
  },
  frameGroup: {
    top: 242,
    left: 21,
    position: "absolute",
  },
  network: {
    top: 10,
    left: 122,
    fontSize: FontSize.nunitoSansSubheadline_size,
    letterSpacing: 0.2,
    lineHeight: 24,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupIcon: {
    left: 290,
  },
  rectanglePressable: {
    borderRadius: Border.br_sm,
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 1,
    borderStyle: "solid",
  },
  basicsArrowLeft: {
    left: 15,
  },
  networkParent: {
    top: 54,
    left: 35,
    width: 305,
    height: 44,
    position: "absolute",
  },
  dot: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default Dot;

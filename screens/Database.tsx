import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import RecentList from "../components/RecentList";
import AuthorBanner from "../components/AuthorBanner";
import SearchDbExt from "../components/SearchDbExt";
import BottomTabs from "../components/BottomTabs";
import { Margin, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Database = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.database}>
      <View style={[styles.rectangleParent, styles.databaseChildPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Image
        style={[styles.databaseChild, styles.databaseChildPosition]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.databaseItem}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.databaseWrapper}>
        <Text style={[styles.database1, styles.database1Typo]}>Database</Text>
      </View>
      <Image
        style={styles.databaseInner}
        resizeMode="cover"
        source={require("../assets/group-165.png")}
      />
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.rectangleGroup}>
          <Image
            style={[styles.rectangleIcon, styles.groupChild2Layout]}
            resizeMode="cover"
            source={require("../assets/rectangle-132.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChild2Layout]}
            resizeMode="cover"
            source={require("../assets/rectangle-133.png")}
          />
          <View style={styles.recentlyUpdatedParent}>
            <Text style={styles.authorOfTheTypo}>Recently Updated</Text>
            <View style={[styles.rectangleContainer, styles.mt16]}>
              <RecentList rectangle13Focusable />
              <View style={[styles.groupChild4, styles.groupChildLayout2]} />
              <View style={[styles.groupChild5, styles.groupChildLayout1]} />
              <View style={[styles.groupChild6, styles.groupChildLayout1]} />
              <View
                style={[styles.modelcularBiologyParent, styles.parentPosition]}
              >
                <Text style={[styles.modelcularBiology, styles.database1Typo]}>
                  Modelcular Biology
                </Text>
                <Text style={[styles.papers, styles.mt8, styles.usaTypo1]}>
                  8 Papers
                </Text>
              </View>
              <View style={[styles.geneticsParent, styles.parentPosition]}>
                <Text style={[styles.modelcularBiology, styles.database1Typo]}>
                  Genetics
                </Text>
                <Text style={[styles.papers, styles.mt8, styles.usaTypo1]}>
                  3 Papers
                </Text>
              </View>
              <Image
                style={[
                  styles.interfaceMoreVertical,
                  styles.interfaceLayout,
                  styles.interfacePosition,
                ]}
                resizeMode="cover"
                source={require("../assets/interface--morevertical.png")}
              />
              <Image
                style={[
                  styles.interfaceMoreVertical1,
                  styles.interfaceLayout,
                  styles.interfacePosition,
                ]}
                resizeMode="cover"
                source={require("../assets/interface--morevertical1.png")}
              />
              <Image
                style={[styles.nounFile46777021Icon, styles.nounIconLayout]}
                resizeMode="cover"
                source={require("../assets/nounfile4677702-1.png")}
              />
              <Image
                style={[styles.nounFile46777022Icon, styles.nounIconLayout]}
                resizeMode="cover"
                source={require("../assets/nounfile4677702-2.png")}
              />
            </View>
          </View>
          <Text style={[styles.authorOfThe, styles.authorOfTheTypo]}>
            Author of the Month
          </Text>
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <AuthorBanner rectangle13Focusable />
            <View style={styles.rectangleParent1}>
              <Image
                style={styles.groupChild9}
                resizeMode="cover"
                source={require("../assets/rectangle-118.png")}
              />
              <View style={[styles.usaParent, styles.usaParentLayout]}>
                <Text
                  style={[
                    styles.usa,
                    styles.usaPosition,
                    styles.usaTypo,
                    styles.usaTypo1,
                  ]}
                >
                  U.S.A
                </Text>
                <Text style={[styles.mbbs, styles.timeTypo]}>MBBS</Text>
                <Text
                  style={[
                    styles.drZimAkhter,
                    styles.usaTypo,
                    styles.usaParentLayout,
                  ]}
                >
                  Dr. Zim Akhter
                </Text>
              </View>
            </View>
            <Image
              style={styles.interfaceMoreHorizontal}
              resizeMode="cover"
              source={require("../assets/interface--morehorizontal6.png")}
            />
          </View>
        </View>
        <SearchDbExt />
        <TouchableHighlight
          style={[styles.interfaceAdjustHorizontal, styles.interfaceLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/interface--adjusthorizontalalt.png")}
          />
        </TouchableHighlight>
        <View
          style={[
            styles.basicsSearchParent,
            styles.wrapperFlexBox,
            styles.parentFlexBox,
          ]}
        >
          <View style={styles.interfaceLayout}>
            <Pressable
              style={styles.vector}
              onPress={() => navigation.toggleDrawer()}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/vector56.png")}
              />
            </Pressable>
          </View>
          <TextInput
            style={styles.ml10}
            placeholder="Search Database.."
            keyboardType="default"
            placeholderTextColor="#8aa0bc"
          />
        </View>
      </View>
      <BottomTabs
        onFrameTouchableHighlightPress={() => navigation.navigate("Publish")}
        essentialsHome={require("../assets/vector.png")}
        onFrameTouchableHighlightPress1={() =>
          navigation.navigate("NetworkPaper")
        }
        frame={require("../assets/frame7.png")}
        networkColor="#7b8d9e"
        onFrameTouchableHighlightPress2={() => {}}
        onFrameTouchableHighlightPress3={() => navigation.navigate("Vault")}
        report={require("../assets/report4.png")}
        databaseColor="#1c6ba4"
      />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/rectangle-9.png")}
          />
        </Pressable>
        <Image
          style={[styles.ellipseIcon, styles.usaPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt16: {
    marginTop: Margin.m_lg,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  databaseChildPosition: {
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
  database1Typo: {
    color: Color.black01,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  timeTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 135,
    top: 188,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 93,
    borderColor: "#d7ddea",
    borderRadius: Border.br_6xl,
    width: 320,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.white3,
  },
  groupChildLayout1: {
    width: 64,
    left: 11,
    borderRadius: Border.br_lg,
    height: 64,
    position: "absolute",
  },
  parentPosition: {
    left: 91,
    position: "absolute",
  },
  usaTypo1: {
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
  },
  interfaceLayout: {
    height: 20,
    width: 20,
  },
  interfacePosition: {
    left: 283,
    height: 20,
    position: "absolute",
  },
  nounIconLayout: {
    height: 32,
    width: 32,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  authorOfTheTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.black01,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  groupViewLayout: {
    width: 319,
    position: "absolute",
  },
  groupChildLayout: {
    height: 112,
    width: 319,
    borderRadius: Border.br_6xl,
    left: 0,
    position: "absolute",
  },
  usaParentLayout: {
    width: 133,
    position: "absolute",
  },
  usaPosition: {
    height: 18,
    top: 0,
    position: "absolute",
  },
  usaTypo: {
    color: Color.white3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
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
    height: 28,
    display: "none",
    left: 0,
  },
  databaseChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
  },
  databaseItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
    display: "none",
    position: "absolute",
  },
  database1: {
    fontSize: FontSize.size_9xl,
    letterSpacing: 0.3,
    lineHeight: 36,
    textAlign: "left",
  },
  databaseWrapper: {
    top: 77,
    left: 28,
    position: "absolute",
  },
  databaseInner: {
    top: 319,
    left: 147,
    width: 184,
    height: 16,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderColor: "#141023",
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
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
    height: 7,
    width: 18,
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
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -9.17,
    top: "50%",
    letterSpacing: 0,
    fontWeight: "900",
    color: Color.gray_2800,
    textAlign: "center",
    width: 54,
  },
  timeStyle: {
    width: "15.88%",
    top: "0%",
    right: "84.12%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barsstatusonLight: {
    left: 17,
    width: 340,
    height: 19,
    top: 14,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    left: 165,
    width: 155,
  },
  groupChild2: {
    left: 2,
    width: 151,
  },
  groupChild4: {
    top: 111,
  },
  groupChild5: {
    top: 15,
    backgroundColor: Color.gray_700,
  },
  groupChild6: {
    top: 126,
    backgroundColor: "#d6fff3",
  },
  modelcularBiology: {
    fontSize: FontSize.nunitoSansSubheadline_size,
    lineHeight: 21,
    textAlign: "left",
  },
  papers: {
    lineHeight: 18,
    color: Color.black02,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
  },
  modelcularBiologyParent: {
    top: 23,
  },
  geneticsParent: {
    top: 134,
  },
  interfaceMoreVertical: {
    top: 37,
  },
  interfaceMoreVertical1: {
    top: 186,
  },
  nounFile46777021Icon: {
    top: 31,
  },
  nounFile46777022Icon: {
    top: 180,
  },
  rectangleContainer: {
    height: 204,
    width: 320,
  },
  recentlyUpdatedParent: {
    top: 350,
    left: 0,
    position: "absolute",
  },
  authorOfThe: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild7: {
    top: 7,
    backgroundColor: "rgba(28, 107, 164, 0.71)",
  },
  groupChild9: {
    width: 60,
    height: 58,
    borderRadius: Border.br_lg,
    top: 0,
    left: 0,
    position: "absolute",
  },
  usa: {
    lineHeight: 19,
    width: 63,
  },
  mbbs: {
    top: 46,
    lineHeight: 20,
    color: Color.gray_3600,
    width: 83,
    letterSpacing: 0.2,
    height: 19,
    textAlign: "left",
  },
  drZimAkhter: {
    top: 18,
    fontSize: FontSize.size_5xl,
    lineHeight: 26,
    height: 25,
    letterSpacing: 0.2,
    fontWeight: "700",
    color: Color.white3,
    width: 133,
  },
  usaParent: {
    left: 77,
    height: 65,
    top: 0,
  },
  rectangleParent1: {
    top: 28,
    width: 210,
    height: 65,
    left: 16,
    position: "absolute",
  },
  interfaceMoreHorizontal: {
    left: 278,
    width: 20,
    height: 19,
    top: 14,
    position: "absolute",
  },
  groupView: {
    top: 42,
    height: 119,
    left: 0,
  },
  rectangleGroup: {
    top: 95,
    height: 592,
    width: 320,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  interfaceAdjustHorizontal: {
    left: 280,
    top: 35,
    position: "absolute",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "-1.67%",
    top: "-1.67%",
    right: "-0.2%",
    bottom: "-0.2%",
    width: "101.87%",
    height: "101.87%",
    position: "absolute",
  },
  basicsSearchParent: {
    top: 35,
    left: 16,
  },
  groupParent: {
    top: 125,
    height: 594,
    width: 320,
    left: 27,
    position: "absolute",
  },
  icon2: {
    borderRadius: Border.br_md,
    height: "100%",
    width: "100%",
  },
  rectanglePressable: {
    top: 1,
    width: 48,
    height: 48,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    left: 37,
    width: 18,
  },
  groupPressable: {
    top: 71,
    left: 291,
    width: 55,
    height: 49,
    position: "absolute",
  },
  database: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default Database;

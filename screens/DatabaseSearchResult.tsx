import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DatabaseSearchResult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.databaseSearchResult}>
      <View style={[styles.rectangleParent, styles.databasePosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Image
        style={[styles.databaseSearchResultChild, styles.databasePosition]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.databaseSearchResultItem, styles.databasePosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.databaseWrapper}>
        <Text style={styles.database}>Database</Text>
      </View>
      <Image
        style={styles.databaseSearchResultInner}
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Pressable
          style={[styles.interfaceAdjustHorizontal, styles.basicsSearchLayout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/interface--adjusthorizontalalt.png")}
          />
        </Pressable>
        <View
          style={[
            styles.basicsSearchParent,
            styles.wrapperFlexBox,
            styles.parentFlexBox,
          ]}
        >
          <View style={styles.basicsSearchLayout}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector56.png")}
            />
          </View>
          <TextInput
            style={styles.ml10}
            placeholder="Latest Papers"
            keyboardType="default"
            placeholderTextColor="#8aa0bc"
          />
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.groupParent}>
            <View style={styles.groupContainer}>
              <View style={[styles.groupView, styles.groupViewLayout]}>
                <View
                  style={[styles.rectangleContainer, styles.groupViewLayout]}
                >
                  <View style={[styles.groupChild2, styles.groupChildLayout]} />
                  <View
                    style={[
                      styles.rectangleParent1,
                      styles.rectangleParentPosition,
                      styles.rectangleParentPosition1,
                    ]}
                  >
                    <ImageBackground
                      style={styles.rectangleIcon}
                      resizeMode="cover"
                      source={require("../assets/rectangle111.png")}
                    />
                    <View style={styles.citationsParent}>
                      <Text
                        style={[
                          styles.citations,
                          styles.textPosition,
                          styles.textTypo,
                        ]}
                      >
                        5 Citations
                      </Text>
                      <Text style={styles.growingCovidImpact}>
                        Growing Covid Impact Globally
                      </Text>
                      <Text style={[styles.drZimAkhter, styles.akhterTypo]}>
                        Dr. Zim Akhter
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={styles.interfaceMoreHorizontal}
                  onPress={() => {}}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/interface--morehorizontal.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.parent, styles.textPosition]}>
                <Text
                  style={[styles.text, styles.textPosition, styles.textTypo]}
                >
                  22/11/22
                </Text>
                <View style={[styles.lineView, styles.lineViewPosition]} />
              </View>
            </View>
            <View style={[styles.groupContainer, styles.mt24]}>
              <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.groupChild3, styles.groupChildLayout]} />
                <View
                  style={[
                    styles.rectangleParent3,
                    styles.rectangleParentPosition,
                    styles.rectangleParentPosition1,
                  ]}
                >
                  <ImageBackground
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle112.png")}
                  />
                  <View
                    style={[
                      styles.citationsGroupLayout,
                      styles.citationsPosition,
                    ]}
                  >
                    <Text style={[styles.citations1, styles.citationsTypo]}>
                      10 Citations
                    </Text>
                    <Text
                      style={[
                        styles.theStudyOfTypo,
                        styles.citationsGroupLayout,
                      ]}
                    >{`Blockchain & Healthcare`}</Text>
                    <Text style={[styles.shahinAlam, styles.akhterTypo]}>
                      Shahin Alam
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.interfaceMoreHorizontal}
                  onPress={() => {}}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/interface--morehorizontal1.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.parent, styles.textPosition]}>
                <Text
                  style={[styles.text, styles.textPosition, styles.textTypo]}
                >
                  02/09/22
                </Text>
                <View style={[styles.lineView, styles.lineViewPosition]} />
              </View>
            </View>
            <View style={[styles.groupContainer, styles.mt24]}>
              <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.groupChild6, styles.groupChildLayout]} />
                <View
                  style={[
                    styles.rectangleParent5,
                    styles.rectangleParentPosition,
                  ]}
                >
                  <ImageBackground
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle113.png")}
                  />
                  <View
                    style={[styles.theStudyOfLayout, styles.citationsPosition]}
                  >
                    <Text style={[styles.citations2, styles.citationsTypo]}>
                      50 Citations
                    </Text>
                    <Text
                      style={[styles.theStudyOfLayout, styles.theStudyOfTypo]}
                    >
                      The Study of Dental Disease
                    </Text>
                    <Text style={[styles.drMimAkhter, styles.akhterTypo]}>
                      Dr. Mim Akhter
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.interfaceMoreHorizontal}
                  onPress={() => {}}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/interface--morehorizontal2.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.parent, styles.textPosition]}>
                <Text
                  style={[styles.text, styles.textPosition, styles.textTypo]}
                >
                  30/01/21
                </Text>
                <View style={[styles.lineView, styles.lineViewPosition]} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <TouchableHighlight
          style={styles.wrapperFlexBox}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Publish")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={styles.mt8}>Home</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.wrapperFlexBox, styles.ml42]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NetworkPaper")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/frame7.png")}
            />
            <Text style={styles.mt8}>Network</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.wrapperFlexBox, styles.ml42]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Database")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/report4.png")}
            />
            <Text style={styles.mt8}>Database</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.wrapperFlexBox, styles.ml42]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Vault")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/frame8.png")}
            />
            <Text style={styles.mt8}>Vault</Text>
          </>
        </TouchableHighlight>
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <TouchableHighlight
          style={styles.rectangleTouchablehighlight}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/rectangle-9.png")}
          />
        </TouchableHighlight>
        <Image
          style={[styles.ellipseIcon, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: Margin.m_xs,
  },
  mt24: {
    marginTop: Margin.m_4xl,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml42: {
    marginLeft: Margin.m_6xl,
  },
  databasePosition: {
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
  lineViewPosition: {
    top: 9,
    position: "absolute",
  },
  basicsSearchLayout: {
    height: 20,
    width: 20,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  groupViewLayout: {
    height: 112,
    width: 319,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_6xl,
    height: 112,
    width: 319,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    height: 65,
    left: 16,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 28,
    height: 65,
  },
  textPosition: {
    height: 18,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 19,
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
  },
  akhterTypo: {
    height: 25,
    lineHeight: 26,
    fontSize: FontSize.size_5xl,
    top: 18,
    letterSpacing: 0.2,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  citationsPosition: {
    left: 77,
    height: 65,
    top: 0,
  },
  citationsTypo: {
    color: Color.gray_2900,
    lineHeight: 19,
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    top: 0,
    left: 0,
    position: "absolute",
  },
  citationsGroupLayout: {
    width: 188,
    position: "absolute",
  },
  theStudyOfTypo: {
    color: Color.gray_3800,
    lineHeight: 20,
    letterSpacing: 0.2,
    top: 46,
    fontSize: FontSize.size_xl,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
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
  databaseSearchResultChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
  },
  databaseSearchResultItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
  },
  database: {
    fontSize: FontSize.size_9xl,
    letterSpacing: 0.3,
    lineHeight: 36,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    color: Color.black01,
    fontWeight: "700",
  },
  databaseWrapper: {
    top: 77,
    left: 28,
    position: "absolute",
  },
  databaseSearchResultInner: {
    top: 319,
    left: 147,
    width: 184,
    height: 16,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "#141023",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
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
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
    position: "absolute",
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
  frameChild: {
    left: 1,
    backgroundColor: Color.gray_300,
    height: 56,
    width: 319,
    borderRadius: Border.br_md,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  interfaceAdjustHorizontal: {
    left: 280,
    top: 35,
    height: 20,
    position: "absolute",
  },
  vectorIcon: {
    height: "101.87%",
    width: "101.87%",
    top: "-1.67%",
    right: "-0.2%",
    bottom: "-0.2%",
    left: "-1.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  basicsSearchParent: {
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    top: 35,
  },
  groupChild2: {
    backgroundColor: Color.brandBlue,
  },
  rectangleIcon: {
    borderRadius: Border.br_lg,
    width: 60,
    height: 58,
    top: 0,
    left: 0,
    position: "absolute",
  },
  citations: {
    width: 83,
    color: Color.white3,
  },
  growingCovidImpact: {
    color: Color.gray_3600,
    lineHeight: 20,
    letterSpacing: 0.2,
    top: 46,
    width: 226,
    fontSize: FontSize.size_xl,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
    position: "absolute",
  },
  drZimAkhter: {
    width: 133,
    color: Color.white3,
  },
  citationsParent: {
    width: 226,
    left: 77,
    height: 65,
    top: 0,
    position: "absolute",
  },
  rectangleParent1: {
    width: 303,
  },
  rectangleContainer: {
    top: 0,
  },
  interfaceMoreHorizontal: {
    left: 278,
    width: 20,
    height: 19,
    top: 14,
    position: "absolute",
  },
  groupView: {
    top: 34,
  },
  text: {
    color: Color.gray_1400,
    width: 64,
    fontWeight: "700",
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
  },
  lineView: {
    left: 74,
    borderStyle: "dashed",
    borderColor: "#97abc3",
    borderRadius: 0.001,
    borderTopWidth: 1,
    width: 246,
    height: 1,
  },
  parent: {
    width: 319,
    left: 0,
  },
  groupContainer: {
    height: 146,
    width: 319,
  },
  groupChild3: {
    backgroundColor: Color.gray_3700,
  },
  citations1: {
    width: 83,
  },
  shahinAlam: {
    width: 147,
    color: Color.black01,
    lineHeight: 26,
    fontSize: FontSize.size_5xl,
    top: 18,
  },
  rectangleParent3: {
    width: 265,
  },
  groupChild6: {
    backgroundColor: Color.beige_100,
  },
  citations2: {
    width: 93,
  },
  theStudyOfLayout: {
    width: 215,
    position: "absolute",
  },
  drMimAkhter: {
    color: Color.gray_2400,
    width: 138,
  },
  rectangleParent5: {
    top: 27,
    width: 292,
  },
  groupParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameWrapper: {
    top: 93,
    height: 521,
    width: 319,
    left: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 125,
    left: 27,
    width: 320,
    height: 594,
    position: "absolute",
  },
  frameParent: {
    top: 747,
    left: 43,
  },
  icon4: {
    borderRadius: Border.br_md,
    height: "100%",
    width: "100%",
  },
  rectangleTouchablehighlight: {
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
  databaseSearchResult: {
    backgroundColor: Color.white3,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DatabaseSearchResult;

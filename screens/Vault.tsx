import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DataDisplay from "../components/DataDisplay";
import { Margin, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Vault = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vault}>
      <View style={[styles.rectangleParent, styles.vaultPosition1]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Image
        style={[styles.vaultChild, styles.vaultPosition1]}
        resizeMode="cover"
        source={require("../assets/vector-15.png")}
      />
      <Image
        style={[styles.vaultItem, styles.vaultPosition1]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.myVaultWrapper, styles.vaultPosition]}>
        <Text style={styles.myVault}>My Vault</Text>
      </View>
      <View
        style={[styles.barsstatusonLight, styles.barsstatusonLightPosition]}
      >
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
      <View style={styles.frameParent}>
        <TouchableHighlight
          style={styles.wrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Database")}
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
          style={[styles.wrapper, styles.ml42]}
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
          style={[styles.wrapper, styles.ml42]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Database")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/report.png")}
            />
            <Text style={styles.mt8}>Database</Text>
          </>
        </TouchableHighlight>
        <Pressable style={[styles.wrapper, styles.ml42]}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame12.png")}
          />
          <Text style={[styles.vault1, styles.mt8]}>Vault</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.rectangleGroup}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <ImageBackground
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle9.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.parentPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Text style={[styles.journals, styles.journalsTypo]}>Journals</Text>
      <Text style={[styles.collection, styles.journalsTypo]}>Collection</Text>
      <Pressable
        style={[styles.vaultInner, styles.vaultPosition]}
        onPress={() => navigation.navigate("ReadModeDownload1")}
      >
        <View style={styles.groupParent}>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleContainer}>
              <View
                style={[
                  styles.groupChild2,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
              />
              <Image
                style={[
                  styles.groupChild3,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/rectangle-13.png")}
              />
              <View
                style={[
                  styles.groupWrapper,
                  styles.groupWrapperLayout,
                  styles.groupWrapperPosition,
                  styles.groupPosition,
                ]}
              >
                <DataDisplay
                  citationsCount="5 Citations"
                  sold="$10 - 24 Sold"
                  title="Lifescience of Humanity"
                />
              </View>
              <View
                style={[
                  styles.interfaceMoreHorizontal,
                  styles.barsstatusonLightPosition,
                ]}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector58.png")}
                />
              </View>
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>12/05/22</Text>
              <View style={styles.lineView} />
            </View>
          </View>
          <View style={[styles.groupView, styles.mt24]}>
            <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
              <View
                style={[
                  styles.groupChild4,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
              />
              <View
                style={[
                  styles.groupFrame,
                  styles.groupWrapperLayout,
                  styles.groupWrapperPosition,
                  styles.groupPosition,
                ]}
              >
                <DataDisplay
                  citationsCount="10 Citations"
                  sold="$20 - 40 Sold"
                  title="Clinical Drug Trial"
                  group56Width={188}
                  citationsColor="#0c1115"
                  citationsHeight={19}
                  lifescienceOfHumanityColor="rgba(12, 17, 21, 0.65)"
                  lifescienceOfHumanityWidth={188}
                  soldColor="#0e1012"
                  soldWidth={147}
                />
              </View>
              <Image
                style={[
                  styles.interfaceMoreHorizontal,
                  styles.barsstatusonLightPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/interface--morehorizontal3.png")}
              />
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>22/03/22</Text>
              <View style={styles.lineView} />
            </View>
          </View>
          <View style={[styles.groupView, styles.mt24]}>
            <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
              <View
                style={[
                  styles.groupChild6,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
              />
              <View
                style={[
                  styles.groupWrapper1,
                  styles.groupWrapperLayout,
                  styles.groupWrapperPosition,
                ]}
              >
                <View
                  style={[styles.citationsContainer, styles.groupWrapperLayout]}
                >
                  <Text style={[styles.citations2, styles.citationsTypo]}>
                    50 Citations
                  </Text>
                  <Text
                    style={[
                      styles.oralHealthcare,
                      styles.oralHealthcarePosition,
                    ]}
                  >
                    Oral Healthcare
                  </Text>
                  <Text style={[styles.sold2, styles.soldTypo]}>
                    $5 - 100 Sold
                  </Text>
                </View>
              </View>
              <Image
                style={[
                  styles.interfaceMoreHorizontal,
                  styles.barsstatusonLightPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/interface--morehorizontal4.png")}
              />
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>09/01/20</Text>
              <View style={styles.lineView} />
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.framePressable, styles.vaultPosition]}
        onPress={() => navigation.navigate("ReadModeDownload1")}
      >
        <View style={styles.groupParent}>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleContainer}>
              <View
                style={[
                  styles.groupChild2,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
              />
              <Image
                style={[
                  styles.groupChild3,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/rectangle-13.png")}
              />
              <View
                style={[
                  styles.rectangleParent4,
                  styles.rectangleParentPosition,
                  styles.rectangleParentPosition1,
                ]}
              >
                <ImageBackground
                  style={styles.groupChild10}
                  resizeMode="cover"
                  source={require("../assets/rectangle111.png")}
                />
                <View
                  style={[
                    styles.citationsParent1,
                    styles.citationsParentPosition,
                  ]}
                >
                  <Text style={[styles.citations, styles.textTypo]}>
                    5 Citations
                  </Text>
                  <Text style={styles.lifescienceOfHumanity}>
                    Growing Covid Impact Globally
                  </Text>
                  <Text style={[styles.sold, styles.soldTypo]}>
                    Dr. Zim Akhter
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.interfaceMoreHorizontal,
                  styles.barsstatusonLightPosition,
                ]}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector58.png")}
                />
              </View>
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>22/11/22</Text>
              <View style={styles.lineView} />
            </View>
          </View>
          <View style={[styles.groupView, styles.mt24]}>
            <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
              <Image
                style={[
                  styles.groupChild3,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/rectangle-11.png")}
              />
              <View
                style={[
                  styles.rectangleParent6,
                  styles.rectangleParentPosition,
                  styles.rectangleParentPosition1,
                ]}
              >
                <Image
                  style={styles.groupChild10}
                  resizeMode="cover"
                  source={require("../assets/rectangle-111.png")}
                />
                <View
                  style={[
                    styles.citationsParent2,
                    styles.citationsParentPosition,
                  ]}
                >
                  <Text style={[styles.citations1, styles.citationsTypo]}>
                    10 Citations
                  </Text>
                  <Text
                    style={[
                      styles.clinicalDrugTrial,
                      styles.oralHealthcarePosition,
                    ]}
                  >{`Blockchain & Healthcare`}</Text>
                  <Text style={[styles.sold1, styles.soldTypo]}>
                    Shahin Alam
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.interfaceMoreHorizontal,
                  styles.barsstatusonLightPosition,
                ]}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector60.png")}
                />
              </View>
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>02/09/22</Text>
              <View style={styles.lineView} />
            </View>
          </View>
          <View style={[styles.groupView, styles.mt24]}>
            <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
              <View
                style={[
                  styles.groupChild6,
                  styles.groupChildLayout,
                  styles.groupChildLayout1,
                ]}
              />
              <View
                style={[
                  styles.rectangleParent8,
                  styles.rectangleParentPosition,
                ]}
              >
                <Image
                  style={styles.groupChild10}
                  resizeMode="cover"
                  source={require("../assets/rectangle-112.png")}
                />
                <View
                  style={[
                    styles.citationsParent3,
                    styles.citationsParentPosition,
                  ]}
                >
                  <Text style={[styles.citations2, styles.citationsTypo]}>
                    50 Citations
                  </Text>
                  <Text
                    style={[
                      styles.oralHealthcare,
                      styles.oralHealthcarePosition,
                    ]}
                  >
                    The Study of Dental Disease
                  </Text>
                  <Text style={[styles.sold2, styles.soldTypo]}>
                    Dr. Mim Akhter
                  </Text>
                </View>
              </View>
              <Image
                style={[
                  styles.interfaceMoreHorizontal,
                  styles.barsstatusonLightPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/interface--morehorizontal4.png")}
              />
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>30/01/21</Text>
              <View style={styles.lineView} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml42: {
    marginLeft: Margin.m_6xl,
  },
  mt24: {
    marginTop: Margin.m_4xl,
  },
  vaultPosition1: {
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
  vaultPosition: {
    left: 28,
    position: "absolute",
  },
  barsstatusonLightPosition: {
    height: 19,
    top: 14,
    position: "absolute",
  },
  parentPosition: {
    height: 18,
    top: 0,
    position: "absolute",
  },
  journalsTypo: {
    fontWeight: "800",
    lineHeight: 32,
    letterSpacing: 0.2,
    fontSize: FontSize.size_8xl,
    left: 29,
    textAlign: "left",
    color: Color.black01,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  groupChildLayout: {
    height: 112,
    width: 319,
    left: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    borderRadius: Border.br_6xl,
    height: 112,
  },
  groupWrapperLayout: {
    height: 65,
    position: "absolute",
  },
  groupWrapperPosition: {
    left: 32,
    height: 65,
  },
  groupPosition: {
    top: 24,
    left: 32,
  },
  textTypo: {
    lineHeight: 19,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    height: 18,
    letterSpacing: 0.1,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    top: 0,
    left: 0,
    position: "absolute",
  },
  soldTypo: {
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
  citationsTypo: {
    color: Color.gray_2900,
    lineHeight: 19,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0.1,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    top: 0,
    left: 0,
    position: "absolute",
  },
  oralHealthcarePosition: {
    color: Color.gray_3800,
    lineHeight: 20,
    top: 46,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 16,
    height: 65,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 28,
    left: 16,
  },
  citationsParentPosition: {
    left: 77,
    height: 65,
    top: 0,
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
  vaultChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
  },
  vaultItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
  },
  myVault: {
    fontSize: FontSize.size_9xl,
    letterSpacing: 0.3,
    lineHeight: 36,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    color: Color.black01,
    fontWeight: "700",
  },
  myVaultWrapper: {
    top: 58,
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
    height: 11,
    width: 24,
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
    left: 17,
    width: 340,
    overflow: "hidden",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  vault1: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.brandBlue,
    letterSpacing: 0.1,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  frameParent: {
    top: 747,
    left: 43,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleIcon: {
    top: 1,
    borderRadius: Border.br_md,
    width: 48,
    height: 48,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    left: 37,
    width: 18,
  },
  rectangleGroup: {
    top: 52,
    left: 290,
    width: 55,
    height: 49,
    position: "absolute",
  },
  journals: {
    top: 130,
  },
  collection: {
    top: 422,
  },
  groupChild2: {
    top: 7,
  },
  groupChild3: {
    top: 0,
  },
  groupWrapper: {
    width: 226,
  },
  vectorIcon: {
    height: "17.07%",
    width: "83.33%",
    top: "41.46%",
    right: "8.33%",
    bottom: "41.46%",
    left: "8.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  interfaceMoreHorizontal: {
    left: 278,
    width: 20,
  },
  rectangleContainer: {
    height: 119,
    top: 34,
    width: 319,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.gray_1400,
    width: 64,
    fontWeight: "700",
    fontSize: FontSize.nunitoSansBodySmallBold_size,
  },
  lineView: {
    top: 9,
    left: 74,
    borderStyle: "dashed",
    borderColor: "#97abc3",
    borderRadius: 0.001,
    borderTopWidth: 1,
    width: 246,
    height: 1,
    position: "absolute",
  },
  parent: {
    width: 319,
    left: 0,
  },
  groupContainer: {
    height: 153,
    width: 319,
  },
  groupChild4: {
    backgroundColor: Color.gray_3700,
    top: 0,
  },
  groupFrame: {
    width: 188,
  },
  rectangleParent1: {
    top: 34,
  },
  groupView: {
    height: 146,
    width: 319,
  },
  groupChild6: {
    backgroundColor: Color.beige_100,
    top: 0,
  },
  citations2: {
    width: 93,
  },
  oralHealthcare: {
    width: 215,
  },
  sold2: {
    color: Color.gray_2400,
    width: 138,
  },
  citationsContainer: {
    width: 215,
    top: 0,
    left: 0,
  },
  groupWrapper1: {
    top: 23,
    width: 215,
  },
  groupParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  vaultInner: {
    top: 181,
    height: 234,
    width: 319,
  },
  groupChild10: {
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
  lifescienceOfHumanity: {
    color: Color.gray_3600,
    lineHeight: 20,
    top: 46,
    width: 226,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 0,
    position: "absolute",
  },
  sold: {
    width: 133,
    color: Color.white3,
  },
  citationsParent1: {
    width: 226,
  },
  rectangleParent4: {
    width: 303,
  },
  citations1: {
    width: 83,
  },
  clinicalDrugTrial: {
    width: 188,
  },
  sold1: {
    width: 147,
    color: Color.black01,
    height: 25,
    lineHeight: 26,
    fontSize: FontSize.size_5xl,
    top: 18,
  },
  citationsParent2: {
    width: 188,
  },
  rectangleParent6: {
    width: 265,
  },
  citationsParent3: {
    width: 215,
  },
  rectangleParent8: {
    top: 27,
    width: 292,
  },
  framePressable: {
    top: 473,
    height: 256,
    width: 319,
  },
  vault: {
    backgroundColor: Color.white3,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Vault;

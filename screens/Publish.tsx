import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBox from "../components/SearchBox";
import CategoryButton from "../components/CategoryButton";
import CategoryButtonExt from "../components/CategoryButtonExt";
import BannerLarge from "../components/BannerLarge";
import BannerMedium from "../components/BannerMedium";
import AccountButtonExt from "../components/AccountButtonExt";
import BottomTabs from "../components/BottomTabs";
import { Margin, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Publish = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.publish}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout2]} />
        <View style={[styles.groupItem, styles.groupLayout2]} />
        <View style={[styles.groupInner, styles.groupLayout2]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <View
        style={[styles.rectangleGroup, styles.groupLayout, styles.groupLayout1]}
      >
        <View
          style={[styles.groupChild2, styles.groupLayout, styles.groupLayout1]}
        />
        <SearchBox searchDatabaseEditable />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.groupWrapper}>
          <View style={styles.frameWrapper}>
            <View style={styles.publishYourResearchParent}>
              <Text style={[styles.publishYourResearch, styles.topPicksTypo]}>
                Publish Your Research
              </Text>
              <Pressable
                style={[styles.frameContainer, styles.mt12]}
                onPress={() => navigation.navigate("false")}
              >
                <View style={styles.groupParent}>
                  <View style={styles.groupChild3Layout}>
                    <CategoryButton />
                    <TouchableHighlight
                      style={[styles.wrapper, styles.groupLayout]}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <View />
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={[styles.dentist, styles.dentistPosition]}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => {}}
                    >
                      <Text style={[styles.dentist1, styles.timeTypo]}>
                        Dentist
                      </Text>
                    </TouchableHighlight>
                    <View style={styles.dentist2}>
                      <View style={styles.group}>
                        <TouchableHighlight
                          style={styles.vector}
                          underlayColor="#fff"
                          activeOpacity={0.2}
                          onPress={() => {}}
                        >
                          <Image
                            style={[styles.icon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/vector77.png")}
                          />
                        </TouchableHighlight>
                        <Image
                          style={[styles.vectorIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/vector78.png")}
                        />
                        <Image
                          style={[styles.vectorIcon1, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/vector79.png")}
                        />
                        <Image
                          style={[styles.vectorIcon2, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/vector80.png")}
                        />
                        <Image
                          style={[styles.vectorIcon3, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/vector81.png")}
                        />
                        <Image
                          style={[styles.vectorIcon4, styles.iconLayout]}
                          resizeMode="cover"
                          source={require("../assets/vector82.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <TouchableHighlight
                    style={[styles.groupChild3Layout, styles.ml14]}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <>
                      <CategoryButtonExt />
                      <View />
                      <Text>MedTech</Text>
                      <Image
                        resizeMode="cover"
                        source={require("../assets/stethoscope.png")}
                      />
                    </>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[styles.groupChild3Layout, styles.ml14]}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <>
                      <CategoryButtonExt />
                      <View />
                      <Text>Biotech</Text>
                      <Image
                        resizeMode="cover"
                        source={require("../assets/allergiest.png")}
                      />
                    </>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[styles.groupChild3Layout, styles.ml14]}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <>
                      <CategoryButtonExt />
                      <View />
                      <Text>Drugs</Text>
                      <Image
                        resizeMode="cover"
                        source={require("../assets/pills.png")}
                      />
                    </>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[styles.groupChild3Layout, styles.ml14]}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <>
                      <CategoryButtonExt />
                      <View />
                      <Text>Genomics</Text>
                      <Image
                        resizeMode="cover"
                        source={require("../assets/nounfile4677702-2.png")}
                      />
                    </>
                  </TouchableHighlight>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <TouchableHighlight
          style={[styles.wrapper2, styles.mt30]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <>
            <BannerLarge />
            <Text>
              <Text>{`Get the Best `}</Text>
              <Text>{`Healthcare Content `}</Text>
            </Text>
            <Text>{`Get Upto 35% discount on your medical & healthcare content & writing needs`}</Text>
            <Image
              resizeMode="cover"
              source={require("../assets/imgbinphysicianhospitalmedicinedoctordentistdoctormvjez7xwhjkkxsq5wjjqfwnckremovebgpreview-1.png")}
            />
          </>
        </TouchableHighlight>
        <View style={styles.mt30}>
          <Text style={[styles.topPicks, styles.topPicksTypo]}>Top Picks</Text>
          <View style={[styles.groupContainer, styles.mt14]}>
            <TouchableHighlight
              style={styles.wrapper3}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ReadModeDownload")}
            >
              <>
                <BannerMedium />
                <View />
                <View>
                  <View>
                    <Text>Viewers Choice</Text>
                    <Text>Curewrite Journal</Text>
                    <Text>Dental Healthcare</Text>
                  </View>
                </View>
                <Image
                  resizeMode="cover"
                  source={require("../assets/interface--morehorizontal7.png")}
                />
                <Image
                  resizeMode="cover"
                  source={require("../assets/rectangle-12.png")}
                />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.wrapper4, styles.ml12]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ReadModeDownload1")}
            >
              <>
                <BannerMedium />
                <Image
                  resizeMode="cover"
                  source={require("../assets/rectangle-121.png")}
                />
                <View>
                  <Text>09:30</Text>
                  <Text>Depression</Text>
                  <Text>Dr. Mim Akhter</Text>
                </View>
                <Image
                  resizeMode="cover"
                  source={require("../assets/interface--morehorizontal8.png")}
                />
              </>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.publishInner}>
        <View>
          <Text style={[styles.hello, styles.helloTypo]}>👋 Hello!</Text>
          <Text
            style={[styles.drJohnDoe, styles.mt7, styles.helloTypo]}
          >{`Dr. John Doe         `}</Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.wrapper5}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <>
          <AccountButtonExt rectangle9={require("../assets/rectangle-9.png")} />
          <Image
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </>
      </TouchableHighlight>
      <View style={[styles.barsstatusonLight, styles.dentistPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap14.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi14.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection14.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <BottomTabs
        onFrameTouchableHighlightPress={() => {}}
        essentialsHome={require("../assets/essentials--home4.png")}
        homeColor="#1c6ba4"
        onFrameTouchableHighlightPress1={() =>
          navigation.navigate("NetworkPaper")
        }
        frame={require("../assets/frame7.png")}
        networkColor="#7b8d9e"
        onFrameTouchableHighlightPress2={() => navigation.navigate("Database")}
        onFrameTouchableHighlightPress3={() => navigation.navigate("Vault")}
        report={require("../assets/report.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml14: {
    marginLeft: Margin.m_md,
  },
  mt12: {
    marginTop: Margin.m_sm,
  },
  ml12: {
    marginLeft: Margin.m_sm,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  mt30: {
    marginTop: Margin.m_5xl,
  },
  mt7: {
    marginTop: Margin.m_3xs,
  },
  groupLayout2: {
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
    height: 56,
    position: "absolute",
  },
  groupLayout1: {
    width: 319,
    height: 56,
  },
  basicsSearchLayout: {
    width: 20,
    height: 20,
  },
  basicsSearchParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  topPicksTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 23,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  groupChild3Layout: {
    width: 69,
    height: 95,
  },
  dentistPosition: {
    left: 17,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  helloTypo: {
    letterSpacing: 0.3,
    textAlign: "left",
    color: Color.gray_2400,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
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
    borderRadius: Border.br_md,
    backgroundColor: Color.gray_300,
    top: 0,
    left: 0,
  },
  rectangleGroup: {
    top: 143,
    left: 28,
  },
  publishYourResearch: {
    color: Color.gray_2400,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 23,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xl,
  },
  wrapper: {
    top: 7,
    left: 7,
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_2600,
    width: 56,
  },
  dentist1: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.brandBlue,
    fontWeight: "600",
  },
  dentist: {
    top: 72,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "-0.45%",
    top: "15.32%",
    right: "16.25%",
    bottom: "-0.43%",
    width: "84.2%",
    height: "85.12%",
    position: "absolute",
  },
  vectorIcon: {
    height: "12%",
    width: "8.47%",
    top: "43.94%",
    right: "81.34%",
    bottom: "44.06%",
    left: "10.19%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "16.68%",
    width: "16.79%",
    top: "24.56%",
    right: "75.52%",
    bottom: "58.76%",
    left: "7.69%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "14.83%",
    width: "5.55%",
    top: "-0.43%",
    right: "23.19%",
    bottom: "85.61%",
    left: "71.26%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "5.31%",
    width: "16.13%",
    top: "22.03%",
    right: "-0.45%",
    bottom: "72.66%",
    left: "84.33%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "12.68%",
    width: "13.23%",
    top: "5.87%",
    right: "6.28%",
    bottom: "81.45%",
    left: "80.48%",
    position: "absolute",
  },
  group: {
    height: "72%",
    width: "68.97%",
    top: "14.06%",
    right: "15.4%",
    bottom: "13.94%",
    left: "15.62%",
    position: "absolute",
  },
  dentist2: {
    top: 19,
    left: 19,
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameContainer: {
    height: 95,
    width: 320,
  },
  publishYourResearchParent: {
    width: 320,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameWrapper: {
    width: 320,
    height: 130,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupWrapper: {
    width: 577,
    height: 130,
  },
  wrapper2: {
    height: 148,
    width: 320,
  },
  topPicks: {
    color: Color.black01,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 23,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xl,
  },
  wrapper3: {
    width: 282,
    height: 121,
  },
  wrapper4: {
    width: 313,
    height: 121,
  },
  groupContainer: {
    width: 317,
    flexDirection: "row",
  },
  frameParent: {
    top: 222,
    left: 28,
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_2xl,
    lineHeight: 18,
    fontWeight: "600",
  },
  drJohnDoe: {
    fontSize: FontSize.size_9xl,
    lineHeight: 36,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  publishInner: {
    top: 53,
    flexDirection: "row",
    left: 28,
    position: "absolute",
  },
  wrapper5: {
    top: 59,
    left: 298,
    width: 55,
    height: 49,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: Border.br_7xs,
    borderColor: "rgba(153, 153, 153, 0.8)",
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
    backgroundColor: Color.gray_3300,
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
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "900",
    color: Color.gray_3300,
    width: 54,
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
    top: 14,
    width: 340,
    height: 19,
    overflow: "hidden",
  },
  publish: {
    backgroundColor: Color.white3,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Publish;

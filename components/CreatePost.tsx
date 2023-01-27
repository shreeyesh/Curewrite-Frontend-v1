import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import CategorySlider from "../components/CategorySlider";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

type CreatePostType = {
  onClose?: () => void;
};

const CreatePost = ({ onClose }: CreatePostType) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const [frameTextInput, setFrameTextInput] = useState();
  const [frameTextInput1, setFrameTextInput1] = useState();

  return (
    <View style={styles.createPost}>
      <View style={[styles.rectangleParent, styles.createPosition]}>
        <View style={[styles.groupChild, styles.groupLayout2]} />
        <View style={[styles.groupItem, styles.groupLayout2]} />
        <View style={[styles.groupInner, styles.groupLayout2]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Image
        style={[styles.createPostChild, styles.createPosition]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.createPostItem, styles.createPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.networkWrapper, styles.frameParent2Position]}>
        <Text style={[styles.network, styles.networkTypo]}>Network</Text>
      </View>
      <View style={[styles.frameParent, styles.badgeFlexBox1]}>
        <View style={styles.badgeFlexBox}>
          <Image
            style={[styles.essentialsHome, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.home, styles.mt8, styles.homeTypo]}>Home</Text>
        </View>
        <View style={[styles.badgeFlexBox, styles.ml42]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          />
          <Text style={[styles.network1, styles.mt8, styles.homeTypo]}>
            Network
          </Text>
        </View>
        <View style={[styles.badgeFlexBox, styles.ml42]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/report.png")}
          />
          <Text style={[styles.home, styles.mt8, styles.homeTypo]}>
            Database
          </Text>
        </View>
        <View style={[styles.badgeFlexBox, styles.ml42]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
          <Text style={[styles.home, styles.mt8, styles.homeTypo]}>Vault</Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <>
          <Image
            resizeMode="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
        </>
      </TouchableHighlight>
      <View style={[styles.createPostInner, styles.groupChild2Layout]} />
      <View style={[styles.frameView, styles.groupLayout1]}>
        <View style={[styles.groupParent, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View
                  style={[
                    styles.groupChild2,
                    styles.groupLayout1,
                    styles.groupChild2Layout,
                  ]}
                />
                <Text
                  style={styles.studyOfModern}
                >{`Study of Modern business management & Healthcare`}</Text>
                <Image
                  style={[styles.rectangleIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-8.png")}
                />
                <Image
                  style={[styles.archiveAddIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd.png")}
                />
                <Image
                  style={[styles.arrowUpIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd.png")}
                />
                <Image
                  style={[styles.arrowDownIcon, styles.arrowDownIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd.png")}
                />
                <Text style={[styles.k, styles.kTypo]}>15.3k</Text>
                <View style={styles.messageParent}>
                  <Image
                    style={[styles.messageIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/message.png")}
                  />
                  <Text style={[styles.text, styles.kTypo]}>1000</Text>
                </View>
                <View
                  style={[styles.articlePostWrapper, styles.wrapperSpaceBlock]}
                >
                  <Text style={styles.articlePost}>Article Post</Text>
                </View>
                <Image
                  style={[
                    styles.akarIconsshareBox,
                    styles.arrowDownIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd.png")}
                />
                <View style={[styles.groupChildLayout, styles.childBg]} />
              </View>
              <View style={styles.groupView}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-2.png")}
                />
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require("../assets/vector5.png")}
                />
                <Text style={[styles.s, styles.sTypo]}>S</Text>
                <Text style={styles.sunnyFernandes}>Sunny Fernandes</Text>
                <Text style={styles.hoursAgo}>21 hours ago</Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View
                  style={[
                    styles.groupChild2,
                    styles.groupLayout1,
                    styles.groupChild2Layout,
                  ]}
                />
                <Text style={styles.studyOfModern}>
                  Experimental Model of Diseases in Dental Healthcare
                </Text>
                <Image
                  style={[styles.archiveAddIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd4.png")}
                />
                <Image
                  style={[styles.arrowUpIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/arrowup4.png")}
                />
                <Image
                  style={[styles.arrowDownIcon, styles.arrowDownIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/arrowdown4.png")}
                />
                <Text style={[styles.k, styles.kTypo]}>56.9k</Text>
                <View style={styles.messageParent}>
                  <Image
                    style={[styles.messageIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/message1.png")}
                  />
                  <Text style={[styles.text, styles.kTypo]}>4682</Text>
                </View>
                <View
                  style={[
                    styles.rectangleParentLayout,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={styles.articlePost}>Curewrite</Text>
                </View>
                <Image
                  style={[
                    styles.akarIconsshareBox,
                    styles.arrowDownIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/akariconssharebox3.png")}
                />
                <View style={styles.childBg} />
              </View>
              <View style={styles.groupView}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-21.png")}
                />
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require("../assets/ellipse-12.png")}
                />
                <Text style={[styles.m, styles.sTypo]}>M</Text>
                <Text style={styles.sunnyFernandes}>Dr. Min Akhter</Text>
                <Text style={styles.hoursAgo}>15 hours ago</Text>
              </View>
            </View>
            <View style={[styles.paperWrapper, styles.paperLayout]}>
              <Text style={styles.articlePost}>Paper</Text>
            </View>
            <Image
              style={[styles.image5Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/image5.png")}
            />
          </View>
          <View style={[styles.frameParent1, styles.groupLayout]}>
            <View style={[styles.paperContainer, styles.paperLayout]}>
              <Text style={styles.articlePost}>Paper</Text>
            </View>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View
                  style={[
                    styles.groupChild2,
                    styles.groupLayout1,
                    styles.groupChild2Layout,
                  ]}
                />
                <Text style={styles.studyOfModern}>
                  Diet plan affect on Immune system of Human beings
                </Text>
                <Image
                  style={[styles.archiveAddIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd1.png")}
                />
                <Image
                  style={[styles.arrowUpIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd1.png")}
                />
                <Image
                  style={[styles.arrowDownIcon, styles.arrowDownIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd1.png")}
                />
                <Text style={[styles.k, styles.kTypo]}>26.9k</Text>
                <View style={styles.messageParent}>
                  <Image
                    style={[styles.messageIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/message2.png")}
                  />
                  <Text style={[styles.text, styles.kTypo]}>500</Text>
                </View>
                <View style={[styles.aimmsWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={styles.articlePost}>AIMMS</Text>
                </View>
                <Image
                  style={[
                    styles.akarIconsshareBox,
                    styles.arrowDownIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/archiveadd1.png")}
                />
                <View style={[styles.groupChild9Bg, styles.groupChildLayout]} />
              </View>
              <View style={styles.groupView}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-22.png")}
                />
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require("../assets/ellipse-13.png")}
                />
                <Text style={[styles.m, styles.sTypo]}>M</Text>
                <Text style={styles.sunnyFernandes}>Dr. Mathew Hayden</Text>
                <Text style={styles.hoursAgo}>21 hours ago</Text>
              </View>
            </View>
            <Image
              style={[styles.image6Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/image-6.png")}
            />
          </View>
        </View>
      </View>
      <CategorySlider rectangle73Collapsable />
      <View style={[styles.createPostChild1, styles.childBg]} />
      <TouchableHighlight
        style={[styles.badge, styles.badgeFlexBox, styles.badgeFlexBox1]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("NetworkPaymentMethod")}
      >
        <Text style={styles.labelText}>Submit</Text>
      </TouchableHighlight>
      <Pressable style={styles.upload} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/upload.png")}
        />
      </Pressable>
      <View style={[styles.frameParent2, styles.frameParent2Position]}>
        <View>
          <Text style={[styles.category, styles.networkTypo]}>Category</Text>
          <View style={[styles.groupParent6, styles.mt30]}>
            <View
              style={[styles.rectangleParent2, styles.rectangleParentLayout]}
            >
              <TouchableHighlight
                style={[styles.container, styles.containerLayout]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.toggleDrawer()}
              >
                <View />
              </TouchableHighlight>
              <Image
                style={[styles.nounPill126911Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/nounpill12691-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent3, styles.rectangleParentLayout]}
            >
              <TouchableHighlight
                style={[styles.container, styles.containerLayout]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.toggleDrawer()}
              >
                <View />
              </TouchableHighlight>
              <Image
                style={[
                  styles.nounMedicalTest29727121Icon,
                  styles.nounIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/nounmedicaltest2972712-1.png")}
              />
            </View>
            <View style={styles.rectangleParent4}>
              <View style={[styles.groupChild12, styles.childShadowBox]} />
              <Image
                style={[styles.doctorIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/doctor-icon.png")}
              />
              <Text
                style={[styles.article, styles.videoTypo, styles.videoPosition]}
              >
                Article
              </Text>
              <Text
                style={[styles.journal, styles.videoTypo, styles.videoPosition]}
              >
                Journal
              </Text>
              <Text
                style={[styles.video, styles.videoTypo, styles.videoPosition]}
              >
                Video
              </Text>
            </View>
            <TouchableHighlight
              style={[
                styles.rectangleTouchablehighlight,
                styles.containerLayout,
              ]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.toggleDrawer()}
            >
              <View />
            </TouchableHighlight>
            <Image
              style={[styles.nounCorona33996851Icon, styles.nounIconPosition]}
              resizeMode="cover"
              source={require("../assets/nouncorona3399685-1.png")}
            />
            <Text style={[styles.photo, styles.videoTypo]}>Photo</Text>
          </View>
        </View>
        <View style={styles.mt10} />
      </View>
      <RNKTextInput
        style={[styles.frameRnktextinput, styles.createPostChild2Border]}
        placeholder="Description about content"
        value={frameTextInput}
        onChangeText={setFrameTextInput}
        placeholderTextColor="rgba(11, 20, 38, 0.6)"
        textStyle={styles.frameTextInputText}
      />
      <RNKTextInput
        style={[
          styles.createPostChild2,
          styles.createPostChild2Border,
          styles.childShadowBox,
        ]}
        placeholder="Upload content to preview"
        value={frameTextInput1}
        onChangeText={setFrameTextInput1}
        placeholderTextColor="rgba(11, 20, 38, 0.6)"
        textStyle={styles.frameTextInput1Text}
      />
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
  mt30: {
    marginTop: Margin.m_5xl,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  frameTextInputText: {
    color: "rgba(11, 20, 38, 0.6)",
  },
  frameTextInput1Text: {
    color: "rgba(11, 20, 38, 0.6)",
  },
  createPosition: {
    display: "none",
    position: "absolute",
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
  frameParent2Position: {
    left: 28,
    position: "absolute",
  },
  networkTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  badgeFlexBox1: {
    flexDirection: "row",
    position: "absolute",
  },
  frameIconLayout: {
    width: 24,
    height: 24,
  },
  homeTypo: {
    lineHeight: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  groupChild2Layout: {
    height: 8,
    left: 0,
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
  iconLayout2: {
    height: 303,
    width: 357,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 20,
    height: 24,
    position: "absolute",
  },
  arrowDownIconPosition: {
    top: 408,
    width: 20,
    height: 24,
    position: "absolute",
  },
  kTypo: {
    color: Color.gray_1800,
    fontWeight: "900",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_xl,
    top: 64,
    backgroundColor: Color.brandBlue,
    left: 13,
    flexDirection: "row",
  },
  childBg: {
    backgroundColor: Color.brandBlue,
    position: "absolute",
  },
  sTypo: {
    fontSize: FontSize.size_2xl,
    top: 8,
    color: Color.white3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    position: "absolute",
  },
  paperLayout: {
    width: 48,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    backgroundColor: Color.brandBlue,
    borderRadius: Border.br_xl,
    top: 112,
    flexDirection: "row",
    position: "absolute",
  },
  groupChildLayout: {
    height: 9,
    width: 7,
    left: 306,
    top: 416,
  },
  groupChild9Bg: {
    backgroundColor: Color.white3,
    position: "absolute",
  },
  badgeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleParentLayout: {
    width: 71,
    position: "absolute",
  },
  containerLayout: {
    backgroundColor: Color.gray_700,
    borderRadius: Border.br_lg,
    width: 71,
    height: 71,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 41,
    width: 41,
    position: "absolute",
    overflow: "hidden",
  },
  nounIconPosition: {
    top: 15,
    height: 41,
    width: 41,
    position: "absolute",
    overflow: "hidden",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white3,
  },
  videoTypo: {
    width: 43,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0.1,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    position: "absolute",
  },
  videoPosition: {
    top: 50,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
  },
  createPostChild2Border: {
    width: 335,
    borderBottomWidth: 1,
    borderColor: "rgba(24, 115, 185, 0.8)",
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    position: "absolute",
    overflow: "hidden",
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
    left: 0,
    width: 375,
  },
  createPostChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
  },
  createPostItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
  },
  network: {
    fontSize: FontSize.size_9xl,
    letterSpacing: 0.3,
    lineHeight: 36,
    color: "rgba(14, 16, 18, 0.5)",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  networkWrapper: {
    top: 58,
  },
  essentialsHome: {
    height: 24,
  },
  home: {
    color: Color.gray_1500,
  },
  frameIcon: {
    height: 24,
    overflow: "hidden",
  },
  network1: {
    color: Color.brandBlue,
  },
  frameParent: {
    top: 747,
    left: 29,
  },
  wrapper: {
    top: 52,
    left: 290,
    width: 55,
    height: 49,
    position: "absolute",
  },
  createPostInner: {
    backgroundColor: "rgba(242, 244, 245, 0.5)",
    top: 112,
    height: 8,
    position: "absolute",
    width: 375,
  },
  groupChild2: {
    top: 442,
    backgroundColor: Color.gray_400,
  },
  studyOfModern: {
    left: 14,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    color: Color.neutral900,
    width: 343,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 94,
  },
  archiveAddIcon: {
    left: 299,
    top: 409,
  },
  arrowUpIcon: {
    left: 18,
    top: 409,
  },
  arrowDownIcon: {
    left: 76,
  },
  k: {
    top: 412,
    left: 41,
    width: 35,
  },
  messageIcon: {
    top: 0,
    left: 0,
  },
  text: {
    top: 3,
    left: 26,
    width: 33,
  },
  messageParent: {
    left: 145,
    width: 58,
    top: 409,
    height: 24,
    position: "absolute",
  },
  articlePost: {
    fontSize: FontSize.size_2xs,
    color: Color.white3,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  articlePostWrapper: {
    width: 83,
    position: "absolute",
  },
  akarIconsshareBox: {
    left: 324,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 48,
    height: 450,
    left: 0,
  },
  groupIcon: {
    top: 12,
    left: 302,
    width: 15,
    height: 4,
    position: "absolute",
  },
  ellipseIcon: {
    width: 36,
    height: 36,
    top: 0,
    left: 0,
    position: "absolute",
  },
  s: {
    left: 12,
  },
  sunnyFernandes: {
    top: 1,
    fontSize: FontSize.size_xl,
    color: Color.black,
    left: 42,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  hoursAgo: {
    top: 19,
    fontSize: FontSize.size_base,
    color: Color.gray_1600,
    left: 42,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  groupView: {
    width: 317,
    height: 37,
    left: 13,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 0,
  },
  groupWrapper: {
    top: 1078,
  },
  m: {
    left: 11,
  },
  paperWrapper: {
    left: 86,
  },
  image5Icon: {
    top: 141,
  },
  paperContainer: {
    left: 75,
  },
  aimmsWrapper: {
    width: 57,
    position: "absolute",
  },
  image6Icon: {
    top: 144,
  },
  frameParent1: {
    top: 539,
  },
  groupParent: {
    height: 1576,
    top: 0,
    left: 0,
  },
  frameView: {
    top: 202,
    left: 9,
    height: 522,
  },
  createPostChild1: {
    top: 159,
    left: 168,
    borderRadius: Border.br_4xs,
    width: 40,
    height: 5,
  },
  labelText: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0.4,
    lineHeight: 18,
    textAlign: "center",
    color: Color.white3,
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  badge: {
    height: "6.9%",
    width: "85.07%",
    top: "88.79%",
    right: "6.67%",
    bottom: "4.31%",
    left: "8.27%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_2600,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  upload: {
    left: 166,
    top: 647,
    width: 50,
    height: 50,
    position: "absolute",
  },
  category: {
    fontSize: FontSize.size_8xl,
    letterSpacing: 0.2,
    lineHeight: 32,
    fontWeight: "800",
    color: Color.gray_2400,
  },
  container: {
    left: 0,
  },
  nounPill126911Icon: {
    top: 9,
    left: 11,
  },
  rectangleParent2: {
    left: 83,
    height: 71,
    top: 0,
  },
  nounMedicalTest29727121Icon: {
    left: 15,
  },
  rectangleParent3: {
    left: 165,
    height: 71,
    top: 0,
  },
  groupChild12: {
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 71,
    height: 71,
    top: 0,
    left: 0,
    position: "absolute",
  },
  doctorIcon: {
    top: 6,
    left: 15,
  },
  article: {
    left: 15,
  },
  journal: {
    left: 181,
  },
  video: {
    left: 97,
  },
  rectangleParent4: {
    width: 224,
    height: 71,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleTouchablehighlight: {
    left: 248,
  },
  nounCorona33996851Icon: {
    left: 263,
  },
  photo: {
    top: 49,
    left: 262,
  },
  groupParent6: {
    width: 319,
    height: 72,
  },
  frameParent2: {
    top: 195,
    height: 149,
  },
  frameRnktextinput: {
    top: 369,
    left: 22,
    backgroundColor: Color.gray_200,
  },
  createPostChild2: {
    top: 467,
    left: 23,
    minWidth: 335,
    minHeight: 162,
    maxWidth: 335,
    maxHeight: 162,
  },
  createPost: {
    backgroundColor: Color.gray_800,
    height: 812,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 375,
  },
});

export default CreatePost;

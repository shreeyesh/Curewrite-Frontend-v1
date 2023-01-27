import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableHighlight,
  Text,
  SafeAreaView,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Margin, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NetworkMessages = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.networkMessages}>
      <ImageBackground
        style={styles.networkMessagesChild}
        resizeMode="cover"
        source={require("../assets/rectangle68.png")}
      />
      <View style={styles.networkMessagesItem} />
      <View
        style={[styles.networkMessagesInner, styles.rectangleGroupPosition]}
      />
      <Image
        style={[styles.baseIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/base4.png")}
      />
      <TextInput
        style={styles.worldH}
        placeholder="Write here.."
        keyboardType="default"
        multiline
        secureTextEntry
        placeholderTextColor="rgba(25, 52, 105, 0.6)"
      />
      <View style={styles.baseParent}>
        <TouchableHighlight
          style={[styles.base, styles.iconLayout, styles.basePosition1]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/base5.png")}
          />
        </TouchableHighlight>
        <Image
          style={[styles.send1Icon, styles.link1Layout]}
          resizeMode="cover"
          source={require("../assets/send-1.png")}
        />
      </View>
      <Pressable
        style={[styles.link1, styles.link1Layout]}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/link-1.png")}
        />
      </Pressable>
      <View style={[styles.baseGroup, styles.basePosition]}>
        <TouchableHighlight
          style={[styles.base1, styles.basePosition1]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NetworkProfiles2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/base6.png")}
          />
        </TouchableHighlight>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.sureIAm}>
          Sure I am suffering from skin allergies.
        </Text>
      </View>
      <View style={[styles.baseContainer, styles.basePosition]}>
        <TouchableHighlight
          style={[styles.base2, styles.basePosition1]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NetworkProfiles2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/base6.png")}
          />
        </TouchableHighlight>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={styles.yesHereIts}>Yes Here it's</Text>
      </View>
      <View style={styles.frameView}>
        <SafeAreaView style={styles.groupParent}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Pressable
              style={[styles.hiShahCanContainer, styles.canPosition]}
              onPress={() => {}}
            >
              <Text style={styles.canTypo}>
                Hi shah, Can You tell me your problem?
              </Text>
            </Pressable>
          </View>
          <Text style={[styles.thu0910Am, styles.mt4, styles.thu0910AmTypo]}>
            Thu 09:10 AM
          </Text>
        </SafeAreaView>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.groupLayout, styles.rectangleGroupPosition]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.canYouSend, styles.canTypo, styles.canPosition]}>
            Can You Send a Photo of your skin?
          </Text>
        </View>
        <Text style={[styles.thu0915Am, styles.thu0910AmTypo]}>
          Thu 09:15 AM
        </Text>
      </View>
      <Pressable
        style={[styles.frameParent, styles.frameParentFlexBox]}
        onPress={() => navigation.navigate("NetworkDoctorSearch")}
      >
        <View style={styles.frameParentFlexBox}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-116.png")}
          />
          <View style={styles.ml10}>
            <Text style={[styles.drMimAkhter, styles.activeNowTypo]}>
              Dr. Mim Akhter
            </Text>
            <View style={[styles.frameParentFlexBox, styles.mt6]}>
              <Text style={[styles.activeNow, styles.activeNowTypo]}>
                Active Now
              </Text>
              <Image
                style={[styles.frameItem, styles.ml4]}
                resizeMode="cover"
                source={require("../assets/ellipse-8.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.link1Layout, styles.ml157]}>
          <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
            <Image
              style={[styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector75.png")}
            />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_6xs,
  },
  ml4: {
    marginLeft: Margin.m_6xs,
  },
  mt6: {
    marginTop: Margin.m_4xs,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  ml157: {
    marginLeft: 157,
  },
  rectangleGroupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  basePosition1: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  link1Layout: {
    height: 24,
    width: 24,
  },
  basePosition: {
    left: "5.87%",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.beige_100,
    left: 55,
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    position: "absolute",
  },
  groupLayout: {
    height: 85,
    width: 239,
  },
  canPosition: {
    top: 18,
    position: "absolute",
  },
  thu0910AmTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    lineHeight: 24,
  },
  canTypo: {
    width: 178,
    color: Color.white3,
    height: 50,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  activeNowTypo: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 16,
    textAlign: "left",
  },
  networkMessagesChild: {
    top: 633,
    left: 77,
    borderRadius: Border.br_2xl,
    width: 196,
    height: 166,
    position: "absolute",
  },
  networkMessagesItem: {
    top: 719,
    left: 48,
    width: 255,
    height: 80,
    position: "absolute",
    backgroundColor: Color.gray_100,
  },
  networkMessagesInner: {
    borderBottomRightRadius: Border.br_2xl,
    borderBottomLeftRadius: Border.br_2xl,
    backgroundColor: Color.white3,
    shadowColor: "rgba(107, 134, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 375,
    height: 135,
  },
  baseIcon: {
    height: "8%",
    width: "89.6%",
    top: "87.75%",
    right: "5.2%",
    bottom: "4.25%",
    left: "5.2%",
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  worldH: {
    marginTop: 330,
    width: "28.27%",
    top: "50%",
    left: "21.6%",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_2xs,
  },
  base: {
    right: "0%",
    bottom: "0%",
  },
  send1Icon: {
    top: 11,
    left: 12,
    position: "absolute",
    overflow: "hidden",
  },
  baseParent: {
    height: "5.54%",
    width: "12.8%",
    top: "89.04%",
    right: "6.4%",
    bottom: "5.42%",
    left: "80.8%",
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  link1: {
    left: 34,
    top: 733,
    position: "absolute",
  },
  base1: {
    right: "85.66%",
    bottom: "52.38%",
    width: "14.34%",
    height: "47.62%",
  },
  groupChild: {
    top: 84,
    width: 224,
    height: 84,
  },
  sureIAm: {
    width: 171,
    height: 50,
    textAlign: "left",
    color: Color.gray_2300,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    left: 81,
    top: 17,
    position: "absolute",
  },
  baseGroup: {
    height: "10.34%",
    width: "74.4%",
    top: "37.07%",
    right: "19.73%",
    bottom: "52.59%",
  },
  base2: {
    right: "78.72%",
    bottom: "33.33%",
    width: "21.28%",
    height: "66.67%",
  },
  groupItem: {
    top: 60,
    width: 133,
    height: 60,
  },
  yesHereIts: {
    width: 86,
    height: 23,
    textAlign: "left",
    color: Color.gray_2300,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    left: 81,
    top: 17,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    position: "absolute",
  },
  baseContainer: {
    height: "7.39%",
    width: "50.13%",
    top: "68.23%",
    right: "44%",
    bottom: "24.38%",
  },
  groupInner: {
    left: 239,
    backgroundColor: Color.gray_2600,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    height: 85,
    top: 0,
    position: "absolute",
  },
  hiShahCanContainer: {
    left: 21,
  },
  thu0910Am: {
    color: "rgba(15, 30, 81, 0.6)",
  },
  groupParent: {
    top: 10,
    left: 10,
    flex: null,
    position: "absolute",
  },
  frameView: {
    top: 159,
    left: 106,
    width: 259,
    height: 133,
    position: "absolute",
  },
  canYouSend: {
    left: 28,
  },
  thu0915Am: {
    top: 90,
    left: 6,
    color: "rgba(25, 52, 105, 0.6)",
    position: "absolute",
  },
  groupContainer: {
    top: 416,
    left: 116,
    height: 114,
    width: 239,
    position: "absolute",
  },
  frameChild: {
    width: 44,
    height: 44,
    borderRadius: Border.br_2xs,
  },
  drMimAkhter: {
    fontWeight: "700",
    color: Color.black01,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    lineHeight: 16,
  },
  activeNow: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    color: Color.black02,
  },
  frameItem: {
    width: 7,
    height: 7,
  },
  vector: {
    left: "7.05%",
    top: "7.05%",
    right: "7.05%",
    bottom: "7.05%",
    width: "85.89%",
    height: "85.89%",
    position: "absolute",
  },
  frameParent: {
    top: 58,
    left: 20,
    position: "absolute",
  },
  networkMessages: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.gray_100,
  },
});

export default NetworkMessages;

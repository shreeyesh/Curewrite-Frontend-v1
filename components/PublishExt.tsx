import * as React from "react";
import { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageBackground,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

type PublishExtType = {
  onClose?: () => void;
};

const PublishExt = ({ onClose }: PublishExtType) => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState("");
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "Dentist", label: "Dentist" },
    { value: "MedTech", label: "MedTech" },
    { value: "Biotech", label: "Biotech" },
    { value: "Drugs", label: "Drugs" },
  ]);
  const navigation = useNavigation();

  const onUploadIconClick = useCallback(() => {
    Alert.alert("Upload images", "");
  }, []);

  return (
    <View style={styles.publishext}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <View style={[styles.groupInner, styles.groupLayout1]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <View style={styles.interfaceAdjustHorizontalParent}>
          <Image
            style={[
              styles.interfaceAdjustHorizontal,
              styles.basicsSearchLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/interface--adjusthorizontalalt1.png")}
          />
          <View
            style={[
              styles.basicsSearchParent,
              styles.parentFlexBox,
              styles.parentFlexBox1,
            ]}
          >
            <Image
              style={styles.basicsSearchLayout}
              resizeMode="cover"
              source={require("../assets/basics--search.png")}
            />
            <Text style={[styles.searchDatabase, styles.ml10]}>
              Search Database..
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.publishextInner, styles.parentFlexBox1]}>
        <View>
          <Text style={[styles.hello, styles.helloTypo]}>👋 Hello!</Text>
          <Text
            style={[styles.drJohnDoe, styles.mt7, styles.helloTypo]}
          >{`Dr. John Doe         `}</Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <>
          <ImageBackground
            resizeMode="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            resizeMode="cover"
            source={require("../assets/ellipse-113.png")}
          />
        </>
      </TouchableHighlight>
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
      <View style={[styles.frameParent, styles.parentFlexBox1]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.frameIconLayout}
            resizeMode="cover"
            source={require("../assets/essentials--home4.png")}
          />
          <Text style={[styles.home, styles.mt8, styles.homeTypo]}>Home</Text>
        </View>
        <View style={[styles.parentFlexBox, styles.ml42]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame7.png")}
          />
          <Text style={[styles.network, styles.mt8, styles.homeTypo]}>
            Network
          </Text>
        </View>
        <View style={[styles.parentFlexBox, styles.ml42]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/report.png")}
          />
          <Text style={[styles.network, styles.mt8, styles.homeTypo]}>
            Database
          </Text>
        </View>
        <View style={[styles.parentFlexBox, styles.ml42]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame8.png")}
          />
          <Text style={[styles.network, styles.mt8, styles.homeTypo]}>
            Vault
          </Text>
        </View>
      </View>
      <View style={styles.publishextChild} />
      <View style={[styles.frameView, styles.framePosition]}>
        <View
          style={[styles.emailWrapper, styles.emailLayout, styles.emailBorder]}
        >
          <View style={[styles.email, styles.framePosition]}>
            <TextInput
              placeholder="Paper Title"
              keyboardType="default"
              multiline
              placeholderTextColor="rgba(11, 20, 38, 0.6)"
            />
          </View>
        </View>
        <View style={[styles.container, styles.mt20, styles.emailLayout]}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={frameDropdownOpen}
            setOpen={setFrameDropdownOpen}
            value={frameDropdownValue}
            setValue={setFrameDropdownValue}
            placeholder="Select Paper Category"
            items={frameDropdownItems}
            labelStyle={styles.frameDropdownValue}
            dropDownContainerStyle={styles.frameDropdowndropDownContainer}
          />
        </View>
        <View
          style={[
            styles.emailWrapper,
            styles.mt20,
            styles.emailLayout,
            styles.emailBorder,
          ]}
        >
          <View
            style={[
              styles.password,
              styles.framePosition,
              styles.parentFlexBox,
            ]}
          />
          <View style={[styles.email, styles.framePosition]}>
            <TextInput
              placeholder="Expected  Price"
              keyboardType="number-pad"
              placeholderTextColor="rgba(11, 20, 38, 0.6)"
            />
          </View>
          <TouchableHighlight
            style={styles.touchablehighlight}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.text, styles.textTypo]}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.touchablehighlight1}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.framePosition]}>
        <View
          style={[styles.emailWrapper, styles.emailLayout, styles.emailBorder]}
        >
          <View style={[styles.email, styles.framePosition]}>
            <TextInput
              placeholder="Journal Name"
              keyboardType="default"
              placeholderTextColor="rgba(11, 20, 38, 0.6)"
            />
          </View>
        </View>
        <View
          style={[
            styles.emailFrame,
            styles.mt20,
            styles.emailLayout,
            styles.emailBorder,
          ]}
        >
          <View style={[styles.email, styles.framePosition]}>
            <TextInput
              placeholder="Description about research"
              keyboardType="default"
              multiline
              placeholderTextColor="rgba(11, 20, 38, 0.6)"
            />
          </View>
        </View>
      </View>
      <Text style={styles.publishToJournal}>Publish to Journal</Text>
      <TouchableOpacity
        style={[styles.badge, styles.parentFlexBox, styles.parentFlexBox1]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PaymentMethodExt")}
      >
        <Text style={[styles.labelText, styles.timeTypo]}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.publishextItem} />
      <TouchableHighlight
        style={styles.upload}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onUploadIconClick}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/upload.png")}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: Margin.m_xs,
  },
  mt7: {
    marginTop: Margin.m_3xs,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml42: {
    marginLeft: Margin.m_6xl,
  },
  frameDropdownValue: {
    color: "rgba(11, 20, 38, 0.6)",
    fontSize: 14,
    fontFamily: "Poppins",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: "#f6f4f4",
    borderStyle: "solid",
    borderColor: "rgba(24, 115, 185, 0.8)",
    borderBottomWidth: 1,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  groupLayout1: {
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
    width: 319,
    position: "absolute",
  },
  basicsSearchLayout: {
    width: 20,
    height: 20,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox1: {
    flexDirection: "row",
    position: "absolute",
  },
  helloTypo: {
    color: Color.gray_3200,
    letterSpacing: 0.3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  homeTypo: {
    letterSpacing: 0.1,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  frameIconLayout: {
    height: 24,
    width: 24,
  },
  framePosition: {
    left: 20,
    position: "absolute",
  },
  emailLayout: {
    width: 335,
    borderRadius: Border.br_6xs,
    borderBottomWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  emailBorder: {
    borderColor: "rgba(24, 115, 185, 0.8)",
    backgroundColor: Color.gray_200,
    width: 335,
    borderRadius: Border.br_6xs,
  },
  textTypo: {
    fontFamily: FontFamily.poppins,
    lineHeight: 22,
    fontSize: FontSize.size_8xl,
    textAlign: "center",
    letterSpacing: 0,
    fontWeight: "700",
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
    left: 0,
    position: "absolute",
    width: 375,
  },
  groupChild2: {
    borderRadius: Border.br_md,
    backgroundColor: "rgba(238, 246, 252, 0.5)",
    top: 0,
    left: 0,
  },
  interfaceAdjustHorizontal: {
    left: 264,
    top: 0,
    position: "absolute",
  },
  searchDatabase: {
    color: "rgba(138, 160, 188, 0.5)",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
  },
  basicsSearchParent: {
    top: 0,
    left: 0,
  },
  interfaceAdjustHorizontalParent: {
    top: 18,
    left: 15,
    width: 284,
    height: 20,
    position: "absolute",
  },
  rectangleGroup: {
    left: 28,
    top: 143,
  },
  hello: {
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    lineHeight: 18,
  },
  drJohnDoe: {
    fontSize: FontSize.size_9xl,
    lineHeight: 36,
    fontWeight: "700",
  },
  publishextInner: {
    top: 53,
    left: 28,
  },
  wrapper: {
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
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
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
    backgroundColor: Color.gray_3300,
    width: 18,
    height: 7,
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
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    color: Color.gray_3300,
    width: 54,
    letterSpacing: 0,
    textAlign: "center",
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
  home: {
    color: Color.brandBlue,
  },
  frameIcon: {
    overflow: "hidden",
  },
  network: {
    color: Color.gray_1500,
  },
  frameParent: {
    top: 747,
    left: 43,
  },
  publishextChild: {
    borderTopLeftRadius: Border.br_7xl,
    borderTopRightRadius: Border.br_7xl,
    backgroundColor: Color.white3,
    height: 669,
    top: 143,
    left: 0,
    position: "absolute",
    width: 375,
  },
  email: {
    top: 14,
    alignItems: "center",
    left: 20,
    flexDirection: "row",
  },
  emailWrapper: {
    height: 50,
  },
  dropdownpicker: {
    borderBottomWidth: 1,
    borderColor: "rgba(24, 115, 185, 0.8)",
    backgroundColor: Color.gray_200,
    borderStyle: "solid",
  },
  container: {
    height: 50,
    width: 335,
    borderRadius: Border.br_6xs,
  },
  password: {
    top: 14,
  },
  text: {
    color: "rgba(13, 160, 28, 0.6)",
  },
  touchablehighlight: {
    left: 278,
    top: 14,
    position: "absolute",
  },
  text1: {
    color: "rgba(255, 0, 0, 0.6)",
  },
  touchablehighlight1: {
    left: 304,
    top: 14,
    position: "absolute",
  },
  frameView: {
    top: 266,
  },
  emailFrame: {
    height: 81,
  },
  frameParent1: {
    top: 482,
  },
  publishToJournal: {
    top: 199,
    letterSpacing: 0.2,
    lineHeight: 32,
    fontWeight: "800",
    color: Color.black01,
    fontSize: FontSize.size_8xl,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    left: 28,
    position: "absolute",
  },
  labelText: {
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    color: Color.white3,
    fontWeight: "700",
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0.4,
  },
  badge: {
    height: "6.9%",
    width: "85.07%",
    top: "89.53%",
    right: "7.47%",
    bottom: "3.57%",
    left: "7.47%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_2600,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
  },
  publishextItem: {
    top: 156,
    left: 168,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.brandBlue,
    width: 40,
    height: 5,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  upload: {
    left: 163,
    top: 653,
    width: 50,
    height: 50,
    position: "absolute",
  },
  publishext: {
    backgroundColor: Color.gray_800,
    height: 812,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 375,
  },
});

export default PublishExt;

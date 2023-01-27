import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontFamily, FontSize, Color } from "../GlobalStyles";

type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent = ({ style }: FrameComponentType) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, style]}>
      <Pressable
        style={styles.essentialsHomeParent}
        onPress={() => navigation.navigate("Publish")}
      >
        <View style={styles.essentialsHome}>
          <Image
            style={[
              styles.vectorIcon,
              styles.iconLayout,
              styles.vectorPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Text style={[styles.home, styles.mt8, styles.homeTypo]}>Home</Text>
      </Pressable>
      <View style={[styles.essentialsHomeParent, styles.ml42]}>
        <View style={styles.frame}>
          <TouchableHighlight
            style={[styles.vector, styles.vectorPosition]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkArticle")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </TouchableHighlight>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <Text style={[styles.network, styles.mt8, styles.homeTypo]}>
          Network
        </Text>
      </View>
      <Pressable
        style={[styles.essentialsHomeParent, styles.ml42]}
        onPress={() => navigation.navigate("Database")}
      >
        <Image
          style={styles.frame}
          resizeMode="cover"
          source={require("../assets/report.png")}
        />
        <Text style={[styles.home, styles.mt8, styles.homeTypo]}>Database</Text>
      </Pressable>
      <Pressable
        style={[styles.essentialsHomeParent, styles.ml42]}
        onPress={() => navigation.navigate("Vault")}
      >
        <Image
          style={styles.frame}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
        <Text style={[styles.home, styles.mt8, styles.homeTypo]}>Vault</Text>
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    right: "0%",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    lineHeight: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
  },
  vectorIconLayout: {
    height: "31.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon: {
    top: "0%",
    bottom: "0%",
    left: "0%",
  },
  essentialsHome: {
    height: 24,
    width: 24,
  },
  home: {
    color: Color.gray_1500,
  },
  essentialsHomeParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  vector: {
    left: "37.5%",
    top: "12.5%",
    width: "62.5%",
    height: "75%",
    bottom: "12.5%",
  },
  vectorIcon1: {
    width: "43.35%",
    top: "56.25%",
    right: "56.65%",
    bottom: "12.5%",
    left: "0%",
  },
  vectorIcon2: {
    width: "31.25%",
    top: "18.75%",
    right: "56.25%",
    bottom: "50%",
    left: "12.5%",
  },
  frame: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  network: {
    color: Color.brandBlue,
  },
  frameParent: {
    flexDirection: "row",
  },
});

export default FrameComponent;

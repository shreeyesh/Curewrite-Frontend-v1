import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AppStart = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.appstart}
      onPress={() => navigation.navigate("Profile")}
    >
      <View style={styles.barsstatusonLight}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  border: {
    top: 0,
    right: 2,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
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
    backgroundColor: Color.white3,
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
    left: 0,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    color: Color.white3,
    textAlign: "center",
    width: 54,
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
    top: 14,
    left: 17,
    width: 340,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  image3Icon: {
    top: 346,
    left: 54,
    width: 267,
    height: 119,
    position: "absolute",
  },
  image4Icon: {
    top: 714,
    left: 81,
    width: 226,
    height: 26,
    position: "absolute",
  },
  appstart: {
    backgroundColor: Color.gray_2600,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AppStart;

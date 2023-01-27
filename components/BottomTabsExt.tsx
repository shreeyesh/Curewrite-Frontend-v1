import * as React from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin } from "../GlobalStyles";

const BottomTabsExt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Publish")}
      >
        <>
          <Image
            resizeMode="cover"
            source={require("../assets/essentials--home6.jpg")}
          />
          <Text>Home</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.wrapper, styles.ml42]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("NetworkPaper")}
      >
        <>
          <Image resizeMode="cover" source={require("../assets/frame1.png")} />
          <Text>Network</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.wrapper, styles.ml42]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Database")}
      >
        <>
          <View>
            <View>
              <Image
                resizeMode="contain"
                source={require("../assets/report.png")}
              />
            </View>
          </View>
          <Text>Database</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.wrapper, styles.ml42]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Vault")}
      >
        <>
          <Image resizeMode="cover" source={require("../assets/frame8.png")} />
          <Text>Vault</Text>
        </>
      </TouchableHighlight>
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
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent: {
    top: 747,
    left: 43,
    flexDirection: "row",
    position: "absolute",
  },
});

export default BottomTabsExt;

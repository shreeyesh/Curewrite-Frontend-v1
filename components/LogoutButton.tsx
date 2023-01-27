import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.wrapper1}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={() => navigation.navigate("Profile")}
    >
      <>
        <Text>Log Out</Text>
        <Image resizeMode="cover" source={require("../assets/logout-1.png")} />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper1: {
    marginTop: 331,
    width: "28.53%",
    right: "35.73%",
    left: "35.73%",
    height: 28,
    top: "50%",
    position: "absolute",
  },
});

export default LogoutButton;

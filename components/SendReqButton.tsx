import * as React from "react";
import { useCallback } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Color, FontSize, Border, Padding } from "../GlobalStyles";

const SendReqButton = () => {
  const onBadgeClick = useCallback(() => {
    Alert.alert("Request Sent!", "");
  }, []);

  const onLabelTextClick = useCallback(() => {
    Alert.alert("Request Sent!", "");
  }, []);

  return (
    <TouchableHighlight
      style={[styles.badge, styles.badgeBorder]}
      underlayColor="#fff"
      activeOpacity={0.2}
      onPress={onBadgeClick}
    >
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onLabelTextClick}
      >
        <Text style={[styles.sendRequest, styles.networkTypo]}>
          Send Request
        </Text>
      </TouchableHighlight>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  sendRequest: {
    lineHeight: 18,
    color: Color.white3,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    letterSpacing: 0.4,
  },
  badge: {
    height: "6.9%",
    width: "85.07%",
    top: "88.67%",
    right: "7.47%",
    bottom: "4.43%",
    left: "7.47%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_2600,
    borderColor: "#000",
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default SendReqButton;

import * as React from "react";
import { StyleSheet, View } from "react-native";

type RecentListType = {
  rectangle13Focusable?: boolean;
};

const RecentList = ({ rectangle13Focusable }: RecentListType) => {
  return (
    <View
      style={[styles.groupChild3, styles.groupChildLayout2]}
      focusable={rectangle13Focusable}
    />
  );
};

const styles = StyleSheet.create({
  groupChild3: {
    shadowColor: "rgba(107, 134, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    top: 0,
  },
});

export default RecentList;

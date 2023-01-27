import * as React from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

type AccountButtonExtType = {
  rectangle9: ImageSourcePropType;
};

const AccountButtonExt = ({ rectangle9 }: AccountButtonExtType) => {
  return <Image resizeMode="cover" source={rectangle9} />;
};

const styles = StyleSheet.create({});

export default AccountButtonExt;

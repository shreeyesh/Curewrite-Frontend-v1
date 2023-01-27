import * as React from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

type UserProfileButtonType = {
  base?: ImageSourcePropType;
};

const UserProfileButton = ({ base }: UserProfileButtonType) => {
  return <Image resizeMode="cover" source={base} />;
};

const styles = StyleSheet.create({});

export default UserProfileButton;

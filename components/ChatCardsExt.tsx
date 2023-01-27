import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize } from "../GlobalStyles";

type ChatCardsExtType = {
  bio?: string;
  userName?: string;
  rating?: string;
  reviewCount?: string;
  rectangle11?: ImageSourcePropType;

  /** Style props */
  group117Top?: number | string;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ChatCardsExt = ({
  bio = "bio",
  userName = "userName",
  rating = "5",
  reviewCount,
  onGroupPressablePress,
  group117Top,
  rectangle11,
}: ChatCardsExtType) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", group117Top),
    };
  }, [group117Top]);

  return (
    <Pressable
      style={[
        styles.groupPressable,
        styles.groupLayout,
        styles.groupLayout1,
        groupPressableStyle,
      ]}
      onPress={onGroupPressablePress}
    >
      <Image
        style={[styles.groupChild5, styles.groupLayout]}
        resizeMode="cover"
        source={rectangle11}
      />
      <Text style={[styles.cardiologistInApolo, styles.reviewsTypo]}>
        {bio}
      </Text>
      <Text style={[styles.drJonSina, styles.doctorsTypo]}>{userName}</Text>
      <View style={[styles.groupContainer, styles.groupLayout2]}>
        <View style={[styles.reviewsParent, styles.groupLayout2]}>
          <Text style={[styles.reviews, styles.reviewsTypo]}>
            {reviewCount}
          </Text>
          <Text style={[styles.text, styles.doctorsTypo]}>{rating}</Text>
        </View>
        <Image
          style={[styles.basicsStar, styles.basicsLayout]}
          resizeMode="cover"
          source={require("../assets/basics--star.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChild5: {
    borderRadius: Border.br_5xl,
    width: 104,
    left: 0,
    top: 0,
  },
  cardiologistInApolo: {
    top: 44,
    left: 123,
  },
  drJonSina: {
    top: 9,
    fontSize: FontSize.size_7xl,
    lineHeight: 30,
    left: 123,
  },
  reviews: {
    top: 2,
    left: 29,
  },
  text: {
    fontSize: FontSize.size_2xl,
    lineHeight: 22,
    left: 0,
    top: 0,
  },
  reviewsParent: {
    left: 23,
    width: 109,
    top: 0,
  },
  basicsStar: {
    top: 3,
    left: 0,
  },
  groupContainer: {
    top: 75,
    width: 132,
    left: 123,
  },
  groupPressable: {
    top: 546,
  },
});

export default ChatCardsExt;

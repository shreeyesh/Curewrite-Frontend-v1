import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Pressable,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color } from "../GlobalStyles";

type PostCardType = {
  postTitle?: string;
  likes?: string;
  tags?: string;
  hoursAgo?: string;
  userName?: string;
  pfp?: string;
};

const PostCard = ({
  postTitle = "postTitle",
  likes,
  tags,
  hoursAgo,
  userName = "Dr Mathew Hayden",
  pfp,
}: PostCardType) => {
  const [archiveAddValue, setArchiveAddValue] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={[styles.groupView, styles.groupLayout]}>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <View
          style={[
            styles.groupChild2,
            styles.groupLayout1,
            styles.groupChild2Layout,
          ]}
        />
        <Text style={[styles.experimentalModelOf, styles.networkTypo]}>
          {postTitle}
        </Text>
        <View
          style={[
            styles.archiveAddIcon,
            styles.iconLayout1,
            styles.iconLayout2,
          ]}
        >
          <View style={[styles.addPosition, styles.addPositionLayout]}>
            <Switch
              style={[styles.archiveAdd1, styles.addPosition]}
              value={archiveAddValue}
              onValueChange={setArchiveAddValue}
              trackColor={{ false: "#939393", true: "#1c6ba4" }}
            />
          </View>
        </View>
        <View
          style={[styles.arrowUpIcon, styles.iconLayout1, styles.iconLayout2]}
        >
          <View style={[styles.addPosition, styles.addPositionLayout]}>
            <TouchableHighlight
              style={[styles.addPosition, styles.addPositionLayout]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <Image
                style={styles.addPositionLayout}
                resizeMode="cover"
                source={require("../assets/vuesaxlineararrowup.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight
          style={[styles.arrowPosition, styles.arrowLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Image
            style={styles.addPositionLayout}
            resizeMode="cover"
            source={require("../assets/arrowdown4.png")}
          />
        </TouchableHighlight>
        <Text style={[styles.k, styles.kTypo]}>{likes}</Text>
        <Pressable
          style={[styles.messageParent, styles.iconLayout1]}
          onPress={() => navigation.navigate("Comments")}
        >
          <Image
            style={[styles.messageIcon, styles.iconLayout1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/message1.png")}
          />
          <Text style={[styles.text, styles.kTypo]}>500</Text>
        </Pressable>
        <View
          style={[
            styles.aiimsWrapper,
            styles.paperWrapperSpaceBlock,
            styles.wrapperPosition1,
          ]}
        >
          <Text style={[styles.curewrite, styles.mTypo]}>{tags}</Text>
        </View>
        <Image
          style={[styles.akarIconsshareBox, styles.arrowLayout]}
          resizeMode="cover"
          source={require("../assets/akariconssharebox3.png")}
        />
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
      </View>
      <View style={styles.groupParent1}>
        <Pressable
          style={styles.wrapperPosition}
          onPress={() => navigation.navigate("Dot")}
        >
          <Image
            style={styles.addPositionLayout}
            resizeMode="cover"
            source={require("../assets/group-21.png")}
          />
        </Pressable>
        <Image
          style={[styles.messageIcon, styles.messageLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-120.png")}
        />
        <Text style={[styles.m, styles.mTypo]}>M</Text>
        <Pressable
          style={[styles.drMathewHaydenContainer, styles.hoursAgoPosition]}
          onPress={() => navigation.navigate("NetworkProfiles1")}
        >
          {userName}
        </Pressable>
        <Text
          style={[styles.hoursAgo, styles.hoursAgoPosition, styles.networkTypo]}
        >
          {hoursAgo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addPositionLayout: {
    width: "100%",
    height: "100%",
  },
  groupChild2: {
    top: 442,
  },
  experimentalModelOf: {
    left: 14,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    color: Color.neutral900,
    width: 343,
    position: "absolute",
    fontWeight: "900",
    top: 0,
  },
  archiveAdd1: {
    opacity: 0,
  },
  addPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  archiveAddIcon: {
    left: 299,
    top: 409,
  },
  arrowUpIcon: {
    left: 18,
    top: 409,
  },
  arrowPosition: {
    left: 76,
    position: "absolute",
  },
  k: {
    top: 412,
    left: 41,
    width: 35,
    position: "absolute",
    fontWeight: "900",
  },
  messageIcon: {
    left: 0,
    top: 0,
  },
  text: {
    top: 3,
    left: 26,
    width: 33,
    position: "absolute",
    fontWeight: "900",
  },
  messageParent: {
    left: 145,
    width: 58,
    top: 409,
  },
  curewrite: {
    fontSize: FontSize.size_2xs,
    fontWeight: "900",
  },
  aiimsWrapper: {
    width: 57,
    left: 13,
  },
  akarIconsshareBox: {
    left: 324,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild6: {
    backgroundColor: Color.white3,
    height: 9,
    width: 7,
    left: 306,
    top: 416,
  },
  rectangleContainer: {
    top: 48,
    height: 450,
    left: 0,
  },
  wrapperPosition: {
    height: 4,
    width: 15,
    left: 302,
    top: 12,
    position: "absolute",
  },
  m: {
    top: 8,
    left: 11,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
    position: "absolute",
  },
  drMathewHaydenContainer: {
    top: 1,
  },
  hoursAgo: {
    top: 19,
    fontSize: FontSize.size_base,
    color: Color.gray_1600,
  },
  groupParent1: {
    width: 317,
    height: 37,
    left: 13,
    position: "absolute",
    top: 0,
  },
  groupView: {
    top: 0,
  },
});

export default PostCard;

import * as React from "react";
import { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  Image,
  TouchableHighlight,
  ImageSourcePropType,
  Alert,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, Padding } from "../GlobalStyles";

type ArticlesCardType = {
  postTitle?: string;
  articleTags?: string;
  likes?: string;
  commentAmount?: string;
  username?: string;
  hoursAgo?: string;
  postImage: ImageSourcePropType;
  pfp: ImageSourcePropType;
};

const ArticlesCard = ({
  postTitle,
  articleTags,
  likes,
  commentAmount,
  username,
  hoursAgo,
  postImage,
  pfp,
}: ArticlesCardType) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const onArchiveAddIconClick = useCallback(() => {
    Alert.alert("Added to archives", "");
  }, []);

  const onVectorIcon10Click = useCallback(() => {
    Alert.alert("DOwnloading", "");
  }, []);

  return (
    <View style={[styles.groupParent, styles.groupParentLayout]}>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View
          style={[
            styles.groupChild2,
            styles.rectanglePosition,
            styles.groupChild2Layout,
          ]}
        />
        <Text style={[styles.studyOfModern, styles.kTypo]}>{postTitle}</Text>
        <ImageBackground
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          resizeMode="cover"
          source={postImage}
        />
        <View
          style={[
            styles.archiveAdd,
            styles.archiveAddPosition,
            styles.archiveAddLayout,
          ]}
        >
          <View
            style={[
              styles.vuesaxboldmessage,
              styles.vectorPosition1,
              styles.iconLayout1,
            ]}
          >
            <TouchableHighlight
              style={[
                styles.vuesaxboldmessage,
                styles.vectorPosition1,
                styles.iconLayout1,
              ]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={onArchiveAddIconClick}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/archiveadd4.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <Image
          style={[
            styles.arrowUpIcon,
            styles.archiveAddPosition,
            styles.archiveAddLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowup.png")}
        />
        <Image
          style={[styles.articlesPosition, styles.arrowDownIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowdown4.png")}
        />
        <Text style={[styles.k, styles.kTypo]}>15.3k</Text>
        <View
          style={[
            styles.arrowUpIcon,
            styles.archiveAddPosition,
            styles.archiveAddLayout,
          ]}
        >
          <TouchableHighlight
            style={[
              styles.vuesaxboldmessage,
              styles.vectorPosition1,
              styles.iconLayout1,
            ]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowup.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.arrowDownIconLayout}>
          <View
            style={[
              styles.vuesaxboldmessage,
              styles.vectorPosition1,
              styles.iconLayout1,
            ]}
          >
            <View
              style={[
                styles.vuesaxboldmessage,
                styles.vectorPosition1,
                styles.iconLayout1,
              ]}
            >
              <Image
                style={[styles.vectorIcon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector12.png")}
              />
              <TouchableHighlight
                style={styles.vector2}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.toggleDrawer()}
              >
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/vector13.png")}
                />
              </TouchableHighlight>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/archiveadd.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.k, styles.kTypo]}>{likes}</Text>
        <TouchableHighlight
          style={[styles.groupTouchablehighlight, styles.archiveAddPosition]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("CommentsExt")}
        >
          <>
            <Image
              resizeMode="cover"
              source={require("../assets/message13.png")}
            />
            <Text>{commentAmount}</Text>
          </>
        </TouchableHighlight>
        <View style={[styles.articlePostWrapper, styles.groupChildBg]}>
          <Text style={[styles.articlePost, styles.sTypo]}>{articleTags}</Text>
        </View>
        <View style={[styles.akarIconsshareBox, styles.arrowDownIconLayout]}>
          <Image
            style={[styles.vectorPosition, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <TouchableHighlight
            style={styles.vectorPosition}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={onVectorIcon10Click}
          >
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/vector15.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={[styles.groupChild3, styles.groupChildBg]} />
      </View>
      <View style={styles.groupContainer}>
        <Pressable
          style={styles.wrapper1}
          onPress={() => navigation.navigate("Dot")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group-21.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupParent, styles.messageLayout]}
          resizeMode="cover"
          source={pfp}
        />
        <Text style={[styles.s, styles.sTypo]}>S</Text>
        <Pressable
          style={[styles.sunnyFernandes, styles.hoursAgoPosition]}
          onPress={() => navigation.navigate("NetworkProfiles")}
        >
          {username}
        </Pressable>
        <Text
          style={[styles.hoursAgo, styles.latest1Typo, styles.hoursAgoPosition]}
        >
          {hoursAgo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild2: {
    top: 442,
  },
  studyOfModern: {
    left: 14,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    color: Color.neutral900,
    width: 343,
    position: "absolute",
    fontWeight: "900",
    top: 0,
  },
  rectangleIcon: {
    top: 94,
    height: 303,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  vuesaxboldmessage: {
    position: "absolute",
  },
  archiveAdd: {
    left: 299,
  },
  arrowUpIcon: {
    left: 18,
  },
  articlesPosition: {
    left: 76,
    position: "absolute",
  },
  k: {
    top: 412,
    left: 41,
    color: Color.gray_1800,
    width: 35,
    fontSize: FontSize.size_sm,
    position: "absolute",
    fontWeight: "900",
  },
  vectorIcon3: {
    height: "31.54%",
    width: "58.08%",
    top: "57%",
    right: "20.96%",
    bottom: "11.46%",
    left: "20.96%",
    position: "absolute",
  },
  vector2: {
    left: "46.25%",
    top: "11.46%",
    right: "46.25%",
    bottom: "12.17%",
    width: "7.5%",
    height: "76.38%",
    position: "absolute",
  },
  vectorIcon1: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
  },
  arrowDownIconLayout: {
    top: 408,
    width: 20,
    height: 24,
  },
  groupTouchablehighlight: {
    left: 145,
    width: 58,
    top: 409,
    height: 24,
  },
  articlePost: {
    fontSize: FontSize.size_2xs,
    fontWeight: "900",
  },
  articlePostWrapper: {
    top: 64,
    borderRadius: Border.br_xl,
    width: 83,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    left: 13,
  },
  vectorPosition: {
    left: "3.33%",
    bottom: "8.33%",
    right: "3.33%",
    width: "93.34%",
    height: "83.33%",
    top: "8.33%",
    position: "absolute",
  },
  akarIconsshareBox: {
    left: 324,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild3: {
    top: 416,
    left: 306,
    width: 7,
    height: 9,
  },
  rectangleContainer: {
    top: 48,
    height: 450,
  },
  wrapper1: {
    left: 302,
    top: 12,
    width: 15,
    height: 4,
    position: "absolute",
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  s: {
    top: 8,
    left: 12,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
    position: "absolute",
  },
  sunnyFernandes: {
    top: 1,
  },
  hoursAgo: {
    top: 19,
    fontSize: FontSize.size_base,
  },
  groupContainer: {
    width: 317,
    height: 37,
    left: 13,
    position: "absolute",
    top: 0,
  },
});

export default ArticlesCard;

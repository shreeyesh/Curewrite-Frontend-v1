import * as React from "react";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import CreatePost from "../components/CreatePost";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const CommentsExt = () => {
  const [vectorIcon8Visible, setVectorIcon8Visible] = useState(false);
  const [vectorIcon9Visible, setVectorIcon9Visible] = useState(false);
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const openVectorIcon8 = useCallback(() => {
    setVectorIcon8Visible(true);
  }, []);

  const closeVectorIcon8 = useCallback(() => {
    setVectorIcon8Visible(false);
  }, []);

  const openVectorIcon9 = useCallback(() => {
    setVectorIcon9Visible(true);
  }, []);

  const closeVectorIcon9 = useCallback(() => {
    setVectorIcon9Visible(false);
  }, []);

  const onVectorIcon15Click = useCallback(() => {
    Alert.alert("Downloading", "");
  }, []);

  return (
    <>
      <View style={styles.commentsExt}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout1]} />
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.rectangleView, styles.groupChild1Layout]} />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Image
          style={styles.commentsExtChild}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.commentsExtItem}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <View style={styles.frameParent}>
          <Pressable
            style={styles.essentialsHomeParent}
            onPress={() => navigation.navigate("Publish")}
          >
            <View style={[styles.essentialsHome, styles.frameLayout]}>
              <Image
                style={[
                  styles.vectorIcon,
                  styles.iconLayout,
                  styles.vectorPosition1,
                  styles.iconLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </View>
            <Text
              style={[
                styles.home,
                styles.mt8,
                styles.homeTypo,
                styles.homeLayout,
              ]}
            >
              Home
            </Text>
          </Pressable>
          <View style={[styles.essentialsHomeParent, styles.ml42]}>
            <View style={[styles.frame, styles.frameLayout]}>
              <TouchableHighlight
                style={[styles.vector, styles.vectorPosition]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.navigate("NetworkArticle")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </TouchableHighlight>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
            <Text style={[styles.networkTypo, styles.mt8, styles.homeLayout]}>
              Network
            </Text>
          </View>
          <Pressable
            style={[styles.essentialsHomeParent, styles.ml42]}
            onPress={() => navigation.navigate("Database")}
          >
            <Image
              style={[styles.frame, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/report.png")}
            />
            <Text
              style={[
                styles.home,
                styles.mt8,
                styles.homeTypo,
                styles.homeLayout,
              ]}
            >
              Database
            </Text>
          </Pressable>
          <Pressable
            style={[styles.essentialsHomeParent, styles.ml42]}
            onPress={() => navigation.navigate("Vault")}
          >
            <Image
              style={[styles.frame, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame3.png")}
            />
            <Text
              style={[
                styles.home,
                styles.mt8,
                styles.homeTypo,
                styles.homeLayout,
              ]}
            >
              Vault
            </Text>
          </Pressable>
        </View>
        <View style={[styles.commentsExtInner, styles.groupChild2Bg]} />
        <TouchableHighlight
          style={styles.wrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NetworkDoctorSearch")}
        >
          <>
            <View>
              <View>
                <View>
                  <TouchableHighlight
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => navigation.navigate("NetworkDoctorSearch")}
                  >
                    <Image
                      resizeMode="cover"
                      source={require("../assets/vector4.png")}
                    />
                  </TouchableHighlight>
                  <Image
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Image
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                </View>
              </View>
            </View>
            <Image
              resizeMode="cover"
              source={require("../assets/vector7.png")}
            />
          </>
        </TouchableHighlight>
        <Pressable
          style={styles.frame1}
          onPress={() => navigation.navigate("false")}
        >
          <TouchableOpacity
            style={[styles.vector1, styles.vectorPosition1, styles.iconLayout1]}
            activeOpacity={0.2}
            onPress={openVectorIcon8}
          >
            <Image
              style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.vector2}
            activeOpacity={0.2}
            onPress={openVectorIcon9}
          >
            <Image
              style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector9.png")}
            />
          </TouchableOpacity>
        </Pressable>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View
              style={[
                styles.groupChild2,
                styles.groupLayout,
                styles.groupChild2Bg,
              ]}
            />
            <Text
              style={[styles.studyOfModern, styles.homeTypo]}
            >{`Study of Modern business management & Healthcare`}</Text>
            <View
              style={[
                styles.archiveAdd,
                styles.messageLayout,
                styles.arrowUpLayout,
              ]}
            >
              <View
                style={[
                  styles.vuesaxboldarchiveAdd,
                  styles.vectorPosition1,
                  styles.iconLayout1,
                ]}
              >
                <View
                  style={[
                    styles.vuesaxboldarchiveAdd,
                    styles.vectorPosition1,
                    styles.iconLayout1,
                  ]}
                >
                  <TouchableHighlight
                    style={styles.vector3}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => navigation.toggleDrawer()}
                  >
                    <Image
                      style={[
                        styles.icon,
                        styles.iconLayout,
                        styles.iconLayout1,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/vector31.png")}
                    />
                  </TouchableHighlight>
                  <Image
                    style={[
                      styles.vectorIcon3,
                      styles.view2Position,
                      styles.iconLayout,
                      styles.iconLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/vector32.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable
              style={[
                styles.arrowUp,
                styles.messageLayout,
                styles.arrowUpLayout,
              ]}
            >
              <TouchableHighlight
                style={[
                  styles.vector1,
                  styles.vectorPosition1,
                  styles.iconLayout1,
                ]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => navigation.toggleDrawer()}
              >
                <Image
                  style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlineararrowup3.png")}
                />
              </TouchableHighlight>
            </Pressable>
            <View style={[styles.arrowDown, styles.arrowDownPosition]}>
              <TouchableHighlight
                style={[
                  styles.vuesaxboldarchiveAdd,
                  styles.vectorPosition1,
                  styles.iconLayout1,
                ]}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <View
                  style={[
                    styles.vuesaxboldarchiveAdd,
                    styles.vectorPosition1,
                    styles.iconLayout1,
                  ]}
                >
                  <Image
                    style={[styles.vectorIcon4, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector49.png")}
                  />
                  <TouchableHighlight
                    style={styles.vector4}
                    underlayColor="#fff"
                    activeOpacity={0.2}
                    onPress={() => navigation.toggleDrawer()}
                  >
                    <Image
                      style={[
                        styles.icon,
                        styles.iconLayout,
                        styles.iconLayout1,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/vector34.png")}
                    />
                  </TouchableHighlight>
                  <Image
                    style={[
                      styles.vectorIcon3,
                      styles.view2Position,
                      styles.iconLayout,
                      styles.iconLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/vector32.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
            <Text style={[styles.k, styles.kTypo]}>56.9k</Text>
            <View style={[styles.messageParent, styles.messageLayout]}>
              <Image
                style={[
                  styles.messageIcon,
                  styles.messageLayout,
                  styles.arrowUpLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/message4.png")}
              />
              <Text style={[styles.text, styles.kTypo]}>4682</Text>
            </View>
            <View style={styles.curewriteWrapper}>
              <Text style={[styles.curewrite, styles.mTypo]}>Curewrite</Text>
            </View>
            <View style={[styles.akarIconsshareBox, styles.arrowDownPosition]}>
              <Pressable style={styles.vector5} onPress={onVectorIcon15Click}>
                <Image
                  style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vector36.png")}
                />
              </Pressable>
            </View>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle-224681.png")}
            />
          </View>
          <View style={styles.groupContainer}>
            <TouchableHighlight
              style={styles.container}
              underlayColor="#fff"
              onPress={() => navigation.toggleDrawer()}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/group-24.png")}
              />
            </TouchableHighlight>
            <Pressable
              style={styles.ellipsePressable}
              onPress={() => navigation.navigate("NetworkProfiles2")}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
            </Pressable>
            <Text style={[styles.m, styles.mTypo]}>M</Text>
            <Pressable
              style={styles.drSunnyFernandesContainer}
              onPress={() => navigation.navigate("NetworkProfiles2")}
            >
              <Text style={styles.drSunnyFernandes}>Dr. Sunny Fernandes</Text>
            </Pressable>
            <Text style={[styles.hoursAgo, styles.latest1Typo]}>
              15 hours ago
            </Text>
          </View>
        </View>
        <View style={styles.comments}>
          <View style={styles.comments1}>
            <View style={[styles.view, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active.png")}
                />
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-inactive.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                <Text style={styles.text2}>
                  Это комментарий номер 1. Я первый. Класс!
                </Text>
                <Text style={styles.text3}>Я написал комментарий.</Text>
              </Text>
              <Text style={[styles.whenLayout, styles.whenPosition]}>
                6 часов назад
              </Text>
              <Text style={[styles.nameTypo, styles.whenPosition]}>
                @ricardopedrolini
              </Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/adeline-oreilly.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/angela-mayer.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/jeanette-gottlieb.png")}
                  />
                </View>
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/louie-volkman.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/edward-powlowski.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/toby-halvorson.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/fernando-pidrilio.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={styles.lineDefaultIcon}
                resizeMode="cover"
                source={require("../assets/line-default.png")}
              />
            </View>
            <View style={[styles.view1, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-inactive.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                <Text style={styles.text2}>
                  А я вторая. Вот. Нужно писать комментарии.
                </Text>
                <Text style={styles.text3}>А придумывать кто их будет?</Text>
              </Text>
              <Text style={styles.whenPosition}>5 часов назад</Text>
              <Text style={styles.whenPosition}>@o’mamma</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/adeline-oreilly.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/angela-mayer.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/jeanette-gottlieb.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/louie-volkman.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/edward-powlowski.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/toby-halvorson.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/fernando-pidrilio.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={styles.lineDefaultIcon}
                resizeMode="cover"
                source={require("../assets/line-default.png")}
              />
            </View>
            <View
              style={[styles.view2, styles.iconPosition, styles.view2Position]}
            >
              <LinearGradient
                style={styles.child}
                locations={[0, 1]}
                colors={["#ded7f6", "#efdbe5"]}
              />
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text style={[styles.message2, styles.messageTypo]}>
                Бог любит троицу, значит и меня, ведь я третяя, кто оставил здес
                комментарий!!!
              </Text>
              <Text style={[styles.when2Position, styles.whenLayout]}>
                4 часа назад
              </Text>
              <Text style={[styles.when2Position, styles.nameTypo]}>
                @aliceglasstone
              </Text>
              <View
                style={[
                  styles.userpic2,
                  styles.when2Position,
                  styles.userpicLayout,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon2, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
              <Image
                style={[styles.closeIcon, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/close.png")}
              />
            </View>
            <View style={[styles.view3, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active3.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-inactive3.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Бог любит троицу, значит и меня, ведь я третяя, кто оставил здес
                комментарий!!!
              </Text>
              <Text style={styles.whenPosition}>4 часа назад</Text>
              <Text style={styles.whenPosition}>@aliceglasstone</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/adeline-oreilly.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/angela-mayer.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/jeanette-gottlieb.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/louie-volkman.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/edward-powlowski.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/toby-halvorson.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/fernando-pidrilio.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={styles.lineDefaultIcon}
                resizeMode="cover"
                source={require("../assets/line-default.png")}
              />
            </View>
            <View style={[styles.view4, styles.viewPosition]}>
              <View style={[styles.like4Position, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.like4Position, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text style={styles.whenPosition}>2 часа назад</Text>
              <Text style={styles.whenPosition}>@svetafinger</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
              <Text
                style={[
                  styles.message4,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Оксана, да я уже как месяц дома сижу и имею по 30-40т в неделю
                не напрягаясь так сказать и тебе советую! Если хочешь и тебе
                помогу смотри мой инст и сожешь так же
              </Text>
            </View>
            <View style={[styles.view5, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Ну вот, собственно, еще один комментарий.
              </Text>
              <Text style={styles.whenPosition}>1 час назад</Text>
              <Text style={styles.whenPosition}>@ananananananashair</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
            </View>
            <View style={[styles.view6, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                <Text style={styles.text2}>
                  Это комментарий номер 1. Я первый. Класс!
                </Text>
                <Text style={styles.text3}>Я написал комментарий.</Text>
              </Text>
              <Text style={styles.whenPosition}>6 часов назад</Text>
              <Text style={styles.whenPosition}>@ricardopedrolini</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
            </View>
            <View style={[styles.view7, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                <Text style={styles.text2}>
                  А я вторая. Вот. Нужно писать комментарии.
                </Text>
                <Text style={styles.text3}>А придумывать кто их будет?</Text>
              </Text>
              <Text style={styles.whenPosition}>5 часов назад</Text>
              <Text style={styles.whenPosition}>@o’mamma</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
            </View>
            <View style={[styles.view8, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Бог любит троицу, значит и меня, ведь я третяя, кто оставил здес
                комментарий!!!
              </Text>
              <Text style={styles.whenPosition}>4 часа назад</Text>
              <Text style={styles.whenPosition}>@aliceglasstone</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
            </View>
            <View style={[styles.view9, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Хотела быть третьей, но меня уже любит мой муж поэтому мне не
                надо. Могу и четвертой быть)
              </Text>
              <Text style={styles.whenPosition}>3 часа назад</Text>
              <Text style={styles.whenPosition}>@iyuhhuhu</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
            </View>
            <View style={[styles.view10, styles.viewPosition]}>
              <View style={styles.likeLayout}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={styles.buttonTypo}>Ответить 💬</Text>
              <Text style={styles.whenPosition}>2 часа назад</Text>
              <Text style={styles.whenPosition}>@svetafinger</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
              <Text
                style={[
                  styles.message4,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Оксана, да я уже как месяц дома сижу и имею по 30-40т в неделю
                не напрягаясь так сказать и тебе советую! Если хочешь и тебе
                помогу смотри мой инст и сожешь так же
              </Text>
            </View>
            <View style={[styles.view11, styles.viewPosition1]}>
              <View style={[styles.like, styles.likeLayout]}>
                <View
                  style={[
                    styles.buttonBg,
                    styles.badgeBgBg,
                    styles.iconPosition,
                  ]}
                />
                <Text style={styles.text1}>13</Text>
                <Image
                  style={[
                    styles.thumbsUpInactiveIcon,
                    styles.thumbsIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
                <Image
                  style={styles.thumbsIconPosition}
                  resizeMode="cover"
                  source={require("../assets/thumbsup-active2.png")}
                />
              </View>
              <Text style={[styles.button, styles.buttonTypo]}>
                Ответить 💬
              </Text>
              <Text
                style={[
                  styles.message,
                  styles.messageTypo,
                  styles.messagePosition,
                ]}
              >
                Ну вот, собственно, еще один комментарий.
              </Text>
              <Text style={styles.whenPosition}>1 час назад</Text>
              <Text style={styles.whenPosition}>@ananananananashair</Text>
              <View
                style={[
                  styles.userpic,
                  styles.userpicLayout,
                  styles.whenPosition,
                ]}
              >
                <View style={styles.female}>
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[styles.madalineGibsonIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.male, styles.iconPosition]}>
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.fernandoPidrilioIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                  <Image
                    style={[
                      styles.louieVolkmanIcon,
                      styles.iconPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/madaline-gibson2.png")}
                  />
                </View>
                <View style={[styles.noUserpic, styles.iconPosition]}>
                  <View style={[styles.empty, styles.iconPosition]} />
                  <Image
                    style={[
                      styles.personIcon,
                      styles.vectorPosition,
                      styles.iconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/person2.png")}
                  />
                </View>
                <View style={[styles.badgeNumeric, styles.vectorPosition1]}>
                  <View
                    style={[
                      styles.badgeBg,
                      styles.badgeBgBg,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text4, styles.textLayout]}>12</Text>
                </View>
                <View style={styles.status}>
                  <View
                    style={[
                      styles.badgeBg1,
                      styles.badgeBg1Border,
                      styles.vectorPosition1,
                      styles.iconLayout1,
                    ]}
                  />
                  <Text style={[styles.text5, styles.textLayout]}>12</Text>
                </View>
              </View>
              <Image
                style={[styles.lineDefaultIcon4, styles.lineIconPosition]}
                resizeMode="cover"
                source={require("../assets/line-default2.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.commentsBar}>
          <View style={styles.commentInput} />
          <Text style={styles.placeholder}>write comment</Text>
          <Image
            style={styles.happyIcon}
            resizeMode="cover"
            source={require("../assets/happy.png")}
          />
        </View>
        <View style={styles.networkParent}>
          <Text style={styles.network1}>Network</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-167.png")}
          />
          <Pressable
            style={[styles.rectangleContainer, styles.userpicLayout]}
            onPress={() => navigation.navigate("NetworkPaper")}
          >
            <Pressable
              style={[
                styles.rectanglePressable,
                styles.badgeBg1Border,
                styles.userpicLayout,
              ]}
              onPress={() => navigation.goBack()}
            />
            <Image
              style={[styles.basicsArrowLeft, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/basics--arrowleft.png")}
            />
          </Pressable>
        </View>
        <View style={styles.papersParent}>
          <Pressable
            style={styles.papers}
            onPress={() => navigation.navigate("NetworkLatest")}
          >
            <Text style={[styles.papers1, styles.networkTypo]}>PAPERS</Text>
          </Pressable>
          <TouchableHighlight
            style={styles.articles}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkArticle")}
          >
            <Text style={[styles.articles1, styles.latest1Typo]}>ARTICLES</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.latest}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CommentsExt")}
          >
            <Text style={[styles.latest1, styles.latest1Typo]}>LATEST</Text>
          </TouchableHighlight>
          <View style={styles.groupChild3} />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={vectorIcon8Visible}>
        <View style={styles.vectorIcon8Overlay}>
          <Pressable style={styles.vectorIcon8Bg} onPress={closeVectorIcon8} />
          <CreatePost onClose={closeVectorIcon8} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon9Visible}>
        <View style={styles.vectorIcon9Overlay}>
          <Pressable style={styles.vectorIcon9Bg} onPress={closeVectorIcon9} />
          <CreatePost onClose={closeVectorIcon9} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml42: {
    marginLeft: Margin.m_6xl,
  },
  vectorIcon8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon9Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupLayout1: {
    width: 75,
    backgroundColor: Color.gray_1100,
    top: 0,
    height: 28,
    position: "absolute",
  },
  groupChild1Layout: {
    backgroundColor: Color.gray8,
    width: 75,
    top: 0,
    height: 28,
    position: "absolute",
  },
  frameLayout: {
    width: 24,
    height: 24,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorPosition1: {
    top: "0%",
    right: "0%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  homeLayout: {
    lineHeight: 16,
    letterSpacing: 0.1,
  },
  vectorPosition: {
    top: "12.5%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: "31.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild2Bg: {
    backgroundColor: Color.gray_400,
    left: 0,
  },
  groupLayout: {
    width: 357,
    position: "absolute",
  },
  messageLayout: {
    height: 29,
    position: "absolute",
  },
  arrowUpLayout: {
    width: 20,
    height: 29,
  },
  view2Position: {
    opacity: 0,
    position: "absolute",
    overflow: "hidden",
  },
  arrowDownPosition: {
    top: 493,
    height: 29,
    width: 20,
    position: "absolute",
  },
  kTypo: {
    height: 19,
    color: Color.gray_1800,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  mTypo: {
    color: Color.white3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  latest1Typo: {
    color: Color.gray_1600,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  viewPosition1: {
    height: 110,
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  likeLayout: {
    width: 48,
    right: 17,
  },
  badgeBgBg: {
    backgroundColor: Color.baseBlue,
    position: "absolute",
  },
  iconPosition: {
    right: 0,
    left: 0,
  },
  thumbsIconPosition: {
    width: 16,
    right: 5,
    height: 16,
    top: "50%",
    marginTop: -8,
    position: "absolute",
    overflow: "hidden",
  },
  buttonTypo: {
    width: 263,
    left: 78,
    color: Color.baseBlue,
    fontFamily: FontFamily.poppins,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignItems: "center",
  },
  messageTypo: {
    color: Color.gray70,
    lineHeight: 18,
    width: 263,
    left: 78,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  messagePosition: {
    top: 43,
    color: Color.gray70,
    lineHeight: 18,
  },
  whenPosition: {
    top: 17,
    position: "absolute",
  },
  userpicLayout: {
    width: 44,
    height: 44,
  },
  textLayout: {
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.white3,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  badgeBg1Border: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  whenLayout: {
    height: 20,
    width: 94,
    textAlign: "right",
    color: Color.gray40,
    lineHeight: 16,
    right: 24,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
  },
  nameTypo: {
    width: 119,
    lineHeight: 20,
    color: Color.gray50,
    left: 78,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  when2Position: {
    top: 29,
    position: "absolute",
  },
  lineIconPosition: {
    left: 17,
    height: 0,
    right: 17,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewPosition: {
    height: 129,
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    height: 15,
    top: 15,
    width: 15,
    position: "absolute",
  },
  networkTypo: {
    color: Color.brandBlue,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontSize: FontSize.size_sm,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 150,
  },
  groupInner: {
    left: 300,
  },
  rectangleView: {
    left: 75,
  },
  groupChild1: {
    left: 225,
  },
  rectangleParent: {
    top: 777,
    display: "none",
    height: 28,
    width: 375,
    left: 0,
    position: "absolute",
  },
  commentsExtChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
    display: "none",
    position: "absolute",
  },
  commentsExtItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
    display: "none",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  essentialsHome: {
    height: 24,
  },
  home: {
    color: Color.gray_1500,
    fontSize: FontSize.size_sm,
  },
  essentialsHomeParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    overflow: "hidden",
  },
  vector: {
    left: "37.5%",
    width: "62.5%",
    height: "75%",
    bottom: "12.5%",
    right: "0%",
  },
  vectorIcon1: {
    width: "43.35%",
    top: "56.25%",
    right: "56.65%",
    bottom: "12.5%",
    left: "0%",
  },
  vectorIcon2: {
    width: "31.25%",
    top: "18.75%",
    right: "56.25%",
    bottom: "50%",
    left: "12.5%",
  },
  frame: {
    height: 24,
    overflow: "hidden",
  },
  frameParent: {
    top: 747,
    left: 43,
    flexDirection: "row",
    display: "none",
    position: "absolute",
  },
  commentsExtInner: {
    height: 8,
    top: 112,
    width: 375,
    backgroundColor: Color.gray_400,
    position: "absolute",
  },
  wrapper: {
    top: 130,
    left: 314,
    width: 42,
    height: 40,
    position: "absolute",
  },
  vector1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  vector2: {
    left: "25%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    width: "50%",
    height: "50%",
    position: "absolute",
  },
  frame1: {
    top: 134,
    left: 266,
    width: 31,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild2: {
    top: 534,
    height: 10,
  },
  studyOfModern: {
    left: 14,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    color: Color.neutral900,
    width: 343,
    height: 72,
    fontWeight: "900",
    top: 0,
    position: "absolute",
  },
  vector3: {
    left: "13.83%",
    top: "8.33%",
    right: "13.79%",
    bottom: "8.31%",
    width: "72.38%",
    height: "83.36%",
    position: "absolute",
  },
  vectorIcon3: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
  },
  vuesaxboldarchiveAdd: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  archiveAdd: {
    left: 299,
    top: 494,
  },
  arrowUp: {
    left: 18,
    top: 494,
  },
  vectorIcon4: {
    height: "30.47%",
    width: "58.08%",
    top: "57.54%",
    right: "20.96%",
    bottom: "12%",
    left: "20.96%",
    position: "absolute",
    overflow: "hidden",
  },
  vector4: {
    left: "46.25%",
    top: "12%",
    right: "46.25%",
    bottom: "12.7%",
    width: "7.5%",
    height: "75.3%",
    position: "absolute",
  },
  arrowDown: {
    left: 76,
  },
  k: {
    top: 498,
    left: 41,
    width: 35,
  },
  messageIcon: {
    top: 0,
    left: 0,
  },
  text: {
    top: 4,
    left: 26,
    width: 33,
  },
  messageParent: {
    left: 145,
    width: 58,
    top: 494,
  },
  curewrite: {
    fontSize: FontSize.size_2xs,
    fontWeight: "900",
  },
  curewriteWrapper: {
    top: 77,
    borderRadius: Border.br_xl,
    width: 71,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_xs,
    height: 23,
    left: 13,
    backgroundColor: Color.brandBlue,
    flexDirection: "row",
    position: "absolute",
  },
  vector5: {
    left: "3.33%",
    top: "9.05%",
    right: "3.33%",
    bottom: "9.05%",
    width: "93.33%",
    height: "81.9%",
    position: "absolute",
  },
  akarIconsshareBox: {
    left: 324,
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 503,
    left: 306,
    width: 7,
    height: 11,
    position: "absolute",
  },
  rectangleGroup: {
    height: 544,
    top: 55,
    left: 0,
  },
  container: {
    left: 302,
    top: 14,
    height: 5,
    width: 15,
    position: "absolute",
  },
  ellipsePressable: {
    width: 36,
    height: 42,
    top: 0,
    left: 0,
    position: "absolute",
  },
  m: {
    top: 9,
    left: 11,
    fontSize: FontSize.size_2xl,
    width: 14,
    height: 25,
    fontWeight: "700",
    position: "absolute",
  },
  drSunnyFernandes: {
    width: 202,
    color: Color.black,
    fontSize: FontSize.size_xl,
    height: 23,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  drSunnyFernandesContainer: {
    top: 1,
    left: 42,
    position: "absolute",
  },
  hoursAgo: {
    top: 22,
    width: 77,
    height: 21,
    fontSize: FontSize.size_base,
    color: Color.gray_1600,
    left: 42,
    position: "absolute",
  },
  groupContainer: {
    width: 317,
    height: 43,
    left: 13,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 200,
    left: 9,
    height: 599,
  },
  buttonBg: {
    borderRadius: Border.br_3xs,
    opacity: 0.08,
    bottom: 0,
    top: 0,
    display: "none",
  },
  text1: {
    left: 5,
    width: 21,
    height: 16,
    color: Color.baseBlue,
    fontFamily: FontFamily.poppins,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    marginTop: -8,
    display: "flex",
    textAlign: "center",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  thumbsUpInactiveIcon: {
    display: "none",
  },
  like: {
    bottom: 0,
    height: 24,
    display: "none",
    position: "absolute",
  },
  button: {
    bottom: 0,
    height: 24,
    display: "none",
    position: "absolute",
  },
  text2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text3: {
    margin: Margin.m_7xs,
  },
  message: {
    height: 31,
  },
  madalineGibsonIcon: {
    right: -44,
    bottom: -44,
    borderRadius: Border.br_8xl,
    top: 0,
    display: "none",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  female: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  louieVolkmanIcon: {
    borderRadius: Border.br_8xl,
    bottom: 0,
    top: 0,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  fernandoPidrilioIcon: {
    borderRadius: Border.br_8xl,
    bottom: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  male: {
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  empty: {
    backgroundColor: Color.gray20,
    borderRadius: Border.br_8xl,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  personIcon: {
    height: "87.5%",
    width: "72.73%",
    right: "13.64%",
    left: "13.64%",
    bottom: "0%",
    overflow: "hidden",
  },
  noUserpic: {
    bottom: 0,
    top: 0,
    display: "none",
    position: "absolute",
  },
  badgeBg: {
    borderRadius: Border.br_8xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  text4: {
    display: "flex",
    lineHeight: 16,
  },
  badgeNumeric: {
    height: "40.91%",
    width: "40.91%",
    bottom: "59.09%",
    left: "59.09%",
    shadowColor: "rgba(0, 122, 255, 0.12)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    right: "0%",
    display: "none",
    position: "absolute",
  },
  badgeBg1: {
    backgroundColor: Color.baseGreen,
    borderColor: "#fff",
    borderRadius: Border.br_8xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  text5: {
    display: "none",
  },
  status: {
    height: "27.27%",
    width: "27.27%",
    top: "72.73%",
    left: "72.73%",
    bottom: "0%",
    right: "0%",
    display: "none",
    position: "absolute",
  },
  userpic: {
    height: 44,
    left: 24,
  },
  lineDefaultIcon: {
    right: 11,
    left: 2,
    height: 1,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    top: 0,
  },
  view1: {
    top: 112,
  },
  child: {
    width: 414,
    height: 111,
    backgroundColor: "transparent",
    top: 13,
    left: 0,
    position: "absolute",
  },
  message2: {
    top: 55,
    height: 31,
  },
  userpic2: {
    height: 44,
    left: 24,
  },
  lineDefaultIcon2: {
    top: 13,
  },
  closeIcon: {
    left: 366,
    height: 24,
    top: 0,
    position: "absolute",
  },
  view2: {
    top: 212,
    height: 122,
    backgroundColor: Color.white3,
    right: 0,
    opacity: 0,
  },
  view3: {
    top: 224,
  },
  like4Position: {
    bottom: 19,
    height: 24,
    display: "none",
    position: "absolute",
  },
  lineDefaultIcon4: {
    top: 1,
  },
  message4: {
    height: 67,
  },
  view4: {
    top: 448,
  },
  view5: {
    top: 579,
  },
  view6: {
    top: 691,
  },
  view7: {
    top: 803,
  },
  view8: {
    top: 915,
  },
  view9: {
    top: 1027,
  },
  view10: {
    top: 1139,
  },
  view11: {
    top: 1270,
  },
  comments1: {
    width: 365,
    height: 1216,
    left: 24,
    top: 19,
    position: "absolute",
  },
  comments: {
    top: 351,
    left: -21,
    width: 378,
    height: 342,
    position: "absolute",
  },
  commentInput: {
    bottom: 20,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.gray5,
    right: 24,
    left: 24,
    top: 19,
    position: "absolute",
  },
  placeholder: {
    left: 40,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    width: 334,
    color: Color.gray50,
    display: "flex",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0,
    top: 19,
    height: 43,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  happyIcon: {
    marginTop: -15,
    right: 35,
    width: 28,
    top: "50%",
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  commentsBar: {
    right: -20,
    bottom: 54,
    left: -19,
    height: 82,
    position: "absolute",
  },
  network1: {
    top: 10,
    left: 122,
    fontSize: FontSize.nunitoSansSubheadline_size,
    letterSpacing: 0.2,
    lineHeight: 24,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  groupIcon: {
    left: 290,
  },
  rectanglePressable: {
    borderRadius: Border.br_sm,
    borderColor: "rgba(0, 0, 0, 0.4)",
    height: 44,
    top: 0,
    left: 0,
  },
  basicsArrowLeft: {
    left: 15,
  },
  rectangleContainer: {
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  networkParent: {
    top: 54,
    left: 28,
    width: 305,
    height: 44,
    position: "absolute",
  },
  papers1: {
    width: 66,
    fontWeight: "700",
  },
  papers: {
    left: 4,
    top: 0,
    position: "absolute",
  },
  articles1: {
    width: 69,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  articles: {
    left: 80,
    top: 0,
    position: "absolute",
  },
  latest1: {
    width: 62,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  latest: {
    left: 164,
    top: 0,
    position: "absolute",
  },
  groupChild3: {
    top: 24,
    width: 55,
    height: 3,
    backgroundColor: Color.brandBlue,
    left: 0,
    position: "absolute",
  },
  papersParent: {
    top: 138,
    width: 226,
    height: 27,
    left: 24,
    position: "absolute",
  },
  commentsExt: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default CommentsExt;

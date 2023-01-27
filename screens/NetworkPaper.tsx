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
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import CreatePost from "../components/CreatePost";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const NetworkPaper = () => {
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

  const onVectorIcon20Click = useCallback(() => {
    Alert.alert("DOwnloading", "");
  }, []);

  return (
    <>
      <View style={styles.networkPaper}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout1]} />
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.rectangleView, styles.groupChild1Layout]} />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Image
          style={styles.networkPaperChild}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.networkPaperItem}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <Pressable style={styles.networkWrapper}>
          <Text style={[styles.network, styles.homeTypo]}>Network</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/rectangle-9.png")}
            />
          </Pressable>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
        <View style={[styles.networkPaperInner, styles.groupChild2Layout]} />
        <TouchableHighlight
          style={styles.container}
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
            style={styles.vectorPosition2}
            activeOpacity={0.2}
            onPress={openVectorIcon8}
          >
            <Image
              style={[styles.icon, styles.iconLayout2, styles.iconLayout3]}
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
              style={[styles.icon, styles.iconLayout2, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/vector9.png")}
            />
          </TouchableOpacity>
        </Pressable>
        <View style={[styles.frameView, styles.frameParentFlexBox]}>
          <ScrollView
            style={styles.groupParent}
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={[styles.groupContainer, styles.groupContainerPosition]}
            >
              <View style={[styles.groupWrapper, styles.groupFrameLayout]}>
                <View style={[styles.groupView, styles.groupFrameLayout]}>
                  <View
                    style={[
                      styles.rectangleContainer,
                      styles.groupContainerPosition,
                    ]}
                  >
                    <View
                      style={[
                        styles.groupChild2,
                        styles.groupContainerPosition,
                        styles.groupChild2Layout,
                      ]}
                    />
                    <Text
                      style={styles.studyOfModern}
                    >{`Study of Modern business management & Healthcare`}</Text>
                    <Image
                      style={[styles.rectangleIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-8.png")}
                    />
                    <Image
                      style={[styles.archiveAddIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd.png")}
                    />
                    <Image
                      style={[styles.arrowUpIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd.png")}
                    />
                    <Image
                      style={[
                        styles.arrowDownIcon,
                        styles.arrowDownIconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd.png")}
                    />
                    <Text style={[styles.k, styles.kTypo]}>15.3k</Text>
                    <View style={styles.messageParent}>
                      <Image
                        style={[styles.messageIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/message.png")}
                      />
                      <Text style={[styles.text, styles.kTypo]}>1000</Text>
                    </View>
                    <View
                      style={[
                        styles.articlePostWrapper,
                        styles.paperWrapperSpaceBlock,
                        styles.wrapperPosition,
                      ]}
                    >
                      <Text style={styles.articlePost}>Article Post</Text>
                    </View>
                    <Image
                      style={[
                        styles.akarIconsshareBox,
                        styles.arrowDownIconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd.png")}
                    />
                    <View
                      style={[styles.groupChild3, styles.groupChildPosition]}
                    />
                  </View>
                  <View style={styles.groupParent1}>
                    <Image
                      style={styles.groupPosition}
                      resizeMode="cover"
                      source={require("../assets/group-2.png")}
                    />
                    <Image
                      style={styles.groupChild4Position}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.s, styles.sTypo]}>S</Text>
                    <Text
                      style={[
                        styles.sunnyFernandes,
                        styles.drMinAkhterTypo,
                        styles.hoursAgoPosition,
                      ]}
                    >
                      Sunny Fernandes
                    </Text>
                    <Text
                      style={[
                        styles.hoursAgo,
                        styles.latest1Typo,
                        styles.hoursAgoPosition,
                      ]}
                    >
                      21 hours ago
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupView, styles.groupFrameLayout]}>
                <View style={[styles.groupView, styles.groupFrameLayout]}>
                  <View
                    style={[
                      styles.rectangleContainer,
                      styles.groupContainerPosition,
                    ]}
                  >
                    <View
                      style={[
                        styles.groupChild2,
                        styles.groupContainerPosition,
                        styles.groupChild2Layout,
                      ]}
                    />
                    <Text style={styles.studyOfModern}>
                      Experimental Model of Diseases in Dental Healthcare
                    </Text>
                    <View style={[styles.archiveAddIcon, styles.iconLayout]}>
                      <View style={styles.vectorPosition2}>
                        <View style={styles.vectorPosition2}>
                          <TouchableHighlight
                            style={[styles.vector3, styles.vectorPosition1]}
                            underlayColor="#fff"
                            activeOpacity={0.2}
                            onPress={() => navigation.toggleDrawer()}
                          >
                            <Image
                              style={[
                                styles.icon,
                                styles.iconLayout2,
                                styles.iconLayout3,
                              ]}
                              resizeMode="cover"
                              source={require("../assets/vector10.png")}
                            />
                          </TouchableHighlight>
                          <Image
                            style={[
                              styles.vectorIcon3,
                              styles.iconLayout2,
                              styles.iconLayout3,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/archiveadd.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <Pressable style={[styles.arrowUpIcon, styles.iconLayout]}>
                      <TouchableHighlight
                        style={styles.vectorPosition2}
                        underlayColor="#fff"
                        activeOpacity={0.2}
                        onPress={() => navigation.toggleDrawer()}
                      >
                        <Image
                          style={[
                            styles.icon,
                            styles.iconLayout2,
                            styles.iconLayout3,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/vuesaxlineararrowup.png")}
                        />
                      </TouchableHighlight>
                    </Pressable>
                    <View
                      style={[
                        styles.arrowDownIcon,
                        styles.arrowDownIconPosition,
                      ]}
                    >
                      <TouchableHighlight
                        style={styles.vectorPosition2}
                        underlayColor="#fff"
                        activeOpacity={0.2}
                        onPress={() => {}}
                      >
                        <View style={styles.vectorPosition2}>
                          <Image
                            style={[styles.vectorIcon4, styles.iconLayout2]}
                            resizeMode="cover"
                            source={require("../assets/vector12.png")}
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
                                styles.iconLayout2,
                                styles.iconLayout3,
                              ]}
                              resizeMode="cover"
                              source={require("../assets/vector13.png")}
                            />
                          </TouchableHighlight>
                          <Image
                            style={[
                              styles.vectorIcon3,
                              styles.iconLayout2,
                              styles.iconLayout3,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/archiveadd.png")}
                          />
                        </View>
                      </TouchableHighlight>
                    </View>
                    <Text style={[styles.k, styles.kTypo]}>56.9k</Text>
                    <Pressable
                      style={styles.messageParent}
                      onPress={() => navigation.navigate("Comments")}
                    >
                      <Image
                        style={[styles.messageIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/message1.png")}
                      />
                      <Text style={[styles.text, styles.kTypo]}>4682</Text>
                    </Pressable>
                    <View
                      style={[
                        styles.curewriteWrapper,
                        styles.paperWrapperSpaceBlock,
                        styles.wrapperPosition,
                      ]}
                    >
                      <Text style={styles.articlePost}>Curewrite</Text>
                    </View>
                    <View
                      style={[
                        styles.akarIconsshareBox,
                        styles.arrowDownIconPosition,
                      ]}
                    >
                      <Pressable
                        style={[styles.vector5, styles.vectorPosition1]}
                        onPress={onVectorIcon15Click}
                      >
                        <Image
                          style={[
                            styles.icon,
                            styles.iconLayout2,
                            styles.iconLayout3,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/vector15.png")}
                        />
                      </Pressable>
                    </View>
                    <Image
                      style={styles.groupChildPosition}
                      resizeMode="cover"
                      source={require("../assets/rectangle-22468.png")}
                    />
                  </View>
                  <View style={styles.groupParent1}>
                    <TouchableHighlight
                      style={styles.groupPosition}
                      underlayColor="#fff"
                      onPress={() => navigation.navigate("Dot")}
                    >
                      <Image
                        style={styles.iconLayout3}
                        resizeMode="cover"
                        source={require("../assets/group-21.png")}
                      />
                    </TouchableHighlight>
                    <Pressable
                      style={styles.groupChild4Position}
                      onPress={() => navigation.navigate("NetworkProfiles2")}
                    >
                      <Image
                        style={styles.iconLayout3}
                        resizeMode="cover"
                        source={require("../assets/ellipse-12.png")}
                      />
                    </Pressable>
                    <Text style={[styles.m, styles.sTypo]}>M</Text>
                    <Pressable
                      style={[
                        styles.drMinAkhterContainer,
                        styles.hoursAgoPosition,
                      ]}
                      onPress={() => navigation.navigate("NetworkProfiles2")}
                    >
                      <Text style={styles.drMinAkhterTypo}>Dr. Min Akhter</Text>
                    </Pressable>
                    <Text
                      style={[
                        styles.hoursAgo,
                        styles.latest1Typo,
                        styles.hoursAgoPosition,
                      ]}
                    >
                      15 hours ago
                    </Text>
                  </View>
                </View>
                <View
                  style={[styles.paperWrapper, styles.paperWrapperSpaceBlock]}
                >
                  <Text style={styles.articlePost}>Paper</Text>
                </View>
                <ImageBackground
                  style={[styles.image5Icon, styles.iconLayout1]}
                  resizeMode="contain"
                  source={require("../assets/image5.png")}
                />
              </View>
              <View style={[styles.frameParent1, styles.groupFrameLayout]}>
                <View
                  style={[styles.paperContainer, styles.paperWrapperSpaceBlock]}
                >
                  <Text style={styles.articlePost}>Paper</Text>
                </View>
                <View style={[styles.groupView, styles.groupFrameLayout]}>
                  <View
                    style={[
                      styles.rectangleContainer,
                      styles.groupContainerPosition,
                    ]}
                  >
                    <View
                      style={[
                        styles.groupChild2,
                        styles.groupContainerPosition,
                        styles.groupChild2Layout,
                      ]}
                    />
                    <Text style={styles.studyOfModern}>
                      Diet plan affect on Immune system of Human beings
                    </Text>
                    <Image
                      style={[styles.archiveAddIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd1.png")}
                    />
                    <Image
                      style={[styles.arrowUpIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd1.png")}
                    />
                    <Image
                      style={[
                        styles.arrowDownIcon,
                        styles.arrowDownIconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd1.png")}
                    />
                    <Text style={[styles.k, styles.kTypo]}>26.9k</Text>
                    <View style={styles.messageParent}>
                      <Image
                        style={[styles.messageIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/message2.png")}
                      />
                      <Text style={[styles.text, styles.kTypo]}>500</Text>
                    </View>
                    <View
                      style={[
                        styles.aimmsWrapper,
                        styles.paperWrapperSpaceBlock,
                        styles.wrapperPosition,
                      ]}
                    >
                      <Text style={styles.articlePost}>AIMMS</Text>
                    </View>
                    <Image
                      style={[
                        styles.akarIconsshareBox,
                        styles.arrowDownIconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/archiveadd1.png")}
                    />
                    <View
                      style={[styles.groupChild8, styles.groupChildPosition]}
                    />
                  </View>
                  <View style={styles.groupParent1}>
                    <Image
                      style={styles.groupPosition}
                      resizeMode="cover"
                      source={require("../assets/group-22.png")}
                    />
                    <Image
                      style={styles.groupChild4Position}
                      resizeMode="cover"
                      source={require("../assets/ellipse-13.png")}
                    />
                    <Text style={[styles.m, styles.sTypo]}>M</Text>
                    <Text
                      style={[
                        styles.sunnyFernandes,
                        styles.drMinAkhterTypo,
                        styles.hoursAgoPosition,
                      ]}
                    >
                      Dr. Mathew Hayden
                    </Text>
                    <Text
                      style={[
                        styles.hoursAgo,
                        styles.latest1Typo,
                        styles.hoursAgoPosition,
                      ]}
                    >
                      21 hours ago
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.image6Icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image-6.png")}
                />
              </View>
            </View>
            <Pressable
              style={[styles.groupFrame, styles.groupFrameLayout]}
              onPress={() => navigation.navigate("NetworkProfiles2")}
            >
              <View style={[styles.groupView, styles.groupFrameLayout]}>
                <View
                  style={[
                    styles.rectangleContainer,
                    styles.groupContainerPosition,
                  ]}
                >
                  <View
                    style={[
                      styles.groupChild2,
                      styles.groupContainerPosition,
                      styles.groupChild2Layout,
                    ]}
                  />
                  <Text
                    style={styles.studyOfModern}
                  >{`Study of Modern business management & Healthcare`}</Text>
                  <Image
                    style={[styles.rectangleIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/image-6.png")}
                  />
                  <Image
                    style={[styles.archiveAddIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd1.png")}
                  />
                  <Image
                    style={[styles.arrowUpIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd1.png")}
                  />
                  <Image
                    style={[styles.arrowDownIcon, styles.arrowDownIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/archiveadd1.png")}
                  />
                  <Text style={[styles.k, styles.kTypo]}>15.3k</Text>
                  <View style={[styles.arrowUpIcon, styles.iconLayout]}>
                    <TouchableHighlight
                      style={styles.vectorPosition2}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={() => navigation.toggleDrawer()}
                    >
                      <Image
                        style={[
                          styles.icon,
                          styles.iconLayout2,
                          styles.iconLayout3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/archiveadd1.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View
                    style={[styles.arrowDownIcon, styles.arrowDownIconPosition]}
                  >
                    <View style={styles.vectorPosition2}>
                      <View style={styles.vectorPosition2}>
                        <Image
                          style={[styles.vectorIcon6, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../assets/vector16.png")}
                        />
                        <TouchableHighlight
                          style={styles.vector6}
                          underlayColor="#fff"
                          activeOpacity={0.2}
                          onPress={() => navigation.toggleDrawer()}
                        >
                          <Image
                            style={[styles.icon11, styles.iconLayout3]}
                            resizeMode="cover"
                            source={require("../assets/vector17.png")}
                          />
                        </TouchableHighlight>
                        <Image
                          style={[
                            styles.vectorIcon3,
                            styles.iconLayout2,
                            styles.iconLayout3,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/archiveadd1.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={[styles.k, styles.kTypo]}>56.9k</Text>
                  <View style={styles.messageParent}>
                    <Image
                      style={[styles.messageIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/message2.png")}
                    />
                    <Text style={[styles.text, styles.kTypo]}>1000</Text>
                  </View>
                  <View
                    style={[
                      styles.articlePostWrapper,
                      styles.paperWrapperSpaceBlock,
                      styles.wrapperPosition,
                    ]}
                  >
                    <Text style={styles.articlePost}>Article Post</Text>
                  </View>
                  <View
                    style={[
                      styles.akarIconsshareBox,
                      styles.arrowDownIconPosition,
                    ]}
                  >
                    <Image
                      style={[
                        styles.vectorIcon8,
                        styles.vectorPosition,
                        styles.iconLayout2,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/vector19.png")}
                    />
                    <TouchableHighlight
                      style={styles.vectorPosition}
                      underlayColor="#fff"
                      activeOpacity={0.2}
                      onPress={onVectorIcon20Click}
                    >
                      <Image
                        style={[
                          styles.icon,
                          styles.iconLayout2,
                          styles.iconLayout3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/vector19.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View
                    style={[styles.groupChild3, styles.groupChildPosition]}
                  />
                </View>
                <View style={styles.groupParent1}>
                  <Pressable
                    style={styles.groupPosition}
                    onPress={() => navigation.navigate("Dot")}
                  >
                    <Image
                      style={styles.iconLayout3}
                      resizeMode="cover"
                      source={require("../assets/group-21.png")}
                    />
                  </Pressable>
                  <Image
                    style={styles.groupChild4Position}
                    resizeMode="cover"
                    source={require("../assets/ellipse-14.png")}
                  />
                  <Text style={[styles.s, styles.sTypo]}>S</Text>
                  <Text
                    style={[
                      styles.sunnyFernandes,
                      styles.drMinAkhterTypo,
                      styles.hoursAgoPosition,
                    ]}
                  >
                    Sunny Fernandes
                  </Text>
                  <Text
                    style={[
                      styles.hoursAgo,
                      styles.latest1Typo,
                      styles.hoursAgoPosition,
                    ]}
                  >
                    21 hours ago
                  </Text>
                </View>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <View
          style={[
            styles.frameParent2,
            styles.frameParentFlexBox,
            styles.frameParentPosition,
          ]}
        >
          <TouchableHighlight
            style={styles.essentialsHomeParent}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Publish")}
          >
            <>
              <Image
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={styles.mt8}>Home</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.essentialsHomeParent, styles.ml42]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("NetworkPaper")}
          >
            <>
              <Image
                resizeMode="cover"
                source={require("../assets/frame1.png")}
              />
              <Text style={styles.mt8}>Network</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.essentialsHomeParent, styles.ml42]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <>
              <Image
                resizeMode="cover"
                source={require("../assets/report.png")}
              />
              <Text style={styles.mt8}>Database</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.essentialsHomeParent, styles.ml42]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Vault")}
          >
            <>
              <Image
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
              <Text style={styles.mt8}>Vault</Text>
            </>
          </TouchableHighlight>
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
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameParentPosition: {
    left: 43,
    flexDirection: "row",
  },
  frameLayout: {
    width: 24,
    height: 24,
  },
  iconLayout2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vectorPosition2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  homeLayout: {
    lineHeight: 16,
    letterSpacing: 0.1,
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    height: "31.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: 55,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 8,
    backgroundColor: Color.gray_400,
  },
  groupContainerPosition: {
    width: 357,
    left: 0,
    position: "absolute",
  },
  groupFrameLayout: {
    height: 498,
    width: 357,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 303,
    width: 357,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    height: 24,
    position: "absolute",
  },
  arrowDownIconPosition: {
    top: 408,
    width: 20,
    height: 24,
    position: "absolute",
  },
  kTypo: {
    color: Color.gray_1800,
    fontWeight: "900",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  paperWrapperSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_xl,
    backgroundColor: Color.brandBlue,
    flexDirection: "row",
    position: "absolute",
  },
  wrapperPosition: {
    top: 64,
    paddingHorizontal: Padding.p_md,
    borderRadius: Border.br_xl,
    left: 13,
  },
  groupChildPosition: {
    height: 9,
    width: 7,
    left: 306,
    top: 416,
    position: "absolute",
  },
  sTypo: {
    fontSize: FontSize.size_2xl,
    top: 8,
    color: Color.white3,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
    position: "absolute",
  },
  drMinAkhterTypo: {
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  hoursAgoPosition: {
    left: 42,
    position: "absolute",
  },
  latest1Typo: {
    color: Color.gray_1600,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  vectorPosition1: {
    top: "8.33%",
    position: "absolute",
  },
  vectorPosition: {
    left: "8.33%",
    right: "8.33%",
    width: "83.33%",
    height: "75%",
    bottom: "12.5%",
    top: "12.5%",
    position: "absolute",
  },
  papers1Typo: {
    color: Color.brandBlue,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
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
  networkPaperChild: {
    top: 158,
    left: 207,
    width: 118,
    height: 71,
    display: "none",
    position: "absolute",
  },
  networkPaperItem: {
    top: 166,
    left: 194,
    width: 136,
    height: 64,
    display: "none",
    position: "absolute",
  },
  network: {
    fontSize: FontSize.size_9xl,
    letterSpacing: 0.3,
    lineHeight: 36,
    color: Color.black01,
    fontWeight: "700",
  },
  networkWrapper: {
    top: 58,
    left: 28,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_md,
  },
  wrapper: {
    height: 48,
    width: 48,
    top: 1,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    left: 37,
    width: 18,
    height: 18,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 52,
    left: 290,
    height: 49,
  },
  networkPaperInner: {
    top: 112,
    width: 375,
    backgroundColor: Color.gray_400,
    left: 0,
    position: "absolute",
  },
  container: {
    top: 130,
    left: 314,
    width: 42,
    height: 40,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
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
    top: 442,
  },
  studyOfModern: {
    left: 14,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    color: Color.neutral900,
    width: 343,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 94,
  },
  archiveAddIcon: {
    left: 299,
    top: 409,
  },
  arrowUpIcon: {
    left: 18,
    top: 409,
  },
  arrowDownIcon: {
    left: 76,
  },
  k: {
    top: 412,
    left: 41,
    width: 35,
  },
  messageIcon: {
    top: 0,
    left: 0,
  },
  text: {
    top: 3,
    left: 26,
    width: 33,
  },
  messageParent: {
    left: 145,
    width: 58,
    top: 409,
    height: 24,
    position: "absolute",
  },
  articlePost: {
    fontSize: FontSize.size_2xs,
    color: Color.white3,
    fontWeight: "900",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  articlePostWrapper: {
    width: 83,
    left: 13,
  },
  akarIconsshareBox: {
    left: 324,
    overflow: "hidden",
  },
  groupChild3: {
    backgroundColor: Color.brandBlue,
  },
  rectangleContainer: {
    top: 48,
    height: 450,
  },
  groupPosition: {
    height: 4,
    width: 15,
    left: 302,
    top: 12,
    position: "absolute",
  },
  groupChild4Position: {
    height: 36,
    width: 36,
    top: 0,
    left: 0,
    position: "absolute",
  },
  s: {
    left: 12,
  },
  sunnyFernandes: {
    top: 1,
  },
  hoursAgo: {
    top: 19,
    fontSize: FontSize.size_base,
  },
  groupParent1: {
    width: 317,
    height: 37,
    left: 13,
    top: 0,
    position: "absolute",
  },
  groupView: {
    top: 0,
  },
  groupWrapper: {
    top: 1264,
  },
  vector3: {
    left: "13.83%",
    right: "13.79%",
    bottom: "8.31%",
    width: "72.38%",
    height: "83.36%",
  },
  vectorIcon3: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    opacity: 0,
    maxHeight: "100%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "31.54%",
    width: "58.08%",
    top: "57%",
    right: "20.96%",
    bottom: "11.46%",
    left: "20.96%",
    maxHeight: "100%",
    position: "absolute",
  },
  vector4: {
    left: "46.25%",
    top: "11.46%",
    right: "46.25%",
    bottom: "12.17%",
    width: "7.5%",
    height: "76.38%",
    position: "absolute",
  },
  curewriteWrapper: {
    width: 71,
    left: 13,
  },
  vector5: {
    left: "3.33%",
    right: "3.33%",
    bottom: "8.33%",
    width: "93.34%",
    height: "83.33%",
  },
  m: {
    left: 11,
  },
  drMinAkhterContainer: {
    top: 1,
  },
  paperWrapper: {
    left: 86,
    top: 112,
    width: 48,
  },
  image5Icon: {
    top: 141,
  },
  paperContainer: {
    top: 112,
    width: 48,
    left: 75,
  },
  aimmsWrapper: {
    width: 57,
    left: 13,
  },
  groupChild8: {
    backgroundColor: Color.white3,
  },
  image6Icon: {
    top: 144,
  },
  frameParent1: {
    top: 632,
  },
  groupContainer: {
    height: 1762,
    top: 0,
  },
  vectorIcon6: {
    height: "25.29%",
    width: "50.58%",
    top: "60.13%",
    right: "24.71%",
    bottom: "14.58%",
    left: "24.71%",
    maxHeight: "100%",
    position: "absolute",
  },
  icon11: {
    maxHeight: "100%",
  },
  vector6: {
    left: "50%",
    top: "14.58%",
    bottom: "15.29%",
    width: 0,
    height: "70.12%",
    position: "absolute",
  },
  vectorIcon8: {
    maxHeight: "100%",
  },
  groupFrame: {
    top: 506,
  },
  groupParent: {
    height: 1576,
    maxHeight: 1576,
    width: "100%",
  },
  frameView: {
    top: 184,
    left: 10,
    height: 530,
    overflow: "hidden",
  },
  essentialsHomeParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent2: {
    top: 750,
  },
  networkPaper: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white3,
  },
});

export default NetworkPaper;

import * as React from "react";
import { useMemo } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";
import { Margin } from "../GlobalStyles";

type BottomTabsType = {
  essentialsHome?: ImageSourcePropType;
  frame?: ImageSourcePropType;
  report?: ImageSourcePropType;

  /** Style props */
  homeColor?: string;
  networkColor?: string;
  databaseColor?: string;

  /** Action props */
  onFrameTouchableHighlightPress?: () => void;
  onFrameTouchableHighlightPress1?: () => void;
  onFrameTouchableHighlightPress2?: () => void;
  onFrameTouchableHighlightPress3?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BottomTabs = ({
  onFrameTouchableHighlightPress,
  essentialsHome,
  homeColor,
  onFrameTouchableHighlightPress1,
  frame,
  networkColor,
  onFrameTouchableHighlightPress2,
  onFrameTouchableHighlightPress3,
  report,
  databaseColor,
}: BottomTabsType) => {
  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  const networkStyle = useMemo(() => {
    return {
      ...getStyleValue("color", networkColor),
    };
  }, [networkColor]);

  const databaseStyle = useMemo(() => {
    return {
      ...getStyleValue("color", databaseColor),
    };
  }, [databaseColor]);

  return (
    <View style={styles.frameGroup}>
      <TouchableHighlight
        style={styles.container}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress}
      >
        <>
          <Image resizeMode="cover" source={essentialsHome} />
          <Text>Home</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.container, styles.ml42]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress1}
      >
        <>
          <Image resizeMode="cover" source={frame} />
          <Text>Network</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.container, styles.ml42]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress2}
      >
        <>
          <Image resizeMode="cover" source={report} />
          <Text>Database</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.container, styles.ml42]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress3}
      >
        <>
          <Image resizeMode="cover" source={require("../assets/frame.png")} />
          <Text>Vault</Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml42: {
    marginLeft: Margin.m_6xl,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameGroup: {
    top: 747,
    left: 43,
    flexDirection: "row",
    position: "absolute",
  },
});

export default BottomTabs;

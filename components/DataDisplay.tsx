import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

type DataDisplayType = {
  citationsCount?: string;
  sold?: string;
  title?: string;

  /** Style props */
  group56Width?: number | string;
  citationsColor?: string;
  citationsHeight?: number | string;
  lifescienceOfHumanityColor?: string;
  lifescienceOfHumanityWidth?: number | string;
  soldColor?: string;
  soldWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DataDisplay = ({
  citationsCount,
  sold,
  title = "title",
  group56Width,
  citationsColor,
  citationsHeight,
  lifescienceOfHumanityColor,
  lifescienceOfHumanityWidth,
  soldColor,
  soldWidth,
}: DataDisplayType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", group56Width),
    };
  }, [group56Width]);

  const citationsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", citationsColor),
      ...getStyleValue("height", citationsHeight),
    };
  }, [citationsColor, citationsHeight]);

  const lifescienceOfHumanityStyle = useMemo(() => {
    return {
      ...getStyleValue("color", lifescienceOfHumanityColor),
      ...getStyleValue("width", lifescienceOfHumanityWidth),
    };
  }, [lifescienceOfHumanityColor, lifescienceOfHumanityWidth]);

  const soldStyle = useMemo(() => {
    return {
      ...getStyleValue("color", soldColor),
      ...getStyleValue("width", soldWidth),
    };
  }, [soldColor, soldWidth]);

  return (
    <View
      style={[
        styles.citationsParent,
        styles.groupWrapperLayout,
        styles.citationsParentPosition,
        groupViewStyle,
      ]}
    >
      <Text style={[styles.citations, styles.textTypo, citationsStyle]}>
        {citationsCount}
      </Text>
      <Text
        style={[
          styles.lifescienceOfHumanity,
          styles.citationsParentPosition,
          lifescienceOfHumanityStyle,
        ]}
      >
        {title}
      </Text>
      <Text style={[styles.sold, styles.soldTypo, soldStyle]}>{sold}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  citationsParentPosition: {
    left: 0,
    width: 226,
  },
  citations: {
    width: 83,
    color: Color.white3,
  },
  lifescienceOfHumanity: {
    color: Color.gray_3600,
    lineHeight: 20,
    top: 46,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    position: "absolute",
  },
  sold: {
    width: 133,
    color: Color.white3,
  },
  citationsParent: {
    top: 0,
  },
});

export default DataDisplay;

import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

type RecognizationReadType = {
  recognization?: string;
  publishedInCurewriteJourn?: string;
};

const RecognizationRead = ({
  recognization,
  publishedInCurewriteJourn,
}: RecognizationReadType) => {
  return (
    <View style={styles.recognizationParent}>
      <Text style={[styles.abstract, styles.abstractTypo]}>
        {recognization}
      </Text>
      <Text style={[styles.containerLayout, styles.mt12]}>
        <Text style={styles.theAbstractFor}>
          <Text>{publishedInCurewriteJourn}</Text>
          <Text style={styles.blankLine1}>{` `}</Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}>500+ purchases</Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}>1000+ citations</Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}>10000+ times download</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: Margin.m_sm,
  },
  abstract: {
    fontSize: FontSize.size_3xl,
    lineHeight: 23,
    fontWeight: "700",
  },
  blankLine1: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  theAbstractFor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  containerLayout: {
    height: 126,
    width: 319,
    color: Color.black02,
    lineHeight: 19,
    letterSpacing: 0.1,
    fontSize: FontSize.nunitoSansBodySmallBold_size,
    textAlign: "left",
  },
  recognizationParent: {
    top: 532,
    left: 27,
    position: "absolute",
  },
});

export default RecognizationRead;

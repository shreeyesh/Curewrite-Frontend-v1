import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Margin, FontSize, FontFamily } from "../GlobalStyles";

type AbstractReadType = {
  abstract?: string;
  theAbstractForYourMedical?: string;
  frame18Collapsable?: boolean;
};

const AbstractRead = ({
  abstract,
  theAbstractForYourMedical,
  frame18Collapsable,
}: AbstractReadType) => {
  return (
    <View
      style={[styles.abstractParent, styles.rectangleGroupPosition]}
      collapsable={frame18Collapsable}
    >
      <Text style={[styles.abstract, styles.abstractTypo]}>{abstract}</Text>
      <Text
        style={[
          styles.theAbstractForContainer,
          styles.mt12,
          styles.containerLayout,
        ]}
      >
        <Text style={styles.theAbstractFor}>{theAbstractForYourMedical}</Text>
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
  theAbstractFor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theAbstractForContainer: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
  },
  abstractParent: {
    top: 184,
  },
});

export default AbstractRead;

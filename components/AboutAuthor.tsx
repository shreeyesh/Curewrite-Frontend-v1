import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

type AboutAuthorType = {
  aboutAuthor?: string;
};

const AboutAuthor = ({ aboutAuthor }: AboutAuthorType) => {
  return (
    <View style={styles.aboutAuthorParent}>
      <Text style={[styles.abstract, styles.abstractTypo]}>{aboutAuthor}</Text>
      <Text style={[styles.containerLayout, styles.mt12]}>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.drJohnDoe1}>Dr. John Doe</Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}> </Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}>
            MBBS, Ph.D., Fellow, College of Surgeons.
          </Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}>{`Ex- Professor & Head of Department
`}</Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text style={styles.blankLine1}>Department of Neurosurgery</Text>
        </Text>
        <Text style={styles.theAbstractFor}>
          <Text
            style={styles.blankLine1}
          >{`Dhaka Medical College & Hospital`}</Text>
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
  drJohnDoe1: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
    fontWeight: "700",
  },
  theAbstractFor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine1: {
    fontFamily: FontFamily.nunitoSansBodySmallBold,
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
  aboutAuthorParent: {
    top: 345,
    left: 24,
    position: "absolute",
  },
});

export default AboutAuthor;

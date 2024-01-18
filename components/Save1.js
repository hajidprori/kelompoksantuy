import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Save1 = ({ style }) => {
  return (
    <View style={[styles.saveLayout, style]}>
      <Text style={styles.mendaftar}>Mendaftar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  saveLayout: {
    height: 50,
    width: 200,
  },
  mendaftar: {
    top: 16,
    left: 55,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 107,
    position: "absolute",
  },
});

export default Save1;

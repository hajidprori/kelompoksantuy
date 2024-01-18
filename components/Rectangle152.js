import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle = ({ style }) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMidnightblue_100,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 62,
    elevation: 62,
    shadowOpacity: 1,
    width: 200,
    height: 50,
  },
});

export default Rectangle;

import * as React from "react";
import { Button } from "react-native-paper";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";

const Save = ({ style }) => {
  return (
    <Button
      mode="contained"
      labelStyle={styles.saveBtn}
      contentStyle={styles.saveBtn1}
    >
      GABUNG
    </Button>
  );
};

const styles = StyleSheet.create({
  saveBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "DMSans-Bold",
  },
  saveBtn1: {
    height: 50,
    width: 200,
  },
});

export default Save;

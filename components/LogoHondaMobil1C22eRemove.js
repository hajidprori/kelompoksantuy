import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const LogoHondaMobil1C22eRemove = () => {
  return (
    <ImageBackground
      style={styles.logoHondaMobil1C22eRemoveIcon}
      resizeMode="cover"
      source={require("../assets/logohondamobil1c22eremovebgpreview-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  logoHondaMobil1C22eRemoveIcon: {
    width: 80,
    height: 59,
  },
});

export default LogoHondaMobil1C22eRemove;

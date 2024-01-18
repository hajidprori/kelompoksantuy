import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image1Icon}
      resizeMode="cover"
      source={require("../assets/image-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    width: 232,
    height: 140,
  },
});

export default Image1;

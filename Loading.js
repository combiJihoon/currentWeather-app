import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Lodaing() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Your Weather!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#E4ECFA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 25,
    fontWeight: "bold",
  },
});

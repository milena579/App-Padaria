import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";

export const Categorias = ({ image, title }: { image: ImageSourcePropType; title: string }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 2,
  },
  container: {
    backgroundColor: "#EEC16A",
    width: 63,
    height: 63,
    borderRadius: 20,
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  },
});

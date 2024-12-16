import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

export const CardProduto = ({
  image,
  title,
  preco,
}: {
  image: ImageSourcePropType;
  title: string;
  preco: string;
}) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.desc}>
        <View style={styles.preco}>
          <Text style={styles.preco}>R$</Text>
          <Text style={styles.preco}>{preco}</Text>
        </View>
        <TouchableOpacity style={styles.car}>
          <Image source={require("../assets/images/carrinho.png")} />
          <Text style={styles.mais}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },

  text: {
    marginTop: 2,
  },

  container: {
    width: 100,
    height: 100,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cate: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mais: {
    fontWeight: "700",
    fontSize: 20,
    color: "#6C2218"

  },

  preco: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center"
  },

  desc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  car: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});

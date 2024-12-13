import { FontDisplay } from "expo-font";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";

export const CardProdutos = ({image, title, description, preco}: {image: ImageSourcePropType; title: string; preco: string; description: string}) => {
  return (
    <>
    
      <View style={styles.produto}>
        <View style={styles.escrita}>
          <View><Text style={styles.titulo}>{title}</Text></View>
          <View><Text  style={styles.texto}>{description}</Text></View>
          <View><Text  style={styles.valor}>R${preco}</Text></View>
        </View>
        <View style={styles.foto}>
            <Image source={image}  style={styles.image}></Image>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  produto :{
    display: "flex",
    flexDirection: "row",
    gap:10,
    width: "100%",
    height:"18%",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  escrita:{
    display: "flex",
    width:"55%",
    gap: 15,
    height:"100%",
    justifyContent: "center"
  },
  foto: {
    display: "flex",
    height: "80%",
    width: "45%",
    padding: 5
  },
  titulo: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "Quicksand",
  },
  texto: {
    fontSize: 15,
    fontFamily: "Quicksand",
  },
  valor:{
    fontSize: 15,
    fontFamily: "Quicksand",
  }
});

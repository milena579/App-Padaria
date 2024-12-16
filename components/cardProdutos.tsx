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
    <View style={styles.tudo}>
      <View style={styles.produto}>
        <View style={styles.escrita}>
          <View><Text style={styles.titulo}>{title}</Text></View>
          <View><Text  style={styles.texto}>{description}</Text></View>
          <View style={styles.preco} >
            <Text  style={styles.valor}>R${preco}</Text>
            <Image source={require("../assets/images/carrinho.png")}></Image>
          </View>
        </View>
        <View style={styles.foto}>
            <Image source={image}  style={styles.image}></Image>
        </View>
      </View>
      <hr  style={{width:"100%"}}/>
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
    height: "100%",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  tudo :{
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height:"20%",
    alignItems: "center",
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
    padding: 3  
  },
  titulo: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "Quicksand",
  },
  texto: {
    fontSize: 13,
    fontFamily: "Quicksand",
  },
  preco: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    gap: 15
  },
  valor:{
    fontSize: 15,
    fontFamily: "Quicksand",
  }
});

import React from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { Categorias } from "@/components/categorias";
import data from "@/constants/categotias.json"; 

const requireImg = (img: string) => {

  const imageMap : any = {
    "coxinhaCategoria.png": require("@/assets/images/coxinhaCategoria.png"),
    "boloCategoria.png": require("@/assets/images/boloCategoria.png"),
    "donnutCategoria.png": require("@/assets/images/donnutCategoria.png"),
    "paoCategoria.png": require("@/assets/images/paoCategoria.png"),
    "cafeCategoria.png": require("@/assets/images/cafeCategoria.png"),
  };

  return imageMap[img] || require("@/assets/images/fundo.png");
}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/fundo.png")}
        resizeMode="cover"
        style={styles.pesquisa}
      >
        <View style={styles.pesquisaContainer}>
          <Text style={styles.title}>FAÇA SEU PEDIDO</Text>
          <TextInput
            style={styles.input}
            placeholder="Pesquise por pães, bolos, doces ...."
            keyboardType="default"
          />
        </View>
      </ImageBackground>

      <View style={styles.pag}>
        <FlatList
          style={styles.categorias}
          contentContainerStyle={styles.contentContainer}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Categorias
              title={item.nome}
              image={requireImg(item.imagem)} 
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pesquisa: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 18,
    padding: 8,
    color: "#818181AA",
  },
  container: {
    flex: 1,
  },
  title: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
    margin: 20,
  },
  pesquisaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 194,
  },
  pag: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 35,
  },
  categorias: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categorias } from "@/components/categorias";
import data from "@/constants/categotias.json"

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/pesquisa.png")}
          resizeMode="cover"
          style={styles.pesquisa}
        >
          <SafeAreaView style={styles.pesquisaContainer}>
            <Text style={styles.title}>FAÇA SEU PEDIDO</Text>
            <TextInput
              style={styles.input}
              placeholder="Pesquise por pães, bolos, doces ...."
              keyboardType="default"
            />
          </SafeAreaView>
        </ImageBackground>
        <SafeAreaView style={styles.pag}>
          <SafeAreaView >
            <FlatList style={styles.categorias}
              data={data}
              renderItem={({ item }) => (
                <Categorias
                  title={item.nome}
                  image={item.imagem}
                />
              )}  
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </>
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
});

import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, ScrollView
} from "react-native";
import { Categorias } from "@/components/categorias";
import { CardProdutos } from "@/components/cardProdutos";
import { Produtos } from "@/components/produtos";

import categorias from "@/constants/categotias.json";
import destaque from "@/constants/destaque.json";
import paes from "@/constants/paes.json";
import salgado from "@/constants/salgados.json";

const requireImg = (img: string) => {
  const imageMap: any = {
    "coxinhaCategoria.png": require("@/assets/images/coxinhaCategoria.png"),
    "boloCategoria.png": require("@/assets/images/boloCategoria.png"),
    "donnutCategoria.png": require("@/assets/images/donnutCategoria.png"),
    "paoCategoria.png": require("@/assets/images/paoCategoria.png"),
    "cafeCategoria.png": require("@/assets/images/cafeCategoria.png"),
  };
  return imageMap[img] || require("@/assets/images/fundo.png");
};

const requireDestaque = (img: string) => {
  const imageMap: any = {
    "bolo.png": require("@/assets/images/bolo.png"),
    "paofrances.png": require("@/assets/images/paofrances.png"),
    "paoqueijo.png": require("@/assets/images/paoqueijo.png"),
  };
  return imageMap[img] || require("@/assets/images/fundo.png");
};

const requirePaes = (img: string) => {
  const imageMap: any = {
    "preto.png": require("@/assets/images/preto.png"),
    "paofrances.png": require("@/assets/images/paofrances.png"),
    "integral.png": require("@/assets/images/integral.png"),
    "dagua.png": require("@/assets/images/dagua.png"),
  };
  return imageMap[img] || require("@/assets/images/fundo.png");
};

const requireSalgado = (img: string) => {
  const imageMap: any = {
    "coxinha.png": require("@/assets/images/coxinha.png"),
    "croassant.png": require("@/assets/images/croassant.png"),
    "vina.png": require("@/assets/images/vina.png"),
    "pastel.png": require("@/assets/images/pastel.png"),
  };
  return imageMap[img] || require("@/assets/images/fundo.png");
};

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.pesquisa}>
          <ImageBackground
            source={require("../../assets/images/pesquisa.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.title}>FAÇA SEU PEDIDO</Text>
            <TextInput
              style={styles.input}
              placeholder="Pesquise por pães, bolos, doces ...."
              keyboardType="default"
            />
          </ImageBackground>
        </View>

        <ScrollView style={styles.conteudo}>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={categorias}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Categorias title={item.nome} image={requireImg(item.imagem)} />
            )}
          />
          <Text style={styles.titleDestaque}>Destaques</Text>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={destaque}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardProdutos
                title={item.nome}
                image={requireDestaque(item.imagem)}
                preco={item.preco}
              />
            )}
          />
          <View style={styles.titleProdu}>
            <Text style={styles.text}>Pães</Text>
            <View style={styles.vermais}>
              <Text>ver mais</Text>
            </View>
          </View>

          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={paes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Produtos
                title={item.nome}
                image={requirePaes(item.imagem)}
                preco={item.preco}
              />
            )}
          />
          
          <View style={styles.titleProdu}>
            <Text style={styles.text}>Salgados</Text>
            <TouchableOpacity style={styles.vermais}>
              <Text>ver mais</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={salgado}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Produtos
                title={item.nome}
                image={requireSalgado(item.imagem)}
                preco={item.preco}
              />
            )}
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 18,
    padding: 8,
    color: "#818181AA",
  },

  title: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
    margin: 20,
  },

  container: {
    flex: 1,
  },

  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pesquisa: {
    height: "25%",
  },

  conteudo: {
    padding: 30,
  },

  titleDestaque: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    textDecorationColor: "#D04430",
    paddingBottom: 15,
    paddingTop: 30,
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  vermais: {
    borderWidth: 1,
    borderRadius: 50,
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    paddingHorizontal: 3,
  },

  titleProdu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingTop: 25
  },
});

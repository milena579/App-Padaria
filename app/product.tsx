import { CardProdutos } from "@/components/cardProdutos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";

import dataBolos from "@/constants/bolos.json";


export default function Product() {
    const [showBanner, setShowBanner] = useState(false);

    const storeData = async (product: any) => {
        try {
            console.log("ENTROU");

            const cart = await AsyncStorage.getItem('my-cart');
            const cartProducts = cart ? JSON.parse(cart) : [];

            cartProducts.push(product);
            await AsyncStorage.setItem('my-cart', JSON.stringify(cartProducts));

            setShowBanner(true);

            setTimeout(() => {
                setShowBanner(false);
            }, 1000);

        } catch (e) {
            console.log("Erro ao salvar produto no carrinho");
        }
    }

    return (
        <>
            {/* Banner de sucesso */}
            {showBanner && (
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>Produto adicionado ao carrinho!</Text>
                </View>
            )}

            <View style={styles.tela}>
                <View style={styles.index}>
                    <Link href={"/"}>
                        <Image source={require("../../assets/images/←.png")}></Image>
                    </Link>
                    <Text style={styles.produto}>BOLOS</Text>
                </View>
                <ScrollView style={styles.produtos}>
                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        data={dataBolos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardProdutos 
                                image={{ uri: item.imagem }} 
                                title={item.nome} 
                                description={item.descricao} 
                                preco={item.preco} 
                                onPress={() => storeData(item)} 
                            />
                        )}
                    />
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    banner: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#6C2218",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000, 
    },
    bannerText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 400,
    },

    sessao: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 15
    },
    tela: {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    form: {
        display: "flex",
        width: "100%",
        height: "60%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    produto: {
        color: "#6C2218",
        fontWeight: 600,
        fontSize: 20,
        margin: 20,
        marginLeft: "22%"
    },
    index: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    produtos: {
        display: "flex",
        width: "100%"
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

// product.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { CardProdutos } from "@/components/cardProdutos";
import { Link } from "expo-router";
import bolosData from "@/constants/bolos.json"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Product() {
    const addToCart = async (product: { id: string; nome: string; imagem: string; preco: string; descricao: string; }) => {
        try {
            const storedCart = await AsyncStorage.getItem("cart");
            const cart = storedCart ? JSON.parse(storedCart) : [];
            const updatedCart = [...cart, product];
            await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
        } catch (error) {
            console.error("Erro ao adicionar ao carrinho:", error);
        }
    };

    return (
        <View style={styles.tela}>
            <View style={styles.index}>
                <Link href={"/"}>
                    <Image source={require("../../assets/images/←.png")} />
                </Link>
                <Text style={styles.produto}>BOLOS</Text>
            </View>
            <ScrollView style={styles.produtos}>
                {bolosData.map((item) => (
                    <View key={item.id}>
                        <CardProdutos
                            image={{ uri: item.imagem }}
                            title={item.nome}
                            description={item.descricao}
                            preco={item.preco}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                            <Text style={styles.addText}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    index: {
        flexDirection: "row",
        alignItems: "center",
    },
    produto: {
        color: "#6C2218",
        fontWeight: "600",
        fontSize: 20,
        margin: 20,
        marginLeft: "22%",
    },
    produtos: {
        width: "100%",
    },
    addButton: {
        backgroundColor: "#6C2218",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    addText: {
        color: "#fff",
        fontWeight: "500",
    },
});

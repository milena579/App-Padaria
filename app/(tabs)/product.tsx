import { CardProdutos } from "@/components/cardProdutos";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

interface Bolos{
    
    name:String,
    price:number,
    link:String
}

export default function Product(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [data, setData] = React.useState<Bolos[]>([]);

    return (
        <>
            <View style={styles.tela}> 
                <View style={styles.index}>
                    <Link href={"/"}>
                        <Image source={require("../../assets/images/←.png")}></Image>  
                    </Link>
                    <Text style={styles.produto}>BOLOS</Text>
                </View>
                <ScrollView style={styles.produtos}>
                    <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                    <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                    <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                    <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                    <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                    <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                </ScrollView>
            </View>
        </>
    );

}
const styles =  StyleSheet.create({
    sessao : {
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 15
    },
    tela : {
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
    }

})
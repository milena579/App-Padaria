import { CardProdutos } from "@/components/cardProdutos";
import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function Product(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    return (
        <>
            <View style={styles.tela}> 
            <View style={styles.sessao}>
                
                <Text>Bolos</Text>
            </View>
                <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                <hr style={{width:"100%"}} />
                <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                <hr style={{width:"100%"}} />
                <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                <hr style={{width:"100%"}} />
                <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
                <hr style={{width:"100%"}} />
                <CardProdutos image={require("../../assets/images/bolo.png")} title="Bolo de chocolate" description="Bolo de chocolate com ganache" preco="30,90"></CardProdutos>
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
        padding: 15
    },
    form: {
        display: "flex",
        width: "100%",
        height: "60%",
        justifyContent: "space-around",
        alignItems: "center"
    },
})
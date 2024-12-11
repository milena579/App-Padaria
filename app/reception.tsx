import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function Reception(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const fundo = {uri:'../assets/images/fundo.png'};
    return (
        <>
            <View style={styles.tela}>
                <View style={styles.banner}>
                    <ImageBackground source={require('../assets/images/reception.png')} resizeMode="cover" style={styles.image}>
                    </ImageBackground>
                </View>
                <View style={styles.sobre}>
                    <Text style={styles.textos}>
                    Há mais de 40 anos, a Padaria do Seu João é sinônimo de qualidade e tradição. Desde o primeiro pão assado, buscamos sempre oferecer o melhor, 
                    com receitas especiais e ingredientes selecionados. Com a mesma paixão de sempre, a padaria se reinventou ao longo dos anos, mantendo o compromisso 
                    de entregar produtos frescos e saborosos, com um toque único que só quem conhece a nossa história sabe reconhecer.
                    Aqui, o sabor é a nossa marca e o atendimento, a nossa identidade.
                    </Text> 
                    <Text style={[styles.bemVindo,styles.textos]}>Bem-vindo(a), e aproveite o melhor da nossa padaria!</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.seguir}><Text style={styles.textSeguir}>Conhecer Loja</Text></TouchableOpacity>
                </View>
            </View>
    </>
    );

}
const styles =  StyleSheet.create({
    tela : {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#2B1A13"
    },
    banner : {
        width: "100%",
        height: "30%"
    },
    image : {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    sobre: {
        display: "flex",
        width: "100%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    textos: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: 30,
        fontSize: 16,
        color: "#ffffff",
        fontFamily: "Quicksand",
        lineHeight: 25
    },
    bemVindo: {
       fontWeight: 700,
       display: "flex",
    },
    login : {
        display: "flex",
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 20,
    },
    button: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 20
    },
    seguir: {
        backgroundColor: "#ffffff",
        padding: 12,
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        width: "40%"
    },
    textSeguir: {
        color: "#000000",
        fontSize: 15,
        fontWeight: 500,
        fontFamily: "Quicksand"

    },
})
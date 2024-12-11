import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function Recover_password(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const fundo = {uri:'../assets/images/fundo.png'};
    return (
        <>
            <View style={styles.tela}>
                <ImageBackground source={require('../assets/images/fundo-recover.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Esqueci a senha</Text>
                    <View style={styles.login}>
                        <TextInput style={styles.input} placeholder="Email"></TextInput>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.logar}><Text style={styles.textLogar}>Enviar Email</Text></TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
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
        justifyContent: "center"
    },
    image : {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        display: "flex",
        width: "100%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center"
    },
    login : {
        display: "flex",
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 20,
    },
    titulo : {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: 10,
        fontSize: 30,
        fontWeight: 500,
        color: "#ffffff",
        fontFamily: "Quicksand"
    },
    label :{
        display:"flex",
        width: "100%",
        color: "#ffffff"
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderColor: "#ffffff",
        borderWidth: 0.5,
        color: "#ffffff",
        width: "80%",
        borderRadius: 10,
        fontFamily: "Quicksand"
    },
    senha : {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    texto: {
        color: "#ffffff",
        fontSize: 15,
        fontFamily: "Quicksand"
    },
    buttons: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: 20
    },
    logar: {
        backgroundColor: "#ffffff",
        padding: 12,
        alignItems: "center",
        borderRadius: 50,
        width: "70%"
    },
    textLogar: {
        color: "#000000",
        fontSize: 15,
        fontWeight: 500,
        fontFamily: "Quicksand"

    },
    esqueciSenha: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        alignItems: "center",
        justifyContent: "flex-end"
    }
})
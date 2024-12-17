import { Link, router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const onPress = () => {
        router.push("/(tabs)");
    };

    const fundo = {uri:'../assets/images/fundo.png'};
    return (
        <>
            <View style={styles.tela}>
                <ImageBackground source={require('../assets/images/fundo.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Login</Text>
                    <View style={styles.login}>
                        <TextInput style={styles.input} placeholder="Email"></TextInput>
                        <View style={styles.senha}>
                            <TextInput style={styles.input} placeholder="Senha"></TextInput>
                            <View style={styles.esqueciSenha}>
                                <TouchableOpacity>
                                    <Link style={styles.texto} href={"/recover_password"}>Esqueci a senha</Link>
                                </TouchableOpacity>
                            </View>
                            </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.logar}><Text style={styles.textLogar} onPress={onPress}>Logar</Text></TouchableOpacity>
                        <TouchableOpacity>
                            <Link href={"/register"} style={styles.texto}>Cadastre-se</Link>
                        </TouchableOpacity>
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
        justifyContent: "space-around",
        alignItems: "center"
    },
    login : {
        display: "flex",
        width: "100%",
        height: "40%",
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
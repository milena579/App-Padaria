import { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet } from "react-native";


export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const fundo = {uri:'../assets/images/fundo.png'};
    return (
        <>
            <View style={styles.tela}>
                <ImageBackground source={require('../assets/images/fundo.png')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.titulo}>Login</Text>
                    <View style={styles.login}>
                        <TextInput style={styles.input} placeholder="Email"></TextInput>
                        <TextInput style={styles.input} placeholder="Senha"></TextInput>
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
        justifyContent: "space-around"
    },
    image : {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    login : {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titulo : {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: 10,
        fontSize: 25,
        fontWeight: 500,
        color: "#ffffff",
    },
    label :{
        display:"flex",
        width: "100%",
        color: "#ffffff"
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderColor: "#ffffff",
        borderWidth: 2,
        color: "#ffffff",
        width: "80%",
        borderRadius: 10
    },
})
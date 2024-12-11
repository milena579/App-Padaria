import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function Product(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    return (
        <>
            <View style={styles.tela}> 
                <View style={styles.form}>
                    {/* <View style={styles.seta}></View> */}
                    <Text>Bolos</Text>
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
        justifyContent: "center"
    },
    form: {
        display: "flex",
        width: "100%",
        height: "60%",
        justifyContent: "space-around",
        alignItems: "center"
    },
})
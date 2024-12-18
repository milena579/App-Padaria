import { Link, router } from "expo-router";

import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";


export default function Profile(){
    const onPress = () => {
        router.push("/");
    }
    return (
        <>
            <View style={styles.perfil} >
                <Text style={styles.page}>PERFIL</Text>
                <View style={styles.person}>
                    <Image source={require("../../assets/images/user.webp")}style={styles.foto}></Image>
                    <Text style={styles.nome}>Olá, Juliana</Text>
                    <TouchableOpacity><Text style={styles.editar}>Editar Perfil</Text></TouchableOpacity>
                </View>
                <View style={styles.itens}>
                    <View style={styles.dados}>
                        <View style={styles.item}>
                            <Image source={require("../../assets/images/user-alt-1-svgrepo-com 1.png")}></Image>
                            <Text style={styles.input}>Juliana Silva</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require("../../assets/images/mail.png")} style={{display: "flex",  width: 25, height:25}}></Image>
                            <Text style={styles.input}>silva@email.com</Text>
                        </View>
                    </View>
                    <View style={styles.endereco}>
                        <View style={styles.item}>
                            <Text style={styles.label}>CEP:</Text>
                            <Text style={styles.input}>8092306</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Rua:</Text>
                            <Text style={styles.input}>Rua das flores</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Número:</Text>
                            <Text style={styles.input}>30</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={onPress}><Text style={styles.logout}>Logout</Text></TouchableOpacity>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    perfil : {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: 25,
    },
    page : {
        padding: 15,
        fontSize: 18,
        fontWeight: 600,
        fontFamily: "Quicksand",
        color: "#6C2218",
    },
    person : {
        display: "flex",
        width: "100%",
        height: "25%",
       alignItems: "center",
       paddingVertical: 15,
       marginVertical: 10

    },
    foto : {
        display: "flex",
        width: 100,
        height: 100,
        borderRadius:50,
        borderWidth : 2,
        borderColor: "#4D1111FF"
    },
    nome : {
        fontSize : 18,
        padding: 10,
        fontFamily: "Quicksand",
        color: "#882323FF",
        fontWeight: 600
    },
    editar : {
        backgroundColor: "#7A3131FF",
        color: "#ffffff", 
        padding: 8,
        borderRadius: 20,
        fontFamily: "Quicksand",
    },
    itens : {
        display: "flex",
        width: "100%",
        height: "60%",
        alignItems: "center",
        gap: 30
    },
    dados : {
        display: "flex",
        width: "100%",
        alignItems: "center",
    },
    endereco : {
        display: "flex",
        width: "100%",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 20, 
        borderColor: "#B4B4B4FF",
        gap: 15, 
        padding: 10
    },
    item : {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        padding: 10,
        alignItems: "center", 
        gap: 10,
    },
    input : {
        width: "100%",
        borderBottomWidth: 1,
        paddingVertical: 5,
        borderBottomColor: "#882323FF",
        fontSize: 15,
        fontFamily: "Quicksand",
    },
    label : {
        fontSize: 15,
        width: "20%",
        fontFamily: "Quicksand",
        fontWeight: 600,
        color: "#882323FF"
    },
    logout : {
        color: "#EE2424FF",
        fontFamily: "Quicksand",
        fontSize: 15
    }
})
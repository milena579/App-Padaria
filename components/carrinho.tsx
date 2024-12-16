import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
} from "react-native";

export const CardCarrinho = ({
    image,
    title,
    preco,
    qtd
}: {
    image: ImageSourcePropType;
    title: string;
    preco: string;
    qtd: number;
}) => {
    return (
        <>
            <View style={styles.container}>
                <View  style={styles.imgDesc}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.descProdu}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={styles.preco}>R$ {preco}</Text>
                    </View>
                </View>
                <View style={styles.desc}>
                    <TouchableOpacity style={styles.car}>
                        <Image source={require("../assets/images/carrinho.png")} />
                        <Text style={styles.mais}>+</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "20%",
        height: "70%",
    },

    text: {
        marginBottom: 4,
    },

    container: {
        width: "100%",
        height: 100,
        borderRadius: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },

    cate: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    mais: {
        fontWeight: "700",
        fontSize: 20,
        color: "#6C2218"

    },

    preco: {
        display: "flex",
        flexDirection: "row",
        fontWeight: "400",
        justifyContent: "center",
        alignItems: "center",


    },

    desc: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    car: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    descProdu: {

        display: "flex",
        justifyContent: "flex-start",
        marginHorizontal: 16
    },

    imgDesc : {

        width: "100%",
        height: 100,
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    }
});

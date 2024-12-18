import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
} from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export const CardCarrinho = ({
    image,
    title,
    preco,
}: {
    image: ImageSourcePropType;
    title: string;
    preco: Float;
}) => {

    // const [cart, setCart] = useState<any[]>([]);

    // useEffect(() => {
    //     const loadCart = async () => {
    //         const storedCart = await AsyncStorage.getItem("cart");
    //         if (storedCart) {
    //             setCart(JSON.parse(storedCart));
    //         }
    //     };
    //     loadCart();
    // }, []);

    // const updateCart = async (updatedCart: any[]) => {
    //     await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    //     setCart(updatedCart);
    //     onUpdatecar(updatedCart);
    // };

    // const increaseQty = () => {
    //     const updatedCart = [...cart];
    //     updatedCart[index].qtd += 1;
    //     updateCart(updatedCart);
    //     onUpdatecar(updatedCart);
    // };

    // const decreaseQty = () => {
    //     const updatedCart = [...cart];
    //     if (updatedCart[index].qtd > 1) {
    //         updatedCart[index].qtd -= 1;
    //         updateCart(updatedCart);
    //         onUpdatecar(updatedCart);
    //     }
    // };

    // const removeItem = () => {
    //     const updatedCart = [...cart];
    //     updatedCart.splice(index, 1);
    //     updateCart(updatedCart);
    //     onUpdatecar(updatedCart);
    // };


    return (
        <View style={styles.container}>
            <View style={styles.imgDesc}>
                <Image source={image} style={styles.image} />
                <View style={styles.descProdu}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.preco}>R$ {preco}</Text>
                </View>
            </View>
            <View style={styles.qtdAndTrashContainer}>
                <TouchableOpacity style={styles.trashButton} >
                    <Image source={require("@/assets/images/trash.png")} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.qtdContainer}>
                    <TouchableOpacity >
                        <Image source={require("@/assets/images/mais.png")} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.qtdText}>1</Text>
                    <TouchableOpacity >
                        <Image source={require("@/assets/images/menos.png")} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imgDesc: {
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    descProdu: {
        marginLeft: 16,
    },
    image: {
        width: "30%",
        height: "70%",
    },
    text: {
        marginBottom: 4,
    },
    preco: {
        fontWeight: "400",
    },
    qtdAndTrashContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        paddingLeft: 16,
    },
    qtdContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 18,
    },
    qtdText: {
        marginHorizontal: 8,
    },
    icon: {
        width: 17,
        height: 17,
    },
    trashButton: {
        marginBottom: 8,
    },
});

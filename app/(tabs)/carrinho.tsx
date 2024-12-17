import React from "react";
import {
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View, ScrollView, Image
} from "react-native";

import { CardCarrinho } from "@/components/carrinho";
import carrinho from "@/constants/carrinho.json";
import { Link } from "expo-router";

const requireImg = (img: string) => {
    const imageMap: any = {
        "bolo.png": require("@/assets/images/bolo.png"),
        "paofrances.png": require("@/assets/images/paofrances.png"),
        "paoqueijo.png": require("@/assets/images/paoqueijo.png"),
    };
    return imageMap[img] || require("@/assets/images/fundo.png");
};

export default function HomeScreen() {
    return (
        <>
            <View style={styles.container}>

                <View style={styles.index}>
                    <Link href={"/"}>
                        <Image source={require("../../assets/images/←.png")}></Image>
                    </Link>
                    <Text style={styles.carrinho}>SEU CARRINHO</Text>
                </View>

                <View>
                    <Text style={styles.title}>Detalhes</Text>

                    <Text>Juliana Dias Purcino</Text>
                    <Text>R. Luísa Dariva, 40 - Campina do Siqueira, Curitiba - PR, 80730-480</Text>
                </View>

                <View>

                    <Text style={styles.title}>Lista de produtos</Text>

                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        data={carrinho}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardCarrinho
                                title={item.nome}
                                image={requireImg(item.imagem)}
                                preco={item.preco}
                                qtd={item.qtd}

                            />
                        )}
                    />
                </View>

                <View style={styles.preco}>
                    <Text style={styles.pag}>
                        Forma de pagamento
                        <Text style={styles.cartao}>
                            Cartão/Débito
                        </Text>
                    </Text>
                </View>

                <View style={styles.total}>
                    <Text style={styles.title}>
                        Total
                    </Text>
                    <Text style={styles.texto}>
                        R$ 45,13
                    </Text>
                </View>


            </View>
            <View style={styles.fina}>
                <Text style={styles.finatext}>Finalizar pedido ✓</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    carrinho: {
        color: "#6C2218",
        fontWeight: 600,
        fontSize: 20,
        margin: 20,
        marginLeft: "28%"
    },

    title: {

        color: "#6C2218",
        fontWeight: 500,
        fontSize: 18,
        marginVertical: 30

    },

    container: {
        flex: 1,
        padding: 30,
        justifyContent: "flex-end"

    },

    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },


    text: {
        fontSize: 16,
        fontWeight: "500",
    },

    index: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },

    preco: {

        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30

    },

    pag: {

        borderWidth: 2,
        borderColor: "#6C2218",
        paddingRight: 0,
        padding: 10,
        borderRightWidth: 0,
        borderRadius: 50
    },

    cartao: {

        borderWidth: 2,
        borderColor: "#6C2218",
        padding: 10,
        borderRadius: 50,
        marginLeft: 110

    },

    total: {

        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30

    },

    texto: {

        fontSize: 16,
        fontWeight: 500
    },

    fina: {

        backgroundColor: "#6C2218",
        paddingVertical: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"


    },

    finatext: {

        color: "white",
        fontSize: 16,
        fontWeight: 500

    }

});

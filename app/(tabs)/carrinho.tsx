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
                    <Image source={require("../../assets/images/←.png")}></Image>
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
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    carrinho: {
        color: "#6C2218",
        fontWeight: 600,
        fontSize: 25,
        margin: 20,
        marginLeft: "22%"
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
    }

});

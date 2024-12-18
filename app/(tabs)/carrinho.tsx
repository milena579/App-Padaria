import React, { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View, ScrollView, Image
} from "react-native";

import { CardCarrinho } from "@/components/carrinho";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface cart {
    preco: Float,
    nome: string,
    imagem: string,
    qtd: number
}

export default function HomeScreen() {
    const [cartItems, setCartItems] = useState<cart[]>([]);
    const [cartTotal, setCartTotal] = useState(0);

    // Função para calcular o total do carrinho
    const calculateTotal = (items: cart[]) => {
        return items.reduce((total, item) => {
            // Garantir que 'preco' seja um número válido
            const preco = parseFloat(item.preco.toString());
            const qtd = parseInt(item.qtd.toString(), 10);

            console.log(`Calculando item: ${item.nome}, preço: ${preco}, qtd: ${qtd}`);

            // Se preço ou quantidade não forem válidos, retorna 0
            if (isNaN(preco) || isNaN(qtd)) {
                console.warn(`Valor inválido para item: ${item.nome}, preço: ${item.preco}, quantidade: ${item.qtd}`);
                return total; // Não adiciona nada ao total caso o item tenha valores inválidos
            }

            return total + (preco * qtd);
        }, 0);
    };

    useEffect(() => {
        const getCartProducts = async () => {
            try {
                const cart = await AsyncStorage.getItem("my-cart");
                const cartProducts = cart ? JSON.parse(cart) : [];
                console.log('Cart Products:', cartProducts);
                setCartItems(cartProducts);
                
                // Calcula o total após os itens serem carregados
                const total = calculateTotal(cartProducts);
                console.log('Total Calculado:', total);
                setCartTotal(total);
            } catch (e) {
                console.log("Carrinho vazio");
                setCartTotal(0); // Se não houver itens no carrinho, o total será 0
            }
        };
        getCartProducts();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.index}>
                    <Link href={"/"}>
                        <Image source={require("../../assets/images/←.png")}></Image>
                    </Link>
                    <Text style={styles.carrinho}>SEU CARRINHO</Text>
                </View>

                <ScrollView>
                    <Text style={styles.title}>Detalhes</Text>
                    <Text>Juliana Dias Purcino</Text>
                    <Text>R. Luísa Dariva, 40 - Campina do Siqueira, Curitiba - PR, 80730-480</Text>

                    <View>
                        <Text style={styles.title}>Lista de produtos</Text>
                        <FlatList
                            contentContainerStyle={styles.contentContainer}
                            data={cartItems}
                            ListEmptyComponent={<Text style={styles.texto}>Seu carrinho está vazio</Text>}
                            renderItem={({ item }) => (
                                <CardCarrinho
                                    title={item.nome}
                                    image={{ uri: item.imagem }}
                                    preco={item.preco}
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
                        <Text style={styles.title}>Total</Text>
                        <Text style={styles.texto}>R$ {cartTotal.toFixed(2)}</Text>
                    </View>
                </ScrollView>
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
        borderRightWidth: 0,
        borderRadius: 50,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: 20
    },
    cartao: {
        borderWidth: 2,
        borderColor: "#6C2218",
        padding: 10,
        borderRadius: 50,
        marginLeft: 40,
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3
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

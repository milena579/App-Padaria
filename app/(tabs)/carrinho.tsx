import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { CardCarrinho } from "@/components/carrinho";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

export default function HomeScreen() {
    const [cart, setCart] = useState<any[]>([]);

    // Carregar o carrinho do AsyncStorage
    useEffect(() => {
        const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem("cart");
            if (storedCart) {
                console.log("Carrinho carregado:", JSON.parse(storedCart)); // Verifique o carrinho carregado
                setCart(JSON.parse(storedCart));
            }
        };
        loadCart();
    }, []);
    

    // Função para adicionar ou aumentar a quantidade de um produto
    const handleAddToCart = async (product: any) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        console.log('Produto adicionado:', product); // Verifique as propriedades do produto aqui

        if (existingProductIndex >= 0) {
            // Se o produto já está no carrinho, aumenta a quantidade
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].qtd += 1;
            setCart(updatedCart);
            await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            // Se o produto não está no carrinho, adiciona o produto com quantidade 1
            const updatedCart = [...cart, { ...product, qtd: 1 }];
            setCart(updatedCart);
            await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };


    // Função para calcular o total
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.preco * item.qtd), 0).toFixed(2);
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.index}>
                <Link href={"/"}>
                    <Image source={require("../../assets/images/←.png")} />
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
                        data={cart}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <CardCarrinho
                                title={item.title}       // Certificando-se de que o título está sendo passado
                                image={{ uri: item.imagem }} // Usando URL da imagem diretamente do JSON
                                preco={item.preco}        // Certificando-se de que o preço está sendo passado
                                qtd={item.qtd}            // Certificando-se de que a quantidade está sendo passada
                                index={index}
                                onUpdatecar={handleAddToCart} // Passando a função de atualizar o carrinho
                            />
                        )}
                    />

                </View>

                <View style={styles.preco}>
                    <Text style={styles.pag}>
                        Forma de pagamento
                        <Text style={styles.cartao}>Cartão/Débito</Text>
                    </Text>
                </View>

                <View style={styles.total}>
                    <Text style={styles.title}>Total</Text>
                    <Text style={styles.texto}>R$ {calculateTotal()}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    carrinho: {
        color: "#6C2218",
        fontWeight: "600",
        fontSize: 25,
        margin: 20,
        marginLeft: "22%",
    },
    title: {
        color: "#6C2218",
        fontWeight: "500",
        fontSize: 18,
        marginVertical: 30,
    },
    container: {
        flex: 1,
        padding: 30,
        justifyContent: "flex-end",
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        marginTop: 30,
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
        paddingLeft: 20,
    },
    cartao: {
        borderWidth: 2,
        borderColor: "#6C2218",
        padding: 10,
        borderRadius: 50,
        marginLeft: 40,
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
    },
    total: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    texto: {
        fontSize: 16,
        fontWeight: "500",
    },
});

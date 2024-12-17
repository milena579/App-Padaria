import { View, Image, Text, StyleSheet } from "react-native";




export default function Profile(){
    return (
        <>
            <View style={styles.perfil} >
                <View style={styles.person}>
                    <Text>Fulano da Silva</Text>
                    <Image></Image>
                </View>
                <View style={styles.itens}>
                    <View style={styles.item}>
                        <Image></Image>
                        <Text>Fulano da silva</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    perfil : {
        
    },
    person : {

    },
    itens : {

    },
    item : {

    }
})
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";

export const Categorias = ({ image, title}: { image: string; title: string;}) => {
  
    return (

        <SafeAreaView style={styles.ajuste}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity>
                    <Image source={image} style={styles.image}/>
                </TouchableOpacity>
            </SafeAreaView>
            <Text style={styles.text}>{title}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  image: {

    width: 50,
    height: 50
    
  },

  text: {

    marginTop: 2
    
  },

  container: {
    backgroundColor: "#EEC16A",
    width: 63,
    height: 63,
    borderRadius: 20,
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"

  },

  ajuste : {

    display : "flex",
    justifyContent: "center",
    alignItems: "center"
  }


});

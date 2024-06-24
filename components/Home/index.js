import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Pressable } from 'react-native';

const Home = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        
        <View style={estilo.container}>
            <LinearGradient
              colors={['#b3cde0', '#6497b1', '#005b96']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={estilo.background}
            >
              <Text style={estilo.text}>Seja Bem Vindo Usuário</Text>

              <TouchableWithoutFeedback
              onPressIn={() => setIsHovered(true)}
              onPressOut={() => setIsHovered(false)}
              >
                <View style={[estilo.buttom, isHovered && estilo.buttomHovered]}>
                  <Text style={estilo.click}>Começar Agora</Text>
                </View>
              </TouchableWithoutFeedback>
            </LinearGradient>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
    },
    background: {
      width: '100%',
      height: 900,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      },
      text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
      },
      buttom: {
        padding: 20,
        backgroundColor: 'orange',
        borderRadius: 10,
      },
      buttomHovered: {
        backgroundColor: '#e4b05f',
      },
      click: {
        color: '#ffffff',
        fontSize: 16,
      },

});

export default Home;
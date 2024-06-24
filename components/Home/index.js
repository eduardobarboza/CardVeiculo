import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Button } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Pressable } from 'react-native';

const Home = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [gradientColors, setGradientColors] = useState(['#4c669f', '#3b5998', '#192f6a']);
    const changeGradientColors = () => {
    const newColors = gradientColors[0] === '#4c669f' 
      ? ['#000000', '#434343', '#666666']
      : ['#4c669f', '#3b5998', '#192f6a']; 

    setGradientColors(newColors);
  };

    return (
        
        
            <LinearGradient colors={gradientColors} style={estilo.linearGradient}
            >
              <View style={estilo.content}>
                <Button title="Alterar Cor do Gradiente" onPress={changeGradientColors} />
              </View>
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
        
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
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
      troca: {
        width: 30,
        height: 30,
        padding: 10,
      },
      linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
      },

});

export default Home;
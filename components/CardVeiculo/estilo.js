import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        width: 300,
        height: 285,
        justifyContent: 'space-between',
        marginBottom: 15
    },
    titulo: {
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#0000009e',
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    valor: {
        padding: 5,
        backgroundColor: '#0000009e',
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})

export default estilo;
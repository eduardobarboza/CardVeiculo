import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        paddingVertical: 19,
        paddingStart: 8,
        borderBottomColor: '#ccc',
        borderBottomwidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    head_title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#444',
        marginHorizontal: 7
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slides: {
        flexDirection: 'row',
        width: 400, 
        height: 300
    },
    foto: {
        width: 450,
        height: 300
    },
    info: {
        width: 350,
        textAlign: 'left',
        fontWeight: 'bold', 
        fontSize: 50
    }
})

export default estilo;
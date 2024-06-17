import { Text, View, FlatList, ScrollView } from "react-native";
import Lista_veiculos from '../../dados'
import CardVeiculo from "../CardVeiculo";
import estilo from './estilo'

export default function Veiculo(props) {
    return (
        <View style={estilo.container}>
            <ScrollView>
                <FlatList
                    data={Lista_veiculos}
                    renderItem={({ item }) => <CardVeiculo props={props} veiculo={item} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    )
}
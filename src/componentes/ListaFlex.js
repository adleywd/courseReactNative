import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Maria', nota: 7.3 },
    { id: 3, nome: 'José', nota: 8.0 },
    { id: 4, nome: 'Alfredo', nota: 8.9 },
    { id: 5, nome: 'Marcos', nota: 5.9 },
    { id: 6, nome: 'Tulipa', nota: 5.0 },
    { id: 7, nome: 'Tobias', nota: 3.9 },
    { id: 8, nome: 'Osvalod', nota: 2.5 },
    { id: 9, nome: 'Pedro', nota: 9.9 },

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Maria', nota: 7.3 },
    { id: 13, nome: 'José', nota: 8.0 },
    { id: 14, nome: 'Alfredo', nota: 8.9 },
    { id: 15, nome: 'Marcos', nota: 5.9 },
    { id: 16, nome: 'Tulipa', nota: 5.0 },
    { id: 17, nome: 'Tobias', nota: 3.9 },
    { id: 18, nome: 'Osvalod', nota: 2.5 },
    { id: 19, nome: 'Pedro', nota: 9.9 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text> Nome: {props.nome} </Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    // {item} = props.item
    // Item possui nome e nota
    // {...item} é um compoennte spread
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }
    
    // primeiro parametro é o aluno, o segundo é um index(uma chave unica)
    // index.toString() ou `${index}`
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}
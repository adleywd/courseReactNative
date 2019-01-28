import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {

    /*
        Um componente controlado necessita do onChageText para atualizar o estado da variavel texto
        Caso não esteja com onChangeText para alterar o valor do estado, ele sempre retorna ao estado original, vazio.
        Para fazer com que o Component não seja controla, devemos inicializar com nulo:
        state = {
            text: null
        }
    */

    state = {
        texto: ''
    }

    alterarText = texto => {
        this.setState({ texto }) // por o nome ser igual da chave do State com o do parametro ele já assume o valor, do contrario teria q fazer texto: texto
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarText} />
            </View>
        )
    }
}
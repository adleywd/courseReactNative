import React, { Component } from 'react'
import { View, Text, TouchableHighlight} from 'react-native'

// A classe componente precisar de um render()
export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    // Quando não for um arrow function, precisa dar bind no this.
    // constructor (props){
    //     super(props)
    //     this.state = {/* .... */}
    //     this.maisUm = this.maisUm.bind(this)
    // }
    // maisUm() {
    //     this.setState( {numero: this.state.numero + 1 })
    // }

    maisUm() {
        this.setState( {numero: this.state.numero + 1 })
    }

    limpar = () =>
        this.setState( {numero: this.props.numeroInicial} )

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    // Ou usar um arrow no => this.maisUm
                    onPress={() => this.maisUm()} // Isso se torna necessário para poder acessar o this(instancia de Contador) dentro da função maisUm()
                    onLongPress={this.limpar}>   
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

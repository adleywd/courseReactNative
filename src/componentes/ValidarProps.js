import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

// Constante ValidarProps que recebe props
const ValidarProps = props =>
    <Text style={{ fontSize:35 }}>
    {props.label} 
    {props.ano + 2000}
    </Text>

// {props.label || 'Olá'} -- é possível validade pois nulo, undefined e falso se resolvem para False 

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps
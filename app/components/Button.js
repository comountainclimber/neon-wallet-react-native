import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class Button extends React.Component {
    static defaultProps = {
        disabled: false
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.button} disabled={this.props.disabled}>
                <Text style={styles.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4D933B',
        marginHorizontal: 20,
        height: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    }
})

export default Button

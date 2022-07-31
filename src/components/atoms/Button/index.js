import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native'

const Button = ({ icon, variant, buttonStyle, color, labelStyle, handleOnPress, label, upperCase }) => {
    return (
        <PaperButton icon={icon}
            mode={variant}
            style={buttonStyle}
            color={color}
            labelStyle={labelStyle}
            uppercase={upperCase}
            onPress={() => handleOnPress()}>
            <Text>{label}</Text>
        </PaperButton>
    );
}
export default Button;

export const ButtonStyles = StyleSheet.create({
    splashButtonStyle: {
        fontSize:18,
        fontWeight: 'bold',
    },
    textButtonStyle: {
        fontSize:14,
        fontWeight: '600',
        marginTop:20
    },
    profileButtonStyle:{
        fontSize:16,
        fontWeight: '700',
    }
});

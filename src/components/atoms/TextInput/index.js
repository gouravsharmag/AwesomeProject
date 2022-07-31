import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import theme from '../../../theme';

const TextInput = ({ label, labelStyle, text, leftIcon, rightIcon, placeholder, onChangeText, error, errorColorYellow, errorColorRed, mode, disabled, theme, outlineColor, outlineColorYellow, style, errorMessage, important, multiline, ...restProps }) => {
    // console.log("ErrorMessgae " + errorMessage);
    // console.log("Error " + error);
    return (
        <View>
            <PaperTextInput
                style={style}
                label={<Text style={labelStyle}>{label} {important && <Text style={styles.important} >*</Text>}</Text>}
                value={text}
                disabled={disabled}
                mode={mode}
                onChangeText={onChangeText}
                placeholder={placeholder}
                left={leftIcon}
                right={rightIcon}
                theme={theme}
                outlineColor={error === true ? "#F8E59F" : errorColorRed === true ? "#FF0000" : outlineColor}
                multiline={multiline}
                {...restProps}
            />
            {
                error && (<Text style={[styles.errorStyle, styles.errorTextStyle]}>{errorMessage}</Text>)
            }
            {
                errorColorYellow && (<Text style={styles.errorStyleYellow}>{errorMessage}</Text>)
            }
            {
                errorColorRed && (<Text style={styles.important}>{errorMessage}</Text>)
            }
        </View>
    );
}

export default TextInput;

const styles = StyleSheet.create({
    labelStyle: {
        fontWeight: '600'
    },
    errorStyle: {
        color: "#F8E59F"
    },
    errorTextStyle: {
        marginHorizontal: 20
    },
    errorStyleYellow: {
        color: "#FFC600"
    },
    important: {
        color: theme.palette.RED
    }
});
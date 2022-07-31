import React, { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextInput from "../../atoms/TextInput";
import Typography, { TextStyles } from "../../atoms/Typography";
import { TextInput as PaperTextInput } from 'react-native-paper';
import theme, { textInputGreyBorder } from "../../../theme";
import { SCREEN_ROUTE_MAPPING, SEND_CREDITS } from "../../../utils/string";

const PinAlertDialog = ({ showPinAlertDialog, setShowPinAlertDialog, confirmationFunction, amount, accountName}) => {
    const [enterPassword, setEnterPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [enterPasswordError, setEnterPasswordError] = useState({
        isValid: true,
        errorMessage: '',
    });

    const validateEnterPassword = enterPassword => {
        const result = {
            isValid: true,
            errorMessage: '',
        };
        if (enterPassword == '') {
            result.errorMessage = 'Password cannot be empty';
            result.isValid = false;
        }
        return result;
    };

    const validateFields = () => {
        const enterPasswordValidationResult = validateEnterPassword(enterPassword);
        setEnterPasswordError(enterPasswordValidationResult);
        if (enterPasswordValidationResult.isValid == true)
            return true;
        else return false;
    };
    
    const hitConfirmButton = () => {
        const validationResult = validateFields();
        if (validationResult) {
            confirmationFunction(enterPassword);
        }
        setEnterPassword("");
    }
    const hitCancelButton = () => {
        setEnterPassword("");
        setShowPinAlertDialog(false);
    }

    return (
        <Modal visible={showPinAlertDialog}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => {
                setShowPinAlertDialog(!showPinAlertDialog)
            }}>
            <View style={styles.alert_container}>
                <View style={styles.Alert_Main_View}>
                    <Typography text={SEND_CREDITS.enter_password} textStyle={{ ...TextStyles.titleTextDarkGreen, ...styles.alertHeader }} />
                    {
                        (accountName !== undefined && accountName !== null) ? 
                        <Typography text={SEND_CREDITS.enter_password_desc+"$"+Number(amount).toFixed(2)+" to "+accountName+" ?"} textStyle={{ ...TextStyles.headingDarkgreyLarge, ...styles.alertHeaderDesc }} /> :
                        <Typography text={SEND_CREDITS.enter_password_desc+"$"+Number(amount).toFixed(2)+ " ?"} textStyle={{ ...TextStyles.headingDarkgreyLarge, ...styles.alertHeaderDesc }} />
                    }
                      <View style={styles.inputContainerAlert}>
                        <View style={styles.inputText}>
                            <TextInput
                                label={SEND_CREDITS.enter_password}
                                mode={theme.textInput.outlined}
                                style={{
                                    height: 50, backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,
                                }}
                                outlineColor={theme.palette.WHITE}
                                theme={textInputGreyBorder}
                                underlineColorAndroid="transparent"
                                keyboardType={'numeric'}
                                onChangeText={(text) => setEnterPassword(text)}
                                rightIcon={
                                    <PaperTextInput.Icon
                                        name={
                                            passwordVisible
                                                ? require('../../../assets/password-visible.png')
                                                : require('../../../assets/password-hide.png')
                                        }
                                        style={{ paddingTop: 8 }}
                                        size={20}
                                        color={theme.palette.BACKGROUND_GREEN}
                                        onPress={() => setPasswordVisible(!passwordVisible)}
                                    />
                                }
                                secureTextEntry={!passwordVisible}
                                text={enterPassword}
                                errorColorRed={!enterPasswordError.isValid}
                                errorMessage={enterPasswordError.errorMessage}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.buttonStyleCancel}
                            onPress={() => hitCancelButton()}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyleConfirm}
                            onPress={() => hitConfirmButton()}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.confirmText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    alert_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000AA',
    },
    Alert_Main_View: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.WHITE,
        width: '90%',
        borderRadius: 15,
        padding: 10
    },
    alertHeader: {
        marginVertical: 10,
        fontSize: 18
    },
    alertHeaderDesc: {
        marginHorizontal: 10,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    buttonStyleCancel: {
        backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,
        borderRadius: 10,
        paddingVertical: 12,
        flex: 1,
        marginHorizontal: 10
    },
    buttonStyleConfirm: {
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        borderRadius: 10,
        paddingVertical: 12,
        flex: 1,
        marginHorizontal: 10
    },
    cancelText: {
        color: theme.palette.TEXT_GREY,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    confirmText: {
        color: theme.palette.WHITE,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
    },
    inputText: {
        justifyContent: 'center',
        flex: 3
    },
    inputContainerAlert: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
})

export default PinAlertDialog;
import React, { useState } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import theme, { textInputGreyBorder } from '../theme';
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import { TextInput as PaperTextInput } from 'react-native-paper';
import TextInput from '../components/atoms/TextInput';
import { ASYNC_KEY, LOG_IN_SCREEN, SCREEN_ROUTE_MAPPING, ALERT_BOX_TYPE, ALERT_CONTENT } from '../utils/string';
import { Dropdown } from 'react-native-element-dropdown';
import Button, { ButtonStyles } from '../components/atoms/Button';
// import { StackActions } from '@react-navigation/native';
// import { LoginService, GetProfileService } from '../service/LoginService';
// import CountryPicker from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/molecules/Loader';
import AlertDialog from '../components/molecules/AlertDialog';

const walletWhite = require('../assets/supremewhite.png');
const splashImage = require('../assets/wallet-graphic.png');
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: theme.palette.WHITE,
        flexDirection: 'column',
    },
    header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    splashImage: {
        // position: 'relative',
        // marginTop: 150
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100
    },
    walletImage: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
    formheader: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 15


    },
    headerText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    },
    form: {
        // backgroundColor: theme.palette.WHITE,
        width: '90%',
        alignSelf: "center",
        // marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 20,
        zIndex: 10,
        marginBottom: 30,
        paddingBottom: 10,

    },
    loginbuttonstyle: {
        // marginVertical: 10,
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
    countryPicker: {
        width: "35%",
        alignSelf: "center",
        borderColor: theme.palette.PLACEHOLDER_GREY,
        borderWidth: 1,
        height: 51,
        alignItems: "center",
        padding: 2,
        flexDirection: "row",
        backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,
        borderRadius: 5,
        marginRight: 3,
        marginTop: 5,
    },
    countryCodeContainer: {
        flexDirection: "row",
        marginBottom: 10
    },
    dropdown: {
        marginRight: 5,
        borderRadius: 10,
        marginTop: "7%",
        padding: "7%",
        backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,
    },
    borderBottom: {
        borderBottomWidth :1,
        borderBottomColor: "#000",
    },
})

const LoginScreen = ({ navigation }) => {

    // const [countryCode, setCountryCode] = React.useState('IN');
    // const [withCallingCode, setWithCallingCode] = React.useState('');
    const [value, setValue] = React.useState("91");
    const [phoneNumber, setphoneNumber] = useState("");
    const [password, setpassword] = useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [loading, setIsLoading] = React.useState(false);
    const [showAlertDialog, setShowAlertDialog] = React.useState(false);
    const [dialogBoxType, setDialogBoxType] = React.useState('');
    const [dialogheaderText, setDialogheaderText] = React.useState('');
    const [dialogdescText, setDialogdescText] = React.useState('');

    const data = [
        { label: '+1', value: '1' },
        { label: '+91', value: '91' },
        { label: '+1876', value: '1876' },
    ];

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setWithCallingCode(country.callingCode);
    }

    console.log("Log In Screen");

    const handleLoginPress = async () => {
        try {
            console.log("LOGIN");
            setIsLoading(true);
            console.log("Phone Numer " + phoneNumber);
            console.log("Password " + password);
            console.log(value + "" + phoneNumber);
            const args = {
                loginId: value + phoneNumber,
                password: password

            }
            const response = await LoginService.login(args);
            console.log("Login Response : ", JSON.stringify(response.data));
            if (response.data.success) {
                AsyncStorage.setItem(
                    ASYNC_KEY.token,
                    'Bearer ' + response.data.result.token,
                );
                navigation.push(SCREEN_ROUTE_MAPPING.HomeScreen);
            }
            else {
                setShowAlertDialog(true);
                handleAlert(response.data.message);
            }
        }
        catch (e) {
            console.log(e);
            handleAlert(ALERT_CONTENT.somethingWentWrong);
        }
        finally {
            setIsLoading(false);
        }
    }

    const handleAlert = (errorMessage) => {
        setShowAlertDialog(true);
        setDialogBoxType(ALERT_BOX_TYPE.error);
        setDialogdescText(errorMessage);
        setDialogheaderText(ALERT_CONTENT.error);
    }

    const handleForgotPasswordPress = () => {
        navigation.navigate(SCREEN_ROUTE_MAPPING.SendOtpScreen, {
            screenName: "Forgot"
        }
        );
    }

    const handleSignUpPress = () => {
        navigation.navigate(SCREEN_ROUTE_MAPPING.SendOtpScreen, {
            screenName: "SignUp"
        }
        );
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <View>
                    {/* <View style={styles.splashImage}>
                        <Image source={splashImage} style={styles.walletImage} />
                    </View> */}
                    <View style={styles.form}>
                        <View style={styles.formheader}>
                            <Typography text={LOG_IN_SCREEN.title} textStyle={TextStyles.titleTextDarkGreen} />
                        </View>

                        <View style={styles.countryCodeContainer}>

                            <View style={{ width: "99%" }}>
                                <TextInput
                                    label={LOG_IN_SCREEN.username}
                                    mode={theme.textInput.outlined}
                                    style={{
                                        height: 50, marginTop: 10,...styles.borderBottom,
                                    }}
                                    outlineColor={theme.palette.WHITE}
                                    theme={textInputGreyBorder}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(phoneNumber) => setphoneNumber(phoneNumber)}
                                    value={phoneNumber}
                                />
                            </View>
                        </View>


                        <TextInput
                            label={LOG_IN_SCREEN.password}
                            mode={theme.textInput.outlined}
                            style={{ marginBottom: 20, height: 50,...styles.borderBottom, }}
                            theme={textInputGreyBorder}

                            rightIcon={
                                <PaperTextInput.Icon
                                    name={
                                        passwordVisible
                                            ? require('../assets/password-visible.png')
                                            : require('../assets/password-hide.png')
                                    }
                                    size={20}
                                    color={theme.palette.BACKGROUND_GREEN}
                                    onPress={() => setPasswordVisible(!passwordVisible)}

                                />
                            }
                            outlineColor={theme.palette.WHITE}
                            secureTextEntry={!passwordVisible}
                            onChangeText={(password) => setpassword(password)}
                            value={password}
                            keyboardType={'numeric'}
                        />
                        <Button
                            variant="text"
                            label={LOG_IN_SCREEN.forgotPassword}
                            color={theme.palette.BACKGROUND_GREEN}
                            handleOnPress={handleForgotPasswordPress}
                            upperCase={false}
                            labelStyle={ButtonStyles.textButtonStyle}
                        />
                        <Button
                            variant="outlined"
                            buttonStyle={styles.loginbuttonstyle}
                            label={LOG_IN_SCREEN.logIn}
                            color={theme.palette.WHITE}
                            labelStyle={ButtonStyles.splashButtonStyle}
                            handleOnPress={handleLoginPress}
                            upperCase={false}
                        />
                        <Button
                            variant="text"
                            label={LOG_IN_SCREEN.signUpInstead}
                            color={theme.palette.BACKGROUND_GREEN}
                            handleOnPress={handleSignUpPress}
                            upperCase={false}
                            labelStyle={ButtonStyles.textButtonStyle}
                        />
                    </View>
                </View>
            </ScrollView>
            <Loader loading={loading} loaderColor={theme.palette.PRIMARY} />
            <AlertDialog
                showDialogBox={showAlertDialog}
                setShowDialogBox={setShowAlertDialog}
                headerText={dialogheaderText}
                messageText={dialogdescText}
                dialogBoxType={dialogBoxType}
            />
        </KeyboardAvoidingView>
    );
}


export default LoginScreen
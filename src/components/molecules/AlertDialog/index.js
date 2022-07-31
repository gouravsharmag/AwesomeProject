import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text, Modal, TouchableOpacity, Alert, Image } from 'react-native';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_CONTENT, ASYNC_KEY } from '../../../utils/string';

const AlertDialog = ({ showDialogBox, setShowDialogBox, headerText, messageText, dialogBoxType, confirmationFunction, responseInfo, amountToPay }) => {
    const payBillText = "Are you sure, you want to pay $" + Number(amountToPay).toFixed(2) + "\nto Flow?"
    return (
        <Modal visible={showDialogBox}
            transparent={true}
            animationType={'fade'}>
            <View style={styles.container}>
                <View style={styles.dialogBox}>
                    {
                        dialogBoxType == 'payConfirmation' ?
                            <View style={styles.dialogBoxContent}>
                                <Typography text={headerText} textStyle={styles.headerText} />
                                <Typography text={payBillText} textStyle={styles.message} />
                                {
                                    responseInfo ?
                                        <View>
                                            <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                                <View>
                                                    <Typography text='Account Holder Name' textStyle={styles.billPaymentTitle} />
                                                    <Typography text={responseInfo.accountName} textStyle={styles.billPaymentText} />
                                                </View>
                                                <View>
                                                    <Typography text='Account Number' textStyle={styles.billPaymentTitleRight} />
                                                    <Typography text={responseInfo.accountId} textStyle={styles.billPaymentTextRight} />
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                                <View>
                                                    <Typography text='Previous Balance' textStyle={styles.billPaymentTitle} />
                                                    <Typography text={'$'+Number(responseInfo.lastBillAmount).toFixed(2)} textStyle={styles.billPaymentText} />
                                                </View>
                                                <View>
                                                    <Typography text='Total Due' textStyle={styles.billPaymentTitleRight} />
                                                    <Typography text={'$'+Number(responseInfo.currentOustandingBalance).toFixed(2)} textStyle={styles.billPaymentTextRight} />
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                                <View>
                                                    <Typography text='G.C.T.' textStyle={styles.billPaymentTitle} />
                                                    <Typography text={'$'+Number(responseInfo.gct).toFixed(2)} textStyle={styles.billPaymentText} />
                                                </View>
                                                <View>
                                                    <Typography text='Service Fee' textStyle={styles.billPaymentTitleRight} />
                                                    <Typography text={'$'+Number(responseInfo.serviceFee).toFixed(2)} textStyle={styles.billPaymentTextRight} />
                                                </View>
                                            </View>
                                        </View> : null
                                }
                                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly' }}>
                                    <TouchableOpacity
                                        style={styles.buttonStyleCancel}
                                        onPress={() => setShowDialogBox(false)}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.cancelText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttonStyleConfirm}
                                        onPress={() => confirmationFunction()}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.confirmText}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> : 
                            dialogBoxType == 'error' ?
                                <View>
                                    <Typography text={headerText} textStyle={styles.headerText} />
                                    <Typography text={messageText} textStyle={styles.message} />
                                    <TouchableOpacity
                                        style={styles.buttonStyleOk}
                                        onPress={() => setShowDialogBox(false)}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.okText}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                                : dialogBoxType == 'confirmation' ?
                                    <View>
                                        <Typography text={ALERT_CONTENT.confirmation} textStyle={styles.headerText} />
                                        <Typography text={messageText} textStyle={styles.message} />
                                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly' }}>
                                            <TouchableOpacity
                                                style={styles.buttonStyleCancel}
                                                onPress={() => setShowDialogBox(false)}
                                                activeOpacity={0.7}
                                            >
                                                <Text style={styles.cancelText}>No</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.buttonStyleConfirm}
                                                onPress={() => confirmationFunction()}
                                                activeOpacity={0.7}
                                            >
                                                <Text style={styles.confirmText}>Yes</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    : null
                    }
                </View>
            </View>
        </Modal>
    );
}

export default AlertDialog;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000AA',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.palette.BACKGROUND_GREEN,
        marginBottom: 10,
        textAlign: 'center'
    },
    dialogBox: {
        width: '90%',
        backgroundColor: theme.palette.WHITE,
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderRadius: 10
    },
    message: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.DESCRIPTION_TEXT_GREY,
        textAlign: 'center'
    },
    dialogBoxContent: {
        flexDirection: 'column',
    },
    buttonStyleCancel: {
        backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,
        width: '40%',
        borderRadius: 10,
        paddingVertical: 10,
    },
    buttonStyleOk: {
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        marginHorizontal: 20,
        marginTop: 20,
        paddingVertical: 5,
        borderRadius: 10
    },
    buttonStyleConfirm: {
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        width: '40%',
        borderRadius: 10,
        paddingVertical: 10
    },
    okText: {
        textAlign: 'center',
        fontSize: 20,
        color: theme.palette.WHITE
    },
    cancelText: {
        color: theme.palette.BACKGROUND_GREEN,
        textAlign: 'center'
    },
    confirmText: {
        color: theme.palette.WHITE,
        textAlign: 'center',
    },
    billPaymentTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    billPaymentText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.palette.BACKGROUND_GREEN
    },
    billPaymentTitleRight: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.palette.DESCRIPTION_TEXT_GREY,
        textAlign: 'right'
    },
    billPaymentTextRight: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.palette.BACKGROUND_GREEN,
        textAlign: 'right'
    },
});
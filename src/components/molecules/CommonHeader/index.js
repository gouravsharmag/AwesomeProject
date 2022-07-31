import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    goBackImage: {
        marginTop: 15, 
        marginLeft: 10,
        paddingBottom:10
    },
    goBackImageProfile:{
        paddingTop: 15, 
        paddingLeft: 10,
        paddingBottom:10,
        backgroundColor:theme.palette.BACKGROUND_GREEN,
    }
});

const CommonHeader = ({navigation,goBackColor}) => {

    const handleGoBack = () => {
       navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={goBackColor==="white"?styles.goBackImageProfile:styles.goBackImage} onPress={handleGoBack}>
                <Image source={goBackColor==="white"?require('../../../assets/go-back-white.png'):require('../../../assets/go-back.png')} />
            </TouchableOpacity>
        </View>
    );
}

export default CommonHeader
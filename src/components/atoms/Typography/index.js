import * as React from 'react';
import { StyleSheet, Text as ReactNativeText } from 'react-native';
import theme from '../../../theme';

const Typography = ({ text, textStyle, ...restProps }) => {
    return (
        <ReactNativeText
            style={textStyle} {...restProps}>{text}
        </ReactNativeText>
    );
};
export default Typography;

export const TextStyles = StyleSheet.create({
    headerTextWhite: {
        marginTop: 5,
        fontSize: 24,
        marginStart: 6,
        fontWeight: 'bold',
        color: theme.palette.WHITE
    },
    headerTextGreen: {
        marginTop:5,
        fontSize: 13,
        justifyContent:"center",
        fontWeight: 'bold',
        color: theme.palette.BACKGROUND_GREEN
    },
    titleTextDarkGreen: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.palette.HEADER_TEXT_DARK_GREEN
    },
    textDarkGreen: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.HEADER_TEXT_DARK_GREEN
    },
    descTextGrey: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    bodyTextDarkGreyFifteen: {
        fontSize: 14,
        color: theme.palette.DARK_GREY
    },
    headerTextDescGrey: {
        fontSize: 13,
        fontWeight: '500',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    headerTextUpload: {
        fontSize:13,
        fontWeight: '500',
        color: theme.palette.headerTextGreen
    },
    headerUpload: {
        fontSize:13,
        fontWeight: '400',
        color: "green"
    },
    headerTextDescGreyUpload: {
        fontSize:10,
        fontWeight: '400',
        marginBottom:2,
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    headerTextUpload: {
        fontSize:13,
        fontWeight: '500',
        color: theme.palette.headerTextGreen
    },
    headerUpload: {
        fontSize:13,
        fontWeight: '400',
        color: "green"
    },
    headerTextDescGreyUpload: {
        fontSize:10,
        fontWeight: '400',
        marginBottom:2,
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    otpNumberGrey: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    subHeadingGreen: {
        fontSize: 19,
        color: theme.palette.BACKGROUND_GREEN,
        fontWeight: 'bold',
    },
    smallHeadings: {
        fontSize: 15,
        color: theme.palette.BACKGROUND_GREEN, 
        marginLeft: 20, 
    },
    headingDarkgrey: {
        fontSize: 16,
        color: theme.palette.TEXT_GREY,
    },
    headingDarkgreyLarge:{
        fontSize:16,
        color:theme.palette.DARK_GREY_TEXT,
        fontWeight:'600'
    },
    labelTextGreen:{
        fontSize:16,
        fontWeight:'bold',
        color:theme.palette.BACKGROUND_GREEN,
    },
    timerText:{
        color:theme.palette.BACKGROUND_GREEN,
        fontSize:12,
        fontWeight:'500'
    },
    whiteButton:{
        color:theme.palette.WHITE,
        fontSize:16,
        fontWeight:'600'
    },
    labelTextGreen: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.BACKGROUND_GREEN,
    },
    timerText: {
        color: theme.palette.BACKGROUND_GREEN,
        fontSize: 12,
        fontWeight: '500'
    },
    contentTextGrey: {
        fontSize: 15,
        fontWeight: '600',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    bodyTextDarkGreyFifteen: {
        fontSize: 14,
        color: theme.palette.DARK_GREY
    },
    descTextGreen: {
        fontSize: 12,
        fontWeight:"bold",
        
        color: theme.palette.BACKGROUND_GREEN,
    },
    labelTextGrey: {
        fontSize: 16,
        fontWeight: "600",
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    uploadDocsDesc: {
        fontSize: 12,
        fontWeight: '400',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    
    },
    titleTextBlackFourteen: {
        color: theme.palette.BLACK,
        fontWeight: 'bold',
        fontSize: 14
    },
    bodyTextGreyEleven: {
        fontSize: 12,
        color: theme.palette.LIGHT_GREY2,
    },
    bodyTextGreyThirteen: {
        fontSize: 14,
        color: theme.palette.DARK_GREY,
    },
});
const theme = {
    palette: {
        PRIMARY: "#1C843B",
        SECONDRY: "#FFC600",
        BACKGROUND_GREEN: "#1C843B",
        WHITE: "#FFF",
        HEADER_TEXT_DARK_GREEN: "#35533E",
        DESCRIPTION_TEXT_GREY: "#909090",
        PLACEHOLDER_GREY: "#6faf89",
        TEXT_INPUT_BACKGROUND: '#F2F2F2',
        HOME_BACKGROUND_GREY: '#F6F6F6',
        WALLET_BALANCE_DARK_GREY: '#4f5676',
        DARK_GREY: "#707070",
        LIGHT_GREY: "#f4f4f4",
        LIGHT_GREY2: "#DCDCDC",
        BACKGROUND_GREY: '#f0f0f0',
        TEXT_GREY: '#6e6e6e',
        PRIMARY: "#1C843B",
        SECONDRY: "#FFC600",
        PINK: '#ff6a71',
        LIGHT_GREEN: '#0cad80',
        BLACK: '#000',
        DARK_GREY_TEXT: '#5f5f5f',
        CARD_LIGHT_GREEN: '#d5f3da',
        RED:"#FF0000",
    },
    textInput: {
        flat: "flat",
        outlined: "outlined",
        text: "text"
    },
}

export const textInputGreyBorder = {
    roundness: 10,
    colors: {
        primary: theme.palette.PLACEHOLDER_GREY,
        text: theme.palette.BACKGROUND_GREEN,
        background: theme.palette.WHITE,
        placeholder: theme.palette.PLACEHOLDER_GREY,
    }
}

export default theme
import React, {useState} from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import ImageView from "react-native-image-viewing";

const ImageViewer = ({loading, setModalClose, imageURL}) => {
    console.log(" Image Viewer ");
    
    const onRequestClose = () => {
        setIsVisible(false);
        setModalClose();
    }
    const images = [
        {
            uri: imageURL,
        }
    ];
    const [visible, setIsVisible] = useState(true);
    return (
        <Modal style={styles.loaderModalStyle}
            animationType="slide"
            transparent={true}
            visible={loading}>
            <View style={styles.loaderViewStyle}>
                <ImageView
                    images={images}
                    imageIndex={0}
                    visible={loading}
                    onRequestClose={() => onRequestClose()}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    loaderModalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        opacity: 0.1
    },
    loaderViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .1)'
    }
})

export default ImageViewer;
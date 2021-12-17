import React from 'react';
import {StyleSheet} from 'react-native'
import {Header} from 'react-native-elements';

const CusHeader = (props) => {
    return(
    <Header 
    placement = "center"
    centerComponent={{ text: props.title, style: {color: '#FFF'}}}
     />
    )
}

export default CusHeader

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 40, 
        borderBottomWidth: 1
    },

    title: {
        fontSize: 16,
        color: 'gray'
    }
})
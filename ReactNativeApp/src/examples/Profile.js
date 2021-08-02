import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, Button,
} from 'react-native';

export default function Profile({ navigation: { navigate } })  {


        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <View style={styles.body}>
                   {/* <View style={styles.bodyContent}>*/}
                        <Text style={styles.name}>Дмитрий </Text>
                    <Text style={styles.surname}>Олейник </Text>
                    <Text style={styles.phone}>+79047920987 </Text>
                    <Text style={styles.birthday}>16.04.1998 </Text>
                        <Text style={styles.gender}>M</Text>

                 {/*   </View>*/}
                    <TouchableOpacity style={styles.buttonContainer}
                        /*    onPress={() => goBack()}*/
                                      onPress={() =>
                                          navigate('SectList')}

                    >
                        <Text>Посмотреть расписание</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}

                                      onPress={() =>
                                          navigate('ShedExample')}


                    >
                        <Text>Список тренеров</Text>

                    </TouchableOpacity>

                </View>
            </View>
        );

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:50
    },
    name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',

    },
    surname:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',

    },
    body:{
        marginTop:30,
        alignItems: 'center'

    },

    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:40,
    },
    info:{
        fontSize:16,
        color: "#000000",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
    },
});

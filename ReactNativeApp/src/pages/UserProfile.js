import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import { List, ListItem } from "react-native-elements";


export default function  UserProfile({ navigation: { navigate } }) {
    const [dataSource,setDataSource]=useState([])
   const renderItem=({item})=>{
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar7.png'}}/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.id}>Персональный номер: {item.id}</Text>
                    <Text style={styles.attribute}>Фамилия: {item.surname}</Text>
                    <Text style={styles.attribute}>Имя: {item.name}</Text>
                    <Text style={styles.attribute}>Отчество: {item.patronymic}</Text>
                    <Text style={styles.attribute}>Номер телефона: {item.numberPhone}</Text>
                    <Text style={styles.attribute}>Email: {item.email}</Text>
                    <Text style={styles.attribute}>Дата рождения: {item.birthDate}</Text>
                    <Text style={styles.attribute}>Пол: {item.gender}</Text>
                    <Text style={styles.attribute}>Статус: {item.status}</Text>
                    <TouchableOpacity style={styles.buttonContainer}
                        /*    onPress={() => goBack()}*/
                                      onPress={() =>
                                          navigate('UpdateUserData')}

                    >
                        <Text>Заполнить профиль</Text>

                    </TouchableOpacity>
                   <TouchableOpacity style={styles.buttonContainer}

                                      onPress={() =>
                                          navigate('TrainersExample')}
                    >
                        <Text>Список тренеров</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}

                                      onPress={() =>
                                          navigate('TableShed')}
                    >
                        <Text>Расписание занятий</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}

                                      onPress={() =>
                                          navigate('InsertionShedRow')}
                    >
                        <Text>Добавить занятие</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}
                        /*    onPress={() => goBack()}*/
                                      onPress={() =>
                                          navigate('UpdateShedRow')}

                    >
                        <Text>Редактировать расписание</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}
                        /*    onPress={() => goBack()}*/
                                      onPress={() =>
                                          alert("В разработке")}

                    >
                        <Text>Удалить запись</Text>

                    </TouchableOpacity>


                </View>
            </View>
        )
    }

  const  renderSeparator=()=>{
        return(
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        )
    }

    useEffect(()=> {
        fetch('http://10.0.2.2:8080/api/fitness.com/person/personId/'+global.userId,{
            method: 'GET',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }})
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
               setDataSource(responseJson);
                //Success
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.error(error);
            });
    });

global.username=dataSource.name;
        return (
            <View style={styles.container}>
                <FlatList
                    data={dataSource}
                    ItemSeparatorComponent={renderSeparator}
                    //Item Separator View
                    renderItem={renderItem}
                />
            </View>
        );


}

const styles = StyleSheet.create({
    container:
        {
            backgroundColor: "#87CEFA",
            borderRadius:5
        },
    header:{
        backgroundColor: "#87CEFA",
        height:200,
        borderRadius:10
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
    id:{
        fontSize:22,
        color:"#000000",
        //fontWeight:'600',
        fontWeight:"bold",

    },

    attribute:{
        fontSize:22,
        color:"#000000",

    },


    body:{
        marginTop:30,
        alignItems: 'center',
        borderRadius:10,
        backgroundColor: "#FFFFFF"
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
        backgroundColor: "#87CEFA",
    },
    listItem:{
        margin:10,
        padding:10,
        width:"90%",
        borderRadius:5,
        backgroundColor: '#776677'

    },


});

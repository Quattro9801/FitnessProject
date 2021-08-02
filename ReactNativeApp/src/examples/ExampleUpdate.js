import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const URI = 'https://jsonplaceholder.typicode.com/todos/';


const ListItem = ({item}) => {
    return (
        <View style={styles.listItem}>
            <Image source={{uri:"https://www.bootdey.com/img/Content/avatar/avatar6.png"}}  style={{width:60, height:60,borderRadius:30}} />
            <Text style={styles.listText}>ID: {item.id}</Text>
            <Text style={styles.listText}>{item.surname}</Text>
            <Text style={styles.listText}>{item.name}</Text>
            <Text style={styles.listText}>{item.patronymic}</Text>
            <Text style={styles.listText}>Номер телефона: {item.numberPhone}</Text>
            <Text style={styles.listText}>Email: {item.email}</Text>
            <Text style={styles.listText}>Дата рождения: {item.birthDate}</Text>
            <Text style={styles.listText}>Пол: {item.gender}</Text>
            <Text style={styles.listText}>Статус: {item.status}</Text>
        </View>
    );
};

const ExampleUpdate = () => {
    const [items, setItems] = useState([]);
    //getData().then(items => setItems(items));


    useEffect(()=> {
        fetch('http://10.0.2.2:8080/api/getUserId/1',{
            method: 'GET',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }})
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setItems(responseJson);
                //Success
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.error(error);
            });
    });

    return (
        <SafeAreaView style={styles.parentView}>
            <FlatList
                style={styles.flatList}
                data={items}
                keyExtractor={item => item.surname.toString()}
                renderItem={({item}) => <ListItem item={item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    flatList: {
        width: '100%',
    },
    listText: {
        color: 'white',
    },
    listItem: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: '#776677',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
});

export default ExampleUpdate;

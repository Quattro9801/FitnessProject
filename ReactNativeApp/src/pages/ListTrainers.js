import {StatusBar} from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, Alert, FlatList,
} from 'react-native';
import TextInjection from 'react-native/Libraries/Text/TextInjection';



export default function  ListTrainers({ navigation: { navigate } }) {
    const [dataSource, setDataSource] = useState([])
    const render = ({item}) => {
        return (
                <View style={styles.listItem}>
                    <View style={{alignItems:"center",flex:1}}>
                    <Text style={styles.textOutput}> {item.surname}</Text>
                    <Text style={styles.attribute}> {item.name}</Text>
                    <Text style={styles.attribute}>{item.patronymic}</Text>
                    <Text style={styles.attribute}> {item.numberPhone}</Text>

                    </View>
            </View>

        )
    }
    useEffect(() => {
        fetch('http://10.0.2.2:8080/api/fitness.com/schedule/trainer',{
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

    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        );
    };

    return (
        <View style={styles.container}>

            <FlatList
                style={{flex:1}}
                ItemSeparatorComponent={ItemSeparatorView}
                data={dataSource}
                //Item Separator View
                renderItem={render}
            />




        </View>

    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    attribute:{
        fontWeight:"bold",
        fontSize:25,
    },
    image: {
        marginBottom: 40,
    },
    body:{
        marginTop:30,
        alignItems: 'center'

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },

    inputView: {
        backgroundColor: '#87CEFA',
        borderRadius: 30,
        width: '80%',
        height: 45,
        marginBottom: 20,

        alignItems: 'center',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    registration_button: {
        height: 20,
        marginBottom: 0,
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: '#00BFFF',
    },
    title:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
        marginTop: 30,
        marginBottom:30

    },
    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    },
    textOutput:{
        fontSize:19
    },



});

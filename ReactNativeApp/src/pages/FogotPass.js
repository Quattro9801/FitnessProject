import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';

export default function  ForgotPass({ navigation: { navigate } }) {
    const [dataSource,setDataSource]=useState([]);
    const [id, setId] = useState(0);
    const post=()=> {
        fetch('http://10.0.2.2:8080/api/createPerson', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: global.token
            },

            body: JSON.stringify({
                   id:global.userId
                }
            )
        })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                //Success
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.log('Error')
            });
    }

    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../screens/fitness2.png')} />
            <Text style={styles.textOutput}>Fitness App </Text>
            <StatusBar style="auto"/>

          {/*  <View style={styles.inputView}>
                <TextInput

                    style={styles.TextInput}
                    placeholder="id"
                    placeholderTextColor="#003f5c"
                    onChangeText={id => setId(id)}
                />

            </View>*/}

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>
                    post()
                }>
                <Text style={styles.loginText}>Продолжить {JSON.stringify((dataSource))}</Text>
            </TouchableOpacity>

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

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: '#87CEFA',
        borderRadius: 30,
        width: '70%',
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
        marginTop: 40,
        backgroundColor: '#00BFFF',
    },
    textOutput:{
        fontWeight:"bold",
        fontSize:22,
        marginBottom:30
    }



});


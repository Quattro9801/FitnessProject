//Страница заполнения профиля пользователя
import {StatusBar} from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, Alert, FlatList, ScrollView,
} from 'react-native';
import TextInjection from 'react-native/Libraries/Text/TextInjection';



export default function  FillingOutAProfile({ navigation: { navigate } }) {

    const [dataSource, setDataSource] = useState([])
    const [id, setId] = useState('')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [passsword, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const UpdatePost=()=> {
        fetch('http://10.0.2.2:8080/api/createPerson', {
            method: 'PUT',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: global.token
            },

            body: JSON.stringify({
                    surname:surname,
                    name:name,
                    patronymic:patronymic,
                    numberPhone:numberPhone,
                    email:email,
                    birthDate:birthDate,
                    gender:gender,
                    status:status
                }
            )
        })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                setId(global.userId)
                //Successa
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.log('Error')
            });
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../screens/agenda.png')}  style={{width:80, height:80,marginBottom: 20}} />
                <StatusBar style="auto"/>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="surname"
                        placeholderTextColor="#003f5c"
                        onChangeText={(surname) => setSurname(surname)}


                    />
                </View>


                <View style={styles.inputView}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder="name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(name) =>setName(name)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder="patronymic"
                        placeholderTextColor="#003f5c"
                        onChangeText={(patronymic) => setPatronymic(patronymic)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="numberPhone"
                        placeholderTextColor="#003f5c"
                        onChangeText={(numberPhone) => setNumberPhone(numberPhone)}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}

                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="birthDate"
                        placeholderTextColor="#003f5c"
                        onChangeText={(birthDate) => setBirthDate(birthDate)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="gender"
                        placeholderTextColor="#003f5c"
                        onChangeText={(gender) => setGender(gender)}


                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        value={dataSource.status}
                        style={styles.TextInput}
                        placeholder="status"
                        placeholderTextColor="#003f5c"
                        onChangeText={(status) => setStatus(status)}


                    />

                </View>

                <TouchableOpacity
                    style={styles.loginBtn}

                    onPress={() =>UpdatePost()

                    }>
                    <Text style={styles.loginText}>Добавить{JSON.stringify(dataSource)}</Text>
                </TouchableOpacity>




            </View>
        </ScrollView>
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
        width: '60%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#87CEFA',
    },



});


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



export default function  UpdateUserData({ navigation: { navigate } }) {

    const [dataSource, setDataSource] = useState([])
    const [id, setId] = useState(global.userId)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const UpdatePost=()=> {
     /*  fetch('http://10.0.2.2:8080/api/update/'+surname+'/'+name+'/'+patronymic+'/'+numberPhone/+'/'+email+'/'+birthDate+'/'+gender+'/'+id, {*/
        fetch('http://10.0.2.2:8080/api/fitness.com/person/'+surname+'/'+name+'/'+patronymic+'/'+numberPhone+'/'+email+'/'+birthDate+'/'+gender+'/'+status+'/'+id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: global.token
            },

           body: JSON.stringify({
               id:id,
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
               // setId(global.userId)
                //Successa
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.log('Error')
            });
    }

const getUserData=()=> {
    fetch('http://10.0.2.2:8080/api/getUserId/'+id, {
        method: 'GET',
        headers: {
            Accept: 'application/json', 'Content-Type': 'application/json', Authorization: global.token,


        }
    })
        .then(response => response.json())
        //If response is in json then in success
        .then(responseJson => {
            setDataSource(responseJson);

            //Successa
        })
        //If response is not in json then in error
        .catch(error => {
            //Error
            console.log('Error')
        });

}

   useEffect(()=>
    {
       getUserData()

    });
    const ShowAlertPost=()=>
    {
        UpdatePost()
        alert('Данные успешно сохранены')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../screens/user.png')}  style={{width:80, height:80,marginBottom: 20}} />
                <StatusBar style="auto"/>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Фамилия"
                        placeholderTextColor="#003f5c"
                        onChangeText={surname => setSurname(surname)}
                    />

                </View>


                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Имя"
                        placeholderTextColor="#003f5c"
                        onChangeText={name => setName(name)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder="Отчество"
                        placeholderTextColor="#003f5c"
                        onChangeText={patronymic => setPatronymic(patronymic)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Номер телефона"
                        placeholderTextColor="#003f5c"
                        onChangeText={numberPhone => setNumberPhone(numberPhone)}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Почтовый ящик"
                        placeholderTextColor="#003f5c"
                        onChangeText={email => setEmail(email)}

                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Дата рождения"
                        placeholderTextColor="#003f5c"
                        onChangeText={birthDate => setBirthDate(birthDate)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Пол"
                        placeholderTextColor="#003f5c"
                        onChangeText={gender => setGender(gender)}


                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Статус"
                        placeholderTextColor="#003f5c"
                        onChangeText={status => setStatus(status)}


                    />
                </View>



                <TouchableOpacity
                    style={styles.loginBtn}

                    onPress={() =>ShowAlertPost()

                    }>
                    <Text style={styles.loginText}>Сохранить</Text>
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


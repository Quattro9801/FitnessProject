import {StatusBar} from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Pressable, {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, Alert, FlatList, ScrollView, showMessage,
} from 'react-native';
import Snackbar from 'react-native-paper/src/components/Snackbar';



export default function  UpdateUserData({ navigation: { navigate } }) {
    const clientStatus = ["trainer","client"]
    const [dataSource, setDataSource] = useState([])
    const [id, setId] = useState(global.userId)
    const [name, setName] = useState(global.name);
    const[email, setEmail] = useState(global.email);
    const [surname, setSurname] = useState(global.surname);
    const [patronymic, setPatronymic] = useState(global.patronymic);
    const [numberPhone, setNumberPhone] = useState(global.numberPhone);
    const [birthDate, setBirthDate] = useState(global.birthDate);
    const [gender, setGender] = useState(global.gender);
    const [status, setStatus] = useState(global.status);
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(true);
    const onDismissSnackBar = () => setVisible(false);

    const UpdatePost=()=> {
        fetch('http://10.0.2.2:8080/api/persons/person/'+global.userId, {
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
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.log('Error')
            });
    }
    const checkRow=()=>
    {
        if (surname===null || name===null || patronymic===null || status ===null ||  surname==='' || name==='' || patronymic==='' || status ==='')
        {
            onToggleSnackBar()
        }
        else
        {
            UpdatePost()
            navigate('UserProfile')
        }

    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../screens/user.png')}  style={{width:80, height:80,marginBottom: 20}} />
                <StatusBar style="auto"/>
                <View style={styles.inputView}>
                    <TextInput
                        value={surname}
                        style={styles.TextInput}
                        placeholder="Фамилия"
                        placeholderTextColor="#808080"
                        onChangeText={surname => setSurname(surname)}
                    />


                </View>

                <View style={styles.inputView}>
                    <TextInput
                        value={name}
                        style={styles.TextInput}
                        placeholder="Имя"
                        placeholderTextColor="#808080"
                        onChangeText={name => setName(name)}



                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={patronymic}
                        style={styles.TextInput}
                        placeholder="Отчество"
                        placeholderTextColor="#808080"
                        onChangeText={patronymic => setPatronymic(patronymic)}



                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={numberPhone}
                        style={styles.TextInput}
                        placeholder="Номер телефона"
                        placeholderTextColor="#808080"
                        onChangeText={numberPhone => setNumberPhone(numberPhone)}
                        keyboardType={'numeric'}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        value={email}
                        style={styles.TextInput}
                        placeholder="Почтовый ящик"
                        placeholderTextColor="#808080"
                        onChangeText={email => setEmail(email)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={birthDate}
                        style={styles.TextInput}
                        placeholder="Дата рождения"
                        placeholderTextColor="#808080"
                        onChangeText={birthDate => setBirthDate(birthDate)}
                        keyboardType={'numeric'}



                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={gender}
                        style={styles.TextInput}
                        placeholder="Пол"
                        placeholderTextColor="#808080"
                        onChangeText={gender => setGender(gender)}



                    />
                </View>

                <View style={styles.inputView}>

                    <TextInput
                        value={status}
                        style={styles.TextInput}
                        placeholder="Статус"
                        placeholderTextColor="#808080"
                        onChangeText={status => setStatus(status)}



                    />

                </View>

                <TouchableOpacity
                    style={styles.loginBtn}

                    onPress={() =>checkRow()

                    }>
                    <Text style={styles.loginText}>Сохранить</Text>
                </TouchableOpacity>
                <Snackbar style={styles.snack}
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                          duration={1000}
                >
                    <Text styles={styles.snack}>Необходимо заполнить обязательные поля (фамилия, имя, отчество, статус)</Text>
                </Snackbar>




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
    snack:{
        backgroundColor:'#8B0000',

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


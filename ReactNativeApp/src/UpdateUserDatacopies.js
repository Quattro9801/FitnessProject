import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,Alert
} from 'react-native';
import TextInjection from 'react-native/Libraries/Text/TextInjection';



export default function  UpdateUserData({ navigation: { navigate } }) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patromymic, setPatronymic] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [passsword, setPassword] = useState('');
    const [status, setStatus] = useState('');


    return (
        <View style={styles.container}>

          {/*  <Text style={styles.title}>Изменение данных</Text>*/}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Surname"
                    placeholderTextColor="#003f5c"
                    onChangeText={surname => setSurname(surname)}
                />

            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name "
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={name => setName(name)}
                />

            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Patronymic "
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={patronymic => setPatronymic(patronymic)}
                />

            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="NumberPhone"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={numberPhone => setNumberPhone(numberPhone)}
                />

            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={email => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="BirthDate"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={birthDate => setBirthDate(birthDate)}
                />

            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Gender"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={gender => setGender(gender)}
                />

            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Status"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={status => setStatus(status)}
                />


            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>
                    navigate('SectList')
                }>
                <Text style={styles.loginText}>Сохранить</Text>
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
    body:{
        marginTop:30,
        alignItems: 'center'

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
        marginTop: 5,
        backgroundColor: '#00BFFF',
    },
    title:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
        marginTop: 30,
        marginBottom:30

    }



});

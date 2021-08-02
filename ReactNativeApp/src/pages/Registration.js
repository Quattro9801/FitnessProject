import {StatusBar} from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
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



export default function  Registration({ navigation: { navigate } }) {

    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [dataSource,setDataSource]=useState([]);
    const [id,setId]=useState('');

global.authid=dataSource.id;
const Registration=()=> {
    fetch('http://10.0.2.2:8080/api/auth/signup', {
        method: 'POST',
        headers: {Accept: 'application/json', 'Content-Type': 'application/json',},

        body: JSON.stringify({
                email: email,
                username: username,
                password: password
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


/* useEffect(()=>
    {
       Registration()
    });*/
const checkRow=()=>
{
    if(email<=1 || email>50)
    {
        alert('Длина почтового ящика должна быть не менее 1 символа и не более 30')
    }
  else if(username<=1 || username>20)
    {
        alert('Длина имени должна быть не менее 1 символа и не более 10')
    }
else
     {
       checkAlLReadyTaken()
    }

}



    const checkAlLReadyTaken=()=>
    {
    if (dataSource.message==='Error: Email is already in use!')
    {
        alert('Пользователь с такой почтой уже существует')
    }
       else if (dataSource.message==='Error: Username is already taken!')
        {
            alert('Пользователь с таким именем уже существует')
        }

        else  if (dataSource.message==='User registered successfully!')
        {
            alert("Регистрация прошла успешно")
        }
    }
   const checkAllRow=()=>
    {
        checkRow()
        Registration()
       alert("Регистрация прошла успешно")




    }
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../screens/fitness2.png')} />
            <Text style={styles.textOutput}>Fitness App </Text>
            <StatusBar style="auto"/>
            <View style={styles.inputView}>
                <TextInput

                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={email => setEmail(email)}
                />

            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Пароль"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}


                />

            </View>
            <View style={styles.inputView}>
                <TextInput

                    style={styles.TextInput}
                    placeholder="Логин"
                    placeholderTextColor="#003f5c"
                    onChangeText={username => setUserName(username)}
                />

            </View>
 {/*           <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Surname"
                    placeholderTextColor="#003f5c"
                    onChangeText={surname => setSurname(surname)}


                />

            </View>*/}

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>
                 checkAllRow()
                }>
                <Text style={styles.loginText}>Продолжить </Text>
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
        backgroundColor: '#87CEFA',
    },
    textOutput:{
        fontWeight:"bold",
        fontSize:22,
        marginBottom:30
    }



});

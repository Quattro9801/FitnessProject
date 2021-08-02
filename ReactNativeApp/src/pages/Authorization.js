import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,Alert
} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {lessOrEq} from 'react-native-reanimated';



export default function  Authorization({ navigation: { navigate } }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dataSource,setDataSource]=useState([]);
    const [accessToken,setAccessToken]=useState([]);
    const [count, setCount] = useState(0);
    const [Id, setId] = useState(null);
    const [dataSource1, setDataSource1] = useState([]);

   const ShowAlertDialog = () =>{

        Alert.alert(

            // This is Alert Dialog Title
            'Ошибка авторизации',

            // This is Alert Dialog Message.
            'Проверьте правильность введенных данных',
            [

                // Second Cancel Button in Alert Dialog.
                {text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},

                // Third OK Button in Alert Dialog
                {text: 'OK', onPress: () => console.log('OK ButtonPressed')},

            ]

        )

    }
    const ShowAlertDialogBadRequest = () =>{

        Alert.alert(

            // This is Alert Dialog Title
            'Ошибка авторизации',

            // This is Alert Dialog Message.
            'Проверьте введенные данные',
            [

                // Second Cancel Button in Alert Dialog.
                {text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},

                // Third OK Button in Alert Dialog
                {text: 'OK', onPress: () => console.log('OK ButtonPressed')},

            ]

        )

    }


    const ShowAlertDialogOk = () =>{

        Alert.alert(

            // This is Alert Dialog Title
            'Авторизация',

            // This is Alert Dialog Message.
            'Успешно',
            [

                // Second Cancel Button in Alert Dialog.
                {text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},

                // Third OK Button in Alert Dialog
                {text: 'OK', onPress: () => console.log('OK ButtonPressed')},

            ]

        )

    }

const getNavigation=()=>
{
    navigate('UserProfile');
}

    global.token='Bearer '+ dataSource.accessToken;
   global.userId=dataSource.id;
   global.email=dataSource.email;




    const getData=()=> {
        fetch('http://10.0.2.2:8080/api/auth/signin',{
            method: 'POST',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,
                Authorization: global.token} ,

            body: JSON.stringify({
                username: username,
                password: password
            }
        )})
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                //Success
            })
            //If response is not in json then in error
            .catch(error => {
                //Error

            });
    }

/*const fetchPerson=()=>
{ fetch('http://10.0.2.2:8080/api/fitness.com/person/personId/'+global.userId,{
    method: 'GET',
    headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }})
    .then(response => response.json())
    //If response is in json then in success
    .then(responseJson => {
        setDataSource1(responseJson);
        //Success
        console.log(responseJson);
    })
    //If response is not in json then in error
    .catch(error => {
        //Error
        console.error(error);
    });

}*/
    const post=()=> {
        fetch('http://10.0.2.2:8080/api/createPerson', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: global.token
            },

            body: JSON.stringify({
                    id:global.userId,
                email:global.email
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
/*const checkNullPerson=()=>
{
    if (dataSource1.length==0)
    {
        post();
        navigate("UserProfile")

    }
    else
        navigate("UserProfile");

}*/


  useEffect( ()=>
    {
        getData();

    });


const getError=()=>
{
    if (dataSource.error==='Unauthorized')
    {
        ShowAlertDialog()

    }
    else if (dataSource.status==404)
    {
        ShowAlertDialogBadRequest()
    }
    else
    {
        ShowAlertDialogOk()
        navigate('UserProfile')
    }


}
/*    const checkNew=()=>

    {
        getError()
        fetchPerson();
        checkNullPerson();

    }*/


        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../screens/fitness2.png')} />
                <Text style={styles.textOutput}>Fitness App </Text>
                <StatusBar style="auto"
                />
                <View style={styles.inputView}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder='Логин'
                        placeholderTextColor="#003f5c"
                        onChangeText={(username) => setUsername(username)}

                    />

                </View>



                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Пароль"
                        placeholderTextColor="#003f5c"

                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}


                    />
                </View>



                <TouchableOpacity
                    onPress={() =>
                        navigate('Registration')

                    }
                >
                    <Text style={styles.registration_button}>Регистрация</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() =>
                        alert("В разработке")

                    }
                >
                    <Text style={styles.forgot_button}>Забыли пароль?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginBtn}

                 onPress={() =>

           getError()


                    }>
                    <Text style={styles.loginText}>Войти </Text>
                </TouchableOpacity>

         {/*       <TouchableOpacity
                    style={styles.loginBtn}

                    onPress={() =>

                       fetchPerson()



                    }>
                    <Text style={styles.loginText}>Проверка{JSON.stringify((dataSource))}</Text>
                </TouchableOpacity>*/}
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
        marginBottom: 20,
    },
    registration_button: {
        height: 20,
        marginBottom: 20,


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

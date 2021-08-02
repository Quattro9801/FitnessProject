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



export default function  UpdateShedRow({ navigation: { navigate } }) {

    const [dataSource, setDataSource] = useState([])
    const [id, setId] = useState(0)
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [location,setLocation]=useState('');
    const [disciplineName,setDisciplineName]=useState('');
    const [hallNumber,setHallNumber]=useState(0);
    const [personId,setPersonId]=useState(0);
    const UpdateShedRow=()=> {
        /*fetch('http://10.0.2.2:8080/api/update/ShedRow/12.09.2021/14:00/1h/Beketova/Yoga99/3/1102', {*/
        //+date+'/'+time+'/'+duration+'/'+location+
        fetch('http://10.0.2.2:8080/api/fitness.com/schedule/'+date+'/'+time+'/'+duration+'/'+location+'/'+disciplineName+'/'+hallNumber+'/'+id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: global.token
            },

           body: JSON.stringify({
               // personId:personId,
                date: date,
                time: time,
                duration: duration,
                location: location,
                disciplineName: disciplineName,
                hallNumber: hallNumber,
                id:id
                }
            )
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
  /*  const getUserData=()=> {
        fetch('http://10.0.2.2:8080/api/getShed/trainer', {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json', Authorization: global.token,


            }
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

    useEffect(()=>
    {
        getUserData()

    });*/
    const PostData=()=>
    {
        UpdateShedRow()
        alert('Данные успешно сохранены')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../screens/agenda.png')}  style={{width:80, height:80,marginBottom: 20}} />
                <StatusBar style="auto"/>
          {/*      <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Id тренера"
                        placeholderTextColor="#003f5c"
                        onChangeText={personId => setPersonId(personId)}
                    />

                </View>*/}


                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Дата"
                        placeholderTextColor="#003f5c"
                        onChangeText={date => setDate(date)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder="Время"
                        placeholderTextColor="#003f5c"
                        onChangeText={time => setTime(time)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Длительность"
                        placeholderTextColor="#003f5c"
                        onChangeText={duration => setDuration(duration)}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Адреc"
                        placeholderTextColor="#003f5c"
                        onChangeText={location => setLocation(location)}

                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Занятие"
                        placeholderTextColor="#003f5c"
                        onChangeText={disciplineName=> setDisciplineName(disciplineName)}


                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Номер зала"
                        placeholderTextColor="#003f5c"
                        onChangeText={hallNumber => setHallNumber(hallNumber)}


                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Номер в расписании"
                        placeholderTextColor="#003f5c"
                        onChangeText={id => setId(id)}


                    />
                </View>



                <TouchableOpacity
                    style={styles.loginBtn}

                    onPress={() =>PostData()

                    }>
                    <Text style={styles.loginText}>Сохранить{/*{JSON.stringify(dataSource)}*/}</Text>
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


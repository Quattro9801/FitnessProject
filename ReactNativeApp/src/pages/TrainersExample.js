import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import {Header} from 'react-navigation-stack';


export default function TrainersExample ({ navigation: { navigate } }) {
const[dataSource,setDataSource]=useState([]);

    const Item=({ item })=> {
        return (

            <View style={styles.listItem}>
                            <Image source={{uri:"https://www.bootdey.com/img/Content/avatar/avatar6.png"}}  style={{width:60, height:60,borderRadius:30}} />
                <View style={{alignItems:"center",flex:1}}>
                    <Text style={{fontWeight:"bold"}}>{item.surname}</Text>
                    <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{fontWeight:"bold"}}>{item.patronymic}</Text>
                    <Text style={{fontWeight:"bold"}}>Email: {item.email}</Text>
                    <Text>Телефон: {item.numberPhone}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}

                                      onPress={() =>
                                          alert("Раздел в разработке")}

                    >
                        <Text style={{color:"blue"}}>Запись</Text>
                    </TouchableOpacity>
                </View>
            </View>

            );

    }


    const getData=()=> {
        fetch('http://10.0.2.2:8080/api/fitness.com/person/trainers/trainer',{
            method: 'GET',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }}
        )
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                //Success
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
              console.log("Error")
            });
    }
    useEffect(()=>
    {
        getData()
    });

      /* const data=[
            {
                "name": "Miyah Myles",
                "email": "miyah.myles@gmail.com",
                "position": "Data Entry Clerk",
                "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
            },
            {
                "name": "June Cha",
                "email": "june.cha@gmail.com",
                "position": "Sales Manager",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
            },
            {
                "name": "Iida Niskanen",
                "email": "iida.niskanen@gmail.com",
                "position": "Sales Manager",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
            },
            {
                "name": "Renee Sims",
                "email": "renee.sims@gmail.com",
                "position": "Medical Assistant",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
            },
            {
                "name": "Jonathan Nu\u00f1ez",
                "email": "jonathan.nu\u00f1ez@gmail.com",
                "position": "Clerical",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
            },
            {
                "name": "Sasha Ho",
                "email": "sasha.ho@gmail.com",
                "position": "Administrative Assistant",
                "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
            },
            {
                "name": "Abdullah Hadley",
                "email": "abdullah.hadley@gmail.com",
                "position": "Marketing",
                "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
            },
            {
                "name": "Thomas Stock",
                "email": "thomas.stock@gmail.com",
                "position": "Product Designer",
                "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
            },
            {
                "name": "Veeti Seppanen",
                "email": "veeti.seppanen@gmail.com",
                "position": "Product Designer",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
            },
            {
                "name": "Bonnie Riley",
                "email": "bonnie.riley@gmail.com",
                "position": "Marketing",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
            }
        ];
*/



    return (

                <FlatList

                    style={{flex:1}}
                    data={dataSource}
                    renderItem={Item}
                    keyExtractor={item => item.email}
                />


        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
    },
    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"90%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    },

    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
    },
});


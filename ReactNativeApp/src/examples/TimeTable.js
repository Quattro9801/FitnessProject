import React, { useEffect,useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import {TouchableOpacity} from 'react-native-gesture-handler';
/*const Item = ({ date }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{date.time}</Text>
        <Text style={styles.title}>{date.name}</Text>
        <Text style={styles.title}>{date.location}</Text>
    </View>
);

const DATA = [
    {
        title: '12 мая',
        data: [{name: "Кузнецов Сергей",location: "Зал №1",time: "17:00", street: "Бекетова 38", type: "Бокс"},
            {name: "Комаров Михаил", location: "Зал №1",time: "16:00", street: "Бекетова 38",type: "Йога"}],

    },
    {
        title: '13 мая',
        data: [{name: "Федоров Сергей",location: "Зал №2",time: "17:00", street: "Бекетова 38", type: "Бокс"},
            {name: "Комаров Михаил", location: "Зал №3",time: "16:00", street: "Бекетова 38",type: "Йога"}],

    },
];*/
export default function TimeTable({ navigation: { navigate } }){
    const DATA = [
        {
            title: '12 мая',
            data: [{name: "Кузнецов Сергей",location: "Зал №1",time: "17:00", street: "Бекетова 38", type: "Бокс"},
                {name: "Комаров Михаил", location: "Зал №1",time: "16:00", street: "Бекетова 38",type: "Йога"}],

        },
        {
            title: '13 мая',
            data: [{name: "Федоров Сергей",location: "Зал №2",time: "17:00", street: "Бекетова 38", type: "Бокс"},
                {name: "Комаров Михаил", location: "Зал №3",time: "16:00", street: "Бекетова 38",type: "Йога"}],

        },
    ];
    const [visov,setVisov]=useState("No")
    const [dataSource,setDataSource]=useState([])
    const extracted=()=> {
        setVisov("Yes")
        fetch('http://10.0.2.2:8080/api/getShed/trainer',{
            method: 'GET',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJJdmFuIiwiaWF0IjoxNjI3Mzc0NjE2LCJleHAiOjE2Mjc0NjEwMTZ9.zH-XbJFoPAARELHgA5ZtzDYfCcsdXruvn90pyn_3ypYk7kTMp1Z9l9Hw15YZruK6w-TFaD5yvEk731p4qweCSA' }}
            )
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
             setDataSource(responseJson);
                //Success
                setVisov("Success");
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                setVisov("Error");
            });
    }


    let obj = JSON.parse('{ "name":"ася", "age":25, "city":"Rajkot", "degree": "BE"}');


 const extractData=(responseJson)=> {

     console.log(responseJson);
  /*      let arr = [{}, {}, {}, {}, {}]
        for (let i = 0; i < responseJson.length; i++) {
            let dbObj = responseJson[i];
            let num = dbObj.id;
            if (!arr[num]) {
                arr[num] = {};
            }
                if(dbObj.date=="12.09.2020")
                arr[num].date = dbObj.date;

            if (dbObj.attribute == 18) {
                arr[num].date = dbObj.value;

            }
            if (dbObj.attribute == 19) {
                arr[num].time = dbObj.value;
            }
            if (dbObj.attribute == 20) {
                arr[num].location = dbObj.value;
            }
            if (dbObj.attribute = 21) {
                arr[num].haill = dbObj.value;
            }

            if (dbObj.attribute = 23) {
                arr[num].discipline_name = dbObj.value;
            }


        }*/
        console.log(JSON.stringify(dataSource));
    setDataSource(dataSource);
    }
    const [obj1,setObj1]=useState("");
const parseJson=(obj1)=>{
  let objnew  = JSON.parse('{ "name":"ася", "age":25, "city":"Rajkot", "degree": "BE"}');
    setObj1(objnew)

     for(let i=0;i<objnew.length;i++)
     {

     }
     return objnew.name;

}

const parseDataSource=()=>{
    setVisov("Yes")
    fetch('http://10.0.2.2:8080/api/getShed/trainer',{
        method: 'GET',
        headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }}
    )
        .then(response => response.json())
        //If response is in json then in success
        .then(responseJson => {
            setDataSource(responseJson);
            //Success
            setVisov("Success");
        })
        //If response is not in json then in error
        .catch(error => {
            //Error
            setVisov("Error");
        });



    let obj=JSON.stringify(dataSource);
    for(let i=0;i<obj.length;i++)
    {

    }
alert({obj}.id);

}

    const Item = ({ date }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{date.time}</Text>
            <Text style={styles.title}>{date.name}</Text>
            <Text style={styles.title}>{date.location}</Text>
        </View>
    );
  return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity

                onPress={parseDataSource}
                >
                    <Text> Нажми {visov}</Text>
                    <Text> {JSON.stringify((dataSource))}
                    </Text>

                </TouchableOpacity>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) =>(<Item date={item}/>) }

                />

                <TouchableOpacity
                    style={styles.BtnProf}
                    onPress={() =>
                        navigate('UserProfile')
                    }>
                    <Text style={styles.loginText}>Profile</Text>
                </TouchableOpacity>


            </SafeAreaView>
        );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    BtnProf: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
        marginLeft:55,
    },

    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});



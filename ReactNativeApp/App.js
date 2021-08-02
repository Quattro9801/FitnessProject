import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authorization from './src/pages/Authorization';
import TimeTable from './src/examples/TimeTable';
import Registration from './src/pages/Registration';
import UserProfile from './src/pages/UserProfile';
import UpdateUserData from './src/pages/UpdateUserData';
import ListTrainers from './src/pages/ListTrainers';
import TrainersExample from './src/pages/TrainersExample';
import TableShed from './src/pages/TableShed';
import InsertionShedRow from './src/pages/InsertionShedRow';
import ExampleUpdate from './src/examples/ExampleUpdate';
import FillingOutAProfile from './src/pages/FillingOutAProfile';
import ForgotPass from './src/pages/FogotPass';
import UpdateShedRow from './src/pages/UpdateShedRow';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Authorization">
               <Stack.Screen
                    name="Авторизация"
                    component={Authorization}

                />

                <Stack.Screen
                    name="TimeTable"
                    component={TimeTable}
                    options={{
                        title: 'Расписание занятий', //Set Header Title
                    }}
                />
                <Stack.Screen
                    name="ListTrainers"
                    component={ListTrainers}
                    options={{
                        title: 'Тренера', //Set Header Title
                    }}
                />

                   <Stack.Screen
                name="Registration"
                component={Registration}
                options={{
                    title: 'Регистрация', //Set Header Title
                }}

            />
                <Stack.Screen
                    name="TrainersExample"
                    component={TrainersExample}
                    options={{
                        title: 'Тренера', //Set Header Title
                    }}

                />
                <Stack.Screen
                    name="InsertionShedRow"
                    component={InsertionShedRow}
                    options={{
                        title: 'Новая запись расписания', //Set Header Title
                    }}

                />

                <Stack.Screen
                    name="TableShed"
                    component={TableShed}
                    options={{
                        title: 'Расписание занятий', //Set Header Title
                    }}

                />





                <Stack.Screen
                    name="ExampleUpdate"
                    component={ExampleUpdate}
                    options={{
                        title: 'ExampleShed', //Set Header Title
                    }}

                />

                <Stack.Screen
                    name="UpdateUserData"
                    component={UpdateUserData}
                    options={{
                        title: 'Заполнить/изменить данные', //Set Header Title
                    }}

                />

                <Stack.Screen
                    name="FillingOutAProfile"
                    component={FillingOutAProfile}
                    options={{
                        title: 'Создание профиля', //Set Header Title
                    }}

                />
                <Stack.Screen
                    name="UpdateShedRow"
                    component={UpdateShedRow}
                    options={{
                        title: 'Редактирование расписания', //Set Header Title
                    }}

                />


                <Stack.Screen
                    name="ForgotPass"
                    component={ForgotPass}
                    options={{
                        title: 'Создание профиля', //Set Header Title
                    }}

                />




                <Stack.Screen
                    name="UserProfile"
                    component={UserProfile}
                    options={{
                        title: 'Профиль', //Set Header Title

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

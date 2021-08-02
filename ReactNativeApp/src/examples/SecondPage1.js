import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const SecondPage1 = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}>
                        This is Second Page of the App
                    </Text>
                    <Button title="Go back"
                            onPress={() => navigation.goBack()} />

                    <Button
                        title="Go to Third Page"
                        onPress={() =>
                            navigation.navigate('ThirdPage', {someParam: 'Param1'})
                        }
                    />
                </View>
                <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
                    Navigate Between Screens using{'\n'}React Navigation
                </Text>
                <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SecondPage1;

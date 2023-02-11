import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import {Button, TextInput } from 'react-native-paper'
import {enGB,registerTranslation,} from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)
import { DatePickerInput } from 'react-native-paper-dates'

export default function Register() {

    
    const [inputDate, setInputDate] = React.useState(undefined);

    const registerBtn = () => {
        console.log("Successfully Registered...");
    }

    const [passwordVisible, setPasswordVisible] = useState(true);

    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            
            <Text style={styles.header}>Register</Text>

            <Image
               source={require('./images/register.png')}
               style={styles.image}
                
            />
            <TextInput
                 label="Name : "
                 onChangeText={text => setText(text)}
                 mode="outlined"
                 style={styles.txt}
            />

            <TextInput
                 label="Student ID : "
                 onChangeText={text => setText(text)}
                 mode="outlined"
                 style={styles.txt}
            />

            <TextInput
                 label="Email : "
                 onChangeText={text => setText(text)}
                 mode="outlined"
                 style={styles.txt}
            />

            <TextInput
                label="Password"
                secureTextEntry={passwordVisible}
                mode="outlined"
                right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                style={styles.txt}
            />

           
                <View style={styles.datepaciker}>
                    <DatePickerInput
                        locale="en"
                        label="Birth Date : "
                        value={inputDate}
                        onChange={(d) => setInputDate(d)}
                        inputMode="start"
                        
                    />
                </View>
            
            <Button onPress={registerBtn} style={styles.btn} textStyle={{ color: "black", fontSize: 50 }}>
                Register
            </Button>

        </View>
  );
}

const styles = StyleSheet.create({

    container:{
        
        backgroundColor:'#ffeaa7'
    },

    header: {
        textAlign:'center',
        margin:'3%',
        fontSize: 50,
        fontWeight: 'bold',
        color:'#4834d4' 
    },

    txt:{
        margin:'2%',
    },

    datepaciker:{
        margin:'5%',
        mode: 'outlined'
    },

    btn:{
        width:'50%',
        marginLeft:'25%',
        backgroundColor:'#eb4d4b',
        mode: 'outlined',
        color: "white",
        fontSize: 30,
    },

    image: {
        // resizeMode: 'center',
        height: 100,
        width: 100,
        marginLeft: '37%'
    },

});

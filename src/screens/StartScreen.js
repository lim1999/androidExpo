import React from 'react';
import { View,Text,StyleSheet,TextInput,Button} from 'react-native';
import Crad from '../components/Crad'
const StartScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Screen</Text>
            <Crad style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button  title="Reset" onPress={()=>{}} color="#c717fc"></Button>
                    </View>
                    <View style={styles.button}>
                        <Button  title="Comfrim" onPress={()=>{alert("hello")}} color="#f7287b"></Button>
                    </View>
                    
                </View>
            </Crad>
        </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    button:{
        width:100,
    }
});
export default StartScreen;
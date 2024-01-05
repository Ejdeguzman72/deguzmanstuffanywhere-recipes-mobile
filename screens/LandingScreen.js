import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function LandingScreen({ navigation }) {
    return (
        <View style={styles.container} >
            <Image source={require('../assets/chef.gif')} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity title='DSA Recipes' style={styles.button} >
                    <Text style={styles.buttonText}>DSA Recipes --></Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        alignSelf: 'stretch',
        color: 'white',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'fantasy',
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        width: 250,
        opacity: 0.7
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 20
    }
});
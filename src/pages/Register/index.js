import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Register() {

    const navigation = useNavigation();
    
    return(
        <ScrollView>
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Registrar-se</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Qual seu nome?</Text>
                <TextInput
                placeholder='Digite seu nome...'
                style={styles.input}/>


                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder='Digite seu Email...'
                style={styles.input}/>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder='Digite sua Senha...'
                style={styles.input}/>

                <Text style={styles.title}>Onde você mora?</Text>
                <TextInput
                placeholder='Escreva...'
                style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Registrar-se</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonSemLogin}
                onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.buttonSemLoginText}>Acessar sem login!</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa94d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%',
    }, 
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#ffa94d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    buttonSemLogin: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#572100',
        borderRadius: 5,
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSemLoginText: {
        color: '#FFF',
        fontSize: 18,
    }
})
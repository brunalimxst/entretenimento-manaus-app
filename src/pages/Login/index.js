import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Login</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder='Digite seu Email...'
                style={styles.input}/>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder='Digite sua Senha...'
                style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text 
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                    >Não possui uma conta? Cadastre-se!</Text>
                </TouchableOpacity>                

                <TouchableOpacity style={styles.buttonSemLogin}>
                    <Text 
                    style={styles.buttonSemLoginText}
                    onPress={() => navigation.navigate('Principal')}
                    >
                    Acessar sem login!

                    </Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
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
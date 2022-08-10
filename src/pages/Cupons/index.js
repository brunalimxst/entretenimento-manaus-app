import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Cupons() {
    const navigation = useNavigation();
    return(

        <ScrollView>
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Resgate seus cupons!</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>

            <Text style={styles.textMelhores}>clique e resgate :)</Text>
            <View style={styles.viewVazia}></View>

                <View style={styles.containerCupom}>
                    <TouchableOpacity>
                    <Image
                    source={require('../../imagens/hondamaior.jpg')}
                    style={styles.firstCupom}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                    source={require('../../imagens/midnight.jpg')}
                    style={styles.firstCupom}/>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.containerCupom}>
                    <TouchableOpacity>
                    <Image
                    source={require('../../imagens/matucas.jpeg')}
                    style={styles.firstCupom}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                    source={require('../../imagens/vegas.jpg')}
                    style={styles.firstCupom}/>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.containerCupom}>
                    <TouchableOpacity>
                    <Image
                    source={require('../../imagens/augusta.jpg')}
                    style={styles.firstCupom}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                    source={require('../../imagens/axerito.png')}
                    style={styles.firstCupom}/>
                    </TouchableOpacity>
                    
                </View>

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
        display: 'flex',
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%',
    },

    textMelhores: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },

    viewVazia: {
        width: 100,
        height: 1,
        backgroundColor: '#ffa94d',
        border: 1,
        left: 110,
        top: 1
    },

    firstCupom: {
        width: 150,
        height: 150,
        top: 10,
        marginRight: 10,
        marginLeft: -7,
        marginBottom: 20
    },

    containerCupom: {
        top: 10,
        flexDirection: 'row'
    },

    
    
})
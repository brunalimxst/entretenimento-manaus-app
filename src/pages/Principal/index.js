import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {

    const navigation = useNavigation();

    return (
        

        <View style={styles.container}>

            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)...</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>

                <Text style={styles.textMelhores}>os melhores da semana</Text>

                <View style={styles.viewVazia}></View>

                <View style={styles.melhoresSemana1}>
                    <TouchableOpacity>
                    <Image 
                    source={require('../../imagens/unba.webp')}
                    style={styles.firstImg}/>
                    </TouchableOpacity>
                    <View style={styles.viewTexto}>
                        <Text style={styles.topUnba}>Unba Sushi Bar</Text>
                        <Text style={styles.descUnba}>com uma vista incrível de frente para o rio, música boa, um ambiente super agradável, vale à pena conhecer!</Text>
                    </View>
                </View>

                <View style={styles.melhoresSemana2}>
                    <View style={styles.viewTextoHonda}>
                        <Text style={styles.topHonda}>Honda Sushi Bar</Text>
                        <Text style={styles.descHonda}>um dos melhores e mais completos rodízios de sushi da cidade!</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                    source={require('../../imagens/hondamaior.jpg')}
                    style={styles.firstImg}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.melhoresSemana3}>
                <TouchableOpacity>
                    <Image 
                    source={require('../../imagens/matucas.jpeg')}
                    style={styles.tercImg}/>
                    </TouchableOpacity>
                    <View style={styles.viewTextoMatucas}>
                        <Text style={styles.topMatucas}>Matucas Bar</Text>
                        <Text style={styles.descMatucas}>é um dos melhores Bar e Grill da cidade, dispondo de um ambiente super agradável, cerveja gelada e comida boa!</Text>
                    </View>
                   
                </View>

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

    textMelhores: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },

    viewVazia: {
        width: 120,
        height: 1,
        backgroundColor: '#ffa94d',
        border: 1,
        left: 130
    },

    melhoresSemana1: {
        flexDirection: 'row'
    },

    firstImg: {
        width: 150,
        height: 150,
        top: 20
    },

    viewTextoUnba:{
        top: 30,
    },

    topUnba: {
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '400',
        top: 25,
        marginLeft: 15
    },

    descUnba: {
        width: 150,
        fontWeight: '200',
        top: 20,
        marginLeft: 15
    },


    viewTextoHonda: {
        right: 20,
        top: 10
    },

    melhoresSemana2: {
        flexDirection: 'row',
        top: 15
    },

    secondImg: {
        width: 150,
        height: 150,
        marginTop: 20
    },

    topHonda: {
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '400',
        top: 25,
        marginLeft: 38
    },

    descHonda: {
        width: 150,
        fontWeight: '200',
        top: 20,
        textAlign: 'right'
    },

    viewTextoMatucas: {
        top: 10
    },


    melhoresSemana3: {
        flexDirection: 'row',
        top: 30
    },

    tercImg: {
        width: 150,
        height: 135,
        marginTop: 20
    },

    topMatucas: {
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '400',
        top: 25,
        marginLeft: 15
    },

    descMatucas: {
        width: 150,
        fontWeight: '200',
        top: 20,
        marginLeft: 15
    },
     
})

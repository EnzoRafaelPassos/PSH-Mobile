import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ListArea, TitleEventos } from './styled';
import CardOng from '../../../../components/CardOng';
import api from '../../../services/UsuarioServices';

export default function InicioOng(props) {

    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const subs = navigation.addListener('focus', () => {
            api.ListarEventosOngs().then(({ data }) => {
                setEventos(data)
            });
        })

    }, [])

    return (
        <ScrollView >
            <TitleEventos>
                Seus Eventos
            </TitleEventos>
            <ListArea>
                {eventos.map(item => (
                    <View key={item.idEvento} >
                        <CardOng
                            idEvento={item.idEvento}
                            nomeEvento={item.nomeEvento}
                            enderecoEvento={item.enderecoEvento}
                            numeroEvento={item.numeroEvento}
                            bairroEvento={item.bairroEvento}
                            cidadeEvento={item.cidadeEvento}
                            ufEvento={item.ufEvento}
                            horarioEvento={item.horarioEvento}
                            duracaoEvento={item.duracaoEvento}
                            pontuacao={item.pontuacao}
                            dataEvento={item.dataEvento} />
                    </View>
                ))}
            </ListArea>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CadEvento')}>
                <Text style={styles.buttonText}>Cadastrar novo evento</Text>
            </TouchableOpacity>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',

    },

    text: {
        fontSize: 25,
    },

    button: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
        flexDirection: 'column',
        bottom: '0.2%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',


    },
    buttonDois: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        marginBottom: '3%',
        bottom: '8%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonIcon: {
        margin: 10,
        alignItems: 'flex-end',
    },

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    card: {
        marginTop: 50,
        marginBottom: 200
    },

    containerHeader: {
        backgroundColor: '#1E90FF',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 110,
        flexDirection: 'column',
        shadowColor: '#000',
        elevation: 25

    },

    title: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})
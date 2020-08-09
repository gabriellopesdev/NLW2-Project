import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import api from '../../services/api'


function TeacherList() {
    const [isFilterVisible, setIsfilterVisible] = useState(false)
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teacherList, setTeacherList] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])

    function LoadFavotires() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoritedTeachersId)
            }            
        })
    }
    function handleIsFilterVisible() {
        setIsfilterVisible(!isFilterVisible)
    }

    async function handleFilterSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setIsfilterVisible(false)
        setTeacherList(response.data)
        LoadFavotires()
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title='Proffys disponíveis'
                headerRight={(
                    <BorderlessButton onPress={handleIsFilterVisible}>
                        <Feather name='filter' size={20} color='#FFF' />
                    </BorderlessButton>
                )}>
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matérias</Text>
                        <TextInput 
                            placeholderTextColor='#c1bccc'
                            style={styles.input} 
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder='Qual a matéria?'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput 
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input} 
                                    placeholder='Qual o dia?'
                                />    
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input} 
                                    placeholder='Qual horário?'
                                />    
                            </View>  
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,                    
                }}
            >
                {
                    teacherList.map((teacher: Teacher) => {
                        return (
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher} 
                                favorited={favorites.includes(teacher.id)}
                            />
                        )
                    })
                }                
              
            </ScrollView>
            
        </View>
    )
}

export default TeacherList
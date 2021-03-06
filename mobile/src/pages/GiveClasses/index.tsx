import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import giveClassesBackground from '../../assets/images/give-classes-background.png'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


function GiveClasses() {
    const { goBack } = useNavigation()

    function handleNavigateBack() {
        goBack()        
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesBackground} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você precisar se cadastrar como professor na noss plataforma web.
                </Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText} >Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses
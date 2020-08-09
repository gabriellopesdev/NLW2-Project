import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,      
    },
    profileInfo: {
        marginLeft: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee',
        
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        marginTop: 4,
        fontSize: 12,
        color: '#6a6180',
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    bio: {
        fontFamily: 'Poppins_400Regular',
        margin: 24,
        color: '#6a6180',
        fontSize: 14,
        lineHeight: 24,
    },
    footer: {
        backgroundColor: '#fafafc',
        alignItems: 'center',
        padding: 24,
        marginTop: 12,
    },
    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a5180',
        fontSize: 14,
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: 56,
        height: 56,
        marginRight: 8,
    },
    contactButton: {
        backgroundColor: '#06d361',
        alignItems: 'center',
        flex: 1,    
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
        height: 56,
        marginRight: 8,
    },
    contactButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    },
    favorited: {
        backgroundColor: '#e33d3d'
    },
})

export default styles
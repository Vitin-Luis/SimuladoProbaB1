import { Link } from '@react-navigation/native';
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default function ForgotPasswordPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/bluegem.png')} style={styles.logo}/>
            <Text style={styles.texto}>bluegem</Text>
            <Text style={styles.texto}>ATK: 90  DEF: 10</Text>
        <View>
            <Link to={{screen: 'cartao2'}}>Trocar para cartão 2 </Link>
            <Link to={{screen: 'cartao3'}}>trocar para cartão 3 </Link>
        </View>
        </View>
    )
}
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { Link } from '@react-navigation/native';
import styles from './styles'

export default function ForgotPasswordPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/pngegg.png')} style={styles.logo}/>
            <Text style={styles.texto}>Karambit</Text>
            <Text style={styles.texto}>ATK: 90  DEF: 10</Text>
        <View>
            <Link to={{screen: 'cartao2'}}>Trocar para cartão 1 </Link>
            <Link to={{screen: 'cartao3'}}>trocar para cartão 3 </Link>
        </View>
        </View>
    )
}
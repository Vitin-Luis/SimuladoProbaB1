import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { Link } from '@react-navigation/native';
import styles from './styles'


export default function ForgotPasswordPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/megatron.png')} style={styles.logo}/>
            <Text style={styles.texto}>mecatronic</Text>
            <Text style={styles.texto}>ATK: 90  DEF: 10</Text>
        <View>
            <Link to={{screen: 'cartao1'}}>Trocar para cartão 1 </Link>
            <Link to={{screen: 'cartao2'}}>trocar para cartão 2 </Link>
        </View>
        </View>
    )
}
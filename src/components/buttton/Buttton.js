import {
    Text,
    Pressable,
} from 'react-native';

// import stylesheet
import ButttonStyle from './stylesheets/Stylesheet';

const Buttton = ({title, onPress, main}) => {
    if (main) {
        return (
            <Pressable style={ButttonStyle.mainButton} onPress={onPress}>
                <Text style={ButttonStyle.mainButtonTxT}>{title}</Text>
            </Pressable>
        )
    } else {
        return (
            <Pressable style={ButttonStyle.secButton} onPress={onPress}>
                <Text style={ButttonStyle.secButtonTxT}>{title}</Text>
            </Pressable>
        )
    }
}

export default Buttton;
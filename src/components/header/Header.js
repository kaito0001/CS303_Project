import {
    View,
    Text,
    Pressable,
} from 'react-native';

// stylesheet import
import headerStyle from './stylesheets/Stylesheet';

// icons library import
import IconLibrary from '../icons/icons';

const Header = ({title, onBackPress}) => {
    
    // icons import from icons library
    const IconComponent = IconLibrary['back'];
    
    if (onBackPress) {
        return (
            <View style={[headerStyle.headerWithBack]}>
                <Pressable onPress={onBackPress}>
                    <IconComponent/>
                </Pressable>
                <Text style={headerStyle.title}>{title}</Text>
                <View style={{width: 24, height: 24}}></View>
            </View>
        )
    } else {
        return (
            <View style={headerStyle.header}>
                <Text style={headerStyle.title}>{title}</Text>
            </View>
        )
    }
}

export default Header;
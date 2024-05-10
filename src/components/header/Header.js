import {
    View,
    Text,
    Pressable,
} from 'react-native';

// stylesheet import
import headerStyle from './stylesheets/Stylesheet';
import { Ionicons } from '@expo/vector-icons';
// icons library import
import IconLibrary from '../icons/icons';
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({title, onBackPress , showSearch}) => {
    
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
    } else if( showSearch){
        return (
            <View>
                <View style={headerStyle.header}>
                    <Text style={headerStyle.title}>{title}</Text>
                    <View style={headerStyle.box}>
                        <Ionicons name="search-circle-outline" size={40} color="black" />
                        <TextInput
                        style={headerStyle.input}
                        placeholder="search for products "
                        />
                    </View>
                </View>

            </View>

        )
    }else{
        return (
            <View>
                <View style={headerStyle.header}>
                    <Text style={headerStyle.title}>{title}</Text>
                </View>

            </View>

        )
    }
}

export default Header;
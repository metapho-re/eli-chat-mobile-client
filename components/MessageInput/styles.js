import {
    Dimensions,
    StyleSheet,
} from 'react-native';
import colors from '../../globalStyles';

const inputFieldWidth = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: colors.secondary,
    },
    input: {
        width: inputFieldWidth,
        paddingVertical: 6,
        paddingLeft: 20,
        backgroundColor: 'whitesmoke',
        borderRadius: 15,
    },
    button: {
        height: 40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
    },
    buttonDisabled: {
        height: 40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
        opacity: 0.65,
    },
    buttonText: {
        color: colors.secondary,
    },
});

export default styles;

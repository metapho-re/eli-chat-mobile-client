import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const { height, width } = Dimensions.get('window');
const boxHeight = 0.75 * Dimensions.get('window').height;
const boxWidth = 0.75 * Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    window: {
        maxHeight: boxHeight,
        maxWidth: boxWidth,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        color: colors.secondary,
        backgroundColor: 'whitesmoke',
        borderColor: colors.primary,
        borderWidth: 5,
        borderRadius: 20,
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 12,
        color: colors.secondary,
    },
    error: {
        fontSize: 12,
        color: 'red',
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    buttonText: {
        marginTop: 10,
        fontSize: 15,
        color: colors.secondary,
    },
});

export default styles;

import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    window: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        color: colors.secondary,
        backgroundColor: 'whitesmoke',
        borderColor: colors.primary,
        borderWidth: 5,
        borderRadius: 20,
    },
    text: {
        paddingBottom: 20,
        fontSize: 15,
        color: colors.secondary,
    },
});

export default styles;

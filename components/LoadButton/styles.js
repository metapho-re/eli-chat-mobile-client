import { StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    button: {
        minWidth: 120,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    buttonDisabled: {
        minWidth: 120,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.primary,
        borderRadius: 5,
        opacity: 0.65,
    },
    text: {
        fontSize: 15,
        color: colors.secondary,
    },
});

export default styles;

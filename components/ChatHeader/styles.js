import { StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        borderTopColor: colors.secondary,
        borderTopWidth: 1,
    },
    chevron: {
        marginVertical: 9,
        marginHorizontal: 15,
    },
    text: {
        fontSize: 15,
        color: colors.secondary,
    },
});

export default styles;

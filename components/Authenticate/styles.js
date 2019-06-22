import { StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    window: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 25,
        backgroundColor: colors.secondary,
        borderRadius: 10,
    },
    title: {
        paddingBottom: 20,
        fontSize: 40,
        color: colors.primary,
    },
    input: {
        width: 250,
        marginBottom: 16,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: 'whitesmoke',
        borderRadius: 5,
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    error: {
        minHeight: 38,
        marginTop: 10,
        color: 'red',
    },
});

export default styles;

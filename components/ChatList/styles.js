import { StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    listItem: {
        height: 60,
        borderBottomColor: colors.secondaryBorder,
        borderBottomWidth: 1,
    },
    listItemSelected: {
        height: 60,
        backgroundColor: colors.secondarySelected,
        borderBottomColor: colors.secondaryBorder,
        borderBottomWidth: 1,
    },
    usernames: {
        paddingTop: 8,
        paddingLeft: 20,
        fontSize: 15,
        color: colors.primary,
    },
    date: {
        paddingTop: 5,
        paddingLeft: 20,
        fontSize: 12,
        color: 'whitesmoke',
    },
});

export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    listItem: {
        height: 60,
        justifyContent: 'center',
        borderBottomColor: colors.secondaryBorder,
        borderBottomWidth: 1,
    },
    listItemSelected: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: colors.secondarySelected,
        borderBottomColor: colors.secondaryBorder,
        borderBottomWidth: 1,
    },
    userContainer: {
        flexDirection: 'row',
    },
    onlineFlag: {
        height: 30,
        width: 30,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 20,
    },
    offlineFlag: {
        height: 30,
        width: 30,
        marginHorizontal: 20,
        backgroundColor: 'grey',
        borderRadius: 20,
    },
    user: {
        paddingTop: 4,
        fontSize: 15,
        color: 'whitesmoke',
    },
    buttonContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'whitesmoke',
        borderTopWidth: 1,
    },
});

export default styles;

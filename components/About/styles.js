import { StyleSheet } from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    firstContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thirdContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    copyrightContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
    },
    image: {
        height: 128,
        width: 128,
        marginBottom: 10,
        borderColor: colors.primary,
        borderWidth: 1,
    },
    text: {
        color: 'whitesmoke',
    },
    logoutText: {
        paddingBottom: 10,
        fontSize: 15,
        color: 'whitesmoke',
    },
    copyrightLink: {
        color: colors.primary,
    },
});

export default styles;

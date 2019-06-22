import {
    Dimensions,
    StyleSheet,
} from 'react-native';
import colors from '../../globalStyles';

const maxMessageContainerWidth = 0.85 * (Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    listItemOutgoing: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    listItemIncoming: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    messageContainerOutgoing: {
        maxWidth: maxMessageContainerWidth,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: 'gainsboro',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
    },
    messageContainerIncoming: {
        maxWidth: maxMessageContainerWidth,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.primary,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
    },
    headerOutgoing: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    headerIncoming: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    username: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    time: {
        marginTop: 6,
        marginLeft: 20,
        fontSize: 9,
        color: 'grey',
    },
    message: {
        marginTop: 5,
        fontSize: 15,
        textAlign: 'justify',
    },
});

export default styles;

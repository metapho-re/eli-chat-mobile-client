import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import colors from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        height: 72,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.secondary,
    },
    tab: {
        justifyContent: 'center',
        paddingVertical: 0,
    },
    label: {
        fontSize: 15,
    },
});

export default styles;

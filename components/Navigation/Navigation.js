import {
    Animated,
    Easing,
    Platform,
} from 'react-native';
import {
    createAppContainer,
    createMaterialTopTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import UserList from '../UserList/UserListContainer';
import ChatList from '../ChatList/ChatListContainer';
import About from '../About/AboutContainer';
import ChatBox from '../ChatBox/ChatBox';
import styles from './styles';
import colors from '../../globalStyles';

const ExpandShrink = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1],
    });
    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0, 1, 1]),
    });
    return {
        opacity,
        transform: [{ scaleY }],
    };
};

const TransitionConfiguration = () => ({
    transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
        const { position, scene } = sceneProps;
        const { index, route } = scene;
        const params = route.params || {};
        const transition = params.transition || '';
        return {
            expandShrink: ExpandShrink(index, position),
        }[transition];
    },
});

const ChatNavigation = createStackNavigator(
    {
        Chats: {
            screen: ChatList,
            navigationOptions: {
                header: null,
            },
        },
        Chat: ChatBox,
    },
    {
        initialRouteName: 'Chats',
        headerMode: 'screen',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        navigationOptions: {
            cardStack: {
                gesturesEnabled: false,
            },
            gesturesEnabled: false,
        },
        gesturesEnabled: false,
        transitionConfig: TransitionConfiguration,
    },
);

const TabNavigation = createMaterialTopTabNavigator(
    {
        Users: UserList,
        Chats: ChatNavigation,
        About,
    },
    {
        initialRouteName: 'Chats',
        tabBarOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: 'whitesmoke',
            style: styles.container,
            tabStyle: styles.tab,
            labelStyle: styles.label,
        },
    },
);

export default createAppContainer(TabNavigation);

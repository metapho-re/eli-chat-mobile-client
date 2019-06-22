import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ChevronLeft from '../Icons/ChevronLeft';
import styles from './styles';

const ChatHeader = ({
    navigation,
}) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.chevron}
            onPress={() => navigation.navigate('Chats')}
        >
            <ChevronLeft />
        </TouchableOpacity>
        <Text style={styles.text}>
            {navigation.getParam('chatName')}
        </Text>
    </View>
);

export default ChatHeader;

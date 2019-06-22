import React from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import getPropertiesFromChatId from '../../helpers/getPropertiesFromChatId';
import styles from './styles';

const ChatList = ({
    chats,
    selectChat,
    navigation,
}) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
            <FlatList
                data={chats}
                keyExtractor={chat => uid(chat)}
                renderItem={chat => (
                    <TouchableOpacity
                        style={chat.item[1] ? styles.listItemSelected : styles.listItem}
                        onPress={() => {
                            selectChat(chat.item[0]);
                            navigation.navigate('Chat', {
                                chatName: getPropertiesFromChatId(chat.item[0]).usernames,
                                transition: 'expandShrink',
                            });
                        }}
                    >
                        <View>
                            <Text style={styles.usernames}>
                                {getPropertiesFromChatId(chat.item[0]).usernames}
                            </Text>
                            <Text style={styles.date}>
                                {getPropertiesFromChatId(chat.item[0]).date}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    </SafeAreaView>
);
ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.array).isRequired,
    selectChat: PropTypes.func.isRequired,
};

export default ChatList;

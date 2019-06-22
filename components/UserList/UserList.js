import React from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import LoadButton from '../LoadButton/LoadButton';
import hasSelectedUser from '../../helpers/hasSelectedUser';
import createChatId from '../../helpers/createChatId';
import styles from './styles';

const UserList = ({
    users,
    username,
    token,
    isLoading,
    toggleUserForChat,
    createChat,
}) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <ScrollView>
                <Animatable.View animation="fadeInDown">
                    <FlatList
                        data={users}
                        keyExtractor={user => uid(user)}
                        renderItem={user => (
                            <TouchableOpacity
                                style={user.item[2]
                                    ? styles.listItemSelected
                                    : styles.listItem}
                                onPress={() => toggleUserForChat(user.item[0])}
                            >
                                <View style={styles.userContainer}>
                                    <View style={((user.item[1] || '').length !== 0)
                                        ? styles.onlineFlag
                                        : styles.offlineFlag}
                                    />
                                    <Text style={styles.user}>
                                        {user.item[0]}
                                        {' '}
                                        {((user.item[1] || '').length !== 0) ? '(online)' : ''}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </Animatable.View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Animatable.View animation="fadeInUp">
                    <LoadButton
                        disabled={!hasSelectedUser(users) || isLoading}
                        isLoading={isLoading}
                        text="Create a Chat"
                        onPress={() => createChat(
                            token,
                            createChatId([...users, [username, '', true]]),
                            [...users, [username, '', true]],
                        )}
                    />
                </Animatable.View>
            </View>
        </View>
    </SafeAreaView>
);
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.array).isRequired,
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    toggleUserForChat: PropTypes.func.isRequired,
    createChat: PropTypes.func.isRequired,
};

export default UserList;

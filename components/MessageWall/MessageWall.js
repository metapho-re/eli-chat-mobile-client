import React, { Component } from 'react';
import {
    FlatList,
    ScrollView,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import formatTime from '../../helpers/formatTime';
import returnMessageRow from '../../helpers/returnMessageRow';
import styles from './styles';

class MessageWall extends Component {
    render() {
        const {
            username,
            messages,
            currentChat,
        } = this.props;

        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                ref={(ref) => { this.scrollView = ref; }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: false })}
            >
                <View>
                    <FlatList
                        data={returnMessageRow(currentChat, messages)}
                        keyExtractor={msg => uid(msg)}
                        renderItem={msg => (
                            <View
                                style={msg.item[0] === username
                                    ? styles.listItemOutgoing
                                    : styles.listItemIncoming}
                            >
                                <View style={msg.item[0] === username
                                    ? styles.messageContainerOutgoing
                                    : styles.messageContainerIncoming}
                                >
                                    <View style={msg.item[0] === username
                                        ? styles.headerOutgoing
                                        : styles.headerIncoming}
                                    >
                                        <Text style={styles.username}>
                                            {msg.item[0]}
                                        </Text>
                                        <Text style={styles.time}>
                                            {formatTime(msg.item[1])}
                                        </Text>
                                    </View>
                                    <Text style={styles.message}>
                                        {msg.item[2]}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}
MessageWall.propTypes = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentChat: PropTypes.string.isRequired,
};

export default MessageWall;

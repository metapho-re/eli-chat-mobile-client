import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import formatMessage from '../../helpers/formatMessage';

const MessageInput = ({
    username,
    messageValue,
    currentChat,
    storeSentMessage,
    handleMessageChange,
}) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            multiline
            placeholder="Type a message..."
            value={messageValue}
            onChangeText={value => handleMessageChange(value)}
        />
        <TouchableOpacity
            style={(messageValue.length === 0) || (currentChat.length === 0)
                ? styles.buttonDisabled
                : styles.button}
            disabled={(messageValue.length === 0) || (currentChat.length === 0)}
            onPress={() => storeSentMessage(formatMessage(username, messageValue, currentChat))}
        >
            <Text style={styles.buttonText}>
                Send
            </Text>
        </TouchableOpacity>
    </View>
);
MessageInput.propTypes = {
    username: PropTypes.string.isRequired,
    messageValue: PropTypes.string.isRequired,
    currentChat: PropTypes.string.isRequired,
    storeSentMessage: PropTypes.func.isRequired,
    handleMessageChange: PropTypes.func.isRequired,
};

export default MessageInput;

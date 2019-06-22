import React from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ErrorDisplay = ({
    usersErrorMessage,
    messagesErrorMessage,
    chatsErrorMessage,
    socketErrorMessage,
    persistErrorMessage,
    logOutErrorMessage,
    clearErrorMessage,
}) => {
    if (chatsErrorMessage.length !== 0
        || messagesErrorMessage.length !== 0
        || usersErrorMessage.length !== 0
        || socketErrorMessage.length !== 0
        || persistErrorMessage.length !== 0
        || logOutErrorMessage.length !== 0) {
        return (
            <Modal
                transparent
                visible={chatsErrorMessage.length !== 0
                    || messagesErrorMessage.length !== 0
                    || usersErrorMessage.length !== 0
                    || socketErrorMessage.length !== 0
                    || persistErrorMessage.length !== 0
                    || logOutErrorMessage.length !== 0}
            >
                <View style={styles.container}>
                    <View style={styles.window}>
                        <View>
                            {usersErrorMessage.length !== 0 && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        An error occured while fetching users:
                                    </Text>
                                    <Text style={styles.error}>{usersErrorMessage}</Text>
                                </View>
                            )}
                            {messagesErrorMessage.length !== 0 && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        An error occured while fetching messages:
                                    </Text>
                                    <Text style={styles.error}>{messagesErrorMessage}</Text>
                                </View>
                            )}
                            {chatsErrorMessage.length !== 0 && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        An error occured during chat creation:
                                    </Text>
                                    <Text style={styles.error}>{chatsErrorMessage}</Text>
                                </View>
                            )}
                            {socketErrorMessage.length !== 0 && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        An error occured on the web socket...
                                    </Text>
                                </View>
                            )}
                            {persistErrorMessage.length !== 0 && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        An error occured while trying to save messages:
                                    </Text>
                                    <Text style={styles.error}>{persistErrorMessage}</Text>
                                </View>
                            )}
                            {logOutErrorMessage.length !== 0 && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        An error occured while trying to log out:
                                    </Text>
                                    <Text style={styles.error}>{logOutErrorMessage}</Text>
                                </View>
                            )}
                        </View>
                        <Text style={styles.text}>Please try again later...</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => clearErrorMessage()}
                        >
                            <Text styles={styles.buttonText}>Dismiss</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
    return <></>;
};
ErrorDisplay.propTypes = {
    usersErrorMessage: PropTypes.string.isRequired,
    messagesErrorMessage: PropTypes.string.isRequired,
    chatsErrorMessage: PropTypes.string.isRequired,
    socketErrorMessage: PropTypes.string.isRequired,
    persistErrorMessage: PropTypes.string.isRequired,
    logOutErrorMessage: PropTypes.string.isRequired,
    clearErrorMessage: PropTypes.func.isRequired,
};

export default ErrorDisplay;

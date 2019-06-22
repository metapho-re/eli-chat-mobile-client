import React from 'react';
import PropTypes from 'prop-types';
import {
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LoadButton from '../LoadButton/LoadButton';
import styles from './styles';

const Authenticate = ({
    socketId,
    usernameValue,
    passwordValue,
    isLoadingLogIn,
    isLoadingSignUp,
    errorMessage,
    logIn,
    signUp,
    handleUsernameChange,
    handlePasswordChange,
}) => (
    <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Animatable.View animation="fadeInUp">
                    <View style={styles.window}>
                        <Text style={styles.title}>
                            Eli Chat
                        </Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="username"
                                value={usernameValue}
                                onChangeText={value => handleUsernameChange(value)}
                            />
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                placeholder="password"
                                value={passwordValue}
                                onChangeText={value => handlePasswordChange(value)}
                            />
                            <View style={styles.buttonBar}>
                                <LoadButton
                                    disabled={
                                        (usernameValue.length === 0)
                                        || (passwordValue.length === 0)
                                        || isLoadingSignUp
                                    }
                                    isLoading={isLoadingLogIn}
                                    text="Log In"
                                    onPress={() => logIn({
                                        username: usernameValue,
                                        password: passwordValue,
                                        socketId,
                                    })}
                                />
                                <LoadButton
                                    disabled={
                                        (usernameValue.length === 0)
                                        || (passwordValue.length === 0)
                                        || isLoadingLogIn
                                    }
                                    isLoading={isLoadingSignUp}
                                    text="Sign Up"
                                    onPress={() => signUp({
                                        username: usernameValue,
                                        password: passwordValue,
                                        socketId,
                                    })}
                                />
                            </View>
                        </View>
                        <Text style={styles.error}>
                            {errorMessage}
                        </Text>
                    </View>
                </Animatable.View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);
Authenticate.propTypes = {
    socketId: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    isLoadingLogIn: PropTypes.bool.isRequired,
    isLoadingSignUp: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    logIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
};

export default Authenticate;

import React, { Component } from 'react';
import {
    Keyboard,
    SafeAreaView,
    View,
} from 'react-native';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageWall from '../MessageWall/MessageWallContainer';
import MessageInput from '../MessageInput/MessageInputContainer';

class ChatBox extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <ChatHeader navigation={navigation} />,
    });

    state = {
        keyboardOffset: 0,
    };

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this.keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = (event) => {
        this.setState({
            keyboardOffset: event.endCoordinates.height,
        });
    }

    keyboardDidHide = () => {
        this.setState({
            keyboardOffset: 0,
        });
    }

    render() {
        const { keyboardOffset } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    position: 'absolute',
                    top: -keyboardOffset,
                    bottom: keyboardOffset,
                    left: 0,
                    right: 0,
                }}
                >
                    <MessageWall />
                    <MessageInput />
                </View>
            </SafeAreaView>
        );
    }
}

export default ChatBox;

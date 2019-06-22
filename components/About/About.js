import React from 'react';
import {
    Image,
    Linking,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import LoadButton from '../LoadButton/LoadButton';
import styles from './styles';

const source = require('../../assets/icon.png');

const About = ({
    username,
    token,
    isLoading,
    logOut,
}) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Image
                    style={styles.image}
                    source={source}
                />
                <Text style={styles.text}>Eli Chat Mobile</Text>
                <Text style={styles.text}>v0.1.0</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.logoutText}>
                    {`You are logged in as ${username}.`}
                </Text>
                <LoadButton
                    disabled={isLoading}
                    isLoading={isLoading}
                    text="Log Out"
                    onPress={() => logOut(token)}
                />
            </View>
            <View style={styles.thirdContainer}>
                <View style={styles.copyrightContainer}>
                    <Text style={styles.text}>&copy;&nbsp;</Text>
                    <Text
                        style={styles.copyrightLink}
                        onPress={() => Linking.openURL('https://metapho.re')}
                    >
                        metapho.re
                    </Text>
                    <Text style={styles.text}>&nbsp; 2019</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
);
About.propTypes = {
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
};

export default About;

import React from 'react';
import {
    ActivityIndicator,
    Modal,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '../../globalStyles';

const Loader = ({
    usersIsLoading,
    messagesIsLoading,
}) => {
    if (usersIsLoading || messagesIsLoading) {
        return (
            <Modal
                transparent
                visible={usersIsLoading || messagesIsLoading}
            >
                <View style={styles.container}>
                    <View style={styles.window}>
                        <Text style={styles.text}>Loading...</Text>
                        <ActivityIndicator
                            size="large"
                            color={colors.primary}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
    return <></>;
};
Loader.propTypes = {
    usersIsLoading: PropTypes.bool.isRequired,
    messagesIsLoading: PropTypes.bool.isRequired,
};

export default Loader;

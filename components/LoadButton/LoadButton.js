import React from 'react';
import PropTypes from 'prop-types';
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import colors from '../../globalStyles';

const LoadButton = ({
    disabled,
    isLoading,
    text,
    onPress,
}) => {
    if (isLoading) {
        return (
            <TouchableOpacity
                style={styles.buttonDisabled}
                disabled
            >
                <ActivityIndicator
                    animating
                    color={colors.secondary}
                    size="small"
                />
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity
            style={disabled ? styles.buttonDisabled : styles.button}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};
LoadButton.propTypes = {
    disabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default LoadButton;

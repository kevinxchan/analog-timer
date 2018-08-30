import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = (props) => {
    const {text, onPress} = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
};

Button.propTypes = {
    text: PropTypes.string,
    onPressed: PropTypes.func,
};

Button.defaultProps = {
    text: 'Button Text',
    onPress: () => { console.log('Button pressed!') },
};

export default Button;
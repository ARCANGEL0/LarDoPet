/* Core */
import React from 'react';

/* Presentational */
import { View } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";

// import styles from './styles';

const Alerta = (title,icon,type) => {

showMessage({
            message: title,
            type: type,
            hideStatusBar: 'true',
            icon: icon

          })
	};

export default Alerta;

/* eslint-disable import/prefer-default-export */
import Toast from 'react-native-toast-message';

export const showToast = (message, type = 'success') => {
  Toast.show({
    text1: message,
    type,
  });
};

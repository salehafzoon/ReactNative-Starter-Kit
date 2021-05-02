import {useTheme} from '@react-navigation/native';
import React from 'react';
export function withMyHook(Component) {
  return function WrappedComponent(props) {
    const {colors} = useTheme();
    return <Component {...props} colors={colors} />;
  };
}

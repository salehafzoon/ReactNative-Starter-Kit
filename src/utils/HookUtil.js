import {useTheme} from '@react-navigation/native';
import React from 'react';

export function appColors() {
  const {colors} = useTheme();
  return colors;
}

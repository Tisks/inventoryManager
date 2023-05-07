import React from 'react';
import {StyleSheet} from 'react-native';
import {Headline} from 'react-native-paper';

const Header = () => {
  return <Headline style={styles.header}>Sign up</Headline>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: '600',
    color: '#37474F',
  },
});

export default Header;

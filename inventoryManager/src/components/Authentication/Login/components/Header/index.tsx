import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Headline, Caption} from 'react-native-paper';

const Header = () => (
  <>
    <Headline style={styles.headline}>Welcome</Headline>
    <Caption style={styles.caption}>Sign in to continue!</Caption>
  </>
);

const styles = StyleSheet.create({
  headline: {
    fontSize: 32,
    fontWeight: '600',
    color: '#374151',
  },
  caption: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
});

export default Header;

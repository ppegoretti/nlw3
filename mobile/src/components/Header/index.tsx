import { useLinkProps, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  showCancel: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const { goBack, navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name='arrow-left' size={24} color='#15b5d6' />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {showCancel ? (
        <BorderlessButton onPress={() => navigate('OrphanagesMap')}>
          <Feather name='x' size={24} color='#15b5d6' />
        </BorderlessButton>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'nunito600',
    color: '#8fa7b3',
    fontSize: 16,
  },
});

export default Header;

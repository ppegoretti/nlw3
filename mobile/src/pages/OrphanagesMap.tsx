import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import mapMarker from '../assets/mapmarker.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';
import { OrphanageProps } from './types';

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('orphanages').then(({ data }) => {
      setOrphanages(data);
    });
  }, []);

  const navigateToDetails = useCallback(() => {
    navigate('OrphanageDetails');
  }, []);

  const navigateToCreate = useCallback(() => {
    navigate('SelectMapPosition');
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.8126124,
          longitude: -49.272274,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        {orphanages.map(({ id, latitude, longitude, name }) => (
          <Marker
            key={id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{ latitude, longitude }}>
            <Callout tooltip onPress={() => navigateToDetails()}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <RectButton
          style={styles.creteOrphanageButton}
          onPress={navigateToCreate}>
          <Feather name='plus' size={20} color='#fff'></Feather>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calloutText: {
    color: '#0089ad',
    fontSize: 14,
    fontFamily: 'nunito700',
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  footerText: {
    fontFamily: 'nunito700',

    color: '#8fa7b3',
  },
  creteOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

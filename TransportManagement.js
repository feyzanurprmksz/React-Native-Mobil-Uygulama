import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const data = [
  {
    id: '766367847',
    status: 'İşlem Bekliyor',
    locations: [
      { name: 'Bursa, Karacabey', latitude: 40.2139, longitude: 28.3616, date: '26/10/2024 - 18:00' },
      { name: 'Kayseri, Yeşilhisar', latitude: 38.2257, longitude: 35.0941, date: '26/10/2024 - 18:00' },
    ],
  },
  {
    id: '776873467',
    status: 'İşlem Bekliyor',
    locations: [
      { name: 'İstanbul, Cevizlibağ', latitude: 41.0242, longitude: 28.9395, date: '28/10/2024 - 20:00' },
      { name: 'Eskişehir, Mahmudiye', latitude: 39.5097, longitude: 30.9020, date: '26/10/2024 - 18:00' },
    ],
  },
  {
    id: '786873467',
    status: 'İşlem Bekliyor',
    locations: [
      { name: 'İstanbul, Beşiktaş', latitude: 41.0242, longitude: 28.9395, date: '28/10/2024 - 20:00' },
      { name: 'Eskişehir, Mahmudiye', latitude: 39.5097, longitude: 30.9020, date: '26/10/2024 - 18:00' },
    ],
  },

  {
    id: '796873467',
    status: 'İşlem Bekliyor',
    locations: [
      { name: 'İstanbul, Beşiktaş', latitude: 41.0242, longitude: 28.9395, date: '28/10/2024 - 20:00' },
      { name: 'Eskişehir, Mahmudiye', latitude: 39.5097, longitude: 30.9020, date: '26/10/2024 - 18:00' },
    ],

    
  },

  {
    id: '806873467',
    status: 'İşlem Bekliyor',
    locations: [
      { name: 'İstanbul, Beşiktaş', latitude: 41.0242, longitude: 28.9395, date: '28/10/2024 - 20:00' },
      { name: 'Eskişehir, Mahmudiye', latitude: 39.5097, longitude: 30.9020, date: '26/10/2024 - 18:00' },
    ],
  },

  {
    id: '807873467',
    status: 'İşlem Bekliyor',
    locations: [
      { name: 'İstanbul, Beşiktaş', latitude: 41.0242, longitude: 28.9395, date: '28/10/2024 - 20:00' },
      { name: 'Eskişehir, Mahmudiye', latitude: 39.5097, longitude: 30.9020, date: '26/10/2024 - 18:00' },
    ],
  },
];

const TaskManagementScreen = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isMenuVisible, setMenuVisible] = useState(false);

  const filteredData = data.filter(item =>
    item.id.startsWith(searchTerm) 
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardID}>ID: {item.id}</Text>
        <Text style={styles.cardStatus}>{item.status}</Text>
      </View>
      <View style={styles.cardBody}>
        {item.locations.map((location, index) => (
          <View key={index} style={styles.locationContainer}>
            <Ionicons 
              name={index === 0 ? 'ellipse' : 'ellipse-outline'} 
              size={16} 
              color="black" 
            />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationName}>{location.name}</Text>
              <Text style={styles.locationDate}>{location.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Taşıma Talepleri (128)</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="ID, sürücü, plaka, yükleme, teslim..."
            value={searchTerm}  
            onChangeText={text => setSearchTerm(text)}  
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>


      <MapView
        style={{ height: 300 }} 
      >
        {data.map((item, index) =>
          item.locations.map((location, locIndex) => (
            <Marker
              key={`${item.id}-${locIndex}`}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={location.name}
              description={location.date}
            />
          ))
        )}
      </MapView>

      <FlatList
        data={filteredData} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        style={{ flexGrow: 1 }} 
      />


      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="navigate" size={24} color="yellow" />
          <Text style={styles.menuText}>Taşıma Yönetimi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="add-circle" size={24} color="white" />
          <Text style={styles.menuText}>Taşıma Oluştur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="white" />
          <Text style={styles.menuText}>Menü</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.gridButton} onPress={() => setMenuVisible(!isMenuVisible)}>
        <Ionicons name="grid-outline" size={24} color="white" />
      </TouchableOpacity>

      {isMenuVisible && (
        <View style={styles.multiMenuContainer}>
          <TouchableOpacity style={styles.multiMenuLabelButton}>
            <Ionicons name="map-outline" size={24} color="white" />
            <Text style={styles.menuLabel}>Harita Görünümü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.multiMenuLabelButton}>
            <Ionicons name="add-circle-outline" size={24} color="white" />
            <Text style={styles.menuLabel}>Taşıma Ekle</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskManagementScreen;








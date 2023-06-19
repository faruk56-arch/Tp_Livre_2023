import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../models/data';

const CategoriesScreen = props => {
    const [search, setSearch] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);

    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff']; 

    const renderGridItem = (itemData) => {
        const color = colors[itemData.index % colors.length];
        return (
            <TouchableOpacity
                style={{...styles.gridItem, backgroundColor: color}}
                onPress={() => {
                    props.navigation.navigate('Books', { categoryId: itemData.item.id });
                }}
            >
                <Text style={styles.title}>{itemData.item.genre}</Text>
            </TouchableOpacity>
        );
    };

    const searchFilter = (text) => {
        setSearch(text);
        const newData = CATEGORIES.filter(item => {
            const itemData = item.genre.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredCategories(newData);
    };

    return (
        <View style={styles.screen}>
            <TextInput
                style={styles.searchBar}
                value={search}
                onChangeText={searchFilter}
                placeholder="Recherche par catégorie..."
                placeholderTextColor="#888"
            />
            <FlatList 
                data={filteredCategories} 
                renderItem={renderGridItem} 
                showsVerticalScrollIndicator={false} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'stretch',  // make items stretch to full width
    },
    gridItem: {
        margin: 10,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',  
        shadowRadius: 20,  
        padding: 5,
        width: '95%', // set width to 100%
        backgroundColor: 'grey',
    },
    title: {
        fontSize: 22,
        color: 'black',
    },
    searchBar: {
        height: 50,
        borderColor: '#888',
        borderWidth: 1,
        margin: 15,
        paddingLeft: 20,
        borderRadius: 10,
        color: 'white',
        width: '90%',
    },
    footer: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default CategoriesScreen;

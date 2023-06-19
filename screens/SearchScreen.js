import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { LIVRES } from '../models/data';

const SearchScreen = props => {
    const [search, setSearch] = useState('');

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate('BookDetail', { bookId: itemData.item.id })
            }}>
                <Text>{itemData.item.titre}</Text>
            </TouchableOpacity>
        );
    };

    const displayedBooks = LIVRES.filter(
        book => book.titre.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.screen}>
            <TextInput
                style={styles.searchBar}
                value={search}
                onChangeText={setSearch}
                placeholder="Recherche a book..."
            />
            <FlatList data={displayedBooks} renderItem={renderGridItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
    },
});

export default SearchScreen;

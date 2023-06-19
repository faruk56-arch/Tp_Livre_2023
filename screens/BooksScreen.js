import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { LIVRES } from '../models/data';
import { LinearGradient } from 'expo-linear-gradient';

const BooksScreen = props => {
    const [search, setSearch] = useState('');
    const [displayedBooks, setDisplayedBooks] = useState([]);

    const categoryId = props.route.params.categoryId;

    const allBooks = LIVRES.filter(livre => livre.categorieId.indexOf(categoryId) >= 0);

    useEffect(() => {
        searchFilter(search);
    }, [search]);

    const gradientColors = [
        [['#ff5f6d', '#ffc371'], ['#24C6DC', '#514A9D']],
        [['#2BC0E4', '#EAECC6'], ['#ED4264', '#FFEDBC']]
    ];

    const renderGridItem = (itemData) => {
        const colorIndex = itemData.index % 2; // Choose gradient set based on index
        return (
            <LinearGradient
                colors={gradientColors[colorIndex][0]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gridItem}
            >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('BookDetail', { bookId: itemData.item.id })
                }}>
                    <Text style={styles.bookTitle}>{itemData.item.titre}</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    };

    const searchFilter = (text) => {
        setSearch(text);
        if (text && text.trim().length > 0) {
            const newData = allBooks.filter(book => {
                const bookData = book.titre.toUpperCase();
                const textData = text.toUpperCase();
                return bookData.indexOf(textData) > -1;
            });
            setDisplayedBooks(newData);
        } else {
            setDisplayedBooks(allBooks);
        }
    };

    return (
        <View style={styles.screen}>
            <TextInput
                style={styles.searchBar}
                value={search}
                onChangeText={searchFilter}
                placeholder="Recherche un Livre..."
                placeholderTextColor="#888"
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
        backgroundColor: '#222',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        padding: 10,
    },
    bookTitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    searchBar: {
        height: 50,
        borderColor: '#888',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 20,
        borderRadius: 10,
        color: 'white',
        width: '90%',
    },
});

export default BooksScreen;

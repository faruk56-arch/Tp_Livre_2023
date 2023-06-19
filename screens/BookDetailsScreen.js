import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { LIVRES } from '../models/data';

const windowWidth = Dimensions.get('window').width;

const BookDetailsScreen = props => {
    const bookId = props.route.params.bookId;
    const selectedBook = LIVRES.find(book => book.id === bookId);

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.imageContainer}>
                <Image source={{uri: selectedBook.imageUrl}} style={styles.image} />
            </View>
            <Text style={styles.title}>{selectedBook.titre}</Text>
            <Text style={styles.description}>{selectedBook.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',  // updated this line
        backgroundColor: '#F9F9F9',
    },
    imageContainer: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: windowWidth - 40,
        height: 300,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
        textAlign: 'justify',
    },
});

export default BookDetailsScreen;

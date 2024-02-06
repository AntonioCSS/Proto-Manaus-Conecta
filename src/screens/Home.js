import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = () => {
    return (
        <LinearGradient 
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 0}} 
    colors={['#0097B2', '#7ED957']}
    style={styles.container}>
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.profileImage}
            />

            <ScrollView contentContainerStyle={styles.cardsContainer}>
                <TouchableOpacity style={styles.card}>
                    <Icon name="wrench" size={20} color="#4F8EF7" />
                    <Text>Serviços</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="wrench" size={20} color="#4F8EF7" />
                    <Text>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="wrench" size={20} color="#4F8EF7" />
                    <Text>Suporte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="wrench" size={20} color="#4F8EF7" />
                    <Text>Pagamentos</Text>
                </TouchableOpacity>

            </ScrollView>

            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="user" size={20} color="#4F8EF7" />
                    <Text>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={20} color="#4F8EF7" />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="briefcase" size={20} color="#4F8EF7" />
                    <Text>Ativos</Text>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardsContainer: {
        padding: 10,
    
    },
    profileImage: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 20, 
        marginBottom: 20, 
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 20,
        alignItems: 'center'
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    navItem: {
        alignItems: 'center',
    },
});

export default HomeScreen;

import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    ScrollView,
    TouchableOpacity

} from 'react-native';

export default class Ticket extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FFFFFF', flex: 1, borderWidth: 2, borderColor: 'pink', opacity: 100, }}>
                <View style={styles.container}>
                    <View style={styles.views_direction}>
                        <Image source={require('../icon/left-arrow.png')}
                            style={{
                                width: 12, height: 12,
                            }} />
                        <Text style={{
                            fontWeight: 'bold',
                        }}>Details </Text>
                        <Image source={require('../icon/like.png')}
                            style={{ width: 20, height: 20, tintColor: 'red', }} />
                    </View>
                </View>
                <View style={styles.container2}>
                </View>
                <Text style={styles.Text}>
                    Manggis jazz Music </Text>
                <Text style={styles.Text}>
                    Festival Award 2021</Text>
                <Text style={{ color: 'lightgrey', marginHorizontal: 15, marginVertical:10 }}>
                    By Bukalapuk</Text>
                <View style={styles.container3}>
                    <View style={styles.views_direction2}>
                        <Text style={styles.Text2}> Date</Text>
                        <Text>24 March2021</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 1 }}>

                        <Text style={{ color: 'lightgrey', marginRight: '10%', alignSelf: 'flex-start' }}>
                            and time</Text>

                        <Text>
                            11:30 PM</Text>
                    </View>


                </View>
                <View style={styles.container4}>
                    <View style={styles.views_direction2}>
                        <Text style={{color: 'lightgrey', marginRight: '10%', alignSelf: 'flex-start'}}>Location</Text>
                        <Text>Lapdek Convention Center,Sukabumi</Text>
                       </View> 
                       </View>
                       <Text style={{  marginHorizontal: 15, marginVertical: 10,fontSize:18 }}>
Participants</Text>
<View style={styles.container5}>
    <View style={styles.views_direction3}>
    <View style={styles.circles}>
            </View>
            <View style={styles.circles}>
            </View>
            <View style={styles.circles}>

            </View>
            <View style={styles.circles}>
            <Text style={{color:'white',textAlign:'center', marginHorizontal:5,marginVertical:10,}}>10+</Text>
            </View>
    </View>
</View>
<View style={styles.Button}>

<Text style={{color:'white',}}>Book Ticket</Text>
</View>
   
                





            </ScrollView>
        )
    }
}
const styles = {
    container: {
        height: 45,
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: 'lightgrey',

    },
    views_direction: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10,
        alignItems: 'center',
    },
    container2: {
        height: 200,
        borderRadius: 20,
        backgroundColor: 'lightgrey',
        marginHorizontal: 15,
        marginVertical: 5
        // justifyContent:'center',
        // alignItems:'center'

    },
    Text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 15,
        marginVertical: 1
    },

    container3: {
        height: 70,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',

    },
    views_direction2: { flexDirection: 'row', marginVertical: 10, marginHorizontal: 15 },
    Text2: { textAlign: 'left', color: 'lightgrey', marginRight: '17%' },
    container4: {
        height: 70,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',

    },
    container5:{
        height: 60,
        marginHorizontal:15,
        },
        views_direction3: {
            flexDirection: 'row',marginHorizontal: 10, marginVertical:10,
            alignItems: 'center',
        },
        circles:{height: 40,
            width: 40,
            backgroundColor:'lightgrey',
             borderRadius: 100,marginHorizontal:5},
             Button:{
                height: 50,
                 borderRadius: 30,
                  marginHorizontal: 25,
                backgroundColor: 'skyblue',
                alignItems: 'center',
                justifyContent:'center',
                },
}

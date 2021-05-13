import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    ScrollView,

} from 'react-native';
export default class Homepage extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', flex: 1, borderWidth: 2, borderColor: 'pink', opacity: 100, }}>
                <View style={{ backgroundColor: '#5098F2', height: '100%', borderTopRightRadius: 25, borderTopLeftRadius: 25, }}>
                    <View style={{ backgroundColor: '#5098F2', height: '35%', borderStartWidth: 1, borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>

                        <View style={styles.containe}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Image source={require('../icon/menu.png')}
                                    style={styles.image
                                    } />
                                <Text style={{
                                    color: 'white',
                                    alignSelf: 'center',
                                }}>
                                    Sukabumi </Text>
                                {/* <Image source={require('../icon/down-arrow.png')}
                     style={{
                         width: 10, height: 10, marginVertical: 10,
                         tintColor: 'white',}} /> */}
                                <Image source={require('../icon/notification.png')}
                                    style={styles.image} />


                            </View>
                        </View>
                        <Text style={styles.text1}>
                            Join With upcomming </Text>
                        <Text style={styles.text1}>
                            Amazing Event </Text>
                        <TouchableOpacity
                            style={styles.searchbox}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../icon/loupe.png')}
                                    style={styles.image
                                    } />
                                <TextInput
                                    placeholder="Search Event"
                                    style={{ color: 'white' }} />
                            </View>
                        </TouchableOpacity>
                    </View>




                    <View style={{ backgroundColor: '#FFFFFF', height: '65%', borderStartWidth: 1, borderTopRightRadius: 35, borderTopLeftRadius: 35, }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Text style={{ marginVertical: 20, marginHorizontal: 20, fontWeight: '300' }}>Most popular</Text>
                            <Text style={{ marginVertical: 20, marginHorizontal: 20, color: 'orange', }}>View all</Text>
                        </View>
                        <View style={styles.container2}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.style_view1}></View>
                                <View style={styles.style_view2}>

                                    <Text style={styles.text2}>Seminar</Text>
                                    <Text style={styles.text2}>Teknologi Modern</Text>
                                    <Text style={styles.text3}>By wadimoy</Text>
                                    <Text>24 March2021 /11:00 PM</Text>
                                </View>

                            </View>
                            <View style={styles.container2}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.style_view1}></View>
                                    <View style={styles.style_view2}>

                                        <Text style={styles.text2}>Air Balloon</Text>
                                        <Text style={styles.text2}>Amazin festival 2021</Text>
                                        <Text style={styles.text3}>By cimanggis</Text>
                                        <Text>17 jan 2022 /4:00 AM</Text>
                                    </View>

                                </View>
                            </View>
                            <Text style={{ marginHorizontal: 20, fontWeight: 'bold', fontSize: 15, }}>Nearby</Text>
                            <View style={styles.container3}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={styles.style_view3}></View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10 }}>

                                        <Text style={{}}>Manggis jazz Music</Text>
                                        <Text style={{ textAlign: 'right', marginLeft: '55%' }}>1.2 KM</Text>

                                        <Text>17 March2021</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                            <Image source={require('../icon/home.png')}
                                style={styles.image2} />
                            <Image source={require('../icon/calendar.png')}
                                style={styles.image2} />
                            
                                <Image source={require('../icon/add.png')}
                                    style={{
                                        width: 50, height: 50, marginVertical: 20, resizeMode: 'stretch',
                                        marginHorizontal: 20, opacity: 5, tintColor: 'orange' }}/>
                                    <Image source={require('../icon/heart.png')}
                                style={styles.image2} />
                            <Image source={require('../icon/user.png')}
                                style={styles.image2} />
                        </View> */}

                    </View>
                </View>
            </View>)
    }
}
const styles = {
    container: {
        height: 45,
        borderRadius: 3,
        marginHorizontal: 7,
        marginVertical: 5,
        borderWidth: 1,

        borderColor: 'lightgrey',
    },




    image: {
        width: 20, height: 20, marginVertical: 10,
        marginHorizontal: 10, tintColor: 'white',
    },
    text1: { color: 'white', fontWeight: 'bold', fontSize: 23, marginHorizontal: 10, marginVertical: 1 },
    searchbox: {
        height: 43,
        width: 320,
        borderRadius: 25,
        borderWidth: 1,

        marginHorizontal: 20,
        backgroundColor: '#5098F2',
        marginVertical: 20,


    },
    container2: { width: '98%', height: 110, marginVertical: 15, },
    style_view1: {
        height: 100,
        width: 85,
        borderRadius: 10,
        backgroundColor: 'lightgrey',

        marginHorizontal: 10,
        marginVertical: 5,
    },
    text2: {

        fontWeight: 'bold',
        fontSize: 18,
    },
    text3: {

        color: 'lightgrey',

    },
    style_view2: {
        marginHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container3: {
        width: '90%',
        borderRadius: 15,
        height: '80%',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: 'lightgrey',

    },
    style_view3: {
        height: 75,
        width: 70,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    image2: {
        width: 25, height: 25, marginVertical: 20,
        marginHorizontal: 20, opacity: 5, tintColor: 'lightgrey'
    },
}

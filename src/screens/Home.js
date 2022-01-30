import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text,ImageBackground, View, TouchableOpacity, Image} from 'react-native';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const Home = ({ navigation }) => {
  const theme = 'dark';

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
              <ImageBackground
                style={{ width: "100%",marginTop: 0, height: 200 }}
                source={require("../../src/assets/images/home-banner.png")}
                resizeMode="cover"
              >
                <View
                  style={{
                    marginTop: 30,
                    marginLeft: 20,
                    marginBottomleft:10
                  }}
                >
                  <Text style={{ color: "red", fontSize: 25 }}>CHILD CARE</Text>
                  <Text style={{ color: "#fff" }}>
                  As the labour force participation rates for mothers of young 
                  children have risen over the past few decades, so has the use
                 of child care</Text>
                  <TouchableOpacity
                    style={{
                      marginTop: 10,
                      width: 150,
                      padding: 0,
                      alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate("Product")}
                  >
                    <View
                      style={{
                        flexDirection: "row"
                      }}
                    >
                      <Touch
                  onPress={() => navigation.navigate('StackMulti')}
                  text="GET STARTED"
                />
                      
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
      </ScrollView>
      <ScrollView
      scrollEventThrottle={10}
      >

            <View style={{ flex:1,paddingTop:20,backgroundColor:null}}>

                    <View style={{ height:300,marginTop:0}}>
                        <ScrollView horizontal={true}
                         showsHorizontalScrollIndicator={false}>
                            <View style={{ height:250,width:250,
                            marginLeft:20,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                      <ImageBackground style={{flex:1,Width:null,
                                      height:null,
                                      
                                      }} source={require
                                      ("../../src/assets/images/home-banner.png")}
                                      ></ImageBackground>
                                </View>

                                <View style={{flex:1}}>
                                      <Text style={{fontSize:20,color:"white",
                                      justifyContent:"center",marginLeft:45}}>
                                      Physcical Growth
                                      </Text>
                                </View>
                            </View>


                              <View style={{ height:250,width:250,
                            marginLeft:20,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                      <ImageBackground style={{flex:1,Width:null,
                                      height:null,
                                      
                                      }} source={require
                                      ("../../src/assets/images/home-banner.png")}
                                      />
                                </View>

                                <View style={{flex:1}}>
                                      <Text style={{fontSize:20,color:"white",
                                      justifyContent:"center",marginLeft:45}}>
                                      Food Plan
                                      </Text>
                                </View>
                            </View>


                            <View style={{ height:250,width:250,
                               marginLeft:20,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                      <ImageBackground style={{flex:1,Width:null,
                                      height:null,
                                      
                                      }} source={require
                                      ("../../src/assets/images/home-banner.png")}
                                      />
                                </View>

                                <View style={{flex:1}}>
                                      <Text style={{fontSize:20,color:"white",
                                      justifyContent:"center",marginLeft:45}}>
                                      Mental Health
                                      </Text>
                                </View>
                            </View>

                            <View style={{ height:250,width:250,
                               marginLeft:20,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                      <ImageBackground style={{flex:1,Width:null,
                                      height:null,
                                      
                                      }} source={require
                                      ("../../src/assets/images/home-banner.png")}
                                      />
                                </View>

                                <View style={{flex:1}}>
                                      <Text style={{fontSize:20,color:"white",
                                      justifyContent:"center",marginLeft:45}}>
                                     Social Skills
                                      </Text>
                                </View>
                            </View>


                            <View style={{ height:250,width:250,
                               marginLeft:20,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                      <ImageBackground style={{flex:1,Width:null,
                                      height:null,
                                      
                                      }} source={require
                                      ("../../src/assets/images/home-banner.png")}
                                      />
                                </View>

                                <View style={{flex:1}}>
                                      <Text style={{fontSize:20,color:"white",
                                      justifyContent:"center",marginLeft:45}}>
                                      Emotional Treatment
                                      </Text>
                                </View>
                            </View>


                            <View style={{ height:250,width:250,
                               marginLeft:20,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                      <ImageBackground style={{flex:1,Width:null,
                                      height:null,
                                      
                                      }} source={require
                                      ("../../src/assets/images/home-banner.png")}
                                      />
                                </View>

                                <View style={{flex:1}}>
                                      <Text style={{fontSize:20,color:"white",
                                      justifyContent:"center",marginLeft:45}}>
                                      Common Illness
                                      </Text>
                                </View>
                            </View>
                        
                        </ScrollView>
                    </View>
            </View>
      
      </ScrollView>
    </View>
  );
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;

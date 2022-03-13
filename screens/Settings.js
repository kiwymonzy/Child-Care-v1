import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'top', padding: SIZES.padding,  backgroundColor: COLORS.secondary }}>

        <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.primary, borderRadius: SIZES.radius }}>
          {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                //source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>PROFILE</Text>
                        </View>
                    </TouchableOpacity>

        </View>

                    {/* Divider */}
                    <LineDivider />

        <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.primary, borderRadius: SIZES.radius }}>
          {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                //source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>THEME</Text>
                        </View>
                    </TouchableOpacity>

                     
        </View>

                    {/* Divider */}
                    <LineDivider />

        <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.primary, borderRadius: SIZES.radius }}>
          {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                //source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>ABOUT</Text>
                        </View>
                    </TouchableOpacity>

                     
        </View>
      
    </View>    
  );
}
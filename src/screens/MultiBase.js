import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Image } from 'react-native';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const MultiBase = ({ navigation }) => {
  const theme = 'dark';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Multi screen content area</Text>

      <View style={gStyle.spacer64} />

      <Touch
        onPress={() => navigation.navigate('MultiLevel2')}
        text="Go to level 2"
      />
      <Touch
        onPress={() => navigation.navigate('MultiLevel3')}
        text="Go to level 2"
      />
    </ScrollView>


  );
};

MultiBase.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBase;

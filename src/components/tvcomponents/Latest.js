import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Loader from '../../utils/Loader';
import { useEffect, useState } from 'react';
import { POSTER_IMAGE, ANOTHER_IMAGE, IMAGE_POSTER_URL } from '../../utils/Config';
import StyleMain from '../../utils/StyleMain';
import { GET } from '../../service/Api';
import ItemSeparator from '../../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";
import Images from '../../utils/Images';


const Latest = (props, item ) => {
  const [loading, setLoading] = useState(true);
  const [latest, setLatest] = useState();

  useEffect(() => {
    const getLatest = async () => {
      const data = await GET(props.url);
      setLatest(data.results);
      setLoading(false);
    };

    getLatest();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('TvDetails', {tvId: item.id});

      }}
     // style={{ marginHorizontal: 10 }}
     >



      <Image
        //source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
        source={//Images ? { uri: `${IMAGE_POSTER_URL}${item.poster_path}` } :
          Images.NO_IMAGE}

        style={StyleMain.posterImageL}
      />
      <View style={StyleMain.rowAndCenter}>
        <Ionicons
          name="heart"
          size={17}
          color={'yellow'}
          style={{
            marginRight: 3,
            marginTop: 3
          }}
        />
        <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
      </View>
      <Text style={StyleMain.movieTitle}>{item.original_name}</Text>
    </TouchableOpacity>
  );
};

export default Latest;
import {View, Text,Image,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import Loader from '../../utils/Loader';
import { useEffect,useState } from 'react';
import { POSTER_IMAGE,ANOTHER_IMAGE,IMAGE_POSTER_URL } from '../../utils/Config';
import StyleMain from '../../utils/StyleMain';
import { GET } from '../../service/Api';
import ItemSeparator from '../../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";

const NowPlaying=props=>{
    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState();
  
    useEffect(() => {
      const getNowPlaying = async () => {
        const data = await GET(props.url);
        setNowPlaying(data.results);
        setLoading(false);
      };
  
      getNowPlaying();
    }, []);
  
    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <View>
            {/* <Text style={Styles.heading}>{props.title}</Text> */}
            <FlatList
              keyExtractor={item => item.id}
              data={nowPlaying}
              horizontal
              ItemSeparatorComponent={() => <ItemSeparator width={15} />}
              ListHeaderComponent={() => <ItemSeparator width={5} />}
              ListFooterComponent={() => <ItemSeparator width={20} />}
              renderItem={item => displayMovies(item, props)}
            />
          </View>
        )}
      </View>
    );
  };
  
  const displayMovies = ({item}, props) => {
    return (
      <TouchableOpacity
        onPress={() => {
         // props.navigation.push('movieDetails', {movieId: item.id});
        }}
        style={{marginHorizontal: 10}}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
          style={StyleMain.posterImage}
        />
         <View style={StyleMain.rowAndCenter}>
         <Ionicons
              name="heart"
              size={17 }
              color={'yellow'}
              style={{ marginRight: 3,
            marginTop:3 }}
            />
            <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
            </View>
        <Text style={StyleMain.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
export default NowPlaying;
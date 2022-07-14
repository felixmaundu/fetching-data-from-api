import {View, Text,Image,FlatList,TouchableOpacity} from 'react-native';
import Loader from '../../utils/Loader';
import { useEffect,useState } from 'react';
import { POSTER_IMAGE,ANOTHER_IMAGE,IMAGE_POSTER_URL } from '../../utils/Config';
import StyleMain from '../../utils/StyleMain';
import { GET } from '../../service/Api';
import ItemSeparator from '../../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";
import Images from '../../utils/Images';
 
const Gallery=props=>{
    const [loading, setLoading] = useState(true);
    const [imagesGal, setImagesGal] = useState();
  
    useEffect(() => {
      const getAllImages = async () => {
        const data = await GET(props.url);
        setImagesGal(data.backdrops);
        setLoading(false);
        //console.log(data.backdrops)
      };
  
      getAllImages();
    }, []);
  
    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <View>
           
            <FlatList
              keyExtractor={item => item.id}
              data={imagesGal}
              horizontal
              ItemSeparatorComponent={() => <ItemSeparator width={15} />}
              ListHeaderComponent={() => <ItemSeparator width={5} />}
              ListFooterComponent={() => <ItemSeparator width={10} />}
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
    //   onPress={() => {
    //     props.navigation.push('TvDetails', {tvId: item.id});
    //    }}
    style={StyleMain.posterImage}
        style={{marginHorizontal: 10}}>
        <Image
         source={{uri: `${IMAGE_POSTER_URL}${item.file_path}`}}

         //source={ Images.NO_IMAGE}

          style={StyleMain.posterImageGal}
        />

       
      </TouchableOpacity>
    );
  };
export default Gallery;
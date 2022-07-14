import {View, Text,Image,FlatList,TouchableOpacity, ActivityIndicator} from 'react-native';
import Loader from '../../utils/Loader';
import { useEffect,useState } from 'react';
import { POSTER_IMAGE,ANOTHER_IMAGE,IMAGE_POSTER_URL } from '../../utils/Config';
import StyleMain from '../../utils/StyleMain';
import { GET } from '../../service/Api';
import ItemSeparator from '../../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";



const OnAirMoreSub= props =>{
    const [loading, setLoading] = useState(true);
    const [OnAirMore, setOnAirMore] = useState();
    const [pageCurrent, setPageCurrent] = useState(1)
  
    useEffect(() => {
      const getOnAirMore = async () => {
        const data = await GET(props.url); //+pageCurrent);
        setOnAirMore(data.results);
        setLoading(false);
      };
  
      getOnAirMore();
    }, [pageCurrent]);
  
    // renderFooter=()=>{
    //     return(
    //         loading ?
    //         <View Style={StyleMain.loader}>
    //             <ActivityIndicator size={"large"}/>
    //         </View> : null
    //     );
    // };
    handleLoadMore=()=>{
        setPageCurrent(pageCurrent + 1)
        setLoading(true)
    }

    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <View>
            {/* <Text style={Styles.heading}>{props.title}</Text> */}
            <FlatList
              keyExtractor={item => item.id}
              data={OnAirMore}
              
              //horizontal
            
              renderItem={item => displayMovies(item, props)}
              //ListFooterComponent={this.renderFooter}
              //onEndReached={this.handleLoadMore}
              //onEndReachedThreshold={0}
              //scrollEnabled={false} 
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
         props.navigation.push('TvDetails', {tvId: item.id});
        }}
        style={{marginHorizontal: 5}}>
      <View style={StyleMain.maincontainerVert}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
          style={StyleMain.posterImage}
        />
        <View style={StyleMain.rowAndCenterSub}>
         <Ionicons
              name="heart"
              size={17 }
              color={'yellow'}
              style={{ marginRight: 3,
            marginTop:3 }}
            />
            <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
            </View>
        <Text style={StyleMain.movieTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
export default OnAirMoreSub;
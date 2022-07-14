import {Dimensions, StyleSheet} from 'react-native';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const StyleMain = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#151C26',
      alignItems: 'center',
      
      justifyContent: 'center',
      //marginTop:'20%',
      height: deviceHeight,
   
  },
 
  input: {
    height: 40,
    margin: 12,
    color: '#fff',
    //backgroundColor: '#fff',
    borderRadius:10,
    borderColor:'#fff',
    borderWidth: 1,
    padding: 10,
  },
  trendingPeopleName: {
    width: 60,
    color: "#fff",
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  trendingPeopleImage:{
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  topparttv:{

    
  },

  videoContainer:{
    height:200,
    width:deviceWidth,
    margin:5
  },
  maincontainerVert:{
    flexDirection: 'row', 
    marginTop:10,
    marginBottom:10
  },
  rowAndCenterSub:{
    flexDirection: 'column', 
  },
  loader:{
    marginTop:10,
    alignItems:'center'
  },

//   btnSeeAll: {
//     flexDirection: 'row', 
//     height: 50, 
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 50,
//     elevation:3,
// },
 // button: {
    //     flexDirection: 'row', 
    //     marginEnd:'5%',
    //     marginBottom:'2%',
    //     backgroundColor: 'yellow',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 50,
    //     elevation:3,
    // },
    // text: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // }
    
  posterImage: {
   
    height: 250,
    width: 175,
    borderRadius: 5,
  },
  posterImageGal: {
   
    height: 250,
    width: 300,
    borderRadius: 5,
  },
  posterImageL: {
   
    height: 250,
    width: '95%',
    borderRadius: 5,
    margin:'5%',
    alignItems: "center",
  },
  movieTitle: {
    color: '#fff',
    width: 150,
    textAlign: 'center',
    marginTop: 1,
    fontSize: 16,
  },
  imageBg:{
    height:400,
    width:deviceWidth,
    borderRadius:10
  },
  vote_count:{
    color:'orange',

  },
  topparttv:{
    flexDirection: "row",
    alignItems: "center",
  },
  rowAndCenter:{
    flexDirection: "row",
    justifyContent:"space-between",
    //alignItems: "stretch",
  },
  detailsContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  heading: {
    fontSize: 19,
    color:'#fff',
    margin: 5,
  },
  details: {
    color:'#fff',
    fontSize: 15,
    marginStart: 15,
    fontWeight: 'bold',
  },
  text:{
    color:'#fff',
    fontSize:20,
    backgroundColor:'#151C26',
    marginStart:'10%',
  },
  textD:{
    color:'#fff',
    fontSize:20,
    backgroundColor:'#151C26',
    marginStart:'10%',
    justifyContent:"space-between"
  },
  seeAll:{
    color:'#fff',
    marginStart: '80%',
    fontSize:20
  },
  containerMain:{
    //marginTop:'10%',
    
    backgroundColor:'#151C26',
  }
 
});

export default StyleMain;

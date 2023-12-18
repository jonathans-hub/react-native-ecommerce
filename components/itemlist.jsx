import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import backPho from "../assets/background.png";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
class Itemlist extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.workArea}>
          <View style={style.iconsArea}>
            <TouchableOpacity>
              <View style={style.iconBg}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.iconBg}>
                <AntDesign name="shoppingcart" size={24} color="#7880ef"/>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={style.pageName}>Woman Jacket</Text>
          <View style={style.searchArea}>
            <TextInput
              placeholder="Search Jacket"
              style={{ flex: 1, fontSize: 19 }}
            />
            <View style={style.searchButton}>
              <TouchableOpacity>
                <Text style={style.filCol}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={this.props.state.items}
            style={style.flatListt}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={style.rowCon}>
                  <Image source={backPho} style={style.backGround} />
                  <View style={style.imgDiv}>
                    <Image source={item.itemPicture} style={style.itemPic} />
                  </View>
                  <View style={style.textDiv}>
                    <Text style={[style.textDiv1]}>{item.itemName}</Text>
                    <AirbnbRating
                      showRating={false}
                      count={5}
                      defaultRating={item.rating}
                      size={11}
                      isDisabled
                      ratingContainerStyle={style.ratingg}
                    />
                    <Text style={style.textDiv2}>{item.price}</Text>
                  </View>
                  <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor="#F4F4FB"
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#F4F4FB",
    paddingBottom: 100,
  },
  iconsArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBg: {
    backgroundColor: "#ffff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  workArea: {
    marginHorizontal: 20,
  },
  pageName: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "800",
    paddingLeft: 5,
  },
  searchArea: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  searchButton: {
    width: 41,
    alignItems: "center",
    marginRight: 5,
  },
  filCol: {
    color: "#7880ef",
    fontWeight: "800",
  },
  rowCon: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  imgDiv: {
    position: "absolute",
    bottom: 38,
    left: 5,
  },
  backGround: {
    width: 130,
    height: 120,
  },
  itemPic: {
    height: 120,
    width: 120,
  },
  textDiv: {
    flexDirection: "column",
    height: 150,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  textDiv1: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
    paddingLeft: 4,
  },
  textDiv2: {
    color: "#7880ef",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 3,
  },
  roww: {
    flexDirection: "row",
    alignItems: "center",
  },
  roww1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingLeft: 5,
  },
  ratingg: {
    alignSelf: "flex-start",
  },
});

export default Itemlist;

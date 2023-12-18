import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import backPhot from "../assets/pageBackground.png";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Itempage({ state }) {
  const width = Dimensions.get("screen").width;
  return (
    <View style={style.container}>
      <View style={style.imgCon}>
        <View style={style.imgSection}>
          <Image source={backPhot} style={style.backGround} />
          <LinearGradient
            colors={["#F4F4FB", "white"]}
            style={{
              position: "absolute",
              bottom: 100,
              top: 0,
              left: 5,
              right: 0,
            }}
          ></LinearGradient>
        </View>
        <View style={style.imgDiv}>
          <Image source={state.items[0].itemPicture} style={style.itemPic} />
        </View>
      </View>
      <View style={style.textDiv}>
        <Text style={[style.textDiv1]}>{state.items[0].itemName}</Text>
        <View style={style.revRow}>
          <Text style={style.revText}>Review : </Text>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={state.items[0].rating}
            size={11}
            isDisabled
            ratingContainerStyle={style.ratingg}
          />
        </View>
        <View style={style.lineBar}></View>
        <Text style={style.desText}>
          It is a long extablished fact that a reader will be distracted by the
          readable content of a page.
        </Text>
        <LinearGradient
          colors={["#F4F4FB", "white"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{
            width: width - 50,
            height: 50,
            marginLeft: -70,
            paddingLeft: 70,
            justifyContent: "center",
            marginBottom: 25,
          }}
        >
          <Text style={style.materialText}>
            Material: 91% polyester , 9% elastane
          </Text>
        </LinearGradient>
        <View style={style.sizeCon}>
          <View style={style.viewBox}>
            <Text style={style.boxText}>XS</Text>
          </View>
          <View style={style.viewBox}>
            <Text style={style.boxText}>S</Text>
          </View>
          <View style={[style.viewBox, style.selViewBox]}>
            <Text style={[style.boxText, style.selBoxText]}>M</Text>
          </View>
          <View style={style.viewBox}>
            <Text style={style.boxText}>L</Text>
          </View>
          <View style={style.viewBox}>
            <Text style={style.boxText}>XL</Text>
          </View>
        </View>
        <View style={style.bottomBox}>
          <View>
            <Text style={style.totalTxt}>Total Amount</Text>
            <Text style={style.priceText}>{state.items[0].price}</Text>
          </View>
          <TouchableOpacity>
            <View style={style.cartBox}>
              <Text style={style.cartText}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.iconsArea}>
        <View style={style.iconsRow}>
          <TouchableOpacity>
            <View style={style.iconBg}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.iconBg}>
              <AntDesign name="shoppingcart" size={24} color="#7880ef" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.favbuttonArea}>
          <TouchableOpacity>
            <View style={style.favbutton}>
              <MaterialIcons name="favorite-border" size={24} color="#7880ef" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle={"dark-content"} backgroundColor="#F4F4FB" />
    </View>
  );
}
const screenWidth = Dimensions.get("window").width;
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#F4F4FB",
  },
  iconsArea: {
    width: screenWidth,
    position: "absolute",
    top: 20,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconBg: {
    backgroundColor: "#ffff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  favbuttonArea: {
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  favbutton: {
    backgroundColor: "#ffff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  imgCon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  backGround: {
    width: 350,
    height: 390,
  },
  itemPic: {
    height: 350,
    width: 350,
    position: "absolute",
    bottom: 55,
    right: -170,
  },
  textDiv: {
    marginTop: 25,
    paddingHorizontal: 50,
  },
  textDiv1: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
  },
  revRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  revText: {
    fontSize: 12,
    fontWeight: "700",
  },
  ratingg: {
    alignItems: "flex-start",
    paddingTop: 1,
  },
  lineBar: {
    backgroundColor: "#7880ef",
    height: 5,
    width: 50,
    borderRadius: 2,
    marginBottom: 15,
  },
  desText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: 20,
  },
  materialText: {
    color: "#7880ef",
    fontSize: 12,
    fontWeight: "700",
  },
  sizeCon: {
    flexDirection: "row",
  },
  viewBox: {
    backgroundColor: "#ffff",
    height: 35,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 15,
    marginBottom: 35,
  },
  boxText: {
    fontSize: 10,
  },
  selViewBox: {
    backgroundColor: "#7880ef",
  },
  selBoxText: {
    color: "#ffff",
  },
  bottomBox: {
    height: 90,
    backgroundColor: "#7880ef",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  totalTxt:{
    color: "#ffff",
    fontSize:10,
    fontWeight:"700"
  },
  priceText:{
    color: "#ffff",
    fontSize:30,
    fontWeight:"700"
  },
  cartBox:{
    backgroundColor:"#3600D3",
    width:120,
    height:50,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
  },
  cartText:{
    color: "#ffff",
    fontSize:12,
    fontWeight:"700"
  }
});

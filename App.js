import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Select from 'react-select';
import { ImageBackground, TouchableOpacity } from 'react-native-web';
import "./style.css";

const country = [
  { label: "Pakistan", value: 1 },
  { label: "China", value: 2 },
  { label: "India", value: 3 },
  { label: "America", value: 4 },
  { label: "Iran", value: 5 },
];

const App = () => {

  function btnToggle() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  return (

    <View style={{ paddingLeft: 15, paddingRight: 15}}>


      <button onClick={btnToggle}
        style={{ backgroundColor: "black", color: 'white', width: 45, height: 33, cursor: 'pointer', position: 'absolute', right: 1, top: 1, }}>
        ☰
      </button>
      <div id="Dropdown" className="dropdownmenu-content" >
        <h3 style={{ paddingLeft: 30 }}>Menu</h3>
        <hr style={{ marginLeft: 30 }}></hr>

        <a href="#">Travel guid</a>
        <a href="#">Resturent</a>
        <a href="#">Stay Hotels</a>
        <a href="#">Shopping</a>
        <a href="#">Visiting place</a>
        <a href="#">Art & Gellery</a>
        <a href="#">Blog</a>

      </div>


      <Text style={{ paddingTop: 70, fontWeight: "bold", fontSize: 38 }}>Discover.</Text>
      <Text style={{ fontSize: 23, color: 'grey', paddingBottom: 20, fontFamily: 'system-ui' }}>Make sans by travel</Text>


      <View style={{ fontWeight: 'bold', color: 'black' }}>
        <Select options={country}
          placeholder="Choose Country" />
      </View>


      <View style={{ flexDirection: 'row', paddingTop: 40 }}>
        <Text style={{ fontSize: 17 }}>What you intarested</Text>
        <View style={{ backgroundColor: 'black', height: 1, flex: 1, marginTop: 20, marginRight: 110 }} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKWOLev-FQi-YCdTltmvi_ynMJyNObXfaV9ke8krszE9ZqgSSEEW0lKnqINzOFKesCJs&usqp=CAU" }} style={styles.image}>
            <Text style={styles.text}>intarested shop  →</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity>
          <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15-vOkpW8TCY_sQ-UEr6o5PGJL517aSwnwA&usqp=CAU" }} style={styles.image}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold" }}>intarested drinking →</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity>
          <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlG19axgVc-ZlD57GV3Gn_83JR7X4UBWiwun3c-Aq7G9k1Vjb8Nbdc_ATv4kOLDfx5Pc&usqp=CAU" }} style={styles.image}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold" }}>intarested For Stay →</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row', paddingTop: 110 }}>
        <Text style={{ fontSize: 17 }}>Top intarested thing in</Text>
        <View style={{ backgroundColor: 'black', height: 1, flex: 1, marginTop: 20, marginRight: 110 }} />
      </View>


      <View style={styles.container}>
        <div style={{ boxShadow: 3 }}></div>
        <ImageBackground source={{ uri: "https://a.cdn-hotels.com/gdcs/production174/d662/10686744-440f-4da6-ae56-82af97b761ac.jpg?impolicy=fcrop&w=800&h=533&q=medium" }} style={{
          height: 170, width: 110,
          marginRight: 10, backgroundColor: 'white'
        }}>
          <Text style={{ fontSize: 13, marginTop: 175 }}>Important of
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "bold", }}> Eiffel tower →</Text>
        </ImageBackground>


        <ImageBackground source={{ uri: "https://slowpainting.files.wordpress.com/2010/03/monalisa.jpg" }} style={{
          height: 170,
          width: 110,
          marginRight: 10, backgroundColor: 'white'
        }}>
          <Text style={{ fontSize: 13, marginTop: 175 }}>Mona Lisa </Text>
          <Text style={{ fontWeight: "bold", fontSize: 13, }}>Symbol of art</Text>
        </ImageBackground>


        <ImageBackground source={{ uri: "https://bijouxpedia.com/wp-content/uploads/2021/03/Louvre-Museum-Bijouxpedia.jpg" }}
          style={{
            height: 170,
            width: 110,
            marginRight: 10, backgroundColor: 'white'
          }}>
          <Text style={{ fontSize: 13, marginTop: 175 }}>louvre museum </Text>
          <Text style={{ fontWeight: "bold", fontSize: 13, }}>Tourist Attroction</Text>
        </ImageBackground>
        </View>
       
     
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection: 'row',

  },
  image: {
    flex: 1,
    height: 170,
    width: 110,
    marginRight: 10,

  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  }
});

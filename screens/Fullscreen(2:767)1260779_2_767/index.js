import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_30_5}>
        <View style={styles.View_18_5} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdb5/3706/c67e856c5eca038fec9b4825d8d73306"
          }}
          style={styles.TouchableOpacity_18_10}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_5"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7faf/2a3b/6c56cb6af4e9de89aadbd1fb4a648b07"
          }}
          style={styles.ImageBackground_18_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3402/144e/83bbc62360c975657afde0cd002f9b71"
          }}
          style={styles.ImageBackground_18_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c25/1888/0bc4945f1526859c3ed593033ea09e98"
          }}
          style={styles.ImageBackground_18_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0fa/d353/c23fb2fac5aaa286c6966051118bdc6c"
          }}
          style={styles.ImageBackground_18_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56e/ee91/0176a73a08ba5d0e577eaa84eb44f6a3"
          }}
          style={styles.ImageBackground_18_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af4/1677/1a53564e6d98a447dd5b8d724a42145f"
          }}
          style={styles.ImageBackground_18_30}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("100%") },
  View_30_5: {
    width: wp("96.30541871921181%"),
    minWidth: wp("96.30541871921181%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7241379310344827%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_18_5: {
    width: wp("96.30541871921181%"),
    minWidth: wp("96.30541871921181%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  TouchableOpacity_18_10: {
    width: wp("5.041113040717365%"),
    height: hp("4.559562174479167%"),
    top: hp("83.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.53201970443351%")
  },
  ImageBackground_18_13: {
    width: wp("5.3322439710494915%"),
    height: hp("7.866495768229166%"),
    top: hp("81.28688151041666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.0904114070197%")
  },
  ImageBackground_18_16: {
    width: wp("4.799020701441272%"),
    height: hp("8.554825846354166%"),
    top: hp("80.63788248697917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.49159338439039%")
  },
  ImageBackground_18_20: {
    width: wp("4.799024459763701%"),
    height: hp("8.554825846354166%"),
    top: hp("80.63788248697917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94605334051724%")
  },
  ImageBackground_18_24: {
    width: wp("5.332240212727063%"),
    height: hp("7.866495768229166%"),
    top: hp("81.28688151041666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.133943003386698%")
  },
  ImageBackground_18_27: {
    width: wp("5.332232696082205%"),
    height: hp("7.866495768229166%"),
    top: hp("81.28688151041666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.82136843826971%")
  },
  ImageBackground_18_30: {
    width: wp("5.331759147456127%"),
    height: hp("7.866845703125%"),
    top: hp("81.28653157552083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.955919989224135%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

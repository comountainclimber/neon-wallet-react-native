import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";

import { list as tileImageList } from "../images/tileList";

const TILE_MARGIN = 20; // left&right+middle

class Tile extends React.Component {
  render() {
    const { title, onPress, dark, id } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <ImageBackground source={tileImageList[id - 1]} style={styles.box}>
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

Tile.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get("window").width / 2 - TILE_MARGIN,
    height: Dimensions.get("window").width / 2 - TILE_MARGIN,
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "transparent"
  }
});

export default Tile;

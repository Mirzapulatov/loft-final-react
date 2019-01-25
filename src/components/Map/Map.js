import React, { Component } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { getAddressList, getMapCoordinates } from "../../modules/Map";
import Order from "../Order";
import "./Map.css";

const mapStateToProps = state => ({ coordinates: getMapCoordinates(state) });
const mapDispatchToProps = { getAddressList };

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    const { getAddressList } = this.props;
    getAddressList();

    mapboxgl.accessToken =
      "pk.eyJ1IjoibWlyemFwdWxhdG92IiwiYSI6ImNqcjdnOHJ6MzA1Nmk0M284Zng0NzB1cWYifQ.-wVWVa4l6r6xT7Cv1_iNrA";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.2656504, 59.8029126],
      zoom: 15
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { coordinates } = this.props;
    if (
      JSON.stringify(coordinates) !== JSON.stringify(prevProps.coordinates) &&
      coordinates.length
    ) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 15
      });
      this.map.addLayer({
        id: "track",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates
            }
          }
        },
        paint: {
          "line-color": "#a00",
          "line-width": 5
        }
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  removeLayer = () => {
    this.map.removeLayer("track");
    this.map.removeSource("track");
  };

  render() {
    return (
      <>
        <Order removeLayer={this.removeLayer} />
        <div
          className="map"
          style={{ height: window.innerHeight - 65 }}
          ref={this.mapContainer}
        />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

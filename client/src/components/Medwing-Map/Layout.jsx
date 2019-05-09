import React from "react";
import { tMapMarkers, tMapCenter } from 'Types';
import GoogleMap from "./Google-Map";

const Layout = ({ center, markers }) =>
    <div className="medwing-map-container">
        <div className="row">
            <div className="col-sm-12">
                <div className="map">
                    <GoogleMap
                        center={center}
                        markers={markers}
                    />
                </div>
            </div>
        </div>
    </div>

Layout.propTypes = {
    markers: tMapMarkers.isRequired,
    center: tMapCenter.isRequired
}

export default Layout;
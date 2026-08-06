import { Link } from "react-router";
import CommonFooter from "../../components/common-footer/commonFooter";
import { useEffect, useRef } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';

// Extend the Leaflet type definitions to include Draw
import 'leaflet-draw';

declare module 'leaflet' {
    namespace Control {
        interface DrawOptions {
            position?: string;
            draw?: any;
            edit?: any;
        }
    }
}

// Fix for default marker icons in Leaflet with webpack
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { all_routes } from "../../routes/all_routes";

// Set default icon
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapsLeaflet = () => {
    const mapsRef = useRef<{ [key: string]: L.Map | null }>({});

    // Initialize all maps
    useEffect(() => {
        // Basic Map
        if (!mapsRef.current['map']) {
            mapsRef.current['map'] = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(mapsRef.current['map']);
            L.marker([51.5, -0.09]).addTo(mapsRef.current['map']).bindPopup('A basic marker');
        }

        // Map with Shapes
        if (!mapsRef.current['map1']) {
            mapsRef.current['map1'] = L.map('map1').setView([51.5, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapsRef.current['map1']);

            // Add shapes
            L.circle([51.508, -0.11], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 300
            }).addTo(mapsRef.current['map1']);

            L.polygon([
                [51.515, -0.09],
                [51.52, -0.1],
                [51.52, -0.12]
            ]).addTo(mapsRef.current['map1']);
        }

        // Map with Popup
        if (!mapsRef.current['map-popup']) {
            mapsRef.current['map-popup'] = L.map('map-popup').setView([51.5, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapsRef.current['map-popup']);
            L.marker([51.5, -0.09]).addTo(mapsRef.current['map-popup']).bindPopup('<b>Hello!</b><br>I am a popup.').openPopup();
        }

        // Map with Custom Icon
        if (!mapsRef.current['map-custom-icon']) {
            mapsRef.current['map-custom-icon'] = L.map('map-custom-icon').setView([51.5, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapsRef.current['map-custom-icon']);

            const customIcon = L.icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                shadowSize: [41, 41]
            });

            L.marker([51.5, -0.09], { icon: customIcon })
                .addTo(mapsRef.current['map-custom-icon'])
                .bindPopup('Custom icon marker');
        }

        // Interactive Map
        if (!mapsRef.current['interactive-map']) {
            mapsRef.current['interactive-map'] = L.map('interactive-map').setView([37.8, -96], 4);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapsRef.current['interactive-map']);

            // Add some interactivity
            const drawnItems = new L.FeatureGroup().addTo(mapsRef.current['interactive-map']);
            // @ts-ignore - Leaflet.Draw is added to L by the leaflet-draw import
            const drawControl = new L.Control.Draw({
                edit: {
                    featureGroup: drawnItems,
                    edit: {
                        featureGroup: drawnItems,
                        remove: true
                    }
                },
                draw: {
                    polygon: {
                        allowIntersection: false,
                        showArea: true
                    },
                    rectangle: {
                        showArea: true
                    },
                    circle: {
                        showRadius: true
                    },
                    marker: {},
                    circlemarker: false,
                    polyline: false
                }
            } as L.Control.DrawOptions);
            mapsRef.current['interactive-map'].addControl(drawControl);
        }

        // Cleanup function
        return () => {
            Object.values(mapsRef.current).forEach(map => {
                if (map) {
                    map.remove();
                }
            });
            mapsRef.current = {};
        };
    }, []);

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Leaflet Maps
                        </h4>
                        <nav aria-label="breadcrumb">
                            <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                                <li>
                                    <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                                        Home
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="hover:underline text-gray-700"
                                    >
                                        Icons
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li className="text-dark font-medium" aria-current="page">
                                    Leaflet Maps
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    {/* Start::row-1 */}
                    <div className="md:grid grid-cols-2 gap-x-6">
                        <div className="col-span-1">
                            <div className="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                                <div className="card-header py-4 px-5 border-b border-borderColor">
                                    <h5 className="card-title">Leaflet Map</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="h-72" id="map" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                                <div className="card-header py-4 px-5 border-b border-borderColor">
                                    <h5 className="card-title">
                                        Map With Markers,circles and Polygons
                                    </h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="h-72" id="map1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                                <div className="card-header py-4 px-5 border-b border-borderColor">
                                    <h5 className="card-title">Map With Popup</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="h-72" id="map-popup" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                                <div className="card-header py-4 px-5 border-b border-borderColor">
                                    <h5 className="card-title">Map With Custom Icon</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="h-72" id="map-custom-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="card custom-card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                                <div className="card-header py-4 px-5 border-b border-borderColor">
                                    <h5 className="card-title">Interactive Choropleth Map</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="h-72" id="interactive-map" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End::row-1 */}
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    );
};

export default MapsLeaflet;
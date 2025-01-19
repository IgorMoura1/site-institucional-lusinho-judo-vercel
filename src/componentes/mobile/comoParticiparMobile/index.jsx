import { Container } from "@mui/material";
import "./styles.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const mockAddresses = [
    {
        label: "Av. dos Metalúrgicos, 2255",
        coordinates: { lat: -23.598728, lng: -46.402455 },
        name: "Unidade Cidade Tiradentes",
    },
    {
        label: "R. Argemiro Sátiro, 330",
        coordinates: { lat: -23.551019, lng: -46.8175317 },
        name: "Unidade Osasco",
    },
    {
        label: "Av. Nações Unidas, 2015",
        coordinates: { lat: -23.610529, lng: -46.6971812 },
        name: "Unidade Vila Alpina",
    },
    {
        label: "R. José Dias da Costa, 39",
        coordinates: { lat: -23.609706, lng: -46.726092 },
        name: "Unidade Paraisopolis",
    },
];

export default function ComoParticipar() {
    const [selectedAddress, setSelectedAddress] = useState(mockAddresses[0]);

    return (
            <div className="container-comoParticiparMobile">
                <div className="title-comoParticiparMobile">
                    <h1>COMO PARTICIPAR <br></br> DO PROJETO</h1>
                </div>
                <div className="texto-comoParticiparMobile">
                    <span>
                        Para participar das aulas do instituto basta ir em umas das unidades
                        onde são lecionadas as aulas e realizar sua inscrição junto a um
                        instrutor ou professor.
                    </span>
                    <br />
                    <span>Selecione uma das unidades abaixo:</span>
                </div>
                <div className="unitsSelection">
                    <div className="nomeUnidades">
                        {mockAddresses.map((address, index) => (
                            <span
                                key={index}
                                onClick={() => setSelectedAddress(address)}>
                                {address.name}
                            </span>
                        ))}
                    </div>
                    <div className="mapas">
                        {selectedAddress && (
                            <div className="mapa">
                                <span>Endereço:</span>
                                <span>{selectedAddress.label}</span>
                                <MapContainer
                                    key={selectedAddress.coordinates.lat + selectedAddress.coordinates.lng}
                                    center={[selectedAddress.coordinates.lat, selectedAddress.coordinates.lng]}
                                    zoom={15}
                                    style={{ width: "200px", height: "200px", marginTop: "10px" }}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[selectedAddress.coordinates.lat, selectedAddress.coordinates.lng]}>
                                        <Popup>{selectedAddress.label}</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
}
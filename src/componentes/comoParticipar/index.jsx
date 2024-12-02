import { Container } from "@mui/material";
import "./styles.css";
import { Box } from "@mui/system";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const mockAddresses = [
    {
        label: "Av. dos Metalúrgicos, 2255 - Cidade Tiradentes",
        coordinates: { lat: -23.598728, lng: -46.402455 },
        name: "Unidade Cidade Tiradentes",
    },
    {
        label: "R. Argemiro Sátiro, 330 - Osasco, SP",
        coordinates: { lat: -23.551019, lng: -46.8175317 },
        name: "Unidade Osasco",
    },
    {
        label: "Av. Nações Unidas, 2255 - Vila Alpina",
        coordinates: { lat: -23.610529, lng: -46.6971812 },
        name: "Unidade Vila Alpina",
    },
    {
        label: "R. José Dias da Costa, 39 - Paraisopolis",
        coordinates: { lat: -23.609706, lng: -46.726092 },
        name: "Unidade Paraisopolis",
    },
];

export default function ComoParticipar() {
    const [selectedAddress, setSelectedAddress] = useState(mockAddresses[0]);

    return (
        <Box
            className="box-container"
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                bgcolor: "var(--branco)",
                height: "100%",
                paddingTop: "50px",
                paddingBottom: "120px",
            }}
        >
            <div className="container-comoParticipar">
                <div className="title-comoPariticipar">
                    <h1>COMO PARTICIPAR DO PROJETO</h1>
                </div>
                <div className="texto-comoParticipar">
                    <span>
                        Para participar das aulas do instituto basta ir em umas das unidades
                        onde são lecionadas as aulas e realizar sua inscrição junto a um
                        instrutor ou professor.
                    </span>
                    <br />
                    <span>Selecione uma das unidades abaixo para saber mais:</span>
                </div>
                <div className="unitsSelection">
                    <div className="nomeUnidades">
                        {mockAddresses.map((address, index) => (
                            <span
                                key={index}
                                onClick={() => setSelectedAddress(address)}
                                style={{ cursor: "pointer", display: "block", marginBottom: "10px" }}
                            >
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
                                    style={{ width: "500px", height: "400px", marginTop: "10px" }}
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
        </Box>
    );
}
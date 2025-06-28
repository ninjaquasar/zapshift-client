import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const BangladeshMap = ({ markingLocations }) => {
	return (
		<MapContainer
			center={[24, 90.5]}
			zoom={6.5}
			scrollWheelZoom={false}
			className="w-full h-full rounded-xl"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markingLocations.map((location) => (
				<Marker
					key={[location.latitude, location.longitude]}
					position={[location.latitude, location.longitude]}
				>
					<Popup>
						<span>{location.region}</span>
						<br />
						<strong>{location.district}</strong>
						<br />
						<div className="w-60 flex flex-wrap gap-1">
							{location.covered_area.map((area) => (
								<span key={area}>{area},</span>
							))}
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default BangladeshMap;

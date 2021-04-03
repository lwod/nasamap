import GoogleMapReact from 'google-map-react'
import LocationMarker from "./LocationMarker";

const Map = ({eventData, center, zoom}) =>{
	
	const markers = eventData.map(ed=>{
		if(ed.categories[0].id == 8){
			return <LocationMarker
				lat={ed.geometries[0].coordinates[1]}
				lng={ed.geometries[0].coordinates[0]}/>
		}
		return null
	})
	
	return(
		<div className={'map'}>
			<GoogleMapReact
				bootstrapURLKeys={{key:'AIzaSyBdDXrVbMRNQ67za2Ci2P_MYDX1OCy7LXE'}}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				{markers}
				{/*<LocationMarker*/}
				{/*	lat={center.lat}*/}
				{/*	lng={center.lng}*/}
				{/*/>*/}
			</GoogleMapReact>
		</div>
	)
}

Map.defaultProps ={
	center:{
		lat: 42.3265,
		lng: -122.8756
	},
	zoom:6
}

export default Map;

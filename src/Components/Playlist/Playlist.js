import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

export class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	render() {
		return(
			<div className="Playlist">
			  <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
			  <Tracklist tracks={this.props.PlaylistTracks} onRemoval={this.props.onRemoval} isRemoval={true}/>
			  <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
			</div>
			)
	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}
}

export default Playlist;
import React from 'react';
import './Track.css';

export class Track extends React.Component {
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.playTrack = this.playTrack.bind(this);
	}

	renderAction() {
		if(this.props.isRemoval) {
			return(<button className='Track-action' onClick={this.removeTrack}>-</button>)
		} else {
			return(<button className='Track-action' onClick={this.addTrack}>+</button>)
		}
	}

	addTrack() {
		{this.props.onAdd(this.props.track)}
	}

	removeTrack() {
		{this.props.onRemoval(this.props.track)}
	}

	playTrack(trackId) {
		{document.getElementById(this.trackId).play()}
	}

	render() {
		return(
			<div className="Track">
			  <div className="Track-information">
			    <h3>{this.props.track.name}</h3>
			    <p>{this.props.track.artist} | {this.props.track.album}</p>
			  </div>
  			  <audio controls preload="auto" id={this.props.key} src={this.props.track.previewURL} type="audo/ogg"></audio>
			  {this.renderAction()}
			</div>
		)
	};
}

export default Track;
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        SearchResults : [],
        PlaylistName : 'New Playlist',
        PlaylistTracks : [],
        jsonData : '',
        previewURL: ''};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.jsonPull = this.jsonPull.bind(this);
  } 

  jsonPull(searchTerm) {
    Spotify.jsonPull(searchTerm).then(data => this.setState({jsonData : data}));
    console.log(this.state.jsonData);
  }

  addTrack(newTrack) {
    if(this.state.PlaylistTracks.find(track => track.id === newTrack.id)) {
      return;
    } else {
      this.setState(this.state.PlaylistTracks.splice(-1, 0, newTrack));
    }
  }

  removeTrack(oldTrack) {
    const index = this.state.PlaylistTracks.findIndex(track => track.id === oldTrack.id);
    this.setState(this.state.PlaylistTracks.splice(index, 1));
  }

  updatePlaylistName(newName) {
    this.setState({PlaylistName : newName});
  }

  savePlaylist() {
    let trackURIs = [];
    this.state.PlaylistTracks.map(track => {
      trackURIs.push(track.uri)
    });

    Spotify.savePlaylist(this.state.PlaylistName, trackURIs)
    .then(() => this.setState( {
      PlaylistName : 'New Playlist',
      PlaylistTracks : []}));
  }

  search(searchTerm) {
    Spotify.getAccessToken();
    Spotify.search(searchTerm)
    .then(results => {this.setState({SearchResults: results})});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} jsonPull={this.jsonPull}/>
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults} onAdd={this.addTrack}/>
            <Playlist  playlistName={this.state.PlaylistName} 
                      PlaylistTracks={this.state.PlaylistTracks}
                      onRemoval={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist}/>
            <p> {this.state.jsonData[0]} </p>
          </div>
        </div>
      </div>
  )}
}

export default App;

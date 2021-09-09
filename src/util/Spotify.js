var accessToken;
const clientID = "33ea434a0ed742dd8e12c78b67504c8c";
const redirectURI = "http://localhost:3000/";

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if(accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			let expiresIn = Number(expiresInMatch[1]);

			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return(accessToken);
		} else{
			window.location = 	`https://accounts.spotify.com/authorize?client_id=${clientID}
								&response_type=token&scope=playlist-modify-public&redirect_uri=
								${redirectURI}`;
		}
	},

	search(searchTerm) {
		return fetch("https://api.spotify.com/v1/search?type=track&q=" + searchTerm,
				{
					headers: {Authorization: `Bearer ${accessToken}`}
				})
				.then(response => {
					return response.json()})
				.then(data => {
					if(!data.tracks) {
						return []
					} else {
						return data.tracks.items.map(track => ({
							id: track.id,
							name: track.name,
							artist: track.artists[0].name,
							album: track.album.name,
							uri: track.uri,
							previewURL : track.preview_url
						}))
					}
				})
	},

	jsonPull(searchTerm) {
		return fetch("https://api.spotify.com/v1/search?type=track&q=" + searchTerm,
				{
					headers: {Authorization: `Bearer ${accessToken}`}
				})
				.then(response => {
					return response.json()})
				.then(data => {
					if(!data.tracks) {
						return []
					} else {
						return data.tracks.items[0]}
				})
		},


	savePlaylist(name, tracks) {
		if(name && tracks) {
			let accessToken = Spotify.getAccessToken();
			let headers = {Authorization: `Bearer ${accessToken}`};
			let userID;

			return fetch('https://api.spotify.com/v1/me', {headers: headers})
					.then(response => response.json())
					.then(data => {
						userID = data.id;
						return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
								headers : headers,
								method : 'POST',
								body : JSON.stringify({name : name})
							})
							.then(response => response.json())
							.then(data => {
								let playlistID = data.id;
								return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
									headers : headers,
									method : 'POST',
									body : JSON.stringify({ uris : tracks})
								})
							})
						})
		} else {
			return;
		}
	},

}

export default Spotify;
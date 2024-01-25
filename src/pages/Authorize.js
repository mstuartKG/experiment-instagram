import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Authorize() {
	const params = useParams();
	const { code } = params;
	console.log(process.env.REACT_APP_CLIENT_ID);

	useEffect(() => {
		if (code) {
			try {
				const response = async () =>
					await axios.post(
						`https://api.instagram.com/oauth/authorize
          ?client_id=${process.env.REACT_APP_CLIENT_ID}
          ?client_secret=${process.env.REACT_APP_CLIENT_SECRET}
          &redirect_uri=https://iridescent-pixie-9f527f.netlify.app/
          &scope=user_profile,user_media
          &response_type=code`,
						{
							code,
						}
					);

				if (response.data) {
					sessionStorage.setItem('accessToken', response.data.accessToken);
					sessionStorage.setItem('userId', response.data.userID);
				}
			} catch (e) {}
		} else {
			window.location = `https://api.instagram.com/oauth/authorize
      ?client_id=${process.env.REACT_APP_CLIENT_ID}
      &redirect_uri=https://iridescent-pixie-9f527f.netlify.app/
      &scope=user_profile,user_media
      &response_type=code`;
		}
	}, [code]);

	return <div></div>;
}

export default Authorize;

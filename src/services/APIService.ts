const fetch = require('node-fetch');
const axios = require('axios');
import log4js = require('log4js');

export class APIService {
    async get(url: string, token?: string) {

		var config = {
			method: 'get',
			url: `${url}`,
			headers: { 
			  'Authorization': `Token ${token}`
			}
		};

		return new Promise<any>(async (resolve, reject) => {
			axios(config)
            .then(function (response) {
                console.log(response);
				resolve(null);
			})
			.catch(function (error) {
                console.log(error);
				resolve(null);
			});
		})
	}

	async post(value: any, host: string, endpoint: string, token: string): Promise<any> {
		var data = JSON.stringify(value);

		var config = {
			method: 'post',
			url: `${host}${endpoint}`,
			headers: { 
				'Authorization': `${token}`,
				'Content-Type': 'application/json'
			},
			data : data
		};

		return new Promise<any>(async (resolve, reject) => {
			axios(config)
			.then(function (response) {
				resolve(response.data);
			})
			.catch(function (error) {
				console.log(error.data);
				reject(error);
			});
		});

	}
}
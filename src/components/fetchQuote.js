const fetch = require('node-fetch');

let url = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';

let options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
    'X-RapidAPI-Key': '860d733cfemshf57f08c1679cc7ap1d598ajsnf7259d3e4621'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
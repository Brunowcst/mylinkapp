import { API_KEY } from '@env';

async function shortenUrl(longUrl) {

    var baseConfigsFetch = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ "long_url": `${longUrl}`})
    }

    try {
        const response = await fetch('https://api-ssl.bitly.com/v4/shorten', baseConfigsFetch);

        if(response.ok) {
            const data = await response.json()
            const link = data.link
            return link
        }
    } catch (error) {
        console.log(error)
    }

}

export { shortenUrl };
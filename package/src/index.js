import axios from 'axios';

class HenrikDevValorantAPI {
    constructor(key) {
        this.token = key;
    }
    _parsebody(body) {
        if (body.message) return {message: body.message};
        return body.status ? body.data : body;
    }
    _parseresponse(req) {
        return {
            status: req.response ? req.response.status : req.status,
            data: req.response ? null : this._parsebody(req.data),
            ratelimits: {
                used: Number(req.response ? req.response.headers['x-ratelimit-limit'] : req.headers['x-ratelimit-limit']),
                remaining: Number(req.response ? req.response.headers['x-ratelimit-remaining'] : req.headers['x-ratelimit-remaining']),
                reset: Number(req.response ? req.response.headers['x-ratelimit-reset'] : req.headers['x-ratelimit-reset']),
            },
            error: req.response ? this._parsebody(req.response.data) : null,
            url: req.config.url,
        };
    }
    _validate(input) {
        for (let i = 0; Object.values(input).length > i; i++) {
            console.log(Object.values(input)[i]);
            if (!Object.values(input)[i]) throw new Error(`Missing parameter: ${Object.keys(input)[i]}`);
        }
    }
    async _fetch({url, type} = {}) {
        const req = await axios({
            url: url,
            method: type,
            headers: this.token
                ? {
                      Authentication: this.token,
                      'User-Agent': 'unofficial-valorant-api/node.js/2.1',
                  }
                : null,
        }).catch(err => err);
        return this._parseresponse(req);
    }

    async getAccount({name, tag, force} = {}) {
        this._validate({name, tag});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}${force ? `?force=${true}` : ''}`,
            type: 'GET',
        });
    }

    async getMMRByPUUID({version, region, puuid, filter} = {}) {
        this._validate({version, region, puuid});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/by-puuid/mmr/${region}/${puuid}${filter ? `?filter=${filter}` : ''}`,
            type: 'GET',
        });
    }
}

export {HenrikDevValorantAPI};

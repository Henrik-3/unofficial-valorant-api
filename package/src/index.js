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
        };
    }
    async _fetch({url, type} = {}) {
        const req = await axios({
            url: url,
            method: type,
            headers: this.token
                ? {
                      Authentication: this.token,
                  }
                : null,
        }).catch(err => err);
        return this._parseresponse(req);
    }

    async getAccount({name, tag} = {}) {
        return await this._fetch({url: `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}`, type: 'GET'});
    }

    async getMMRByPUUID({version, region, puuid, filter} = {}) {
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/by-puuid/mmr/${region}/${puuid}${filter ? `?filter=${filter}` : ''}`,
            type: 'GET',
        });
    }
}

export {HenrikDevValorantAPI};

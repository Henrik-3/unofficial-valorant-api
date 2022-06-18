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
    _query(input) {
        let query = new URLSearchParams();
        for (let i = 0; Object.values(input).length > i; i++) {
            if (Object.values(input)[i] != null) query.append(Object.keys(input)[i], Object.values(input)[i]);
        }
        return query.toString().length ? query : null;
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
        const query = this._query({force});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
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

    async getMMRHistoryByPUUID({region, puuid} = {}) {
        this._validate({region, puuid});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr-history/${region}/${puuid}`,
            type: 'GET',
        });
    }

    async getMatchesByPUUID({region, puuid, filter, map, size} = {}) {
        this._validate({region, puuid});
        const query = this._query({filter, map, size});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${region}/${puuid}${query ? `?${query}` : ''}`,
            type: 'GET',
        });
    }

    async getContent({locale} = {}) {
        const query = this._query({locale});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/content${query ? `?${query}` : ''}`,
            type: 'GET',
        });
    }
}

export {HenrikDevValorantAPI};

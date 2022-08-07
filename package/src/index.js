const axios = require('axios');

module.exports = class {
    constructor(token) {
        this.token = token;
    }
    _parsebody(body) {
        if (body.errors) return body.errors;
        return body.status ? body.data : body;
    }
    _parseresponse(req) {
        return {
            status: req.response ? req.response.status : req.status,
            data: req.response ? null : !req.config.headers['Content-Type'] ? this._parsebody(req.data) : req.data,
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
        for (let i = 0; Object.keys(input).length > i; i++) {
            if (Object.values(input)[i] == null) throw new Error(`Missing parameter: ${Object.keys(input)[i]}`);
        }
    }
    _query(input) {
        let query = new URLSearchParams();
        for (let i = 0; Object.values(input).length > i; i++) {
            if (Object.values(input)[i] && Object.values(input)[i] != 'undefined') query.append(Object.keys(input)[i], Object.values(input)[i]);
        }
        return query.toString().length ? query : null;
    }
    async _fetch({url, type = 'GET', body = null, rtype = null} = {}) {
        const req = await axios({
            url: url,
            method: type,
            data: body,
            responseType: rtype ? rtype : 'json',
            headers: this.token
                ? {
                      Authorization: this.token,
                      'User-Agent': 'unofficial-valorant-api/node.js/2.3.0',
                  }
                : {
                      'User-Agent': 'unofficial-valorant-api/node.js/2.3.0',
                  },
        }).catch(err => err);
        return this._parseresponse(req);
    }

    async getAccount({name, tag, force} = {}) {
        this._validate({name, tag});
        const query = this._query({force});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
        });
    }

    async getAccountByPUUID({puuid, force} = {}) {
        this._validate({puuid});
        const query = this._query({force});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/by-puuid/account/${puuid}${query ? `?${query}` : ''}`,
        });
    }

    async getMMRByPUUID({version, region, puuid, filter} = {}) {
        this._validate({version, region, puuid});
        const query = this._query({filter});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/by-puuid/mmr/${region}/${puuid}${query ? `?${query}` : ''}`,
        });
    }

    async getMMRHistoryByPUUID({region, puuid} = {}) {
        this._validate({region, puuid});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr-history/${region}/${puuid}`,
        });
    }

    async getMatchesByPUUID({region, puuid, filter, map, size} = {}) {
        this._validate({region, puuid});
        const query = this._query({filter, map, size});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${region}/${puuid}${query ? `?${query}` : ''}`,
        });
    }

    async getContent({locale} = {}) {
        const query = this._query({locale});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/content${query ? `?${query}` : ''}`,
        });
    }

    async getLeaderboard({version, region, start, end, name, tag, puuid, season} = {}) {
        if (name && tag && puuid)
            throw new Error("Too many parameters: You can't search for name/tag and puuid at the same time, please decide between name/tag and puuid");
        this._validate({version, region});
        const query = this._query({start, end, name: encodeURI(name), tag: encodeURI(tag), puuid, season});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/leaderboard/${region}${query ? `?${query}` : ''}`,
        });
    }

    async getMatches({region, name, tag, filter, map, size} = {}) {
        this._validate({region, name, tag});
        const query = this._query({filter, map, size});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v3/matches/${region}/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
        });
    }

    async getMatch({match_id} = {}) {
        this._validate({match_id});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v2/match/${match_id}`,
        });
    }

    async getMMRHistory({region, name, tag} = {}) {
        this._validate({region, name, tag});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/mmr-history/${region}/${encodeURI(name)}/${encodeURI(tag)}`,
        });
    }

    async getMMR({version, region, name, tag, filter} = {}) {
        this._validate({version, region, name, tag});
        const query = this._query({filter});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/mmr/${region}/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
        });
    }

    async getRawData({type, value, region, queries} = {}) {
        this._validate({type, value, region, queries});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/raw`,
            body: {type, value, region, queries},
            type: 'POST',
        });
    }

    async getStatus({region} = {}) {
        this._validate({region});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/status/${region}`,
        });
    }

    async getFeaturedItems({version} = {}) {
        this._validate({version});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/store-featured`,
        });
    }

    async getOffers() {
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/store-offers`,
        });
    }

    async getVersion({region} = {}) {
        this._validate({region});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/version/${region}`,
        });
    }

    async getWebsite({country_code, filter} = {}) {
        this._validate({country_code});
        const query = this._query({filter});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/website/${country_code}${query ? `?${query}` : ''}`,
        });
    }

    async getCrosshair({code, size} = {}) {
        this._validate({code});
        const query = this._query({id: code, size});
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/crosshair/generate${query ? `?${query}` : ''}`,
            rtype: 'arraybuffer',
        });
    }
};

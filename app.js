const express = require('express');
const scrap1337x = require('./torrent/1337x');
const scrapNyaa = require('./torrent/nyaaSI');
const scrapYts = require('./torrent/yts');
const scrapPirateBay = require('./torrent/pirateBay');
const scrapTorLock = require('./torrent/torLock');
const scrapEzTVio = require('./torrent/ezTV');
const torrentGalaxy = require('./torrent/torrentGalaxy');
const combo = require('./torrent/COMBO');
const rarbg = require('./torrent/rarbg');
const ettvCentral = require('./torrent/ettv');
const zooqle = require('./torrent/zooqle');
const kickAss = require('./torrent/kickAss');
const bitSearch = require('./torrent/bitSearch');
const glodls = require('./torrent/gloTorrents');
const magnet_dl = require('./torrent/magnet_dl');
const limeTorrent = require('./torrent/limeTorrent');
const torrentFunk = require('./torrent/torrentFunk');
const torrentProject = require('./torrent/torrentProject');


const app = express();
const arc_io = '<footer><script type="text/javascript" async src="https://arc.io/widget.min.js#7qDyaP2h"></script></footer>';
app.use('/api/:website/:query/:page?', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let website = (req.params.website).toLowerCase();
    let query = req.params.query;
    let page = req.params.page;

    if (website === '1337x') {
        if (page > 50) {
            return res.json({
                error: 'Please enter page  value less than 51 to get the result :)'
            })
        } else {
            scrap1337x.torrent1337x(query, page)
                .then((data) => {
                    if (data === null) {
                        return res.json({
                            error: 'Website is blocked change IP'
                        })

                    } else if (data.length === 0) {
                        return res.json({
                            error: 'No search result available for query (' + query + ')'
                        })
                    } else {
                        return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                    }

                })
        }
    }
    if (website === 'yts') {
        scrapYts.yts(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })
    }
    if (website === 'eztv') {
        scrapEzTVio.ezTV(query)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })
    }
    if (website === 'torlock') {
        scrapTorLock.torLock(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })
    }
    if (website === 'piratebay') {
        scrapPirateBay.pirateBay(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })
    }
    if (website === 'tgx') {
        torrentGalaxy(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })
    }

    if (website === 'rarbg') {
        rarbg(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })
    }


    if (website === 'zooqle') {
        zooqle.zooqle(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }

    if (website === 'kickass') {
        kickAss(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }


    if (website === 'bitsearch') {
        bitSearch(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }
    if (website === 'glodls') {
        glodls(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }
    if (website === 'magnetdl') {
        magnet_dl(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }
    if (website === 'limetorrent') {
        limeTorrent(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }
    if (website === 'torrentfunk') {
        torrentFunk(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }
    if (website === 'torrentproject') {
        torrentProject(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }
            })
    }

    if (website === 'nyaasi') {
        if (page > 14) {
            return res.json({
                error: '14 is the last page'
            })
        } else {
            scrapNyaa.nyaaSI(query, page)
                .then((data) => {
                    if (data === null) {
                        return res.json({
                            error: 'Website is blocked change IP'
                        })

                    } else if (data.length === 0) {
                        return res.json({
                            error: 'No search result available for query (' + query + ')'
                        })
                    } else {
                        return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                    }

                })
        }

    }
    if (website === "ettv") {
        ettvCentral(query, page)
            .then((data) => {
                if (data === null) {
                    return res.json({
                        error: 'Website is blocked change IP'
                    })

                } else if (data.length === 0) {
                    return res.json({
                        error: 'No search result available for query (' + query + ')'
                    })
                } else {
                    return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
                }

            })

    }
    if (website === "all") {
        combo(query, page).then((data) => {
            if (data !== null && data.length > 0) {
                return res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(data)}</pre>${arc_io}`);
            } else {
                return res.json({
                    error: 'No search result available for query (' + query + ')'
                });
            }
        })

    } else if (website !== 'nyaasi' && website !== '1337x' && website !== 'yts' && website !== 'piratebay' && website !== 'torlock' && website !== 'eztv' && website !== 'tgx' && website !== 'all' && website !== "rarbg" && website !== 'ettv' && website !== 'zooqle' && website !== 'kickass' && website !== 'bitsearch' && website !== 'glodls' && website !== 'magnetdl' && website !== 'limetorrent' && website !== 'torrentfunk' && website !== 'torrentproject') {
        return res.json({
            error: 'please select 1337x | nyaasi | yts | Piratebay | torlock | eztv | TorrentGalaxy(tgx) | rarbg | zooqle | kickass | bitsearch | glodls | magnetdl | limetorrent | torrentfunk | torrentproject | all (to scrap from every site)'
        })
    }

});

app.use('/', (req, res) => {
    res.send('<h1>Welcome to 1337x, NyaaSi, YTS, PirateBay, Torlock, EzTvio, TorrentGalaxy, Rarbg, Zooqle, KickAss, Bitsearch, Glodls, MagnetDL, Limetorrent, TorrentFunk, TorrentProject and Ettv Central Unoffical API</h1>' + arc_io);
});
const PORT = process.env.PORT || 3001;
console.log('Listening on PORT : ', PORT);
app.listen(PORT);
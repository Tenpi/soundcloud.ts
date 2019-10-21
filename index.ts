import SoundCloud from "./Soundcloud"

require("dotenv").config()
const soundcloud = new SoundCloud(process.env.SOUNDCLOUD_CLIENT_ID, process.env.SOUNDCLOUD_OAUTH_TOKEN);
(async () => {
    // const result = await soundcloud.tracks.search({q: "virtual riot"})
    // await soundcloud.util.downloadTrack("https://soundcloud.com/tenpimusic/snowflake", "./tracks")
    // await soundcloud.util.downloadPlaylist("https://soundcloud.com/tenpimusic/sets/my-songs", "./tracks")
    await soundcloud.util.downloadTrack("https://soundcloud.com/inf1n1temusic/inf1n1tea-konus-nova1", "./tracks")
})()

export const mediaEmbedConfig = {
    previewsInData: true,
    extraProviders: [
        {
            name: 'Brightcove',

            // EG: https://players.brightcove.net/6144772950001/default_default/index.html?videoId=6296899904001
            // The following RegExp matches https://www.example.com/media/{media id},
            // (either with "http(s)://" and "www" or without), so the valid URLs are:
            //
            // * https://www.example.com/media/{media id},
            // * http://www.example.com/media/{media id},
            // * www.example.com/media/{media id},
            // * example.com/media/{media id}

            url: /^players.brightcove.net\/(\w+)\/(\w+)_default\/index\.html\?videoId=(\w+)/,

            // The rendering function of the provider.
            // Used to represent the media when editing the content (i.e. in the view)
            // and also in the data output of the editor if semantic data output is disabled.
            html: match => {
                const isThemed = match[2] !== 'default';

                return `<div class="ratio-container">
        <div class="ratio-frame ${ isThemed ? 'themed' : '' }"><iframe src="https://players.brightcove.net/${ match[1] }/${ match[2] }_default/index.html?videoId=${ match[3] }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div></div>`;
            }
        }
    ],
    toolbar: [ 'alignCenter',
        'alignLeft',
        'alignRight' ],
    removeProviders: [ 'dailymotion', 'spotify', 'vimeo', 'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook' ]
};

$(document).ready(function () {
    $(function () {
        $('#submit').click(function (event) {
            event.preventDefault();
            //var searchTerm = $('#query').val();
            onClientLoad();
        });
    });
});

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    gapi.client.load('youtube', 'v3', function () {
        search();
    });
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    // Retrieves (GET) a list of zero or more resources.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: $('#query').val(),
        maxResults: 9
    });
    // Send the request to the API server,
    request.execute(function (response) {
        $('#search-results').empty()
        var srchItems = response.result.items;
        $.each(srchItems, function (index, item) {
            vidTitle = item.snippet.title;
            vidId = item.id.videoId;
            vidThumburl = item.snippet.thumbnails.high.url;
            vidDesc = item.snippet.description;
            vidThumbimg = '<div class="gallery"><a href=https://www.youtube.com/watch?v=' + vidId + ' target="_blank"><img id="thumb" src="' + vidThumburl + '" alt="' + vidDesc + '" style="width:204px;height:128px"></a></div>';
            $('#search-results').append('<li><p>' + vidTitle + vidThumbimg + '</p></li>');
        });
    });
}

require.config({
    baseUrl: 'js'
});

require(["app"], function(app) {
    window.onload = app.init();
});
var ById = function(id) {
    return document.getElementById(id);
}

const app = require('electron').remote.app

var web = ById('web');

var dirname = app.getAppPath();

function goTo(url, local) {
    web.loadURL('file://' + dirname + "/" + url);
}

function load(url) {
    web.loadURL(url);
}

function snackbar(text) {
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var data = {
        message: text
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}
const Observable = require("tns-core-modules/data/observable").Observable;
const Marker = require("nativescript-google-maps-sdk").Marker;
const Position = require("nativescript-google-maps-sdk").Position;

function createMapViewModel() {
    var viewModel = new Observable();

    viewModel.latitude = 25.379843;
    viewModel.longitude = 51.531874;
    viewModel.zoom = 8;
    viewModel.bearing = 0;
    viewModel.tilt = 0;
    viewModel.padding = [40, 40, 40, 40];
    viewModel.mapView;

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    viewModel.onMapReady = function(event) {
        this.mapView = event.object;
        var marker = new Marker();
        marker.position = Position.positionFromLatLng(25.379843, 51.531874);
        marker.title = "Ritz-Carlton";
        marker.snippet = "Doha";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }


    return viewModel;
}
exports.createMapViewModel = createMapViewModel;
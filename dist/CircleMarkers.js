"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var CircleMarkers = /** @class */ (function (_super) {
    __extends(CircleMarkers, _super);
    function CircleMarkers(props) {
        var _this = _super.call(this, props) || this;
        _this.clearMarkers = _this.clearMarkers.bind(_this);
        _this.attachMarkers = _this.attachMarkers.bind(_this);
        return _this;
    }
    CircleMarkers.prototype.componentWillReceiveProps = function (nextProps) {
        this.clearMarkers();
    };
    CircleMarkers.prototype.render = function () {
        var map = this.context.map;
        if (map) {
            this.addMarkersToMap();
        }
        return null;
    };
    CircleMarkers.prototype.addMarkersToMap = function () {
        var map = this.context.map;
        this.clearMarkers();
        this.attachMarkers();
    };
    CircleMarkers.prototype.clearMarkers = function () {
        if (this.markers) {
            this.markers.map(function (marker) {
                marker.dispose();
            });
        }
    };
    CircleMarkers.prototype.attachMarkers = function () {
        var map = this.context.map;
        var _a = this.props, cordinates = _a.cordinates, radius = _a.radius, primaryMarkerColor = _a.primaryMarkerColor, otherMarkersColor = _a.otherMarkersColor;
        var group = new H.map.Group();
        cordinates.map(function (cordinate, i) {
            var color = otherMarkersColor;
            if (i == 0) {
                color = primaryMarkerColor;
            }
            var icon = new H.map.DomIcon("<div class='location-header-marker'><svg width=\"" + radius + "\" height=\"" + radius + "\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"" + radius / 2 + "\" cy=\"" + radius / 2 + "\" r=\"" + radius /
                2 + "\" fill=\"" + color + "\"/>\n            <text x=\"50%\" y=\"50%\" text-anchor=\"middle\"   dy=\".3em\">" + (i +
                1) + "</text>\n          </svg></div>");
            var marker = new H.map.DomMarker(cordinate, { icon: icon });
            group.addObject(marker);
        });
        map.addObject(group);
        map.setViewBounds(group.getBounds());
    };
    CircleMarkers.contextTypes = {
        map: React.PropTypes.object
    };
    return CircleMarkers;
}(React.Component));
exports.CircleMarkers = CircleMarkers;
exports["default"] = CircleMarkers;

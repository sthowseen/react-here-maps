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
var PointsArc = /** @class */ (function (_super) {
    __extends(PointsArc, _super);
    function PointsArc(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { arcsOverlay: null };
        _this.clearArcPoints = _this.clearArcPoints.bind(_this);
        _this.attachArcPoints = _this.attachArcPoints.bind(_this);
        return _this;
    }
    PointsArc.prototype.componentWillReceiveProps = function (nextProps) {
        this.clearArcPoints();
    };
    PointsArc.prototype.render = function () {
        var map = this.context.map;
        if (map) {
            this.addArcsToMap();
        }
        return null;
    };
    PointsArc.prototype.addArcsToMap = function () {
        var map = this.context.map;
        if (this.props.cordinates.length > 0) {
            map.addEventListener("mapviewchangestart", this.clearArcPoints);
            map.addEventListener("mapviewchangeend", this.attachArcPoints);
        }
    };
    PointsArc.prototype.clearArcPoints = function () {
        if (this.markerPaths) {
            this.markerPaths.map(function (markerPath) {
                markerPath.dispose();
            });
        }
    };
    PointsArc.prototype.attachArcPoints = function () {
        var _this = this;
        var map = this.context.map;
        var cordinates = this.props.cordinates;
        var projection = new H.geo.PixelProjection();
        projection.rescale(map.getZoom());
        cordinates.map(function (cordinate, i) {
            if (i < cordinates.length - 1) {
                var firstPoint = cordinate;
                var secondPoint = cordinates[i + 1];
                var firstPixelCords = projection.latLngToPixel(firstPoint.lat, firstPoint.lng);
                var secondPixelCords = projection.latLngToPixel(secondPoint.lat, secondPoint.lng);
                var endPoint = {
                    x: secondPixelCords.x - firstPixelCords.x,
                    y: secondPixelCords.y - firstPixelCords.y
                };
                var midPoint = { x: endPoint.x / 2, y: endPoint.y / 2 };
                var orthogonalVector = {
                    x: endPoint.y / 3,
                    y: -endPoint.x / 3
                };
                var controlPoint = {
                    x: midPoint.x - orthogonalVector.x,
                    y: midPoint.y - orthogonalVector.y
                };
                var svgWidth = Math.abs(endPoint.x);
                var svgHeight = Math.abs(endPoint.y);
                if (Math.abs(endPoint.x) < Math.abs(controlPoint.x)) {
                    svgWidth = Math.abs(controlPoint.x) + 1;
                }
                if (Math.abs(endPoint.y) < Math.abs(controlPoint.y)) {
                    svgHeight = Math.abs(controlPoint.y) + 1;
                }
                var path = "M 0 0 q " + controlPoint.x + " " + controlPoint.y + " " + endPoint.x + " " + endPoint.y;
                var svgMarkup = "<div class= 'location-header-arc'><svg   width=\"" + svgWidth + "\" height=\"" + svgHeight + "\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"" + path + "\" stroke=\"#3d3e41\" fill=\"transparent\"  stroke-width=\"2\" stroke-dasharray=\"5\" stroke-linecap=\"round\" />\n            </svg></div>";
                var markerSVG = new H.map.DomIcon(svgMarkup);
                var markerPath = new H.map.DomMarker({ lat: firstPoint.lat, lng: firstPoint.lng }, { icon: markerSVG });
                map.addObject(markerPath);
                if (_this.markerPaths) {
                    _this.markerPaths.push(markerPath);
                }
                else {
                    _this.markerPaths = [markerPath];
                }
            }
        });
    };
    PointsArc.contextTypes = {
        map: React.PropTypes.object
    };
    return PointsArc;
}(React.Component));
exports.PointsArc = PointsArc;
exports["default"] = PointsArc;

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
var GrayTheme = /** @class */ (function (_super) {
    __extends(GrayTheme, _super);
    function GrayTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(props) {
    //   super(props);
    //   // this.clearMarkers = this.clearMarkers.bind(this);
    //   // this.attachMarkers = this.attachMarkers.bind(this);
    // }
    GrayTheme.prototype.componentWillReceiveProps = function (nextProps) {
        // this.clearMarkers();
    };
    GrayTheme.prototype.render = function () {
        var map = this.context.map;
        if (map) {
            // this.addMarkersToMap();
            // const platform = getPlatform({
            //   app_code: "appCode",
            //   app_id: "appId",
            // });
        }
        // const HERE_APP_ID = "KfZktLQQMRAP4Uua77VJ";
        // const HERE_APP_CODE = "H3SAgXVDzWmlNQEOv1g_Rg";
        // const platform = new H.service.Platform({
        //   app_id: HERE_APP_ID,
        //   app_code: HERE_APP_CODE,
        //   useCIT: true,
        //   useHTTPS: true
        // });
        return null;
    };
    GrayTheme.contextTypes = {
        map: React.PropTypes.object
    };
    return GrayTheme;
}(React.Component));
exports.GrayTheme = GrayTheme;
exports["default"] = GrayTheme;

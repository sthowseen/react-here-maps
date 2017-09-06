/// <reference types="heremaps" />
/// <reference types="react" />
import * as React from "react";
export interface HEREMapProps extends H.Map.Options {
    appId: string;
    appCode: string;
    animateCenter?: boolean;
    animateZoom?: boolean;
    hidpi?: boolean;
    interactive?: boolean;
    secure?: boolean;
}
export interface HEREMapState {
    map?: H.Map;
    behavior?: H.mapevents.Behavior;
    ui?: H.ui.UI;
    platform?: H.service.Platform;
}
export interface HEREMapChildContext {
    map: H.Map;
    platform: H.service.Platform;
}
export declare class HEREMap extends React.Component<HEREMapProps, HEREMapState> implements React.ChildContextProvider<HEREMapChildContext> {
    static childContextTypes: {
        map: React.Requireable<any>;
        platform: React.Requireable<any>;
    };
    getElement: () => Element;
    getMap: () => H.Map;
    setCenter: (point: H.geo.IPoint) => void;
    setZoom: (zoom: number) => void;
    state: HEREMapState;
    private debouncedResizeMap;
    constructor(props: HEREMapProps, context: object);
    getChildContext(): {
        map: H.Map;
        platform: H.service.Platform;
    };
    componentDidMount(): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private resizeMap();
}
export default HEREMap;

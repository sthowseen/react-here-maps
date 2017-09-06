/// <reference types="heremaps" />
/// <reference types="react" />
import * as React from 'react';
export interface CircleMarkersProps {
    cordinates: Array<{
        lat: number;
        lng: number;
    }>;
    radius: number;
    primaryMarkerColor: string;
    otherMarkersColor: string;
}
export interface CircleMarkersContext {
    map: H.Map;
}
export declare class CircleMarkers extends React.Component<CircleMarkersProps, object> {
    static contextTypes: {
        map: React.Requireable<any>;
    };
    context: CircleMarkersContext;
    private markers;
    constructor(props: CircleMarkersProps);
    componentWillReceiveProps(nextProps: CircleMarkersProps): void;
    render(): JSX.Element;
    private addMarkersToMap();
    clearMarkers(): void;
    attachMarkers(): void;
}
export default CircleMarkers;

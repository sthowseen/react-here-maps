/// <reference types="heremaps" />
/// <reference types="react" />
import * as React from "react";
export interface PointsArcProps {
    cordinates: Array<{
        lat: number;
        lng: number;
    }>;
}
export interface PointsArcContext {
    map: H.Map;
}
export declare class PointsArc extends React.Component<PointsArcProps, object> {
    static contextTypes: {
        map: React.Requireable<any>;
    };
    context: PointsArcContext;
    private markerPaths;
    constructor(props: PointsArcProps);
    componentWillReceiveProps(nextProps: PointsArcProps): void;
    render(): JSX.Element;
    private addArcsToMap();
    clearArcPoints(): void;
    attachArcPoints(): void;
}
export default PointsArc;

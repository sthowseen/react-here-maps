/// <reference types="heremaps" />
/// <reference types="react" />
import * as React from "react";
export interface CircleMarkersProps {
    platform: H.service.Platform;
}
export interface CircleMarkersContext {
    map: H.Map;
}
export declare class GrayTheme extends React.Component<any, object> {
    static contextTypes: {
        map: React.Requireable<any>;
    };
    context: CircleMarkersContext;
    private markers;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
export default GrayTheme;

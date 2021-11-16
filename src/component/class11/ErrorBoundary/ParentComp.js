import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ShowColor from './ShowColor';
class ParentComp extends Component{

    render(){
        return (
            <div>
                <ErrorBoundary>
                    <ShowColor color="Green" />
                </ErrorBoundary>

                <ErrorBoundary>
                <ShowColor color="Red" />
                </ErrorBoundary>

                <ErrorBoundary>
                    <ShowColor color="Black" />
                </ErrorBoundary>
            </div>
        )
    }
}
export default ParentComp;
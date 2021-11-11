import React, { Component, Fragment} from 'react';
class FragmentComp extends Component{
    render(){
        return(
            // <>
            //     <h1>Color is Green</h1>
            //     <h1>Color is Red</h1>
            //     <h1>Color is Blue</h1>
            // </>
            <div>
                {
                    new Array(5).fill('Next Topper').map((ele, index) => (
                        <Fragment key={index}>
                            <h1>{index}</h1>
                            <h1>{ele}</h1>
                        </Fragment>
                    ))
                }
            </div>
        )
    }
}

export default FragmentComp;
import React, {Component} from "react";
class ConditionalRendering extends Component{
    constructor(){
        super();
        this.state = {
            name: "Next Topper",
            isLoggedIn : true
        }
    }
    change = () => {
        this.setState({
            isLoggedIn : false
        })
    }
    render(){
        const {isLoggedIn, name} = this.state;
        //  return (
        //     <div>
        //         <h1>All information</h1>
        //         <h3>Name : { name} </h3>
        //         <button 
        //         onClick = {this.change}
        //         style = {{padding: "10px", borderRadius: "5px"}}>
        //             ChangeName</button>
        //     </div>
        // )

        // ================= Conditional Rendering ( if / else ) ==================
        // if(isLoggedIn){
        //     return (
        //         <div>
        //             <h1> Hello {name} </h1>
        //             <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
        //         </div>
        //     )
        // }else{
        //     return <div>
        //         <h1>You are not an authenticated user. Please login</h1>
        //         <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
        //     </div>
        // }

        // ============= Conditional Rendering (element variables) ============  
        // let message;
        // if(isLoggedIn){
        //     message = (
        //     <div>
        //         <h1> Hello {name} </h1>
        //         <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
        //     </div>
        //     )
        // }else{
        //     message = (
        //         <div>
        //             <h1>You are not an authenticated user. Please login</h1>
        //             <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
        //         </div>
        //     )
        // }
        // return (
        //     <div> {message} </div>
        // )

        // ============= Conditional Rendering (Ternary) ===============
        return (
            <div>
                {isLoggedIn ? (
                    <div>
                        <h1> Hello {name} </h1>
                        <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
                    </div>
                    ) : (
                        <div>
                            <h1>You are not an authenticated user. Please login</h1>
                            <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
                        </div>
                    )
                }
            </div>
        )


        // ============== Conditional Rendering (short circuit) ============
        // return(
        //     <div>
        //         {isLoggedIn && (
        //             <div>
        //                 <h1> Hello {name} </h1>
        //                 <button onClick = {this.change} style = {{padding: "10px"}}> Click Me </button>
        //             </div>
        //         )}
        //     </div>
        // )
    }
}
export default ConditionalRendering;
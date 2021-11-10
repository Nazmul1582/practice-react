const ChildComp = ({changeNameHandler}) => {
    return (
        <div>
            <h2>I am a child component</h2>
            <button 
                // onClick = {changeNameHandler}
                onClick = {() => changeNameHandler("Ahmed")} 
                style = {{background: "coral", color: "#fff", padding : "10px 20px", borderRadius: "5px", border : "1px solid coral",fontSize: "18px", cursor: "pointer"}}>Change Name
            </button>
        </div>
    )
}

export default ChildComp;
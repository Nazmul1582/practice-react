const StudentComp = ({name, age}) => {
    
    const showNameHandler = (cls) => {
        console.log(name, age, cls)
    }
    return <div>
        <h1>Student's information</h1>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <button 
        // onClick = {showNameHandler}
        onClick = {() => showNameHandler('Four')} 
        >Show Name</button>
    </div>
}

export default StudentComp;
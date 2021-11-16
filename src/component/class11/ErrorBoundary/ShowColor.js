// Error handling phase or Error Boundary
// 1. static getDerivedStateFromError()
// 2. componentDidCatch(error, info)

const ShowColor = ({color}) => {
    if( color === 'Black'){
        throw new Error ('This is not a valid color');
    }
    return (
        <div>
            <h1>Color : {color}</h1>
        </div>
    )
}
export default ShowColor;
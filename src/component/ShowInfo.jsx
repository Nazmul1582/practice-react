import './style.css'
const ShowInfo = ({info, deleteHandler, ourClass}) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr className = {ourClass}>
                        <td>{info.id}</td>
                        <td>{info.name}</td>
                        <td>{info.age}</td>
                        <td>
                            <button onClick = {() => deleteHandler(info.id)}>Yes</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowInfo;
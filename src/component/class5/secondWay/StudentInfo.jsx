const StudentInfo = ({info, deleteHandler}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.age}</td>
                    <td>
                        <button onClick = {() => deleteHandler(info.id)}>Yes</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default StudentInfo;
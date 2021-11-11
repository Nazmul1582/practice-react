import ColumnComp from "./ColumnComp";

const TableComp = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <ColumnComp />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableComp;
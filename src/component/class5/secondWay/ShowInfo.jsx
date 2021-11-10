import StudentInfo from './StudentInfo';
import React, {Component} from 'react'
import './student.css'
import {AllStudents} from './AllStudents';

class ShowInfo extends Component{
    
    constructor(){
        super();
        this.state = {
            students : AllStudents
        }
    }
    deleteHandler = (id) => {
        this.setState({
            students : this.state.students.filter( ele => (
                ele.id !== id
            ))            
        })
        console.log('deleted id is', id)
    }

    render(){
        return (
            <div>
                <h1> All Students Information </h1>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {this.state.students.map(ele => (
                        <div key = {ele.id} className = {ele.id%2 !== 0 ? "container-light" : 'container-white'}>
                            <StudentInfo info = {ele} 
                            deleteHandler = {this.deleteHandler} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default ShowInfo;
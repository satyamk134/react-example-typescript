import React from "react";
import Api from '../../http/axios'
import AddTodo from  '../../containers/AddTodo';
import VisibleTodoList  from  '../../containers/VisibleTodoList';
import Footer from  '../Footer'


class todo extends React.Component {
    constructor() {
        super()
        this.api = new Api()
        this.state = {
            tasks: [{ task: 'Create a react App' },
            { task: 'Add routing' },
            { task: 'Do http call with axios' }

            ],
            users: [],
            newTask: "",
        };

    }

    componentDidMount() {

        this.api.getRequest()
            .then(response => {
               
                this.setState({ users: response.data.data })
            })
        
    }

    handleChange = event => {
        this.setState({ newTask: event.target.value });
       
    }

    addTask = (e) => {
       
        this.setState(prevState => ({ tasks: [...prevState.tasks, { task: this.state.newTask }] }));
        this.setState({ newTask: "" })
        //this.setState({tasks:[{task:this.state.newTask}]})
    }

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }

    // render() {
    //     return (
    //         <div className='conatainer'>
    //             <div className='to-do-list'>
    //                 <h1>to do List</h1>
    //                 <ul>
    //                     {this.state.tasks.map((element, index) => <li key={index}>{element.task}</li>)}
    //                 </ul>
    //             </div>
    //             <div className='task-form'>
    //                 <input type="text" onChange={this.handleChange} value={this.state.newTask} placeholder="Enter Task" />
    //                 <button type="submit" onClick={this.addTask}>SUBMIT</button>
    //             </div>

    //             <div className="users-table">
    //                 <table>
    //                     <thead><tr><th>Name</th><th>Email</th></tr></thead>
    //                     <tbody>{this.state.users.map(element => { return <tr key={element.firstName}><td>{element.firstName}</td><td>{element.emailId}</td></tr> })}
    //                     </tbody>
    //                         }
    //                 </table>
    //             </div>

    //         </div>
    //     )
    // }


}
export default todo;    

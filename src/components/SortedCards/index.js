import React from "react";
import "./style.css";
import Card from '../Card';
// import API from "../../utils/API";
// import API from "../utils/API";


class SortedCards extends React.Component {

    state = {
        sortedEmployees: [],
        employees: []
        
    }
    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }


    render() {
        return (


            <div>
            
                    <div>Photo</div>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Phone</div>
                    <div>E-mail</div>
                

                {this.state.sortedEmployees.map((item, index) => (

                    <Card
                        image={item.picture.large}
                        first={item.name.first}
                        last={item.name.last}
                        age={item.dob.age}
                        phone={item.cell}
                        email={item.email}
                    />
                ))}
            </div>
        );
    }
}

export default SortedCards;
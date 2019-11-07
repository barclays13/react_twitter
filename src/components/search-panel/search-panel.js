import React,{Component} from 'react';
import {Input} from 'reactstrap';


export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
    }

    onUpdateSerach(event) {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSerach(term);
    }

    render() {
        return (
            <Input 
                className="search-input" 
                type="text" 
                placeholder="Поиск по записям"
                onChange={this.onUpdateSerach}>
            </Input>
        )
    }
}

import React, {Component} from 'react';
import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-statul-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';
import '../post-list-item/post-list-item.css';
import '../post-statul-filter/post-status-filter.css';


const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const SearchPanelBlock = styled.div`
    display: flex;
    margin: 1rem 0;

    input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data : [
                "21321",
                {label:"Going to learn react", important:true, id: nextId()},
                {label:"That is so good" , important:false, id: nextId()},
                {label:"A need a break...", important:false, id: nextId()},
                1234
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice (0, index), ...data.slice (index+1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <SearchPanelBlock>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelBlock>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}

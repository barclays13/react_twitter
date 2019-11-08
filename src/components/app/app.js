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
                {label:"Going to learn react", important:false, like:false, id: nextId()},
                {label:"That is so good" , important:false, like:false, id: nextId()},
                {label:"A need a break...", important:false, like:false, id: nextId()}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onToggles = this.onToggles.bind(this);
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1
        });
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
        if (body.trim().length > 0) {
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
    }

    onToggles(likeImportant, id) {

        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old};
            newItem[likeImportant] = !old[likeImportant];
            const newArr = [...data.slice (0, index), newItem, ...data.slice (index+1)];
            return {
                data: newArr
            }
        });
    }    


    onUpdateSerach(term){
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <SearchPanelBlock>
                    <SearchPanel
                        onUpdateSerach={this.onUpdateSerach}/>
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </SearchPanelBlock>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggles={this.onToggles}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}

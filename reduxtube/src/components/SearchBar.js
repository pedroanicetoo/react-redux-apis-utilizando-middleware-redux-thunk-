import React, {Component} from 'react'
import {Segment, Input} from 'semantic-ui-react';


// const SearchBar = props => {

class SearchBar extends Component {
    
    pesquisaTermo = e => {
        if(e.keyCode === 13) {
            const termo = e.target.value;
            console.log(termo);
        }
    }
    render() {
        return (
            <div className='search-bar'>
                <Segment stacket>
                    <Input icon='search'
                    onKeyDown={(e) => this.pesquisaTermo(e)}
                    size='large' 
                    placeholder='Search for...'></Input>
                </Segment>
            </div>
        )
    }
}

export default SearchBar;
import React, {Component} from 'react'
import {Segment, Input} from 'semantic-ui-react';
import {connect} from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/range';
import busca from '../store/actions/busca-video'
import {buscaVideo} from '../store/actions/busca-video'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        //onload
        this.props.buscaVideo('Sistemas Distribuídos')
    }


    pesquisaTermo = e => {
        if(e.keyCode === 13) { //enter code keyboard
            const termo = e.target.value;
            console.log(termo);
            this.props.buscaVideo(termo);
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

const mapDispatchProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null,mapDispatchProps)(SearchBar);
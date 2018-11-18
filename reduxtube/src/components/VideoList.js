import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import {reproduzVideo} from '../store/actions/reproduz-video'
import { dispatch } from 'rxjs/internal/observable/pairs';

class VideoList extends Component {
    constructor(props) {
        super(props)

        this.renderVideo = this.renderVideo.bind(this)
    }

    renderVideo(video) {
        return (
            <List animated verticalAlign='middle' key={video.etag}>
                <List.Item onClick={() => this.props.reproduz(video)}>
                    <Image src={video.snippet.thumbnails.default.url} />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }

    render() {
        return (
            <div className='video-list'>
                {
                    this.props.carregando && (<Dimmer active inverted>
                        <Loader size='medium'>Loading</Loader>
                    </Dimmer>)
                }
                {
                    this.props.videos.map(video => {
                        console.log("olha eu aqui", video)
                        return this.renderVideo(video)
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => dispatch(reproduzVideo(video))
    }
}


const mapStateToProps = (state) => {
    return {
        carregando: state.busca.carregando,
        erro: state.busca.erro,
        videos: state.busca.videos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)
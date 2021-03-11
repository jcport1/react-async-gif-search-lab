import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    state = {
        gifs:[]
    }

  

  fetchGifs = (query = "dog") => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=5PxuzgyWSaGED5Y2zPwbNBpaRryZMBSv&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({ url: gif.images.original.url}))
            })
        })

  }
    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount(){

        this.fetchGifs()
     }

}
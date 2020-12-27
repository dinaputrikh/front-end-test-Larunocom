import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';
import axios from 'axios';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

    axios.get('http://www.omdbapi.com/?s=avengers&apikey=f1b86457')
            .then(response => {
                const a = response.data.Search;
                console.log(a)
                this.setState({
                    isLoaded: true,
                    data: a,
                })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { isLoaded, data } = this.state;

        if (!isLoaded){
            return <div>Loading....</div>;
        } else {
            return (
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i} >
                            <td>{ item.Title }</td>
                            <td>{ item.Year }</td>
                            <td>{ item.imdbID }</td>
                            <td>
                                <Rating name="size-small" defaultValue={ 0 } max={ 1 } onClick={() =>this.props.addFavorite(item)}/>
                            </td>
                        </tr>
                    ))};
                </tbody>
            )
        }
    }
}
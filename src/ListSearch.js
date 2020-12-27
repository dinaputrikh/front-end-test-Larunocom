import React, { Component } from 'react';
import ListMovieSearch from './ListMovieSearch';

export default class extends Component {
    render() {
        return (
            <tbody>
                {this.props.list.map(item =>{
                    if(item.Title.match(this.props.search)) return <tbody> <ListMovieSearch key={item.imdbID} name={item.Tittle} /> </tbody>
                    return undefined;

                })}
            </tbody>
        )
    }
}
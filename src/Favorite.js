import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';

class TabFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addFavorite = favorite => {
        const { favorites } = this.state;
    
        if (!favorites.some(alreadyFavorite => alreadyFavorite.data.Search.imdbID == favorite.data.Search.imdbID)) {
            this.setState({
                favorites: [...this.state.favorites, favorite]
            });
        }
      }

    render () {
        const { favorites } = this.props;
        return(
        <Table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>imdbID</th>
                    <th>Favorite</th>
                </tr>
            </thead>
            <tbody>
                {/* {favorites.map((item, i) => (
                    <tr key={i} >
                        <td>{ item.Title }</td>
                        <td>{ item.Year }</td>
                        <td>{ item.imdbID }</td>
                        <td>
                            <Rating name="size-small" defaultValue={ 0 } max={ 1 } onClick={() => this.props.addFavorite(item)}/>
                        </td>
                    </tr>
                ))}; */}
            </tbody>
        </Table>
        )
    }
} 

export default TabFavorite;
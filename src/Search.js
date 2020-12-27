import React from 'react';
import MovieList from './MovieList';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Suggestions from './Suggestions';
import ListSearch from './ListSearch';

const { API_KEY } = 'f1b86457';
const API_URL = 'http://www.omdbapi.com/';

class TabSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            search: '',
            loading: false,
            favorites: [],
            list_search: [],
            isSearch: false,
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.search = this.search.bind(this);
        this.searchInput = this.searchInput.bind(this);
    }

    componentDidMount() {
        axios(`${API_URL}?s=${this.state.search}&apikey=${API_KEY}`)
        .then(res => this.setState({ list_search: res.data.Search}))
    }

    onChangeHandler = e => this.setState({[e.target.Title]: e.target.value});
    search = pattern => this.state.list_search.filter(el => el.Title.match(pattern))

    searchInput = () =>
    {
        let data = this.state.search;
        let pattern = new RegExp(data);
        this.isSearch = true;
        this.search(pattern);
    }

    addFavorite = favorite => {
        const { favorites } = this.state;
    
        if (!favorites.some(alreadyFavorite => alreadyFavorite.imdbID == favorite.imdbID)) {
            this.setState({
                favorites: [...this.state.favorites, favorite]
            });
        }
      }

    render() {
        
        return (
            <div>
                <div>
                    <form>
                        <input type="text" onChage={this.onChangeHandler} name="search" placeholder="Search by title..." className="input" onKeyUp={this.searchInput}/>
                        <ListSearch list={this.state.list_search} search={this.state.search}/>
                    </form>
                </div>

                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>imdbID</th>
                                <th>Favorite</th>
                            </tr>
                        </thead>
                        <MovieList/>
                    </Table>
                </div>
                
            </div>
        )
    }
}

export default TabSearch;
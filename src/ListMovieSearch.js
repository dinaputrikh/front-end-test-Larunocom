import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';

export default (props) => {
    return (
        <tr>
            <td>{ props.Title }</td>
            <td>{ props.Year }</td>
            <td>{ props.imdbID }</td>
            <td>
                <Rating name="size-small" defaultValue={ 0 } max={ 1 }/>
            </td>
        </tr>
    );
}
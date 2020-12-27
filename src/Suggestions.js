import React from 'react';
import { Rating } from '@material-ui/lab';

const Suggestions = (props) => {
    const pro = props.results;
    const options = pro.map((item, i) => (
        <tr key={i} >
            <td>{ item.Title }</td>
            <td>{ item.Year }</td>
            <td>{ item.imdbID }</td>
            <td>
                <Rating name="size-small" defaultValue={0} max={ 1 } />
            </td>
        </tr>
    ))

    return { options }
}

export default Suggestions;
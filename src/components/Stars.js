import React from 'react'
import PropTypes from 'prop-types'
import Star from "./Star";


function Stars(props) {

    if (Number.isInteger(props.count) && props.count >= 1 && props.count <= 5)
    {
        let items = new Array(props.count);

        for (let i = 0; i < props.count; i++)
            items[i] = i;

        return (

            <ul className="card-body-stars u-clearfix">
                {items.map((item) => <Star key={item} />)}
            </ul>
        );
    }

    return null;
}

Stars.propTypes = {
    count: PropTypes.number
}

Stars.defaultProps = {
    count: 0
};


export default Stars;

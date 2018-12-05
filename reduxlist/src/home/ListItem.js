import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ListItem = (props) => (
    <div className="list-card-itens">
    <FontAwesomeIcon icon={props.icon} size="sm" />
    <p>{props.text}</p>
  </div>
)

ListItem.PropTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}

export default ListItem
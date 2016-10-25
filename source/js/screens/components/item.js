import React from 'react';

const Item = ({
  item
}) => (
  <li>
    { item.body }
  </li>
);

Item.propTypes = {
  item: React.PropTypes.string
};

export default Item;

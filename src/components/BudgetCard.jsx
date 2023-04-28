import React from 'react';
import { Card } from 'react-bootstrap';
import { currencyFormatter } from '../utils';

const BudgetCard = ({name, amount, max}) => {
    return (
      <Card>
        <Card.Body>
          <div>{name}</div>
          <div>
            {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
          </div>
        </Card.Body>
      </Card>
    );
};

export default BudgetCard;
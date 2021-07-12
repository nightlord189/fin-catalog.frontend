/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-useless-concat */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { observer } from 'mobx-react';
import {
  Form, OverlayTrigger, Tooltip, ProgressBar,
} from 'react-bootstrap';
import Decimal from 'decimal.js';
import toFormat from 'toformat';
import MainStore from '../store/main.js';

const DepoCalculator = () => {
  const handleChangeRate = (e) => {
    if (!e.target.validity.badInput) {
      MainStore.calculator.rate = e.target.value;
    }
  };

  const handleChangeTerm = (e) => {
    if (!e.target.validity.badInput) {
      MainStore.calculator.term = e.target.value;
    }
  };

  const handleChangeCapitalization = (e) => {
    MainStore.calculator.capitalization = e.target.checked;
  };

  const handleChangeAmount = (e) => {
    if (!e.target.validity.badInput) {
      MainStore.calculator.amount = Number(e.target.value);
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      При включенной капитализации проценты будут начисляться также на уже начисленное вознаграждение
    </Tooltip>
  );

  toFormat(Decimal);

  return (
    <>
      <h4>Калькулятор</h4>
      <Form>
        <Form.Group controlId="rate">
          <Form.Label>Ставка, %</Form.Label>
          <Form.Control type="number" min={0} value={MainStore.calculator.rate} onChange={handleChangeRate} />
        </Form.Group>
        <Form.Group controlId="term">
          <Form.Label>Срок, месяцев</Form.Label>
          <Form.Control type="number" min={1} value={MainStore.calculator.term} onChange={handleChangeTerm} />
        </Form.Group>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Form.Group controlId="capitalization">
            <Form.Check type="checkbox" label="Капитализация" checked={MainStore.calculator.capitalization} onChange={handleChangeCapitalization} />
          </Form.Group>

        </OverlayTrigger>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Сумма</Form.Label>
          <Form.Control type="number" min={0} value={MainStore.calculator.amount} onChange={handleChangeAmount} />
        </Form.Group>
        <p>{`Через ${MainStore.calculator.term} месяцев будет накоплено: `}</p>
        <p className="font-weight-bold">{MainStore.depositResult.toFormat(1, { decimalSeparator: '.', groupSeparator: ' ' })}</p>
        <p>{`Вознаграждение: ${MainStore.reward.toFormat(1, { decimalSeparator: '.', groupSeparator: ' ' })}`}</p>
        <ProgressBar>
          <ProgressBar variant="success" now={MainStore.basePercentage} key={1} />
          <ProgressBar variant="warning" now={MainStore.rewardPercentage} key={2} />
        </ProgressBar>
      </Form>
    </>
  );
};

export default observer(DepoCalculator);

import * as React from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";
import { useState } from "react";
import styles from './Calculator.module.scss';

const PLUS = "+";
const MINUS = "-";
const DIVIDE = "/";
const MULTIPLY = "*";

export const OPERATOR = { PLUS, MINUS, DIVIDE, MULTIPLY };
export const PLUS_MINUS = { PLUS, MINUS };

const convertCalculationStringToNumber = (calculationString: string): number  => {
  return eval(calculationString);
};

const Calculator: any = () => {
  const [inputValue, setInputValue]: any = useState("");
  const [result, setResult]: any = useState(0);

  const calculate = () => {
    try {
      const calculatedValue: number = convertCalculationStringToNumber(inputValue);
      setResult(calculatedValue);
    } catch (e) {
      setResult(0);
      setInputValue(0);
    }
  };

  const resetState = () => {
    setInputValue("");
    setResult(0);
  };

  return (
    <Card className={styles.layout}>
      <CardBody>
        <Row>
          <Col>
            <div className={styles.calculator}>
              <div className={styles.display}>
                { result }
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => resetState()}>C</div>
                <div className={styles.button}>+/-</div>
                <div className={styles.button}>%</div>
                <div className={styles.operatorButton} onClick={() => setInputValue(inputValue + OPERATOR.DIVIDE)}>/</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "7")}>7</div>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "8")}>8</div>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "9")}>9</div>
                <div className={styles.operatorButton} onClick={() => setInputValue(inputValue + OPERATOR.MULTIPLY)}>X</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "4")}>4</div>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "5")}>5</div>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "6")}>6</div>
                <div className={styles.operatorButton} onClick={() => setInputValue(inputValue + OPERATOR.MINUS)}>-</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "1")}>1</div>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "2")}>2</div>
                <div className={styles.button} onClick={() => setInputValue(inputValue + "3")}>3</div>
                <div className={styles.operatorButton} onClick={() => setInputValue(inputValue + OPERATOR.PLUS)}>+</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.zeroButton}>0</div>
                <div className={styles.button}>.</div>
                <div className={styles.operatorButton} onClick={() => calculate()}>=</div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Calculator;
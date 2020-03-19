import * as React from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";
import { useEffect, useRef, useState } from "react";
import styles from './Calculator.module.scss';

const PLUS = "+";
const MINUS = "-";
const DIVIDE = "/";
const MULTIPLY = "*";

export const OPERATOR = {PLUS, MINUS, DIVIDE, MULTIPLY};

const convertCalculationStringToNumber = (calculationString: string): number => {
  return eval(calculationString);
};

const displayValueSanitizer = (value: string): string => {
  return value === "" ? "0": value;
};

const usePrevious = (value: string): any => {
  const ref: any = useRef();
  useEffect(() => {
    ref.current= value;
  });
  return ref.current;
};

const Calculator: any = () => {
  const [inputValue, setInputValue]: any = useState("");
  const [result, setResult]: any = useState("");
  const [displayResult, setDisplayResult]: any = useState(false);

  const inputValues = (value: String) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    try {
      const calculatedValue: number = convertCalculationStringToNumber(inputValue);
      setResult(String(calculatedValue));
      setInputValue(String(calculatedValue));
    } catch (e) {
      setResult("");
      setInputValue("");
    }
  };

  const resetState = () => {
    setInputValue("");
    setResult(0);
  };

  const prevInputValue = usePrevious(inputValue);

  useEffect(() => {
    if (result) {
      if (prevInputValue !== inputValue) {
        setDisplayResult(false);
      } else {
        setDisplayResult(true);
      }
    } else {
      setDisplayResult(false);
    }
  });

  return (
    <Card className={styles.layout}>
      <CardBody>
        <Row>
          <Col>
            <div className={styles.calculator}>
              <div className={styles.display}>
                {displayResult ? displayValueSanitizer(result) : displayValueSanitizer(inputValue)}
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => resetState()}>C</div>
                <div className={styles.button}>+/-</div>
                <div className={styles.button}>%</div>
                <div className={styles.operatorButton} onClick={() => inputValues(OPERATOR.DIVIDE)}>/</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => inputValues("7")}>7</div>
                <div className={styles.button} onClick={() => inputValues("8")}>8</div>
                <div className={styles.button} onClick={() => inputValues("9")}>9</div>
                <div className={styles.operatorButton} onClick={() => inputValues(OPERATOR.MULTIPLY)}>X
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => inputValues("4")}>4</div>
                <div className={styles.button} onClick={() => inputValues("5")}>5</div>
                <div className={styles.button} onClick={() => inputValues("6")}>6</div>
                <div className={styles.operatorButton} onClick={() => setInputValue(inputValue + OPERATOR.MINUS)}>-
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.button} onClick={() => inputValues("1")}>1</div>
                <div className={styles.button} onClick={() => inputValues("2")}>2</div>
                <div className={styles.button} onClick={() => inputValues("3")}>3</div>
                <div className={styles.operatorButton} onClick={() => inputValues(OPERATOR.PLUS)}>+</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.zeroButton} onClick={() => inputValues("0")}>0</div>
                <div className={styles.button} onClick={() => inputValues(".")}>.</div>
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
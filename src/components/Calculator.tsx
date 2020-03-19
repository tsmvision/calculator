import * as React from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";
import { useEffect, useRef, useState } from "react";
import styles from './Calculator.module.scss';
import { CalculatorButtonProps, UsePrevious, ResetState, PrevInputValue } from './Calculator.type';

const PLUS = "+";
const MINUS = "-";
const DIVIDE = "/";
const MULTIPLY = "*";

export const OPERATOR = {PLUS, MINUS, DIVIDE, MULTIPLY};

const CalculatorButton = ({className, inputValues, value, label}: CalculatorButtonProps) => {
  return (
    <div className={className} onClick={() => inputValues(value)}>{label ? label: value}</div>
  );
};

const convertCalculationStringToNumber = (calculationString: string): number => {
  return eval(calculationString);
};

const displayValueSanitizer = (value: string): string => {
  return value === "" ? "0": value;
};

const usePrevious: UsePrevious = (value) => {
  const ref: any = useRef();
  useEffect(() => {
    ref.current= value;
  });
  return ref.current;
};

const Calculator: React.FC = () => {
  const [inputValue, setInputValue]: any = useState("");
  const [result, setResult]: any = useState("");
  const [displayResult, setDisplayResult]: any = useState(false);

  const inputValues = (value: String) => {
    setInputValue(inputValue + value);
  };

  const calculate = (): void => {
    try {
      const calculatedValue: number = convertCalculationStringToNumber(inputValue);
      setResult(String(calculatedValue));
      setInputValue(String(calculatedValue));
    } catch (e) {
      setResult("");
      setInputValue("");
      console.log(e);
    }
  };

  const resetState: ResetState = () => {
    setInputValue("");
    setResult(0);
  };

  const prevInputValue: PrevInputValue = usePrevious(inputValue);

  useEffect((): void => {
    if (result) {
      if (prevInputValue !== inputValue) {
        setDisplayResult(false);
      } else {
        setDisplayResult(true);
      }
    } else {
      setDisplayResult(false);
    }
  }, [result, prevInputValue, inputValues] );

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
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"7"} />
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"8"}/>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"9"}/>
                <CalculatorButton className={styles.operatorButton} inputValues={inputValues} value={OPERATOR.MULTIPLY} label={"X"}/>
              </div>
              <div className={styles.buttonGroup}>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"4"}/>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"5"}/>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"6"}/>
                <CalculatorButton className={styles.operatorButton} inputValues={inputValues} value={OPERATOR.MINUS} label={"-"}/>
              </div>
              <div className={styles.buttonGroup}>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"1"}/>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"2"}/>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"3"}/>
                <CalculatorButton className={styles.operatorButton} inputValues={inputValues} value={OPERATOR.PLUS} label={"+"}/>
              </div>
              <div className={styles.buttonGroup}>
                <CalculatorButton className={styles.zeroButton} inputValues={inputValues} value={"0"}/>
                <CalculatorButton className={styles.button} inputValues={inputValues} value={"."}/>
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
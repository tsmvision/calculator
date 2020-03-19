import { RefObject } from "react";

export interface UsePrevious {
  (value: string): RefObject<HTMLDivElement>
}

export interface ResetState {
  (): void
}

export interface ConvertCalculationStringToNumber {
  (calculationString: string): number
}

export interface DisplayValueSanitizer {
  (value: string): string
}

export interface Calculate {
  (): void
}

export interface InputValues {
  (value: string): void
}

export type PrevInputValue = RefObject<HTMLDivElement>;

export interface CalculatorButtonProps {
  className: string | undefined,
  inputValues: (value: string) => void,
  value: string,
  label?: string
}
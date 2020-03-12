export interface State {
  inputValue1: number,
  inputValue2: number,
  outputValue: number
}

export interface Payload {
  inputValue1: number,
  inputValue2: number
}

export interface ActionReturn {
  type: string,
  payload: Payload
}

export interface Action {
  (value1: number, value2: number): ActionReturn
}

export interface GetCalculatedValue {
  (value1: number, value2: number, type: string): number
}

export interface GetState  {
  (inputValue1: number, inputValue2: number, type: string): State
}

export interface RootReducer {
  (state: State, action: ActionReturn): State
}
import { Component, ReactNode } from 'react';
interface IState {
  isError: boolean;
}
export default class ErrorBoundry extends Component {
  state: IState;
  componentDidCatch(): void;
  render(): ReactNode;
}
export {};

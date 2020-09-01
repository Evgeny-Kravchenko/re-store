import { Component, ReactNode } from 'react';
import { IErrorBoundryState } from '../../interfaces';
export default class ErrorBoundry extends Component {
    state: IErrorBoundryState;
    componentDidCatch(): void;
    render(): ReactNode;
}

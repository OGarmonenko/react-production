import React, { ErrorInfo, ReactNode, Suspense } from 'react';

import { ErrorOnPage } from '@/widgets/ErrorOnPage/ui/ErrorOnPage';

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorOnPage />
                </Suspense>
            );
        }
        return children;
    }
}

export default ErrorBoundary;

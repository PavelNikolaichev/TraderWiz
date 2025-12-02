import { Component, type ErrorInfo, type ReactNode } from "react";
import logger from "@utils/logger";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logger.error({ err: error, info: errorInfo }, "Uncaught error");
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="flex items-center justify-center w-full h-full bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
                        <p className="mt-1 text-sm text-gray-500">The chart component crashed.</p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

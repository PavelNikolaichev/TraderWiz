import React from 'react';
import { useChartSettings } from '../../store/useChartSettings';

export const ControlPanel = () => {
    const { symbol, setSymbol, symbols, refreshSymbols } = useChartSettings();

    React.useEffect(() => {
        refreshSymbols();
    }, [refreshSymbols]);

    return (
        <div className="mb-6 border-b border-gray-100 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Market Overview</h2>
                    <p className="text-sm text-gray-500 mt-1">Real-time market data and analysis</p>
                </div>

                <div className="flex items-center space-x-3 bg-gray-50 p-1 rounded-lg border border-gray-200">
                    <div className="relative">
                        <select
                            value={symbol}
                            onChange={e => setSymbol(e.target.value)}
                            className="appearance-none block w-full sm:w-48 pl-3 pr-10 py-2 text-sm font-medium text-gray-700 bg-white border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6 cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            {symbols.length === 0 ? (
                                <option value="">No symbols available</option>
                            ) : (
                                symbols.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))
                            )}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <button
                        onClick={() => refreshSymbols()}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
                        title="Refresh Symbols"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
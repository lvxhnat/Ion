export const ENDPOINTS = {
    BASEURLS: {
        DATA_INGESTION: process.env.REACT_APP_DATA_INGESTION_BASE_URL,
    },
    PRIVATE: {
        INGEST_DATA: 'ingestion/upload',
        ETF_INFO: 'etf/info',
        QUERY_USER_UPLOADS: 'ingestion/retrieveUserUploads',
        QUERY_TABLE_UPLOADS: 'ingestion/retrieveTable',
        OANDA_FX_STREAMING_ENDPOINT: 'oanda/ws',
        OANDA_FX_HISTORICAL_ENDPOINT: 'candles/oanda/candlesHistorical',
        FINHUB_FX_HISTORICAL_ENDPOINT: 'candles/finnhub/candlesHistorical',
        DB_QUERY: 'db/query',
        CURRENT_WEATHER_ENDPOINT: 'weather/currentWeather',
        SEARCH_FUNCTIONS: 'autocomplete/securityFunctions',
        SEARCH_ASSETS: 'autocomplete/tradeableAssets',
        ALL_FUNCTIONS: 'autocomplete/allFunctions',
        ETFS_CATEGORIES: 'autocomplete/etfAssetTypes',
        ETFS_INFOS: 'autocomplete/etfInfos',
    },
    PUBLIC: {
        BASE: '/',
    },
    PUBLIC_REQUIRED_TOKEN: {},
};

export const TEST_ENDPOINTS = {
    SEARCH_FUNCTIONS: {
        NAME: 'Autocomplete',
        ENDPOINT: 'autocomplete/ping',
    },
    OANDA_FUNCTIONS: {
        NAME: 'Candles',
        ENDPOINT: 'candles/ping',
    },
    DB_FUNCTIONS: {
        NAME: 'Database',
        ENDPOINT: 'db/ping',
    },
    WEATHER_FUNCTIONS: {
        NAME: 'Weather',
        ENDPOINT: 'weather/ping',
    },
} as const;

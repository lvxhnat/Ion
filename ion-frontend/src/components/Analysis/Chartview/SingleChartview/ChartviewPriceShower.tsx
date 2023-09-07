import * as React from 'react';

import Typography from '@mui/material/Typography';

import {
    AllowedLiveMoveValueTypes,
    TickerMetricStoreFormat,
    useLiveMovesStore,
    useMetricStore,
    useTickerDataStore,
} from 'store/chartview/chartview';
import { ColorsEnum } from 'common/theme';
import { formatDate } from 'common/constant/dates';
import getDecimalPlaces from 'common/constant/general';

import { technicalIndicators } from '../calculations/metrics';

export default function ChartviewPriceShower(props: { ticker: string }) {
    const metrics = useMetricStore(state => state.metrics[props.ticker]);
    return (
        <div
            style={{
                gap: 5,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                border: `1px solid ${ColorsEnum.coolgray1}`,
            }}
        >
            <ChartViewPriceShowerCell ticker={props.ticker} />
            {metrics
                ? metrics.map((entry: TickerMetricStoreFormat) => {
                      return (
                          <ChartViewMetricShowerCell
                              key={`${entry.metricId}_ChartViewMetricShowerCell`}
                              ticker={props.ticker}
                              entry={entry}
                          />
                      );
                  })
                : undefined}
        </div>
    );
}

const ChartViewMetricShowerCell = (props: { ticker: string; entry: TickerMetricStoreFormat }) => {
    const liveMoves: AllowedLiveMoveValueTypes = useLiveMovesStore(
        state => state.liveMoves[props.ticker][props.entry.metricId]
    );

    const formattedIndicatorString = `${
        technicalIndicators[props.entry.metric].shortName
    }(${Object.values(props.entry.metricParams).join(', ')})`;

    return (
        <Typography
            key={props.entry.metricId}
            variant="subtitle2"
            component="div"
            style={{
                color: props.entry.color,
                padding: 2,
                paddingRight: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: `1px solid ${ColorsEnum.coolgray1}`,
            }}
        >
            {formattedIndicatorString}: {(liveMoves as number)?.toFixed(2)}
        </Typography>
    );
};

const ChartViewPriceShowerCell = (props: { ticker: string }) => {
    const liveMoves = useLiveMovesStore(state => state.liveMoves)[props.ticker];
    const lastPrice: number = useTickerDataStore(state => state.data[props.ticker]).dataY.slice(
        -1
    )[0];
    const priceChange =
        liveMoves && liveMoves['price']
            ? (100 * (lastPrice - +liveMoves['price'])) / +liveMoves['price']
            : null;

    return (
        <Typography
            variant="subtitle2"
            component="div"
            style={{
                color: 'white',
                padding: 2,
                paddingLeft: 5,
                paddingRight: 5,
                borderRight: `1px solid ${ColorsEnum.coolgray1}`,
            }}
        >
            {liveMoves && priceChange ? (
                <>
                    <span>
                        {`${formatDate(liveMoves['date'] as Date)}: $${getDecimalPlaces(
                            liveMoves['price'] as number,
                            lastPrice
                        )}`}
                    </span>
                    <span
                        style={{ color: priceChange > 0 ? ColorsEnum.upHint : ColorsEnum.downHint }}
                    >
                        {`  ${priceChange > 0 ? '↑' : '↓'}${priceChange?.toFixed(2)}%`}
                    </span>
                </>
            ) : undefined}
        </Typography>
    );
};

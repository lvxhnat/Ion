import * as React from 'react';
import * as S from './style';

import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';
import InternationalClock from './InternationalClock/InternationalClock';
import { Grid } from '@mui/material';
import ForexTable from 'components/Tables/ForexTable';
import TreasuryTables from 'components/Tables/Treasury';
import WidgetContainer from 'components/WidgetContainer';

export default function Landing() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container columns={15} spacing={1}>
                <Grid item xs={11}>
                    <S.InternationalClockWrapper>
                        <InternationalClock
                            timeZone={'America/New_York'}
                            timeZoneName={'New York'}
                        />
                        <InternationalClock timeZone={'Europe/London'} timeZoneName={'London'} />
                        <InternationalClock
                            timeZone={'Asia/Singapore'}
                            timeZoneName={'Singapore'}
                        />
                        <InternationalClock timeZone={'Asia/Tokyo'} timeZoneName={'Tokyo'} />
                    </S.InternationalClockWrapper>
                    <Grid container>
                        <WidgetContainer title="us_bill_rates">
                            <TreasuryTables table="us_bill_rates" />
                        </WidgetContainer>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <ForexTable />
                </Grid>
            </Grid>
        </>
    );
}

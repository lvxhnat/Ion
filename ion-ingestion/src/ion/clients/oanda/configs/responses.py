#!/usr/bin/env python3
from ion.clients.oanda.configs.requests import Granularities, CurrencyPairs
from pydantic import BaseModel
from typing import Literal, Optional, List


class _OandaOHLCResponse(BaseModel):
    o: str
    h: str
    l: str
    c: str


class OandaCandlesResponse(BaseModel):
    """Candles Response"""

    complete: bool
    volume: int
    time: str
    bid: Optional[_OandaOHLCResponse]
    mid: Optional[_OandaOHLCResponse]
    ask: Optional[_OandaOHLCResponse]


class RawOandaCandlesResponse(BaseModel):
    """The raw response returned from the instrument candles endpoint"""

    instrument: CurrencyPairs
    granularity: Granularities
    candles: List[OandaCandlesResponse]


class FormattedOandaCandles(BaseModel):
    """The formatted response returned from instrument candles endpoint"""

    date: str
    vol: int
    mid_open: Optional[float]
    mid_high: Optional[float]
    mid_close: Optional[float]
    mid_low: Optional[float]
    bid_open: Optional[float]
    bid_high: Optional[float]
    bid_low: Optional[float]
    bid_close: Optional[float]
    ask_open: Optional[float]
    ask_high: Optional[float]
    ask_low: Optional[float]
    ask_close: Optional[float]


class OandaBaseDataResponse(BaseModel):
    """The response the function will return, together with metadata"""

    data: Optional[FormattedOandaCandles]
    response_code: Literal[200]
    error_message: str

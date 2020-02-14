import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GameItemPastHtml, GameItemUpcomingHtml, GameItemNextHtml, GameItemReportHtml } from './GameItem';

export const GameItemPast = () => GameItemPastHtml + copyCodeBlock(GameItemPastHtml, cssOverrides);
export const GameItemUpcoming = () => GameItemUpcomingHtml + copyCodeBlock(GameItemUpcomingHtml, cssOverrides);
export const GameItemNext = () => GameItemNextHtml + copyCodeBlock(GameItemNextHtml, cssOverrides);
export const GameItemReport = () => GameItemReportHtml + copyCodeBlock(GameItemReportHtml, cssOverrides);

export default { title: 'Molecules/GameItem' };
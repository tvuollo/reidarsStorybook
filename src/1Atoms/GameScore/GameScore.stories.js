import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GameScorePastHtml, GameScoreUpcomingHtml } from './GameScore';

export const GameScorePast = () => GameScorePastHtml + copyCodeBlock(GameScorePastHtml, cssOverrides);
export const GameScoreUpcoming = () => GameScoreUpcomingHtml + copyCodeBlock(GameScoreUpcomingHtml, cssOverrides);

export default { title: 'Atoms/GameScore' };
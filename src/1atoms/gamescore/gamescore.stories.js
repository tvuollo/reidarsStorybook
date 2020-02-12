import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamescorePast, GamescoreUpcoming } from './gamescore';

export const PastGameScore = () => GamescorePast + copyCodeBlock(GamescorePast, cssOverrides);
export const UpcomingGameScore = () => GamescoreUpcoming + copyCodeBlock(GamescoreUpcoming, cssOverrides);

export default { title: 'Atoms/Gamescore' };
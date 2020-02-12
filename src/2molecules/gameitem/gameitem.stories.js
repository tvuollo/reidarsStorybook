import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GameitemPast, GameitemUpcoming, GameitemNext, GameitemReport } from './gameitem';

export const PastGameItem = () => GameitemPast + copyCodeBlock(GameitemPast, cssOverrides);
export const UpcomingGameItem = () => GameitemUpcoming + copyCodeBlock(GameitemUpcoming, cssOverrides);
export const NextGameItem = () => GameitemNext + copyCodeBlock(GameitemNext, cssOverrides);
export const ReportGameItem = () => GameitemReport + copyCodeBlock(GameitemReport, cssOverrides);

export default { title: 'Molecules/Gameitem' };
import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamesListHtml } from './GamesList';

export const GamesList = () => GamesListHtml + copyCodeBlock(GamesListHtml, cssOverrides);

export default { title: 'Organisms/GamesList' };
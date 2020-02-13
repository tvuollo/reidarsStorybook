import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamesListHeaderHtml, NewsListHeaderHtml, VideosListHeaderHtml } from './ListHeader';

export const GamesListHeader = () => GamesListHeaderHtml + copyCodeBlock(GamesListHeaderHtml, cssOverrides);
export const NewsListHeader = () => NewsListHeaderHtml + copyCodeBlock(NewsListHeaderHtml, cssOverrides);
export const VideosListHeader = () => VideosListHeaderHtml + copyCodeBlock(VideosListHeaderHtml, cssOverrides);

export default { title: 'Molecules/ListHeader' };
import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamesListControlHtml, NewsListControlHtml, VideosListControlHtml } from './ListControl';

export const GamesListControl = () => GamesListControlHtml + copyCodeBlock(GamesListControlHtml, cssOverrides);
export const NewsListControl = () => NewsListControlHtml + copyCodeBlock(NewsListControlHtml, cssOverrides);
export const VideosListControl = () => VideosListControlHtml + copyCodeBlock(VideosListControlHtml, cssOverrides);

export default { title: 'Molecules/ListControl' };
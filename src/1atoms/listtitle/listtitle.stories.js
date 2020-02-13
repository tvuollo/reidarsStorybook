import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamesListTitleHtml, NewsListTitleHtml, VideosListTitleHtml } from './ListTitle';

export const GamesListTitle = () => GamesListTitleHtml + copyCodeBlock(GamesListTitleHtml, cssOverrides);
export const NewsListTitle = () => NewsListTitleHtml + copyCodeBlock(NewsListTitleHtml, cssOverrides);
export const VideosListTitle = () => VideosListTitleHtml + copyCodeBlock(VideosListTitleHtml, cssOverrides);

export default { title: 'Atoms/ListTitle' };
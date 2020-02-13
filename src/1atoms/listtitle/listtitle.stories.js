import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamesListtitleHtml, NewsListtitleHtml, VideosListtitleHtml } from './ListTitle';

export const GamesListTitle = () => GamesListtitleHtml + copyCodeBlock(GamesListtitleHtml, cssOverrides);
export const NewsListTitle = () => NewsListtitleHtml + copyCodeBlock(NewsListtitleHtml, cssOverrides);
export const VideosListTitle = () => VideosListtitleHtml + copyCodeBlock(VideosListtitleHtml, cssOverrides);

export default { title: 'Atoms/ListTitle' };
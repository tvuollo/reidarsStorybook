import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { GamesListtitle, NewsListtitle, VideosListtitle } from './listtitle';

export const GamesListTitle = () => GamesListtitle + copyCodeBlock(GamesListtitle, cssOverrides);
export const NewsListTitle = () => NewsListtitle + copyCodeBlock(NewsListtitle, cssOverrides);
export const VideosListTitle = () => VideosListtitle + copyCodeBlock(VideosListtitle, cssOverrides);

export default { title: 'Atoms/ListTitle' };
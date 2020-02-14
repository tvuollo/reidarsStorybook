import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { NewsItemHtml } from './NewsItem';

export const NewsItem = () => NewsItemHtml + copyCodeBlock(NewsItemHtml, cssOverrides);

export default { title: 'Molecules/NewsItem' };
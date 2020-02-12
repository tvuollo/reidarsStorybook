import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import NewsitemHtml from './newsitem';

export const Newsitem = () => NewsitemHtml + copyCodeBlock(NewsitemHtml, cssOverrides);

export default { title: 'Molecules/NewsItem' };
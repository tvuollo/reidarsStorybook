import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { NewsListHtml } from './NewsList';

export const NewsList = () => NewsListHtml + copyCodeBlock(NewsListHtml, cssOverrides);

export default { title: 'Organisms/NewsList' };
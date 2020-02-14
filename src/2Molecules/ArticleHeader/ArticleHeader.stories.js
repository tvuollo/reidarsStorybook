import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArticleHeaderHtml } from './ArticleHeader';

export const ArticleHeader = () => ArticleHeaderHtml + copyCodeBlock(ArticleHeaderHtml, cssOverrides);

export default { title: 'Molecules/ArticleHeader' };
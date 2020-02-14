import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArticleTitleHtml } from './ArticleTitle';

export const ArticleTitle = () => ArticleTitleHtml + copyCodeBlock(ArticleTitleHtml, cssOverrides);

export default { title: 'Atoms/ArticleTitle' };
import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArticleHtml } from './Article';

export const Article = () => ArticleHtml + copyCodeBlock(ArticleHtml, cssOverrides);

export default { title: 'Templates/Article' };
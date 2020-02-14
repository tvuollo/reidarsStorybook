import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArticleImageHtml } from './ArticleImage';

export const ArticleImage = () => ArticleImageHtml + copyCodeBlock(ArticleImageHtml, cssOverrides);

export default { title: 'Atoms/ArticleImage' };
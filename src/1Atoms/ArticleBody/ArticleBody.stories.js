import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArticleBodyHtml } from './ArticleBody';

export const ArticleBody = () => ArticleBodyHtml + copyCodeBlock(ArticleBodyHtml, cssOverrides);

export default { title: 'Atoms/ArticleBody' };
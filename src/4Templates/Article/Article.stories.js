import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { BaseArticleHtml, GameArticleHtml } from './Article';

export const BaseArticle = () => BaseArticleHtml + copyCodeBlock(BaseArticleHtml, cssOverrides);
export const GameArticle = () => GameArticleHtml + copyCodeBlock(GameArticleHtml, cssOverrides);

export default { title: 'Templates/Article' };
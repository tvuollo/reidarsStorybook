import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArticleCaptionedImageHtml } from './ArticleCaptionedImage';

export const ArticleCaptionedImage = () => ArticleCaptionedImageHtml + copyCodeBlock(ArticleCaptionedImageHtml, cssOverrides);

export default { title: 'Molecules/ArticleCaptionedImage' };
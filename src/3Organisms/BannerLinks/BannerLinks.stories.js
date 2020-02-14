import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { BannerLinksHtml } from './BannerLinks';

export const BannerLinks = () => BannerLinksHtml + copyCodeBlock(BannerLinksHtml, cssOverrides);

export default { title: 'Organisms/BannerLinks' };
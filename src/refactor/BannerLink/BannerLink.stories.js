import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { BannerLinkHtml } from './BannerLink';

export const BannerLink = () => BannerLinkHtml + copyCodeBlock(BannerLinkHtml, cssOverrides);

export default { title: 'Atoms/BannerLink' };
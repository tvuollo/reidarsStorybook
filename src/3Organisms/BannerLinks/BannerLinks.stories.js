import './../../main.scss';
import { BannerLinksHtml } from './BannerLinks';

export const BannerLinks = () => BannerLinksHtml + copyCodeBlock(BannerLinksHtml, cssOverrides);

export default { title: 'Organisms/BannerLinks' };
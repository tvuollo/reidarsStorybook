import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { AllGamesLinkHtml, AllNewsLinkHtml, AllVideosLinkHtml, ReadMoreLinkHtml } from './Link';

export const AllGamesLink = () => AllGamesLinkHtml + copyCodeBlock(AllGamesLinkHtml, cssOverrides);
export const AllNewsLink = () => AllNewsLinkHtml + copyCodeBlock(AllNewsLinkHtml, cssOverrides);
export const AllVideosLink = () => AllVideosLinkHtml + copyCodeBlock(AllVideosLinkHtml, cssOverrides);
export const ReadMoreLink = () => ReadMoreLinkHtml + copyCodeBlock(ReadMoreLinkHtml, cssOverrides);

export default { title: 'Atoms/Link' };
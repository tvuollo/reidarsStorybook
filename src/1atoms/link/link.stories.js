import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { AllgamesLink, AllnewsLink, AllvideosLink, ReadmoreLink } from './link';

export const AllGamesLink = () => AllgamesLink + copyCodeBlock(AllgamesLink, cssOverrides);
export const AllNewsLink = () => AllnewsLink + copyCodeBlock(AllnewsLink, cssOverrides);
export const AllVideosLink = () => AllvideosLink + copyCodeBlock(AllvideosLink, cssOverrides);
export const ReadMoreLink = () => ReadmoreLink + copyCodeBlock(ReadmoreLink, cssOverrides);

export default { title: 'Atoms/Link' };
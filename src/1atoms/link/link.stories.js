import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { AllnewsLink, ReadmoreLink } from './link';

export const AllNewsLink = () => AllnewsLink + copyCodeBlock(AllnewsLink, cssOverrides);
export const ReadMoreLink = () => ReadmoreLink + copyCodeBlock(ReadmoreLink, cssOverrides);

export default { title: 'Atoms/Link' };
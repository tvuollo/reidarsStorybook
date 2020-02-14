import { BigMetaTextHtml } from './../../1Atoms/MetaText/MetaText';
import { ArticleTitleHtml } from './../../1Atoms/ArticleTitle/ArticleTitle';

const ArticleHeaderHtml = `<div class="articleheader">
    <div class="articleheader__meta">
        ${BigMetaTextHtml}
    </div>
    ${ArticleTitleHtml}
</div>`;

export { ArticleHeaderHtml };
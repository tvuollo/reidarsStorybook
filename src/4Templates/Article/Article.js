import { ArticleHeaderHtml } from './../../2Molecules/ArticleHeader/ArticleHeader';
import { GameItemReportHtml } from './../../2Molecules/GameItem/GameItem';
import { ArticleBodyHtml } from './../../1Atoms/ArticleBody/ArticleBody';
import { ArticleCaptionedImageHtml } from './../../2Molecules/ArticleCaptionedImage/ArticleCaptionedImage';
import { EndLineHtml } from './../../1Atoms/EndLine/EndLine';

const BaseArticleHtml = `<article class="article">
    <div class="article__header">
        ${ArticleHeaderHtml}
    </div>
    <div class="article__content">
        ${ArticleBodyHtml}
    </div>
    <div class="article__image">
        ${ArticleCaptionedImageHtml}
    </div>
    <div class="article__content">
        ${ArticleBodyHtml}
    </div>
    ${EndLineHtml}
</article>`;

const GameArticleHtml = `<article class="article">
    <div class="article__header">
        ${ArticleHeaderHtml}
    </div>
    <div class="article__score">
        ${GameItemReportHtml}
    </div>
    <div class="article__content">
        ${ArticleBodyHtml}
    </div>
    <div class="article__image">
        ${ArticleCaptionedImageHtml}
    </div>
    ${EndLineHtml}
</article>`;

export { BaseArticleHtml, GameArticleHtml };
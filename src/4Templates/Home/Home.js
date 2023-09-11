import { GamesListHtml } from './../../3Organisms/GamesList/GamesList';
import { BannerLinksHtml } from './../../3Organisms/BannerLinks/BannerLinks';
import { NewsListHtml } from './../../3Organisms/NewsList/NewsList';
import { VideosListHtml } from './../../3Organisms/VideosList/VideosList';

const HomeHtml = `<div class="container">
    <div class="homesection">
        ${GamesListHtml}
    </div>
    <div class="homesection">
        ${BannerLinksHtml}
    </div>
    <div class="homesection">
        ${NewsListHtml}
    </div>
    <div class="homesection">
        ${VideosListHtml}
    </div>
</div>`;

export { HomeHtml };
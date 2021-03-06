import img from './../../assets/img/demo-article-1.png';
import { VideoMetaTextHtml } from './../../1Atoms/MetaText/MetaText';

const VideoItemHtml = `<a href="#" class="videoitem">
    <span class="videoitem__thumb" style="background-image:url(${img});">
        <img class="videoitem__img" src="${img}" alt="OFFSIDE REIDARS: We will remain!" />
        <span class="videoitem__runtime">1:12</span>
    </span>
    <span class="videoitem__title">
        OFFSIDE REIDARS: We will remain!
    </span>
    ${VideoMetaTextHtml}
    <span class="videoitem__text">
        Beerleague hockeycore from Lapland! Digital single available on most music streaming services.
    </span>
</a>`;

export { VideoItemHtml };
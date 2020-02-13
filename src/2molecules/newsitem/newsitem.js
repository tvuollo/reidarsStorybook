import img from './../../assets/img/demo-article-2.png';

const NewsItemHtml = `<a href="#" class="newsitem">
    <img class="newsitem__image" src="${img}" alt="Reidarsin preseason alkoi tappiolla kauden avauspelissa" />
    <span class="newsitem__bg" style="background-image:url(${img})"></span>
    <span class="newsitem__content">
        <span class="newsitem__title">Reidarsin preseason alkoi tappiolla kauden avauspelissa</span>
        <span class="newsitem__meta">23.9.2019  |  Otteluraportti</span>
    </span>
</a>`;

export default NewsItemHtml;
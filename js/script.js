import videoContent from '../data/videoContent.js'
import aboutUsContent from '../data/aboutUsContent.js'

const videoContentWrapper = document.getElementById('videoContentWrapper')
const aboutUsContentWrapper = document.getElementById('aboutUsContentWrapper')


const videoContentHtml = videoContent.map(video =>
    `<div class="col-lg-6 col-md-12 col-xs-12">
    <div class="card mb-3">
        <div class=" embed-responsive embed-responsive-16by9 card-img-top">
            <iframe class="embed-responsive-item" allowfullscreen loading="lazy"
                src="${video.src}" title="${video.title}"></iframe>
        </div>
        <div class="card-body">
            <h4 class="card-title">
            ${video.title}
            </h4>
            <p class="card-text">
            ${video.text}
            </p>
        </div>
    </div>
</div>`
).join('')

const aboutUsContentHTML = aboutUsContent.map(card =>
    `
    <div class="col-xs-12 col-sm-4 col-lg-3" data-toggle="modal" data-target="#aboutUsmodal"
        style="cursor: pointer;">
        <img src="${card.src}" alt="${card.title}" class="w-100">
        <h4>${card.title}</h4>
        <p>${card.text}</p>
    </div>`
).join('')


videoContentWrapper.innerHTML = videoContentHtml
aboutUsContentWrapper.innerHTML = aboutUsContentHTML 
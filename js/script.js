import videoContent from '../data/videoContent.js'

const videoContentWrapper = document.getElementById('videoContentWrapper')

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

videoContentWrapper.innerHTML = videoContentHtml
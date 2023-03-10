
$(document).ready(function () {
    $.getJSON('/assignment18/video.json', function (videos) {
        $mainsection = $(".mainsection");
        $videocontainer = $(".videocontainer");
        $commentcontainer = $(".comments");
        $videosection = $(`<video class=videoSection src=${videos.videoUrl} controls=true style=width:970px;height:429px>`);
        $title = $(`<h2 class=title>${videos.title}</h2>`);
        $description = $(`<div class=description>${videos.description}</div>`)
        $videocontainer.append($videosection);
        $videocontainer.append($title);
        $videocontainer.append($description);
        $comment = $(`<h2 class=comment>Comment</h2>`);
        $commentcontainer.append($comment);
        $commentdetails = $(`<div></div>`);
        $commentcontainer.append($commentdetails);
        $.each(videos.comments, function () {
            $img = $(`<img src=${this.image} class=image>`);
            $col = $(`<div class=col1></div>`)
            $ele1 = $(`<div class=ele1></div>`)
            $ele1.append($img)
            $ele2 = $(`<div class=ele2></div>`)
            $ele3 = $(`<div class=ele3>${this.name}</div>`)
            $ele4 = $(`<div class=ele4>${this.comment}</div>`)
            $col.append($ele1, $ele2)
            $ele2.append($ele3, $ele4)
            $commentdetails.append($col)






        })


    })
    $.getJSON('/assignment18/posters.json', function (Posters) {
        $projects = $(".projects")
        $.each(Posters, function () {
            $picture = $(`<div class="picture"></div>`)
            $posterimage = $(`<img src=${this.imageUrl} class=posterimage style=width:100%>`)
            $picture.append($posterimage)
            $projects.append($picture)
    
        })
    })

})

















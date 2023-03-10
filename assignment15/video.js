videos={
    "videoUrl" : "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
    "title" : "Sintel",
    "description" : "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
    "comments" : [
        {
            "name" : "Micheal Scott",
            "image": "assests/images/reviewers/pam.png",
            "comment" : "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
        },
        {
            "name" : "Dwight K Schrute (Asst. to the Regional Manager)",
            "image": "assests/images/reviewers/pam.png",
            "comment" : "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
        },
        {
            "name" : "Jim Halpert",
            "image" : "assests/images/reviewers/pam.png",
            "comment" : "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
        },
        {
            "name" : "Pam Beesly Halpert",
            "image" : "assests/images/reviewers/pam.png",
            "comment" : "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
        },
        {
            "name" : "Angela Martin",
            "image" : "assests/images/reviewers/pam.png",
            "comment" : "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
        },
        {
            "name" : "Kevin Malone",
            "image" : "assests/images/reviewers/pam.png",
            "comment" : "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
        },
        {
            "name" : "Andy Bernard",
            "image": "assests/images/reviewers/pam.png",
            "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
        }
    ]
    
}
Posters=[
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]
mainsection=document.querySelector(".mainsection");
videocontainer=document.querySelector(".videocontainer");
commentscontainer=document.querySelector(".comments");
videosection=document.createElement("video");
videosection.setAttribute("class","videoSection");
videosection.src=videos.videoUrl;
videosection.setAttribute("controls","true");
videosection.setAttribute("style","width:970px;height:429px");
title=document.createElement("h2");
title.setAttribute("class","title");
title.innerHTML=videos.title;
description=document.createElement("div");
description.setAttribute("class","description");
description.innerHTML=videos.description
videocontainer.append(videosection)
videocontainer.append(title);
videocontainer.append(description)
comment=document.createElement("h2");
comment.setAttribute("class","comment");
comment.innerHTML="Comment";
commentscontainer.append(comment)

commentdetails=document.createElement("div");
commentscontainer.append(commentdetails)
for (i = 0; i < videos.comments.length; i++) {

    img = document.createElement("img")
    img.setAttribute("src", videos.comments[i].image)
    img.setAttribute("class","image")
    col = document.createElement("div")
    col.setAttribute("class", "col1")
    ele1 = document.createElement("div")
    ele1.setAttribute("class", "ele1")
    ele1.append(img)
    ele2 = document.createElement("div")
    ele2.setAttribute("class", "ele2")
    ele3 = document.createElement("div")
    ele3.setAttribute("class", "ele3")
    ele3.innerHTML = videos.comments[i].name;
    ele4 = document.createElement("div")
    ele4.setAttribute("class", "ele4")
    ele4.innerHTML = videos.comments[i].comment
    col.append(ele1, ele2)
    ele2.append(ele3, ele4)
    commentdetails.append(col)
}
projects=document.querySelector(".projects")

for(i=0;i<Posters.length;i++){
    picture=document.createElement("div")
    posterimage=document.createElement("img")
    posterimage.setAttribute("src",Posters[i].imageUrl)

    posterimage.setAttribute("style","width:100%")
    posterimage.setAttribute("class","posterimage")
    picture.setAttribute("class","picture");
    picture.append(posterimage)
    projects.append(picture)
    
    
}


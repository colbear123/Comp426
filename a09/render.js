/**
 * Course: COMP 426 KMP
 * Assignment: a09
 * Author: <ckilmart>
 * Collaborator: Connor Monson
 */

const $root = $('#root');
export async function composeClicked() {
    var textarea = $('#area');
    textarea.show();
}
export const returnTweet = function (response) {
    var date = makeDate(response.createdAt);
    var likeMessage = ''
    var notLikeMessage = ''
    var newID = response.id;
    var RTID = response.id;
    var editID = response.id;
    var deleteid = response.id;
    var replyid = response.id;
    $("myDIV").hide();

    if(response.isLiked) {
        likeMessage = `<strong> You liked this </strong`;
    }
    else {
        $("myDIV").show();
    }
    var $tweet = `<div class = "box" name = ${response.id} style = "background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)">
    <article class = "media">
        <div class = "media-left">
        </div>
        <div class = "media-content">
            <div class ="content">
                <p>
                    <strong> ${response.author} </strong> <small> @${response.author}</small> <small> ${date} </small>
                    <br>${response.body}
                </p>
                    </div>
                    <nav class = "level is-mobile">
                        <div class="level-left">
                        <br>
                        <a class = "level-item">
                            <button id = "like" name = ${newID} type = "button" style ="border-radius: 20px; 
                            background-color: #00acee; padding: 6px; width: 100px;"> ❤️ Like:${response.likeCount} </button>
                        </a>
                        <a class = "level-item">
                            <button id = "retweet" name = ${RTID} type = "button" style ="border-radius: 20px; 
                            background-color: #00acee; padding: 6px; width: 100px;"><i class = "fas fa-retweet"></i>Retweet: ${response.retweetCount}</button>
                        </a>
                        <a class = "level-item">
                            <button id = "reply" name = ${replyid} type = "button" style ="border-radius: 20px; 
                            background-color: #00acee; padding: 6px; width: 100px;"> <i class = "fas fa-reply"></i> Reply:${response.replyCount}</button>
                        </a>
                        <div> ${likeMessage} </div>
                    </div>
                </nav>
            </div>
        </article>
    </div>`;

var $myTweet = `<div class = "box" name = ${response.id} style = "background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)">
<article class = "media">
<div class = "media-left">
</div>
<div class = "media-content">
    <div class ="content">
        <p>
            <strong> ${response.author} </strong> <small> @${response.author}</small> <small> ${date} </small>
            <br>${response.body}
        </p>
            </div>
            <nav class = "level is-mobile">
                <div class="level-left">
                <br>
                <a class = "level-item">
                            <button id = "likeitorious" name = ${newID} type = "button" style ="border-radius: 20px; 
                            background-color: #00acee; padding: 6px; width: 100px;"> ❤️ Like:${response.likeCount} </button>
                        </a>
                        <a class = "level-item">
                            <button id = "retweet" name = "${RTID}" type = "button" style ="border-radius: 20px; 
                            background-color: #00acee; padding: 6px; width: 100px;"><i class = "fas fa-retweet"></i>Retweet: ${response.retweetCount}</button>
                        </a>
                        <a class = "level-item">
                            <button id = "reply" name = "${replyid}" type = "button" style ="border-radius: 20px; 
                            background-color: #00acee; padding: 6px; width: 100px;"> <i class = "fas fa-reply"></i> Reply:${response.replyCount}</button>
                        </a>
                <a class = "level-item">
                    <button id = "edit" name = ${editID} type = "button" style ="border-radius: 20px; 
                    background-color: #00acee; padding: 6px; width: 100px;"><i class = "fas fa-pencil-alt"></i> Edit </button>
                </a>
                <a class = "level-item">
                    <button id = "delete" name = ${deleteid} type = "button" style ="border-radius: 20px; 
                    background-color: #00acee; padding: 6px; width: 100px;"><i class = "fas fa-eraser"></i> Delete</button>
                </a>
                <div> ${likeMessage} </div>
            </div>
        </nav>
    </div>
</article>
</div>`;
$('.composeButton').on('click', renderComposeForm);
if (response.isMine) {
    $root.append($myTweet);
} else {
    $root.append($tweet);
    }
}
export const renderComposeForm = function() {
   
    const $root = $('#root');
    var textarea = $('#area');
    var hideCompose = $('.composeButton');
    var showSubmit = $('.submitButton');
    textarea.show();
    hideCompose.hide()
    showSubmit.show()
    $('.submitButton').on('click', submitButtonClicked);
  }
  export const submitButtonClicked = function() {
    composeTweet(document.getElementById("area").value.toString())
    $('#area').hide();
    $('.composeButton').show()
    $('.submitButton').hide()
    reload()
}
export const loadTweets = async function () {
      let result = await axios({
          method: 'get',
          url: 'https://comp426fa19.cs.unc.edu/a09/tweets/',
          withCredentials: true,
          params: {
              where: { type: ['tweet', 'retweet', 'reply']}
          }
      });
      for(let i = 0; i < 50; i++) {
          returnTweet(result.data[i])
      }
  }


export async function getTweets() {
    const result = await axios({
        method: 'get',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
      });
        return result
    } 
        
    // parent is optional
    export const composeTweet = async function() {
        let body = document.getElementById("area").value.toString()
       await axios({
           method: 'post',
           url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
           withCredentials: true,
           data: {
                body: body
           }
       });
       loadTweets()
       document.getElementById("refreshbutton").click()
     
    }
    
    export const handlePost = async function (id) { 
                 let tweetContent =  document.getElementById("composetweet").value.toString();
                 await axios({
                    method: 'post',
                    url: 'https://comp426fa19.cs.unc.edu/a09/tweets/' + id,
                    withCredentials: true,
                    data: {
                        "body": tweetContent,
                    },
                    });
                    loadTweets
                    document.getElementById("refreshbutton").click();
                };

    export async function readTweet(id) {
        const result = await axios({
            method: 'get',
            url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + id,
            withCredentials: true,
          });
          return result
    }
    //handle edit
    export async function submitEdit(id) {
        console.log(id);
        let firstTweet = await axios({
            method: 'get',
            url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + id,
            withCredentials: true,
        });
        let firstTweetBody = firstTweet.data.body
        var editedText;
        var editTweet = prompt("Edit your tweet", firstTweetBody)
        if(editTweet == null || editTweet == "") {
            return
        }
        else {
            editedText = editTweet
        }
        console.log(editedText);
        // document.getElementById("popup").innerHTML = txt3
        await axios({
            method: 'put',
            url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + id,
            withCredentials: true,
            data: {
                body:editedText
            },
        });
        loadTweets
        document.getElementById("refreshbutton").click();

    }


    export const handleDelete = async function (id) {
            await axios({
                method: 'delete',
                url: 'https://comp426fa19.cs.unc.edu/a09/tweets/' + id,
                withCredentials: true,
              });  
        loadTweets
        document.getElementById("refreshbutton").click();
    };
    
    
    export async function likeTweet(id) {
      
            let targetTweet = await axios({
                method: 'get',
                url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + id,
                withCredentials: true,
            });
            if (targetTweet.data.isLiked) {
               await axios({
                    method: 'put',
                    url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + id + "/unlike",
                    withCredentials: true,
                  });   
            } else {
                await axios({
                    method: 'put',
                    url: "https://comp426fa19.cs.unc.edu/a09/tweets/" + id + "/like",
                    withCredentials: true,
                  });     
               
            }
            loadTweets
            document.getElementById("refreshbutton").click()
        }; 
    export const getReply = async function (id) {
        let parent = await axios({
            method: 'get',
            url: 'https://comp426fa19.cs.unc.edu/a09/tweets/' + id,
            withCredentials: true,
        });
        let parentBody = parent.data.body;
        let parentAuthor = parent.data.author
        var body;
        var replyBody = prompt("Send a reply!")
        if(replyBody == null || replyBody == "") {
            return
        }
        else {
            body = replyBody
        }
        await axios({
            method: 'post',
            url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
            withCredentials: true,
            data: {
                "type": "reply",
                "parent": id,
                "body":  "Replied to " + "@" + parentAuthor + "'" + parentBody + "'" +  " : "  + body,
            },
        });
        loadTweets
        document.getElementById("refreshbutton").click()
        };

export const handleRetweet = async function (id) {
    let parent = await axios({
        method: 'get',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets/' + id,
        withCredentials: true,
    });
    
    let parentBody = parent.data.body;
    let parentAuthor = parent.data.author

    var body;
    var quote = prompt("Send a message and or press OK to retweet", " ");
    if(quote == null) {
        return
    } else
    if (quote == "") {
        quote = " ";
    } else
        body = quote
    
    await axios({
        method: 'post',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
        data: {
            "type": "retweet",
            "parent": id,
            "body": body + " RT " + "@" + parentAuthor + " : " + "'" + parentBody + "'",
        }
    });
    loadTweets;
    document.getElementById("refreshbutton").click();
};


export const makeDate = function(timeStamp)  {
    var d = new Date(timeStamp);
    return d.toLocaleString()
}

    
        $(document).on("click", "#reply", function () {
            let id = event.target.getAttribute('name');
            getReply(id);
        });
        
        $(document).on("click", "#retweet", function () {
            let id = event.target.getAttribute('name');
            handleRetweet(id);
        });
        
        $(document).on("click", "#like", function (event) {
            let id = event.target.getAttribute('name');
            likeTweet(id);
        });
        
        $(document).on("click", "#edit", function (event) {
            let id = event.target.getAttribute('name');
            submitEdit(id);
        });
        
        $(document).on("click", "#delete", function (event) {
            let id = event.target.getAttribute('name');
            handleDelete(id);
        });
        
        loadTweets();

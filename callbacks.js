const posts =[
    {title: 'Post One', body: 'This is post One', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime()}
];

let intervalId;

function getPost(){
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';

        for(let i=0;i<posts.length;i++){
            output += `<li> ${posts[i].title} - last updated ${parseInt((new Date().getTime() - posts[i].createdAt)/1000)} seconds ago</li>`

            console.log('timer running id = ', intervalId)
            document.body.innerHTML = output;

        }
    },1000)
};

function createPost(post,callback){
    setTimeout(() => {
     posts.push({...post,createdAt:new Date().getTime()})
        callback()

    },2000)
};

function create4thPost(post,callback){
    setTimeout(()=> {
        posts.push({...post,createdAt: new Date().getTime()})
        callback()
    },1000)
}

getPost();

createPost({title: 'Post Three', body: 'This is post Three'},getPost);
createPost({title: 'Post Four', body: 'This is post Four'},getPost);


var timer;
var count=0;

function lastEditedInSecondsAgo(){
    count = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        count++;
        console.log(count);
    },4000)
}
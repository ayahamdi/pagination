document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
          "#loader").style.display = "none"; 
        document.querySelector( 
          "body").style.visibility = "visible"; 
    } 
};
/////////////////////////////////////////////pagination///////////////////////////////////////////////////////
const buttons = document.querySelectorAll("ul li a");
var numberOfPage = 0;
var currentPage;
var nextpage;
var end;
var begin;

function startData(){
    document.getElementById("Previous").classList.add("isDisabled");
    document.getElementById("next").classList.add("isDisabled");
    var output = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function(){
        if(xhr.status === 200){
            const posts = JSON.parse(this.responseText);
            let numberOfElement=0;
            for(var i = 0; i < posts.length ; i++){
                output+=
                `<div class="card col-4 wow fadeInRight " style="width: 18rem;">
                    <div class="card-body">
                        <h1 id ="${posts[i].id}" >Post ${posts[i].id}</h1>
                        <h5 class="card-title">${posts[i].title}</h5>
                        <span> ${posts[i].body}</span>
                    </div>  
                </div>`;
                numberOfElement++;
                if(numberOfElement==(posts.length/(buttons.length-2))){
                    //i++;
                    console.log(i);
                    break;
                }
            }
            document.querySelector('.row').innerHTML=output;
            console.log(posts.length/(buttons.length-2));
        }
    }
    xhr.send();

}

function paggination(){
    for (let x = 0; x < buttons.length; x++) {
        const btn = buttons[x];
        btn.addEventListener("click" , function(){
            this.classList.add("active");
            currentPage = this.id; 
            if(this.id=="next"){
               console.log(end+2);
               var output = '';
                const xhr = new XMLHttpRequest();
                xhr.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
                xhr.onload = function(){
                    if(xhr.status === 200){
                        const posts = JSON.parse(this.responseText);
                        var postsPerPages = (posts.length/(buttons.length-2));
                        console.log(postsPerPages)
                        numberOfPage = (buttons.length-2);
                        console.log(numberOfPage);
                        begin = end + 1;
                        console.log(begin);
                        for(var i = begin ; i < posts.length ; i++){
                            output+=
                            `<div class="card col-4 wow  fadeInRight" style="width: 18rem;">
                                <div class="card-body">
                                    <h1 id ="${posts[i].id}">Post ${posts[i].id}</h1>
                                    <h5 class="card-title">${posts[i].title}</h5>
                                    <span> ${posts[i].body}</span>
                                </div>
                            </div>`;
                            end = ((begin + postsPerPages)-1);
                            console.log(end);
                            if(i==end){
                                break;
                            }
                            if(i==98){
                                document.getElementById("next").classList.add("isDisabled");
                                document.getElementById("Previous").classList.remove("isDisabled");
                            }

                        }
                        document.querySelector('.row').innerHTML=output;
                        
                        //console.log(posts.length/(buttons.length-2));
                    }
                    
                }
                xhr.send();
            }
            else if(currentPage=="Previous") {
                var output = '';
                const xhr = new XMLHttpRequest();
                xhr.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
                xhr.onload = function(){
                    if(xhr.status === 200){
                        const posts = JSON.parse(this.responseText);
                        var postsPerPages = (posts.length/(buttons.length-2));
                        console.log(postsPerPages)
                        numberOfPage = (buttons.length-2);
                        console.log(numberOfPage);
                        begin = begin - postsPerPages;
                        console.log(begin);
                        for(var i = begin ; i < posts.length ; i++){
                            output+=
                            `<div class="card col-4 wow fadeInRight "  style="width: 18rem;">
                                <div class="card-body">
                                    <h1 id ="${posts[i].id}">Post ${posts[i].id}</h1>
                                    <h5 class="card-title">${posts[i].title}</h5>
                                    <span> ${posts[i].body}</span>
                                </div>
                            </div>`;
                            end = ((begin + postsPerPages)-1);
                            console.log(end);
                            if(i==end){
                                break;
                            }
                            if(i==0){
                                document.getElementById("Previous").classList.add("isDisabled");
                                document.getElementById("next").classList.remove("isDisabled");
                            }
                        }
                        document.querySelector('.row').innerHTML=output;
                        
                        //console.log(posts.length/(buttons.length-2));
                    }
                    
                }
                xhr.send();
            }
            else{
            var output = '';
            const xhr = new XMLHttpRequest();
            xhr.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
            xhr.onload = function(){
                if(xhr.status === 200){
                    const posts = JSON.parse(this.responseText);
                    var postsPerPages = (posts.length/(buttons.length-2));
                    console.log(postsPerPages)
                    numberOfPage = (buttons.length-2);
                    console.log(numberOfPage);
                    begin = ((currentPage - 1) * postsPerPages);
                    console.log(begin);
                    for(var i = begin ; i < posts.length ; i++){
                        output+=
                        `<div class="card col-4 wow fadeInRight"  style="width: 18rem;">
                            <div class="card-body">
                                <h1 id ="${posts[i].id}">Post ${posts[i].id}</h1>
                                <h5 class="card-title">${posts[i].title}</h5>
                                <span> ${posts[i].body}</span>
                            </div>
                        </div>`;
                        end = ((begin + postsPerPages)-1);
                        console.log(end);
                        if(i==end){
                            break;
                        }
                        if(i==0){
                            document.getElementById("Previous").classList.add("isDisabled");
                            document.getElementById("next").classList.remove("isDisabled");

                        }
                        else if(i==98){
                            document.getElementById("next").classList.add("isDisabled");
                            document.getElementById("Previous").classList.remove("isDisabled");
                        }
                        else{
                            document.getElementById("next").classList.remove("isDisabled");
                            document.getElementById("Previous").classList.remove("isDisabled");
                        }
                    }
                    document.querySelector('.row').innerHTML=output;
                    
                     //console.log(posts.length/(buttons.length-2));
                }
                
            }
            xhr.send();
            
            }
        });
    }
}
startData();
paggination();

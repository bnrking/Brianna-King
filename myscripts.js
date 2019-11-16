document.title = 'Photographer Finder'

/* adding content to the page */
var body = document.createElement('div'); 

/* TODO:
        -Have a home page, Allow user to select an option (upload photo,browse, etc.)
        -Create a function that uploads that displays the photo.  */
/* function photoUpload(){ */
    var photoform = document.createElement('form');
    photoform.setAttribute('method', "post");
    photoform.setAttribute('action', "submit.php");
    
    var searchFile = document.createElement('input');
    searchFile.setAttribute('type','hidden');
    searchFile.setAttribute('name','MAX_FILE_SIZE');
    searchFile.setAttribute('value','100000');
    
    var uploadingFile = document.createElement('input');
    uploadingFile.setAttribute('type','file');
    
    body.appendChild(photoform);
    body.appendChild(searchFile);
    body.appendChild(uploadingFile);

/* }     */
/* Creating a caption for the photo */
/* function caption(){ */
    var photoDescription = document.createElement('input');
    photoDescription.setAttribute('input', 'text');
    photoDescription.setAttribute('class', 'inputBox');
    
    var myPrint = document.createElement("p");
    myPrint.setAttribute("class","discription");
    myPrint.textContent = ("" + photoDescription);

    body.appendChild(photoDescription);
    
/*     TODO: when button is clicked, the text box disappears and only the myprint shows */  
/* } */
/* combining the caption with the picture, and posting the combination of the two when button is pressed.     */
/* function combinationOfFunctions(){ */
    var postDiv = document.createElement('div');
    postDiv.setAttribute('class','description')
    /* photoUpload(uploadingFile); */
    /* caption(myPrint); */
    
    var post = document.createElement('button');
    post.setAttribute ('type', 'submit');
    post.setAttribute ('value','Post');
    post.type = 'button';
    post.innerHTML = 'Post';
    
    
    /* postDiv.appendChild(photoUpload); */
    /* postDiv.appendChild(myprint); */
    body.appendChild(post);
    post.onclick = function(){document.body.appendChild(postDiv)};


/* combinationOfFunctions(); */ 
document.body.appendChild(body);   
    


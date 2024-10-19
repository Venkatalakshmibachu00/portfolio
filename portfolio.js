
let tagsubHeading = document.getElementsByClassName('tag-subHeading');
let tagcontent = document.getElementsByClassName('tag-content');

function opentag(event, tagname) {
    for (let tagsub of tagsubHeading) {
        tagsub.classList.remove('active-subHeading');
    }
    
    for (let content of tagcontent) {
        content.classList.remove('active-content');
        content.style.display = 'none';
    }

    event.currentTarget.classList.add('active-subHeading');
    
    let activeContent = document.getElementById(tagname);
    activeContent.classList.add('active-content');
    activeContent.style.display = 'block';
}




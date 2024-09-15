document.querySelectorAll('#commentForm').forEach(function(form) {
    form.addEventListener('submit', function(event){
        event.preventDefault()
        let name  = form.querySelector("#commenterName").value
        let text = form.querySelector('#commentText').value

        if(name && text){
            let commentSection = form.parentElement;
            let  newComment = document.createElement('div')
            newComment.classList.add('comment')
            newComment.innerHTML = '<p><strong>' + name + ':</strong>' + text + '</p>';

            commentSection.insertBefore(newComment, form);

            form.querySelector('#commenterName').value = "";
            form.querySelector('#commentText').value = "";
        }
    }) 
})
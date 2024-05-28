 const showVideoButton = document.getElementById('show-video');
 const videoContainer = document.getElementById('video-container');

 showVideoButton.addEventListener('click', function(event) {
   event.preventDefault();

   if (videoContainer.style.display === 'none') {
     videoContainer.style.display = 'block';
   } else {
     videoContainer.style.display = 'none';
   }
 });

 document.addEventListener('click', function(event) {
   if (!videoContainer.contains(event.target) && event.target !== showVideoButton) {
     videoContainer.style.display = 'none';
   }
 });
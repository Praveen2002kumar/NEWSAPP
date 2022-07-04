getnews();
    
function getnews() {
  
  document.getElementById("posts").innerHTML="";

  var keyword = document.getElementById("keyword").value;
  if (keyword == "") {
    keyword = "latest";
  }
  var url =
    "https://newsapi.org/v2/everything?q=" +
    keyword +
    "&apiKey=6f7f85cc18eb47288e88c7b125e29b94";
    document.getElementById("load_ui").style.display="block";
 fetch(url).then ((data)=>{
    return data.json();
   }).then((response) => {
  //    console.log(response)
   document.getElementById("load_ui").style.display="none";
    for (i = 0; i < response.articles.length; i++) {
      var html = `
<div class="card m-3 shadow">
   <div class="row g-0">
     <div class="col-md-4">
       <img src="${response.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title">${response.articles[i].title}</h5>
         <p class="card-text">${response.articles[i].content}</p>
         <p class="card-text"><small class="text-muted">${response.articles[i].publishedAt} | ${response.articles[i].source.name} | ${response.articles[i].author}</small></p>
     <a href="${response.articles[i].url}" target="_blank" class="btn btn-secondary">Read More</a>
     <p></p>
       </div>
     </div>
   </div>
 </div>`;
     
      document.getElementById("posts").innerHTML+=html;
    }
  });
}


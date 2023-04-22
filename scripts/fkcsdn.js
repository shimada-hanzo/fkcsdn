obj = document.getElementById("article_content");
obj.style.cssText = "";

fkdiv = document.getElementsByClassName("hide-article-box hide-article-pos text-center")[0];
parent = fkdiv.parentElement
parent.removeChild(fkdiv);
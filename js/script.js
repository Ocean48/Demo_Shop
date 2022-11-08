fetch("../data/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // For each key in object data
        Object.keys(data).forEach(key => {
            // data[key].length -> length of value of a key (which is array)
            var gallery = document.getElementById("gallery");  // Get gallery div
            var title = document.createElement("h2");
            var hr = document.createElement("hr");
            var br = document.createElement("br");
            title.innerHTML = (key);
            gallery.appendChild(title);
            
                

            for (var i = 0; i < data[key].length; i++) {
                var block = document.createElement("div");  // Greate div for each item 
                var p = document.createElement('p');  // Create p for info in each item
                var p2 = document.createElement('p');  // Create p for info in each item
                p.innerHTML = (data[key][i].name);
                p.setAttribute("id", "data_name");
                p2.innerHTML = (" P:" + data[key][i].price);
                p2.setAttribute("id", "data_price");


                var img = document.createElement("img");  // Create img tag
                img.src = ("../images/" + data[key][i].image);
                img.alt = ("Image of " + data[key][i].name);

                gallery.appendChild(block);
                block.appendChild(img);
                block.appendChild(p);
                block.appendChild(p2);

                console.log(data[key][i].name + "  " + data[key][i].image + "  " + data[key][i].price);
            };

            gallery.appendChild(br);
            gallery.appendChild(hr);
        });
    });
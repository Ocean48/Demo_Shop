fetch("../data/special.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // For each key in object data
        Object.keys(data).forEach(key => {

            // data[key].length -> length of value of a key (which is array)
            var gallery = document.getElementById("special_box");  // Get special div

            if (!key) {
                document.getElementById("special_box").style.display = "none";
            }
            
            var info = document.createElement("h2");
            info.innerHTML = (key);
            
            console.log(key, "    ", data[key]);
            var img = document.createElement("img");  // Create img tag
            img.setAttribute("id", "special_img");
            img.src = ("../images/" + data[key]);
            // img.alt = ("Image of " + data[key]);

            gallery.appendChild(info);
            gallery.appendChild(img);

        });
    });
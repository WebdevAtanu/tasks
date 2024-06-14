function searchFun() {
    let inp = document.getElementById("search").value.toUpperCase();
    let mytable = document.getElementById("table1");
    let tr = mytable.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let tdvalue = td.innerHTML || td.textContent;
            if (tdvalue.toUpperCase().indexOf(inp) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
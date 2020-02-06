function SearchMailFunction() {
      var input, filter, table, tr, td, i;
      input = document.getElementById("SearchBox");
      filter = input.value.toUpperCase();
      table = document.getElementById("MailList");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

function getParams(){
      var idx = document.URL.indexOf('?');
      var params = new Array();
      if (idx != -1) {
      var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
      for (var i=0; i<pairs.length; i++){
      nameVal = pairs[i].split('=');
      params[nameVal[0]] = nameVal[1];
      }
      }
      return params;
      }
      params = getParams();
      firstname = unescape(params["firstname"]);
      lastname = unescape(params["lastname"]);
      email = unescape(params["email"]);
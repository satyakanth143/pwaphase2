function addData() {
  var name1=document.querySelector("#name").value;
  var email1=document.querySelector("#email").value;
  var career1=document.querySelector("#career").value;
  var group1=document.querySelector("#group1").value;
  var branch1=document.querySelector("#branch1").value;
  var college1=document.querySelector("#college1").value;
  var marks1=document.querySelector("#marks1").value;
  var group2=document.querySelector("#group2").value;
  var branch2=document.querySelector("#branch2").value;
  var college2=document.querySelector("#college2").value;
  var marks2=document.querySelector("#marks2").value;
  var group3=document.querySelector("#group3").value;
  var college3=document.querySelector("#college3").value;
  var marks3=document.querySelector("#marks3").value;
  var tech=document.querySelector("#tech").value;


  //browser compatibility
  var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;

  //creating a database
  var open=idb.open("Resume builder",1);

  open.onupgradeneeded=function(e) {
    var request=e.target.result;
    request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true})
  }
  open.onsuccess=function(e){
      var request=e.target.result;
      //console.log(request);
      var transaction=request.transaction("form_data","readwrite");
      var storeDB=transaction.objectStore("form_data");
      storeDB.put({
      career:career1,
      name:name1,
      email:email1,
      education:[
        {
          degree:group1,
          branch:branch1,
          college:college1,
          marks:marks1
        },
        {
          degree:group2,
          branch:branch2,
          college:college2,
          marks:marks2
        },
        {
          degree:group3,
          branch:"",
          college:college3,
          marks:marks3
        }
      ],
      tech:[
        tech
      ]
     })
     window.open("index.html");
  }

  open.onerror=function(e) {
      console.log("indexedDB error");
  }

}

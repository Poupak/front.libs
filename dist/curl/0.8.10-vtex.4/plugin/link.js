(function(){(function(d){var b=d.document,f=/^\/\//,e;b&&(e=b.head||(b.head=b.getElementsByTagName("head")[0]));d.vtex.define({load:function(a,d,g,c){a=d.toUrl(a);a=a.lastIndexOf(".")<=a.lastIndexOf("/")?a+".css":a;c=a=(c="fixSchemalessUrls"in c?c.fixSchemalessUrls:b.location.protocol)?a.replace(f,c+"//"):a;a=b.createElement("link");a.rel="stylesheet";a.type="text/css";a.href=c;e.appendChild(a);g(a.sheet||a.styleSheet)}})})(this);
}).call(this);
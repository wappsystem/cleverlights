(function(){
    //-------------------------------------------------------------------------------------
    var url_replace=function(modules,prefix,$H,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($H,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "recruitment-data":    	        {url:"$H/elig-questions-data.html",Table:"cleverlight-recruitment-record",form_module:"recruitment-form",router:1},
        "recruitment-form":    	        {url:"$H/elig-questions-form.html",Table:"cleverlight-recruitment-record"},
        "registration-data":    	    {url:"$H/registration-data.html",Table:"cleverlight-registration-record",form_module:"registration-form",router:1},
        "registration-form":    	    {url:"$H/registration-form.html",Table:"cleverlight-registration-record"},
    }
    url_replace(modules,"","$H","https://wappsystem.github.io/cleverlights/modules","http://127.0.0.1:8000/wappsystem/cleverlights/modules");
    //-------------------------------------------------------------------------------------
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
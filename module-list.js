(function(){
    var modules={
        "not_elig":         {url:"$H/m/not_elig.html"},
        "recruitment-data": {url:"$H/m/elig-questions-data.html",Table:"cleverlights-recruitment-record",form_module:"recruitment-form",router:1},
        "recruitment-form": {url:"$H/m/elig-questions-form.v1.html",Table:"cleverlights-recruitment-record"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();

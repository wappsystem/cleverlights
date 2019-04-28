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
        "car-booking-record-data":    	{url:"$H/c/car-booking-record-data.html",Table:"car-booking-record",form_module:"car-booking-record-form",router:1},
        "car-booking-record-form":    	{url:"$H/c/car-booking-record-form.html",Table:"car-booking-record"},
        "car-data":      	  			{url:"$H/c/car-data.html",Table:"car",form_module:"car-form",router:1},
        "car-form":      	  			{url:"$H/c/car-form.html",Table:"car"},
        "car-booking":   			    {url:"$H/c/car-booking.html",Table:"car","booking_form":"car-booking-record-form",router:1},
        "car-booking-calendar": 	    {url:"$H/c/car-booking-calendar.html",Table:"car-booking-record",
                                            "booking":"car-booking","booking_form":"car-booking-record-form",router:1},
    }
    url_replace(modules,"","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
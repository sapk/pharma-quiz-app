Q.tmpl = {
    "type": {
        1 : function(id, data) {
            return '<a data-good="' + data.is_valid + '" onclick="$(this).toggleClass(\'btn-success\');" class="btn btn-lg btn-default">' + data.value[0].toFixed(data.pres) +" - "+ data.value[1].toFixed(data.pres) + " " + data.unit +'</a>'
        }
    }
};
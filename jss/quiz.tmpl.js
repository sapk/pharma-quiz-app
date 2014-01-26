Q.tmpl = {
    answer: {
        body: {
            1: function(question) {
                var html = '<br><h2 class="well title">' + question.name + '</h2><br>'
                var tmp = "", ext = '<option disabled selected style="display:none;" >Unit</option>', list = [];
                $(question.value).each(function(id, value) {
                    //ext += '<option>'+Q.tool.get_unit(value.split(" "))+'</option>';
                    list.push(Q.tool.get_unit(value.split(" ")));
                    tmp += '<div class="valid row well well-sm answer type-' + question.type + '">' + Q.tmpl.answer.type[question.type](value.split(" ")) + '</div>'
                });
                for (t = list.length; t < 5; t++) {
                   // console.log(t);
                    do {
                        var tmp2 = Q.data.units[Q.tool.random_int(0, Q.data.units.length)]
                    } while ($.inArray(tmp2, list) !== -1);
                    list.push(tmp2);
                }
                Q.tool.shuffle(list);
                $(list).each(function(id, value) {
                    ext += '<option>' + value + '</option>';
                });

                html += '<div class="row well well-sm answer type-' + question.type + '">' + Q.tmpl.answer.type[question.type]([], ext) + '</div>'
                html += tmp;
                html += '<br><br><br>';
                html += '<button id="valider" onclick="$(\'.answer\').toggleClass(\'results\');$(\'#reload\').show();$(this).remove();" class="btn btn-lg btn-block btn-primary pull-right"> Valider > </button>\
            <button id="reload" style="display: none;" onclick="window.location.reload();" class="btn btn-lg btn-block btn-primary pull-right"> Réessayer </button>'

                return html;
            }
        },
        type: {
            1: function(value, ext) {
                if (value.length === 0) {
                    return '<div class="col-xs-4"><input class="form-control input-lg" id="0"/></div>\n\
                        <div class="col-xs-1" > - </div>\n\
                        <div class="col-xs-4"><input id="1" class="form-control input-lg"/></div>\n\
                        <div class="col-xs-3"><select class="form-control input-lg" >' + ext + '</select></div>';
                } else {
                    return '<div class="col-xs-4"><input class="form-control input-lg" id="0" value="' + value[0] + '"/></div>\n\
                        <div class="col-xs-1" > - </div>\n\
                        <div class="col-xs-4"><input id="1" class="form-control input-lg"  value="' + value[2] + '"/></div>\n\
                        <div class="col-xs-3"><select style="padding:4px;" class="form-control input-lg" ><option disabled selected style="display:none;" >' + Q.tool.get_unit(value) + '</option></select></div>';
                }
            }
        }
    },
    choice: {
        body: function(question) {
            return '<br><h2 class="well title">' + question.name + '</h2><br>\
                    <div class="btn-group-vertical choices"></div><br><br><br>\
            <button onclick="$(\'.choices a\').attr(\'onclick\',\'\');$(\'.choices\').toggleClass(\'results\');$(\'#reload\').show();$(this).remove();" class="btn btn-lg btn-block btn-primary pull-right"> Réponses </button>\
            <button id="reload" style="display: none;" onclick="window.location.reload();" class="btn btn-lg btn-block btn-primary pull-right"> Réessayer </button>'
        },
        type: {
            1: function(id, data) {
                return '<a data-good="' + data.is_valid + '" onclick="$(this).toggleClass(\'btn-success\');" class="btn btn-lg btn-default">' + data.value[0].toFixed(data.pres) + " - " + data.value[1].toFixed(data.pres) + " " + data.unit + '</a>'
            }
        }
    }
};
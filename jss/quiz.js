var Q = {
    init: function() {
        /*
         var i = Math.floor((Math.random()*Q.data.values.length));
         var d = Q.data.values[i];
         console.log([i,d]);
         */
        var question = Q.tool.get_question();

        switch (Q.tool.random_int(0, 1)) {
            case 0:
                Q.type.choice[question.type](question);
                break;
            case 1:
                Q.type.answer[question.type](question);
                break;
        }
        /*
         //ajout d'une bonne réponse au questions
         q.push([1,d.value[Math.floor((Math.random()*d.value.length))]])
         var ext = q[0][1].split(" ")[3];
         if(q[0][1].split(" ").length == 5)
         ext += " "+q[0][1].split(" ")[4];
         
         var diff = parseFloat(q[0][1].split(" ")[2]) - parseFloat(q[0][1].split(" ")[0]);
         var pres = 0;
         if(q[0][1].split(" ")[2].split(".").length == 2)
         pres = q[0][1].split(" ")[2].split(".")[1].length;
         console.log(pres);
         for (t=0;t<3;t++){
         //TODO genrate some false value
         do{
         var min = (Math.floor((Math.random()*parseFloat(q[0][1].split(" ")[0])*4*1000))/1000);
         } while (min.toFixed(pres)==q[0][1].split(" ")[2]);
         console.log(min.toFixed(pres));
         var text = min.toFixed(pres)+ " - "+ (min + diff).toFixed(pres) + " " + ext;
         q.push([0,text])
         }
         
         Q.tool.shuffle(q);
         
         $(q).each(function (id,data){
         $(".choices").append('<a data-good="'+data[0]+'" onclick="$(this).toggleClass(\'btn-success\');" class="btn btn-lg btn-default">'+data[1]+'</a>')
         })
         */
    },
    type: {
        answer: {
            1: function(question) {
                $("body>.container").html(Q.tmpl.answer.body[1](question))
                //$(".choices").append(Q.tmpl.choice.type[1](id, data));
                $("#valider").on("click", function() {
                    var rep = $(".answer input").eq(0).val().replace(",", ".") + " - " + $(".answer input").eq(1).val().replace(",", ".") + " " + $(".answer select").eq(0).val();
                    console.log(rep);
                    console.log(question.value);
                    console.log($.inArray(rep, question.value));
                    if ($.inArray(rep, question.value) !== -1) {
                        $(".answer").eq(0).addClass("has-success").css("background", "rgba(160,220,160,0.8)");
                    } else {
                        $(".answer").eq(0).addClass("has-error").css("background", "rgba(237,156,40,0.8)");
                    }
                })
            }
        },
        choice: {
            1: function(question) {

                //$("h2.title").text(question.name);
                $("body>.container").html(Q.tmpl.choice.body(question))
                var list = [];
                //ajout d'une bonne réponse au questions
                list.push(Q.tool.get_valid_value(question));
                for (t = 0; t < 3; t++) {
                    do {
                        var f = Q.tool.get_false_value(list[0]);
                        //console.log(Q.tool.inArray(f,list,1));
                    } while (Q.tool.inArray(f, list, 1) != -1);
                    list.push(f);
                }

                Q.tool.shuffle(list);
                $(list).each(function(id, data) {
                    $(".choices").append(Q.tmpl.choice.type[1](id, data));
                    //$(".choices").append()
                })
            }
        }
    }
};
$(document).ready(Q.init);
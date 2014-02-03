var Q = {
    init: function() {
        if (typeof navigator !== "undefined" && typeof navigator.splashscreen !== "undefined")
            navigator.splashscreen.hide();

        var question = Q.tool.get_question();

        switch (Q.tool.random_int(0, 1)) {
            case 0:
                Q.type.choice[question.type](question);
                break;
            case 1:
                Q.type.answer[question.type](question);
                break;
        }
    },
    valider: {
        answer: function(question) {
            switch (question.type) {
                case 1 :
                    var rep = $(".answer input").eq(0).val().replace(",", ".") + " - " + $(".answer input").eq(1).val().replace(",", ".") + " " + $(".answer select").eq(0).val();
                    break;
                case 2 :
                    var rep = $(".answer select").eq(0).val() + " " + $(".answer input").eq(0).val().replace(",", ".") + " " + $(".answer select").eq(1).val();
                    break;
            }
            console.log(rep);
            console.log(question.value);
            console.log($.inArray(rep, question.value));
            if ($.inArray(rep, question.value) !== -1) {
                $(".answer").eq(0).addClass("has-success").css("background", "rgba(160,220,160,0.8)");
            } else {
                $(".answer").eq(0).addClass("has-error").css("background", "rgba(237,156,40,0.8)");
            }

            $('.answer').toggleClass('results');
            $('#reload').show();
            $('#valider').remove();
        },
        choice: function(question) {
            $('.choices a').attr('onclick', '');
            $('.choices').toggleClass('results');
            $('#reload').show();
            $('#valider').remove();
        }
    },
    type: {
        answer: {
            1: function(question) {
                $("body>.container").html(Q.tmpl.answer.body[1](question))
                //$(".choices").append(Q.tmpl.choice.type[1](id, data));
                $("#valider").on("click", function() {
                    Q.valider.answer(question);
                })
            },
            2: function(question) {
                $("body>.container").html(Q.tmpl.answer.body[2](question));
                $("#valider").on("click", function() {
                    Q.valider.answer(question);
                });
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
                $("#valider").on("click", function() {
                    Q.valider.choice(question);
                });
            },
            2: function(question) {
                $("body>.container").html(Q.tmpl.choice.body(question));
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
                console.log(list);
                Q.tool.shuffle(list);
                $(list).each(function(id, data) {
                    console.log(data);
                    $(".choices").append(Q.tmpl.choice.type[2](id, data));
                    //$(".choices").append()
                })
                $("#valider").on("click", function() {
                    Q.valider.choice(question);
                });
            }
        }
    }
};
$(document).ready(Q.init);
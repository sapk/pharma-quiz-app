Q.tool = {
    shuffle: function(array) {
        var currentIndex = array.length
                , temporaryValue
                , randomIndex
                ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },
    inArray: function(f, list, id) {
        var i = -1;
        $(list).each(function(id, data) {
            //      console.log([JSON.stringify(data.value),JSON.stringify(f.value)]);
            if (JSON.stringify(data.value) == JSON.stringify(f.value)) {
                console.log(id);
                i = id;
            }
        });
        return i;
//        return $.inArray(f,list,id);
    },
    pgcd: function(t) {
        console.log(t);
        var indice = 1
        var a = t[0], b = t[1];
        while (parseInt(a) != a || parseInt(b) != b) {
            a *= 10;
            b *= 10;
            indice *= 10;
            if (indice > 100)
                break;
        }
        a = parseInt(a);
        b = parseInt(b);
        while (a != b && a*b != 0) {
            if (a > b)
                a -= b;
            else
                b -= a;
        }
        return a / indice;
    },
    random_int: function(from, to) {
        return Math.floor((Math.random() * (to - from + 1)) + from);
    },
    get_false_value: function(valid) {
        console.log(["get_false_value()", valid]);
        var ret = {
            type: valid.type,
            unit: valid.unit,
            pres: valid.pres,
            is_valid: false,
        };

        switch (ret.type) {
            case 1 :
                do {
                    ret.value = [(valid.value[0] + Q.tool.random_int(-5, 5) * valid.pgcd)];
                    ret.value[1] = ret.value[0] + (valid.value[1] - valid.value[0] + Q.tool.random_int(-2, 2) * valid.pgcd);
                    //DEBUG ret.value = [10,20];
                } while (ret.value[0] < 0 || ret.value[1] < 0 || ret.value[1] - 0.01 <= ret.value[0] || ret.value[0] == valid.value[0] || (ret.unit == "%" && ret.value[1] > 100))
                break;
            case 2 :
                do {
                    ret.value = [Q.data.signs[Q.tool.random_int(0, Q.data.signs.length - 1)], (valid.value[1] + Q.tool.random_int(-5, 5) * valid.pgcd)];
                } while (ret.value[1] < 0 || (ret.unit == "%" && ret.value[1] > 100))
                break;
        }

        console.log(ret);
        return ret;
    },
    get_unit: function(val, type) {
        switch (type) {
            case 1 :
                var start = 3;
                break;
            case 2 :
                var start = 2;
                break;
        }
        var unit = val[start];
        for (i = start + 1; i < val.length; i++)
            unit += " " + val[4];
        return unit;
    },
    get_valid_value: function(question) {
        console.log(["get_valid_value()", question]);
        var id = Math.floor((Math.random() * question.value.length));
        var val = question.value[id].split(" ");
        var ret = {
            type: question.type,
            unit: Q.tool.get_unit(val, question.type),
            is_valid: true
        };

        switch (ret.type) {
            case 1 :
                ret.value = [parseFloat(val[0]), parseFloat(val[2])];
                ret.pgcd = Q.tool.pgcd(ret.value);
                break;
            case 2 :
                ret.value = [val[0], parseFloat(val[1])];
                ret.pgcd = Q.tool.pgcd([ret.value[1], 300]);
                break;
        }


        ret.pres = 0;
        if (("" + ret.value[1]).split(".").length === 2)
            ret.pres = ("" + ret.value[1]).split(".")[1].length;

        console.log(ret);
        return ret;
    },
    get_question: function() {
        console.log(["get_question()"]);
        //var i = Math.floor((Math.random() * Q.data.values.length));
        var i = 24;
//alert(i);
        var d = Q.data.values[i];
        d.id = i;
        console.log(d);
        return d;
    }
};

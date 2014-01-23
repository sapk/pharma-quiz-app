var Q ={
    init : function (){
        var i = Math.floor((Math.random()*Q.data.values.length));
        var d = Q.data.values[i];
        console.log([i,d]);
        $("h2.title").text(d.name);
        
        var q = [];
        //ajout d'une bonne réponse au questions
        q.push([1,d.value[Math.floor((Math.random()*d.value.length))]])
        var ext = q[0][1].split(" ")[3];
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
    }
};
$( document ).ready(Q.init);
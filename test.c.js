/**
 * Created by lin on 14/11/15.
 */

var tasks = [];

for (var i = 0; i < 10; i++)
{
    var task = (function () {
        console.log("test");
    });


    tasks.push(task);
}

for (var task in tasks){
    tasks[task]();
}

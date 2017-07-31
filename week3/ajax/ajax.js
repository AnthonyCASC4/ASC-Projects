var id ="227ef790";

var key = "c9e7fe0f1e00823b8cd5fb5979e98b73";

var foodURL = "https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat" + "&appId="+ id + "&appKey=" + key;


$.ajax({
    url: foodURL,
    success: function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This " + name + " has " + cals + " !!");                              
    }
});
$(document).ready(function() {

//add loaded class to body
$('body').addClass('loaded');

//some variables
var wrapper = $('#wrapper');
var wrapper2 = document.getElementById("wrapper");

    //what size be the litebrite?
    wrapperSize();
    wrapperOn();
    //when the window resizes, make sure the wrapper resizes    
    $(window).resize(function(){
        wrapperSize();
    });

    //make the wrapper always square
    function wrapperSize(){
        //get the window height & width
        var height = $(window).height();

        //wtf older webkit browsers don't support subpixel rendering always? annoyingsauce.
        //make the height & width always a multiple of 100px so that the 1% sized lights render right
        var heightRound = Math.floor(height/100)*100;
        console.log(heightRound);

        var width = $(window).width();
        var widthRound = Math.floor(width/100)*100;
        //if height is less, make the width&height of wrapper div the height value
        if(height<width){
        wrapper.css({
            "height": heightRound,
            "width": heightRound
            });
        }else{
        //or if the width is less, make the width&height both the width
            wrapper.css({
            "height": widthRound,
            "width": widthRound
            });
        }
    }

    //turn on dat litebrite
    function wrapperOn(){
        wrapper.delay(500).animate({
            opacity: 1
        }, function(){
            // twinkleTime(0);
            letterTime(0);
        });
    }

    function salutations(){
        $('.salutation').css({
            opacity:1
        });
    }

    //oh my goodness, happy holidays array
    var holidays = [1423, 1430, 1439, 1448, 1449, 1450, 1451, 1452, 1459, 1460, 1461, 1462, 1463, 1468, 1476, 1523, 1530, 1538, 1539, 1548, 1552, 1553, 1559, 1563, 1564, 1569, 1575, 1623, 1630, 1638, 1640, 1648, 1653, 1659, 1664, 1669, 1674, 1675, 1723, 1730, 1737, 1740, 1748, 1753, 1759, 1764, 1770, 1774, 1823, 1830, 1837, 1841, 1848, 1852, 1853, 1859, 1863, 1864, 1871, 1873, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1936, 1937, 1941, 1948, 1949, 1950, 1951, 1952, 1959, 1960, 1961, 1962, 1963, 1971, 1972, 1973, 2023, 2030, 2036, 2042, 2048, 2059, 2072, 2123, 2130, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2148, 2159, 2172, 2223, 2230, 2235, 2242, 2248, 2259, 2272, 2323, 2330, 2335, 2343, 2348, 2359, 2372, 2423, 2430, 2434, 2443, 2448, 2459, 2472, 3543, 3544, 3557, 3558, 3559, 3642, 3644, 3645, 3656, 3659, 3660, 3741, 3745, 3746, 3756, 3760, 3824, 3841, 3846, 3856, 3860, 3924, 3941, 3946, 3956, 3960, 4012, 4024, 4040, 4046, 4056, 4060, 4112, 4124, 4140, 4146, 4156, 4160, 4212, 4224, 4240, 4246, 4256, 4260, 4312, 4324, 4340, 4345, 4356, 4360, 4412, 4424, 4440, 4445, 4456, 4460, 4512, 4524, 4540, 4545, 4556, 4557, 4560, 4612, 4624, 4640, 4645, 4657, 4660, 4712, 4723, 4724, 4740, 4744, 4757, 4760, 4812, 4823, 4824, 4840, 4844, 4847, 4857, 4858, 4861, 4890, 4891, 4892, 4912, 4923, 4932, 4933, 4934, 4940, 4943, 4946, 4947, 4948, 4958, 4961, 4968, 4969, 4970, 4971, 4985, 4989, 4993, 5012, 5023, 5031, 5034, 5035, 5040, 5043, 5047, 5053, 5054, 5055, 5056, 5058, 5059, 5061, 5067, 5071, 5072, 5077, 5085, 5088, 5093, 5094, 5112, 5123, 5130, 5133, 5134, 5136, 5140, 5143, 5152, 5156, 5157, 5159, 5161, 5172, 5177, 5185, 5188, 5194, 5212, 5223, 5229, 5232, 5237, 5240, 5242, 5247, 5257, 5259, 5261, 5265, 5272, 5276, 5285, 5288, 5294, 5312, 5323, 5328, 5331, 5337, 5340, 5346, 5351, 5357, 5360, 5361, 5364, 5372, 5376, 5385, 5388, 5389, 5412, 5413, 5414, 5415, 5416, 5417, 5418, 5419, 5420, 5421, 5422, 5423, 5428, 5431, 5437, 5439, 5440, 5441, 5446, 5451, 5457, 5460, 5461, 5462, 5463, 5464, 5472, 5476, 5485, 5489, 5490, 5510, 5511, 5512, 5523, 5528, 5531, 5532, 5537, 5539, 5540, 5546, 5550, 5557, 5560, 5564, 5576, 5584, 5585, 5591, 5592, 5609, 5612, 5622, 5623, 5627, 5628, 5631, 5632, 5637, 5639, 5645, 5646, 5650, 5657, 5660, 5663, 5664, 5676, 5684, 5692, 5693, 5708, 5712, 5722, 5727, 5728, 5732, 5733, 5734, 5737, 5738, 5739, 5745, 5750, 5757, 5760, 5763, 5771, 5776, 5784, 5793, 5794, 5807, 5812, 5822, 5827, 5828, 5833, 5834, 5835, 5836, 5837, 5839, 5845, 5850, 5857, 5860, 5863, 5871, 5876, 5884, 5894, 5906, 5912, 5922, 5927, 5928, 5937, 5939, 5945, 5950, 5957, 5960, 5963, 5971, 5976, 5984, 5988, 5989, 5990, 5994, 6005, 6011, 6022, 6027, 6028, 6036, 6039, 6045, 6050, 6056, 6059, 6063, 6071, 6076, 6083, 6084, 6087, 6094, 6105, 6111, 6122, 6127, 6128, 6136, 6139, 6145, 6150, 6156, 6159, 6163, 6171, 6176, 6183, 6184, 6186, 6194, 6205, 6211, 6222, 6227, 6228, 6236, 6239, 6244, 6245, 6250, 6251, 6259, 6263, 6264, 6270, 6271, 6276, 6277, 6283, 6286, 6294, 6305, 6310, 6322, 6327, 6328, 6329, 6335, 6339, 6340, 6343, 6345, 6346, 6349, 6350, 6351, 6358, 6363, 6364, 6369, 6370, 6371, 6372, 6375, 6376, 6377, 6382, 6383, 6386, 6394, 6405, 6410, 6422, 6423, 6424, 6425, 6426, 6429, 6430, 6431, 6432, 6433, 6434, 6439, 6440, 6441, 6442, 6445, 6446, 6447, 6448, 6451, 6452, 6453, 6457, 6464, 6465, 6468, 6471, 6472, 6473, 6474, 6477, 6478, 6481, 6483, 6486, 6487, 6493, 6505, 6506, 6507, 6509, 6523, 6524, 6530, 6531, 6532, 6540, 6541, 6546, 6547, 6552, 6553, 6554, 6555, 6556, 6565, 6566, 6567, 6572, 6573, 6578, 6579, 6580, 6583, 6587, 6588, 6592, 6606, 6607, 6608, 6683, 6687, 6688, 6689, 6690, 6691, 6782, 6783, 6784, 6785, 6881, 6882, 6883, 6884, 6885, 6886, 6887, 6980, 6982, 6987, 6988, 7082, 7088, 7089, 7182, 7189, 7277, 7282, 7289, 7290, 7376, 7382, 7389, 7390, 7482, 7489, 7490, 7575, 7582, 7589, 7675, 7681, 7682, 7689, 7774, 7781, 7782, 7874, 7881, 7973, 7981, 8073, 8081, 8173, 8181, 8272, 8280, 8372, 8380, 8472, 8572, 8579, 8672, 8673, 8678, 8772, 8773, 8777, 8873, 8874, 8875, 8876];


    //how many lights total
    var end = 10000;
    //light values array
    var list = [];
    //make the lights

    for (var i = 0; i <= end; i++){
            list.push(i);
            var a = document.createElement("a");
            a.className = 'pixel animate '+i
            // var pixel = "<a class='pixel animate "+i + "'></a>";
            // wrapper.append(pixel);
            wrapper2.appendChild(a);
    }


    // turn on the lights turn on the liiiiiights
    for (var i = 0; i<= holidays.length; i++){
        var light = holidays[i];
        $('.'+light).addClass('white letters animate-fast').data("color","white");
    }


    var letters = $('.letters');
    var startNum = 50;
    // console.log(startNum);

    //ok a little bit slower now
    function lettersOn(){
        // //how many at a time?
        var lettersNum = letters.length;

        for(var i=0; i<=startNum; i++) {

        // pick a random letter
        var r = Math.floor(Math.random() * lettersNum);

        //get those letters
        var letter = $(letters[r]);

        //turn em on
        letter.css({"opacity":"1"});
        }
        startNum = startNum + 50;
        console.log(startNum);
    }


    //how many lights start out white?
    var white = 100;
    // turn on some random lights
    for (var j = 0; j<= white; j++){
        var randomKey = Math.floor(Math.random() * list.length);
        var randomValue = list[randomKey];
        //add class on, and add data attribute for the color
        $('a.'+randomValue).addClass('white on').data("color","white");
    }

    //red
    var red = 750;
    for (var k = 0; k<= red; k++){
        var randomKey = Math.floor(Math.random() * list.length);
        var randomValue = list[randomKey];
        $('a.'+randomValue).addClass('red on').data("color","red");
    }

    //green
    var green = 700;
    for (var k = 0; k<= green; k++){
        var randomKey = Math.floor(Math.random() * list.length);
        var randomValue = list[randomKey];
        $('a.'+randomValue).addClass('green on').data("color","green");
    }

    //blue THIS IS SO NOT DRY
    var blue = 600;
    for (var l = 0; l<= blue; l++){
        var randomKey = Math.floor(Math.random() * list.length);
        var randomValue = list[randomKey];
        $('a.'+randomValue).addClass('blue on').data("color","blue");
    }


    //lights gonna be so twinkly

    //all the lights that are on
    var lightsOn = $('.on');
    //make an array of the indexes of the on lights
    var someLights = [];

    //each light that is on, push its index to the someLights array
    lightsOn.each(function(){
        var index = $(this).index();
        someLights.push(index);
    });

    // zomg fisher-yates
    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        }
        return array;
    }


    function twinkle(){
        // //how many twinkle?
        var twinkleNum = 30;

        for(var i=0; i<=twinkleNum; i++) {
            var r = Math.floor(Math.random() * lightsOn.length);

            var light = $(lightsOn[r]);
            
            light.animate({"opacity":"0"}, 200, function(){
                $(this).css({"opacity":"1"});
            });
        }
    }


    //twinkle 5 times
    function twinkleTime(x){
        var twinkleNow = setInterval(function(){

            twinkle();
            x++;
            console.log(x);

            if (x >= 5) {
            window.clearInterval(twinkleNow);
            }
        }, 800);
    }


    //turn random letter lights on 5x, then just turn all of the rest on
    function letterTime(y){
        var letterNow = setInterval(function(){
            lettersOn();
            y++;
            if (y >= 5) {
                window.clearInterval(letterNow);
                letters.css({"opacity":"1"});
            }
            if (y === 5){
                twinkleTime(0);
                salutations();
            }
        }, 600);
    }

    //when you click on a light...

    $('.pixel').click(function(){
        var color = $(this).data("color");
        //cycle through the colors
        $(this).addClass("animate-fast clicked on");

        if(color == "white"){
            console.log("hola");
            $(this).removeClass('white').addClass('red').data("color","red");
        }else if(color == "red"){
            $(this).switchClass('red', 'green').data("color","green");
        }else if(color == "green"){
            $(this).switchClass('green', 'blue').data("color","blue");
        }else if(color == "blue"){
            $(this).removeClass('blue').data("color","black");
        }else{
            $(this).addClass('white').data("color","white");
        }

        // twinkleTime(5);
    });

    letters.click(function(){
        letters.css({"opacity":"0.2"});
        letterTime(0);
    })  

    $('.salutation .white-text').click(function(){
        twinkleTime(0);
    });
});


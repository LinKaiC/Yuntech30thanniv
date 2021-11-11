function Sidemenu_Open(){
    document.getElementById("Sidemenu").style.width = "25%";
}
function Sidemenu_Close(){
    document.getElementById("Sidemenu").style.width = "0px";
}
function Act1_Appear(){
    Act_Clear();
    var Act1 = document.getElementById("Act1_Content");
    var Act2 = document.getElementById("Act2_Content");
    var Act3 = document.getElementById("Act3_Content");
    var Act4 = document.getElementById("Act4_Content");
    var Act5 = document.getElementById("Act5_Content");
    var Act_D = document.getElementById("Act_Detail");
    Act_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Act_D.style.height = "180vh";
    } else {
        Act_D.style.height = "75vh";
    }
    Act1.style.display = "inline";
    Act2.style.display = "none";
    Act3.style.display = "none";
    Act4.style.display = "none";
    Act5.style.display = "none";
}
function Act2_Appear(){
    Act_Clear();
    var Act1 = document.getElementById("Act1_Content");
    var Act2 = document.getElementById("Act2_Content");
    var Act3 = document.getElementById("Act3_Content");
    var Act4 = document.getElementById("Act4_Content");
    var Act5 = document.getElementById("Act5_Content");
    var Act_D = document.getElementById("Act_Detail");
    Act_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Act_D.style.height = "180vh";
    } else {
        Act_D.style.height = "75vh";
    }
    Act1.style.display = "none";
    Act2.style.display = "inline";
    Act3.style.display = "none";
    Act4.style.display = "none";
    Act5.style.display = "none";
}
function Act3_Appear(){
    Act_Clear();
    var Act1 = document.getElementById("Act1_Content");
    var Act2 = document.getElementById("Act2_Content");
    var Act3 = document.getElementById("Act3_Content");
    var Act4 = document.getElementById("Act4_Content");
    var Act5 = document.getElementById("Act5_Content");
    var Act_D = document.getElementById("Act_Detail");
    var Art = document.getElementById("Art");
    Act_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Act_D.style.height = "180vh";
    } else {
        Act_D.style.height = "75vh";
    }
    Act1.style.display = "none";
    Act2.style.display = "none";
    Act3.style.display = "inline";
    Art.style.display = "inline";
    Act4.style.display = "none";
    Act5.style.display = "none";
}
function Act4_Appear(){
    Act_Clear();
    var Act1 = document.getElementById("Act1_Content");
    var Act2 = document.getElementById("Act2_Content");
    var Act3 = document.getElementById("Act3_Content");
    var Act4 = document.getElementById("Act4_Content");
    var Act5 = document.getElementById("Act5_Content");
    var Act_D = document.getElementById("Act_Detail");
    var Libary = document.getElementById("Libary");
    Act_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Act_D.style.height = "180vh";
    } else {
        Act_D.style.height = "75vh";
    }
    Act1.style.display = "none";
    Act2.style.display = "none";
    Act3.style.display = "none";
    Act4.style.display = "inline";
    Libary.style.display = "inline";
    Act5.style.display = "none";
}
function Act5_Appear(){
    Act_Clear();
    var Act1 = document.getElementById("Act1_Content");
    var Act2 = document.getElementById("Act2_Content");
    var Act3 = document.getElementById("Act3_Content");
    var Act4 = document.getElementById("Act4_Content");
    var Act5 = document.getElementById("Act5_Content");
    var Act_D = document.getElementById("Act_Detail");
    Act_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Act_D.style.height = "180vh";
    } else {
        Act_D.style.height = "75vh";
    }
    Act1.style.display = "none";
    Act2.style.display = "none";
    Act3.style.display = "none";
    Act4.style.display = "none";
    Act5.style.display = "inline";
}
function Act_Clear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Run = document.getElementById("Run");
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var AR = document.getElementById("AR");
    var Market =document.getElementById("Market");
    var Grocery = document.getElementById("Grocery");
    var Flight = document.getElementById("Flight");
    var Art = document.getElementById("Art");
    IT.style.display = "none";
    guitar.style.display = "none";
    Fire.style.display = "none";
    Dance.style.display = "none";
    Research.style.display = "none";
    Run.style.display = "none";
    Celebrate.style.display="none";
    Club.style.display="none";
    Magic.style.display = "none";
    AR.style.display="none";
    Market.style.display="none";
    Grocery.style.display="none";
    Flight.style.display = "none";
    Art.style.display = "none";
}
function guitar_Appear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Run = document.getElementById("Run");
    IT.style.display = "none";
    guitar.style.display ="inline";
    Fire.style.display = "none";
    Dance.style.display = "none";
    Research.style.display="none";
    Run.style.display = "none";
}
function IT_Appear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Run = document.getElementById("Run");
    IT.style.display = "inline";
    guitar.style.display = "none";
    Fire.style.display = "none";
    Dance.style.display = "none";
    Research.style.display="none";
    Run.style.display = "none";
}
function Fire_Appear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Run = document.getElementById("Run");
    IT.style.display = "none";
    guitar.style.display = "none";
    Fire.style.display = "inline";
    Dance.style.display = "none";
    Research.style.display="none";
    Run.style.display = "none";
}
function Dance_Appear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Run = document.getElementById("Run");
    IT.style.display = "none";
    guitar.style.display = "none";
    Fire.style.display = "none";
    Dance.style.display = "inline";
    Research.style.display="none";
    Run.style.display = "none";
}
function Research_Appear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Research_IMG = document.getElementById("Research_IMG");
    var Run = document.getElementById("Run");
    IT.style.display = "none";
    guitar.style.display = "none";
    Fire.style.display = "none";
    Dance.style.display = "none";
    Research.style.display="inline";
    Research_IMG.style.left = "10%";
    Research_IMG.style.width = "80%";
    Run.style.display = "none";
}
function Run_Appear(){
    var IT = document.getElementById("IT");
    var guitar = document.getElementById("guitar");
    var Fire = document.getElementById("Fire");
    var Dance = document.getElementById("Dance");
    var Research = document.getElementById("Research");
    var Run = document.getElementById("Run");
    IT.style.display = "none";
    guitar.style.display = "none";
    Fire.style.display = "none";
    Dance.style.display = "none";
    Research.style.display="none";
    Run.style.display = "inline";
}
function Celebrate_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Market = document.getElementById("Market");
    var AR = document.getElementById("AR");
    var Grocery = document.getElementById("Grocery");
    var Flight = document.getElementById("Flight");
    Celebrate.style.display="inline";
    Club.style.display="none";
    Magic.style.display="none";
    Market.style.display="none";
    AR.style.display="none";
    Grocery.style.display="none";
    Flight.style.display="none";
}
function Club_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Flight = document.getElementById("Flight");
    var Market = document.getElementById("Market");
    var AR = document.getElementById("AR");
    var Grocery = document.getElementById("Grocery");
    var Club_IMG = document.getElementById("Club_IMG");
    Celebrate.style.display="none";
    Club_IMG.style.left = "10%";
    Club_IMG.style.width = "80%";
    Club.style.display="inline";
    Magic.style.display="none";
    AR.style.display="none";
    Grocery.style.display="none";
    Market.style.display = "none";
    Flight.style.display="none";
}
function Magic_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Market = document.getElementById("Market");
    var AR = document.getElementById("AR");
    var Grocery = document.getElementById("Grocery");
    var Flight = document.getElementById("Flight");
    Celebrate.style.display="none";
    Club.style.display="none";
    Magic.style.display="inline";
    AR.style.display="none";
    Market.style.display="none";
    Grocery.style.display="none";
    Flight.style.display="none";
}
function Market_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Market = document.getElementById("Market");
    var Grocery = document.getElementById("Grocery");
    var AR = document.getElementById("AR");
    var Flight = document.getElementById("Flight");
    var Market_IMG = document.getElementById("Market_IMG");
    Celebrate.style.display="none";
    Market_IMG.style.left = "10%";
    Market_IMG.style.width = "80%";
    Club.style.display="none";
    AR.style.display="none";
    Magic.style.display="none";
    Market.style.display="inline";
    Grocery.style.display="none";
    Flight.style.display="none";
}
function AR_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Market = document.getElementById("Market");
    var AR = document.getElementById("AR");
    var AR_IMG = document.getElementById("AR_IMG");
    var Grocery = document.getElementById("Grocery");
    var Flight = document.getElementById("Flight");
    Celebrate.style.display="none";
    Club.style.display="none";
    Magic.style.display="none";
    AR.style.display="inline";
    AR_IMG.style.left="10%";
    AR_IMG.style.width="80%";
    Market.style.display="none";
    Grocery.style.display="none";
    Flight.style.display="none";
}
function Grocery_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Market = document.getElementById("Market");
    var Grocery = document.getElementById("Grocery");
    var AR = document.getElementById("AR");
    var Flight = document.getElementById("Flight");
    var Grocery_IMG = document.getElementById("Grocery_IMG");
    Celebrate.style.display="none";
    Grocery_IMG.style.left = "10%";
    Grocery_IMG.style.width = "80%";
    Club.style.display="none";
    Magic.style.display="none";
    AR.style.display="none";
    Market.style.display="none";
    Grocery.style.display="inline";
    Flight.style.display="none";
}
function Flight_Appear(){
    var Celebrate = document.getElementById("Celebrate");
    var Club = document.getElementById("Club");
    var Magic = document.getElementById("Magic");
    var Market = document.getElementById("Market");
    var AR = document.getElementById("AR");
    var Grocery = document.getElementById("Grocery");
    var Flight = document.getElementById("Flight");
    Celebrate.style.display="none";
    Club.style.display="none";
    Magic.style.display="none";
    Market.style.display="none";
    AR.style.display="none";
    Grocery.style.display="none";
    Flight.style.display="inline";
}
function GoogleMap_Appear(){
    var Traffic_D = document.getElementById("Traffic_Detail");
    var Map = document.getElementById("Map_Detail");
    var Bus = document.getElementById("Bus_Detail");
    var SchoolBus = document.getElementById("SchoolBus_Detail");
    var Rail = document.getElementById("Rail_Detail");
    var Highway = document.getElementById("Highway_Detail");
    Traffic_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Traffic_D.style.height ="180vh";
    } else {
        Traffic_D.style.height ="75vh";
    }
    Map.style.display = "inline";
    Bus.style.display="none";
    SchoolBus.style.display = "none";
    Rail.style.display = "none";
    Highway.style.display="none";
}
function Bus_Appear(){
    var Traffic_D = document.getElementById("Traffic_Detail");
    var Map = document.getElementById("Map_Detail");
    var Bus = document.getElementById("Bus_Detail");
    var SchoolBus = document.getElementById("SchoolBus_Detail");
    var Rail = document.getElementById("Rail_Detail");
    var Highway = document.getElementById("Highway_Detail");
    Traffic_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Traffic_D.style.height ="180vh";
    } else {
        Traffic_D.style.height ="75vh";
    }
    Map.style.display = "none";
    Bus.style.display="inline";
    SchoolBus.style.display = "none";
    Rail.style.display = "none";
    Highway.style.display="none";
}
function SchoolBus_Appear(){
    var Traffic_D = document.getElementById("Traffic_Detail");
    var Map = document.getElementById("Map_Detail");
    var Bus = document.getElementById("Bus_Detail");
    var SchoolBus = document.getElementById("SchoolBus_Detail");
    var Rail = document.getElementById("Rail_Detail");
    var Highway = document.getElementById("Highway_Detail");
    Traffic_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Traffic_D.style.height ="180vh";
    } else {
        Traffic_D.style.height ="75vh";
    }
    Map.style.display = "none";
    Bus.style.display="none";
    SchoolBus.style.display = "inline";
    Rail.style.display = "none";
    Highway.style.display="none";
}
function Rail_Appear(){
    var Traffic_D = document.getElementById("Traffic_Detail");
    var Map = document.getElementById("Map_Detail");
    var Bus = document.getElementById("Bus_Detail");
    var SchoolBus = document.getElementById("SchoolBus_Detail");
    var Rail = document.getElementById("Rail_Detail");
    var Highway = document.getElementById("Highway_Detail");
    Traffic_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Traffic_D.style.height ="180vh";
    } else {
        Traffic_D.style.height ="75vh";
    }
    Map.style.display = "none";
    Bus.style.display="none";
    SchoolBus.style.display = "none";
    Rail.style.display = "inline";
    Highway.style.display="none";
}
function Highway_Appear(){
    var Traffic_D = document.getElementById("Traffic_Detail");
    var Map = document.getElementById("Map_Detail");
    var Bus = document.getElementById("Bus_Detail");
    var SchoolBus = document.getElementById("SchoolBus_Detail");
    var Rail = document.getElementById("Rail_Detail");
    var Highway = document.getElementById("Highway_Detail");
    Traffic_D.style.display = "inline";
    if(document.body.clientWidth < 1280)
    {
        Traffic_D.style.height ="180vh";
    } else {
        Traffic_D.style.height ="75vh";
    }
    Map.style.display = "none";
    Bus.style.display="none";
    SchoolBus.style.display = "none";
    Rail.style.display = "none";
    Highway.style.display="inline";
}

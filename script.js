
function loadDays(month){
    month=parseInt(month);
    var maxDays=[0,31,29,31,30,31,30,31,31,30,31,30,31];
    var result="";
    for (var i=1;i<=maxDays[month];i++){
        result+="<option value = "+i+">"+i+"</option>";
    }
    document.getElementById("days").innerHTML=result;
}

function determineSign(){
    var sign = "";
    var horoscope= "";
    var month=  document.getElementById("month").value;
    month=parseInt(month);
    var day=  document.getElementById("days").value;
    day=parseInt(day);
    var name= document.getElementById("name").value;

    //Aries (March 21-April 19)
    if (month==3 && day>=21 || month==4 && day<=19) {
        sign="Aries";
        horoscope+="The November 3 full moon lights up the money and material possessions in your life. Someone, or an unusual situation, could lead to an influx of cash or earning opportunity. It may take time, but it can start now. The moon-Mars conjunction on the fourteenth makes it easy to get what you want, if you know what that is. The new moon on November 18 suggests that nothing will be a problem for you during the next month. You have a clear view of a situation that may have been a bother for a while. Resources and helpful advice are at your fingertips. ";
    }

    //Taurus (April 20-May 20)
    if (month==4 && day>=20 || month==5 && day<=20) {
        sign="Taurus";
        horoscope+="You're totally conspicuous around the full moon on November 3, and in all the best ways. If you have wanted a boost for a special project, helping hands and brilliant ideas are on their way. You won't even need to ask. Venus enters Scorpio on the seventh. Watch for love to get deep and for romance to get serious. A spectacular new love or romantic interest comes your way with the new moon on November 18. Or a current partnership may deepen and become rich beyond either of your wildest dreams. Be inundated with random acts of kindness and generosity. ";
    }

    //Gemini (May 21-June 20)
    if (month==5 && day>=21 || month==6 && day<=20) {
        sign="Gemini";
        horoscope+="Feel appreciated and cuddled around the full moon on November 3. Enjoy your personal space and private time. If feeling restless or still thinking of what else you should have or be doing, set all that aside and love your life here and now. Feel good about yourself with the new moon on the eighteenth. Feel good about your day job, and let your co-workers feel good about you, too. If there have been any doubts about anything, they will be resolved and disappear now. The Mercury-Saturn conjunction on November 27 can help you understand a piece of cryptic but valuable advice.";
    }

    //Cancer (June 21-July 22)
    if (month==6 && day>=21 || month==7 && day<=22) {
        sign="Cancer";
        horoscope+="The spotlight is on your social life during the November 3 full moon. Step into a bigger, perhaps faster social set. Don't feel shy or awkward. Let others do the crazy stuff if they like. Dance to your own music, but dance. On the new moon on the eighteenth, pour your feelings into something creative. Paint, decorate, cook, play or write music, and soak yourself in all the things that you love best. Surround yourself with your best-loved company, too. The moon-Uranus conjunction on November 30 could reopen - or settle - an old argument. Be emotional but also reasonable, and heal an old wound. ";
    }

    //Leo (July 23-August 22)
    if (month==7 && day>=23 || month==8 && day<=22) {
        sign="Leo";
        horoscope+="Career options and opportunities are blazing under the full moon on November 3. Feel secure and solid in your talents, skills, and experience. Friends or family may encourage you beyond your comfort level, but really, they're right. Be brave if not bold. The new moon on the eighteenth makes home the best place to be. Spoil yourself and have a party if you like. Change something and make your environment luxurious and beautiful. Let friends and family visit and be jealous of your great space. The sun enters Sagittarius on November 21. If it wasn't party time before, it is now. ";
    }

    //Virgo (August 23-September 22)
    if (month==8 && day>=23 || month==9 && day<=22) {
        sign="Virgo";
        horoscope+="If you're feeling limited or constrained, the full moon on November 3 lets you break out and run free. You may not want to do anything extreme, but you have plenty of support and people cheering you on if you do. Mercury enters Sagittarius on the fifth, and it might be hard to concentrate on the important small stuff. Do your best. Stay near to home during the new moon on November 18. There will be a lot that you want to do with your friends. If siblings show up, let them figure out how to fit in with what's going on.";
    }

    //Libra (September 23-October 22)
    if (month==9 && day>=23 || month==10 && day<=22) {
        sign="Libra";
        horoscope+="On the full moon of November 3, resolve something that has been annoying or worrying you. It may not be important in the long run, but it could feel that way now. You have more than enough resources and lots of moral support. On the thirteenth, Venus conjoins Jupiter in Scorpio. Something or someone could touch or steal your heart. Money and material possessions are highlighted with the new moon on November 18. Pretty things look prettier and more desirable than usual. You might be tempted to go on a spending spree. Maybe leave your plastic at home and do some serious window-shopping. ";
    }

    //Scorpio (October 23-November 21)
    if (month==10 && day>=23 || month==11 && day<=21) {
        sign="Scorpio";
        horoscope+="A rise in love and romance is highlighted by the full moon on November 3. Get sexy and sensual with someone who already worships the air you breathe. Don't let any socializing get too extravagant, because it might. The new moon on the eighteenth gives you the chance to do and say things that you would normally keep private. Be tactful, keep it nice, and people will understand and probably agree. You could alter your appearance now, too, with no negative criticism. On November 21, the Venus-Pluto sextile could smooth the rough edges on a relationship that shows promise of becoming valuable. ";
    }

    //Sagittarius (November 22-December 21)
    if (month==11 && day>=22 || month==12 && day<=21) {
        sign="Sagittarius";
        horoscope+="Health and happiness are spotlighted by the full moon on November 3. Take pleasure in taking care of yourself. You may also have a friend or a pet who needs a little extra pampering. Pamper away! On the thirteenth, the Venus-Jupiter conjunction shows you just how loved and cherished you really are. During the new moon on November 18, your private life and interior landscape may be much more interesting and richer than anything in the outside world. Indulge in deep thoughts, read a heavy book, get philosophical, and talk with your soul mate, real or yet to be manifested.";
    }

    //Capricorn (December 22-January 19)
    if (month==12 && day>=22 || month==1 && day<=19) {
        sign="Capricorn";
        horoscope+="Around the November 3 full moon, get creative and spruce up your home, wardrobe, or anything else that you value and would like to give a fresh look. Get daring and have some wild and crazy fun with a lot of friends. The new moon on the eighteenth says to get ready for a fantastic social life in the coming weeks. Be popular and be treated extremely well. It's OK to be pampered, so long as you appreciate it. On November 27, the Mercury-Saturn conjunction could slow down the pace and maybe change the direction of a developing relationship.";
    }

    //Aquarius (January 20 to February 18)
    if (month==1 && day>=20 || month==2 && day<=18) {
        sign="Aquarius";
        horoscope+="Family or home life could tug at your heart with the full moon on November 3. There may be good news at work that makes time at home better and better. It's so nice when home and work are not in fierce competition. The new moon on the eighteenth could open a door for your career or public presence that puts you on the fast track to success and popularity. Enjoy a burst of charm that brings someone or something to help you make the next big leap. On November 25, the Mercury-Uranus trine could reveal something powerful and useful that has long been concealed.";
    }

    //Pisces (February 19 to March 20)
    if (month==2 && day>=19 || month==3 && day<=20) {
        sign="Pisces";
        horoscope+="Friends and neighbors are prominent, in all the best ways, during the full moon on November 3. Generosity from afar may be shared with you and your besties. It may not be party time, but it could be close. Break out of your shell with the new moon on the eighteenth. If you've been hunkered down with one specific job or project, you can now widen your range and have a fuller perspective without sacrificing your concentration. You will make success look easy. On November 26, the Moon-Neptune conjunction exposes hidden emotions and lets you talk openly about them. ";
    }



    document.getElementById("output1").innerHTML = name + ", you are a " + sign + "!";
    document.getElementById("output2").innerHTML = horoscope;
    document.getElementById("image").innerHTML = "<img src='img/" + sign + ".jpg'>";


    var today= new Date();
    var todaysDay= today.getDate();
    var todaysMonth= today.getMonth();

    if (day==todaysDay && month==todaysMonth+1){
        document.getElementById("output2").innerHTML = "Happy Birthday " + name + "!" + " This is your day! Enjoy it and have fun!";
    }else{
        document.getElementById("output2").innerHTML = horoscope;
    }

}

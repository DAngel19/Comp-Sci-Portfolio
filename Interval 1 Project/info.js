// JavaScript File
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

item1.addEventListener("click", function(){
    info1.innerHTML = "-The chances of making two holes-in-one in a round of golf are one in 67 million!";
    info2.innerHTML = "-Don'tt feel bad about your high handicap, 80% of all golfers will never achieve a handicap of less than 18.";
    info3.innerHTML = "-The word caddy comes from the French word for student, cadet, which is pronounced cad-DAY.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "-The first indoor bowling lanes were built in New York City in 1840.";
    info2.innerHTML = "-The maximum number of holes allowed in a bowling ball is 12.";
    info3.innerHTML = "-Bowling balls were made out of wood until the early 1900s.";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "-The first recorded game was played in 1646, and later fines were handed out for those who missed the church to play.";
    info2.innerHTML = "-The longest cricket match took place in 1939 between England and South Africa, after 14 days it ended with a tie.";
    info3.innerHTML = "-A cricket game was once stopped because a pig ran across the field. It is even considered legal to suspend the game if an animal entered the field.";
});

item4.addEventListener("click", function(){
    info1.innerHTML = "-Sailing was introduced at the Atlanta 1996 Paralympic Games as a demonstrative sport and then became a medal sport at the Sydney 2000 Paralympic Games.";
    info2.innerHTML = "-Sailing is now practiced by athletes in more than 70 countries. It is one of the few Paralympic sports where able-bodied and disabled athletes can compete together at competitions outside the Paralympic Games. Adaptations to boats allow people with varying disabilities to operate the boats using different techniques.";
    info3.innerHTML = "-All races are fleet races, meaning that all boats start at the same time.";
});

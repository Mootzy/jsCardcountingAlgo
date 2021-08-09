var count = 0;

function cc(card) {
    // Only change code below this line
    var call;

    if (card <= 6) {
        count += 1;
        if (count <= 0) {
            call = "Hold";
        } else {
            call = "Bet";
        }
    } else if (card >= 7 && card <= 9) {
        count = count;
        if (count <= 0) {
            call = "Hold";
        } else {
            call = "Bet";
        }
    } else {
        count = --count;
        if (count <= 0) {
            call = "Hold";
        } else {
            call = "Bet";
        }
    }
    console.log(
        count + " im the count after function exits" + call + " i'm the call after"
    );
    return count + " " + call;
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
// Question one:

/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3 */

// Solution one:

function zero(operation) {
    if (operation) {
        return parseInt(eval(`0${operation}`));
    }
    else {
        return 0;
    }
}
function one(operation) {
    if (operation) {
        return parseInt(eval(`1${operation}`));
    }
    else {
        return 1;
    }
}
function two(operation) {
    if (operation) {
        return parseInt(eval(`2${operation}`));
    }
    else {
        return 2;
    }
}
function three(operation) {
    if (operation) {
        return parseInt(eval(`3${operation}`));
    }
    else {
        return 3;
    }
}
function four(operation) {
    if (operation) {
        return parseInt(eval(`4${operation}`));
    }
    else {
        return 4;
    }
}
function five(operation) {
    if (operation) {
        return parseInt(eval(`5${operation}`));
    }
    else {
        return 5;
    }
}
function six(operation) {
    if (operation) {
        return parseInt(eval(`6${operation}`));
    }
    else {
        return 6;
    }
}
function seven(operation) {
    if (operation) {
        return parseInt(eval(`7${operation}`));
    }
    else {
        return 7;
    }
}
function eight(operation) {
    if (operation) {
        return parseInt(eval(`8${operation}`));
    }
    else {
        return 8;
    }
}
function nine(operation) {
    if (operation) {
        return parseInt(eval(`9${operation}`));
    }
    else {
        return 9;
    }
}

function plus(number) {
    return `+${number}`;
}
function minus(number) {
    return `-${number}`;
}
function times(number) {
    return `*${number}`;
}
function dividedBy(number) {
    return `/${number}`;
}

function run_solution_1() {
    console.log(seven(times(five()))); // must return 35
}
run_solution_1();


// ------------------------------------------------------------------------------------------------------



//QUESTION 2:
/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd,
return the middle character.
 If the word's length is even, return the middle 2 characters. */



//SOLUTION:

function get_Middle_Part_of_Input_String(input_String) {
    //Code goes here!
    if (input_String.length % 2 == 0) {
        return input_String.substring(((input_String.length / 2) - 1), ((input_String.length / 2) + 1));
    }
    else {
        return input_String.substring(Math.floor(input_String.length / 2), (Math.floor(input_String.length / 2) + 1));
    }
}

function run_Solution_2() {
    console.log(get_Middle_Part_of_Input_String('abcde')); // must return 'c'
    console.log(get_Middle_Part_of_Input_String('efgh'));  // must return 'fg'
}
run_Solution_2();


// --------------------------------------------------------------------------------------------------------------------------------







// QUESTION 3:
/* Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ]
where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words:
the ordering of the Fs (resp. Ts) should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index.
In other words: the index of the first T value in items. */


// SOLUTION 3:



// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(items) {


    var new_array = [];
    function first_Fill_All_Odd_Numbers(items) {
        items.forEach(item => {
            if (item % 2 != 0) {
                new_array.push(item);
            }
        });
    }

    function second_Fill_All_Even_Numbers(items) {
        items.forEach(item => {
            if (item % 2 == 0) {
                new_array.push(item);
            }
        });
    }
    first_Fill_All_Odd_Numbers(items);
    second_Fill_All_Even_Numbers(items);




    var boolean_Array = [];
    new_array.forEach(element => {
        boolean_Array.push(element % 2 == 0);
    }); // Filling boolean_Array with Boolean Values


    var index_Of_First_True_Value = boolean_Array.indexOf(true);

    for (var i = 0; i < items.length; i++) {
        items[i] = new_array[i];
    } // changing the incoming array with the new array where first we have all the odd values then all the even values.


    return index_Of_First_True_Value;

}


function run_Solution_3() {
    var items = [1, 2, 3, 4, 5, 6];
    console.log(partitionOn(items)); // first this array will be sorted in manner [1,3,5,2,4,6], then we will get index of first even value.
    console.log(items); // after calling partitionOn function the original array,i.e items, must modify to [1,3,5,2,4,6].
}

run_Solution_3();



//--------------------------------------------------------------------------------------------------------------------------------------------







use std::collections::HashMap;
#[macro_use]
extern crate lazy_static;

lazy_static! {
    static ref SCRABBLE_VALUES: HashMap<char, u8> = {
        [
            ('A', 1),
            ('B', 3),
            ('C', 3),
            ('D', 2),
            ('E', 1),
            ('F', 4),
            ('G', 2),
            ('H', 4),
            ('I', 1),
            ('J', 8),
            ('K', 5),
            ('L', 1),
            ('M', 3),
            ('N', 1),
            ('O', 1),
            ('P', 3),
            ('Q', 10),
            ('R', 1),
            ('S', 1),
            ('T', 1),
            ('U', 1),
            ('V', 4),
            ('W', 4),
            ('X', 8),
            ('Y', 4),
            ('Z', 10),
        ]
        .iter()
        .cloned()
        .collect()
    };
}

fn get_scrabble_value(letter: char) -> u8 {
    *SCRABBLE_VALUES.get(&letter).unwrap_or(&0)
}

fn main() {
    let words = "hello,world,this,is,a,functional,programming,tutorial,in,javascript,and,rust";

    let result = words
        .chars()
        .filter(|letter| *letter != ',')
        .map(|letter| letter.to_ascii_uppercase())
        .map(|letter| get_scrabble_value(letter))
        .fold(0, |accumulator, current_value| accumulator + current_value);

    println!("Total is : {}", result);
}

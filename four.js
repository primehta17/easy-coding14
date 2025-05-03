function countLetters(word) {
    let seen = {};
    for (let i = 0; i < word.length; i++) {
        let abc = word[i];

        if (seen[abc] === undefined) {
            seen[abc] = 1;
        } else {
            seen[abc]++;
        }

    }
    return seen;
}

console.log(countLetters("apple"))
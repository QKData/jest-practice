function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

const Calculator = {
    add(x, y) {
        return x + y;
    },

    subtract(x, y) {
        return x - y;
    },

    devide(x, y) {
        if (y == 0)
            return "y cannot equal zero";
        else return x / y;
    },

    multiply(x, y) {
        return x * y;
    }
}

function analyzeArray(a) {
    a.sort();
    for (let i = 0; i <= a.length; i++) {
        average = a[a.length/2];
        min = a[0];
        max = a[a.length - 1];
        length = a.length;
    }
    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

function caesarCipher(text, shift) {
    const normalizedShift = ((shift % 26) + 26) % 26;

    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
            }
        }
        return char;
    }).join('');
}

export {capitalize, reverseString, Calculator, analyzeArray, caesarCipher};
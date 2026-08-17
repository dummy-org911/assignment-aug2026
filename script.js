// 1. Reverse String
function reverseString(str) {
    // TODO: Write code to reverse the string
    return '';
}

// 2. Convert to Uppercase
function toUppercase(str) {
    // TODO: Write code to convert the string to uppercase
    return str.toUpperCase();
}

// 3. Check Palindrome
function isPalindrome(str) {
    // TODO: Write code to check if string is a palindrome (e.g. return 'Yes' or 'No')
    return '';
}

// 4. Count Words
function countWords(str) {
    // TODO: Write code to count total words in the string
    return 0;
}

// 5. Count Total Characters
function countCharacters(str) {
    // TODO: Write code to return the total number of characters
    return 0;
}

// 6. Capitalize Each Word
function capitalizeWords(str) {
    // TODO: Write code to capitalize the first letter of each word
    return '';
}

// 7. Count Vowels
function countVowels(str) {
    // TODO: Write code to count vowels (a, e, i, o, u)
    return 0;
}

// 8. Remove All Spaces
function removeSpaces(str) {
    // TODO: Write code to remove all spaces from the string
    return '';
}

// 9. Count Consonants
function countConsonants(str) {
    // TODO: Write code to count consonants
    return 0;
}

// 10. Get First and Last Character
function getFirstAndLastChar(str) {
    // TODO: Write code to return first and last character of the string
    return '';
}

// 11. Convert to Lowercase
function toLowercase(str) {
    // TODO: Write code to convert the string to lowercase
    return '';
}

// 12. Check If Starts With Capital Letter
function startsWithCapital(str) {
    // TODO: Write code to check if first character is uppercase (e.g. return 'Yes' or 'No')
    return '';
}

// 13. Repeat String
function repeatString(str) {
    // TODO: Write code to repeat the string twice (2x)
    return '';
}

// 14. Swap Case (Baseline Reference)
function swapCase(str) {
    let result = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

// 15. Remove Vowels (Baseline Reference)
function removeVowels(str) {
    let result = '';
    let vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    return result;
}

// ==========================================
// REGISTRY OF OPERATIONS
// ==========================================

const operationsList = [
    { id: 'reverse', name: '1. Reverse String', fn: (str) => reverseString(str) },
    { id: 'uppercase', name: '2. Convert to Uppercase', fn: (str) => toUppercase(str) },
    { id: 'palindrome', name: '3. Check Palindrome', fn: (str) => isPalindrome(str) },
    { id: 'wordCount', name: '4. Count Total Words', fn: (str) => countWords(str) },
    { id: 'length', name: '5. Count Total Characters', fn: (str) => countCharacters(str) },
    { id: 'capitalizeWords', name: '6. Capitalize Each Word', fn: (str) => capitalizeWords(str) },
    { id: 'countVowels', name: '7. Count Vowels', fn: (str) => countVowels(str) },
    { id: 'removeSpaces', name: '8. Remove All Spaces', fn: (str) => removeSpaces(str) },
    { id: 'countConsonants', name: '9. Count Consonants', fn: (str) => countConsonants(str) },
    { id: 'firstLastChar', name: '10. Get First and Last Character', fn: (str) => getFirstAndLastChar(str) },
    { id: 'lowercase', name: '11. Convert to Lowercase', fn: (str) => toLowercase(str) },
    { id: 'startsWithCapital', name: '12. Starts With Capital Letter', fn: (str) => startsWithCapital(str) },
    { id: 'repeatString', name: '13. Repeat String (2x)', fn: (str) => repeatString(str) },
    { id: 'swapCase', name: '14. Swap Case', fn: (str) => swapCase(str) },
    { id: 'removeVowels', name: '15. Remove Vowels', fn: (str) => removeVowels(str) }
];

// ==========================================
// DOM INTERACTION & EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const primaryInput = document.getElementById('primaryInput');
    const operationSelect = document.getElementById('operationSelect');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');
    const singleResultContainer = document.getElementById('singleResultContainer');
    const singleResultTitle = document.getElementById('singleResultTitle');
    const singleResultContent = document.getElementById('singleResultContent');
    const allResultsGrid = document.getElementById('allResultsGrid');

    // Submit button event
    submitBtn.addEventListener('click', handleExecute);

    // Clear button event
    clearBtn.addEventListener('click', () => {
        primaryInput.value = '';
        singleResultContainer.classList.add('hidden');
        allResultsGrid.innerHTML = '';
    });

    function handleExecute() {
        const inputVal = primaryInput.value;
        const selectedOp = operationSelect.value;

        if (selectedOp === 'all') {
            singleResultContainer.classList.add('hidden');
            renderAllResults(inputVal);
        } else {
            const opObj = operationsList.find(op => op.id === selectedOp);
            if (opObj) {
                const result = opObj.fn(inputVal);
                singleResultTitle.textContent = opObj.name;
                singleResultContent.textContent = result;
                singleResultContainer.classList.remove('hidden');
                renderAllResults(inputVal);
            }
        }
    }

    function renderAllResults(inputVal) {
        allResultsGrid.innerHTML = '';

        operationsList.forEach((op, index) => {
            const result = op.fn(inputVal);
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <div class="card-header">
                    <span class="card-title">${op.name.replace(/^\d+\.\s*/, '')}</span>
                    <span class="card-num">#${index + 1}</span>
                </div>
                <div class="card-body">${result}</div>
            `;

            allResultsGrid.appendChild(card);
        });
    }

    // Initial render with default sample string
    primaryInput.value = 'Hello World';
    handleExecute();
});

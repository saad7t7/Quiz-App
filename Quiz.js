const Quizdata = [
    {
        // Question1
        'Question': "What is the capital of France?",
        'a': "Berlin",
        'b': "Paris",
        'c': "London",
        'd': "Rome",
        'Correct': "d",
    },
    {
        // Question2
        'Question': "Which of the following planets in our solar system is known as the Red Planet?",
        'a': "Earth",
        'b': "Mars",
        'c': "Jupiter",
        'd': "Saturn",
        'Correct': "b",
    },
    {
        // Question3
        'Question': "Who is the author of the famous novel To Kill a Mockingbird?",
        'a': " Harper Lee",
        'b': " F. Scott Fitzgerald ",
        'c': " J.K. Rowling",
        'd': " Jane Austen",
        'Correct': "b",
    },
    {
        // Question4
        'Question': "What is the largest living species of lizard, found primarily in Indonesia?",
        'a': "Komodo dragon",
        'b': "Saltwater crocodile",
        'c': "Black mamba",
        'd': "African elephant",
        'Correct': "a",
    },
    {
        // Question5
        'Question': "Which of the following musical instruments is often associated with the country of Scotland?",
        'a': " Guitar",
        'b': " Piano",
        'c': " Drums",
        'd': " Bagpipes",
        'Correct': "d",
    },
    {
        // Question6
        'Question': "Who is the founder of the social media platform Facebook?",
        'a': "Mark Zuckerberg",
        'b': "Steve Jobs",
        'c': "Bill Gates",
        'd': "Elon Musk",
        'Correct': "a",
    },
    {
        // Question7
        'Question': "What is the chemical symbol for gold?",
        'a': "Ag",
        'b': "Au",
        'c': "Hg",
        'd': "Pb",
        'Correct': "b",
    },
    {
        // Question8
        'Question': "Which of the following ancient civilizations built the Great Pyramid of Giza?",
        'a': "Egyptians",
        'b': "Greeks",
        'c': "Romans",
        'd': "Mesopotamians",
        'Correct': "a",
    },
    {
        // Question9
        'Question': "Who is the lead singer of the rock band Queen ? ",
        'a': "Freddie Mercury",
        'b': "Brian May ",
        'c': "Roger Taylor ",
        'd': "John Deacon",
        'Correct': "a",
    },
    {
        // Question10
        'Question': "What is the capital of Australia? ",
        'a': "Sydney",
        'b': "Melbourne",
        'c': "Perth",
        'd': "Canberra",
        'Correct': "d",
    },
    {
        // Question11
        'Question': "What is the largest mammal on Earth?",
        'a': "African Elephant",
        'b': "Hippopotamus",
        'c': "Girrafe",
        'd': "BlueWhale",
        'Correct': "d",
    },
    {
        // Question12
        'Question': "Who is the author of the famous book 1984? ",
        'a': "George Orwell",
        'b': "Aldous Huxley",
        'c': "Ray Bradbury",
        'd': "Kurt Vonnegut",
        'Correct': "a",
    },
    {
        // Question13
        'Question': "Which of the following ancient civilizations built the Great Wall of China?",
        'a': "Chinese",
        'b': "Japanese",
        'c': "Koreans",
        'd': "Mongolians",
        'Correct': "a",
    },
    {
        // Question14
        'Question': "Which of the following planets in our solar system is no longer considered a planet? ",
        'a': "Pluto",
        'b': "Mars",
        'c': "Venus",
        'd': "Neptune",
        'Correct': "a",
    },
    {
        // Question15
        'Question': "Who is the founder of the company Microsoft? ",
        'a': "SteveJobs",
        'b': "MarkZuckerberg",
        'c': "BillGates",
        'd': "ElonMusk",
        'Correct': "c",
    },
    {
        // Question16
        'Question': "Who is the founder of Pakistan?",
        'a': "Liaquat Ali Khan",
        'b': "Muhammad Ali Jinnah",
        'c': "Allama Iqbal",
        'd': "Fatima Jinnah",
        'Correct': "b",
    },
    {
        // Question17
        'Question': "What is the capital of Pakistan?",
        'a': "Lahore",
        'b': "Karachi",
        'c': "Islamabad",
        'd': "Peshawar",
        'Correct': "c",
    },
    {
        // Question18
        'Question': "Which mountain range runs along the Pakistan-Afghanistan border?",
        'a': "Himalayas",
        'b': "Karakoram",
        'c': "Hindu Kush",
        'd': "Sulaiman Range",
        'Correct': "c",
    },
    {
        // Question19
        'Question': "Who was the first Prime Minister of Pakistan?",
        'a': "Liaquat Ali Khan",
        'b': "Muhammad Ali Jinnah",
        'c': "Khawaja Nazimuddin",
        'd': "Ghulam Muhammad",
        'Correct': "a",
    },
    {
        // Question20
        'Question': "What is the name of the largest river in Pakistan?",
        'a': "Indus River",
        'b': "Jhelum River",
        'c': "Chenab River",
        'd': "Ravi River",
        'Correct': "a",
    }
]
// const quiz=document.getElementById('quiz');
// const answer=document.getElementsByClassName('answer');

// const a=document.getElementById('a_text');
// const b=document.getElementById('b_text');
// const c=document.getElementById('c_text');
// const d=document.getElementById('d_text');
// const btn=document.getElementsByClassName('btn');
let right = 0;
let wrong = 0;
let index = 0;
let total = Quizdata.length;
const Ques = document.getElementById('Ques');
const answers = document.querySelectorAll('.answer');
const loadQuestion = () => {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = Quizdata[index];
    Ques.innerHTML = `${index + 1})${data.Question}`;
    answers[0].nextElementSibling.innerText = data.a;
    answers[1].nextElementSibling.innerText = data.b;
    answers[2].nextElementSibling.innerText = data.c;
    answers[3].nextElementSibling.innerText = data.d;
    answers[0].value = 'a';
    answers[1].value = 'b';
    answers[2].value = 'c';
    answers[3].value = 'd';
}
const submitQuiz = () => {

    let data = Quizdata[index];
    let ANS = getanswer();
    if (ANS === data.Correct) {
        right++;
       
    }
    else {
        wrong++;
    }
    index++;
    if (index >= total) {
        endQuiz();
    }
    else {
        loadQuestion();
    }
    return;
}
const getanswer = () => {
    let cont;
    answers.forEach((input) => {
        if (input.checked) {
            cont = input.value;
        }
    }
    )
    return cont;
}
let reset = () => {
    answers.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('end').innerText = "Thank You For Playing The Quiz";
    document.getElementById('result').innerHTML = `You have ${right}/${total}  Correct`;
}
function again() {
    window.location.replace(
        "http://127.0.0.1:3000/Startpage.html");
}

loadQuestion();

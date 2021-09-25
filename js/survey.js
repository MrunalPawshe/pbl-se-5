window.onload = function () {
    show(0);
}
//Questions
 
let questions = [
    {
        id: 1,
        question: "Do you have problems with concentration, memory or logical thought and speech that are hard to explain? ",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 2,
        question:"Do you feel a loss of desire to participate in any activity?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 3,
        question: "Do you feel long lasting sadness or worry?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    
    {
        id: 4,
        question: "Are you avoiding new people, too many people, places, situations, the unfamiliar?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 5,
        question: "Have you seen any changes in your sleeping or eating pattern recently?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 6,
        question: "Are you experiencing financial problems, loss of a job, death of a loved one, or a divorce?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 7,
        question: "Have you had any thoughts of suicide?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 8,
        question: "Are you capable of enjoying things right now?",
        answer: "No",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 9,
        question: "Have you been feeling guilty for everything you do?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 10,
        question: "Do you consume drugs or alcohol?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 11,
        question: "Do you feel 'supported' by others around you - your friends, family, or otherwise?",
        answer: "No",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 12,
        question: "Do you ever find difficultly in unwinding/relaxing?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 13,
        question: "Do you feel tired no matter how much you sleep?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 14, 
        question: "Do you prefer to stay home than going out and doing new things?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 15,
        question: "Do you have low physical and mental energy level?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 16,
        question: "Are you experiencing significant changes in your appetite or weight?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 17,
        question: "Are you having recurrent thoughts of death?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 18,
        question: "Are you having feelings of hopelessness?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 19,
        question: "Do you feel bad about yourself? ",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 20,
        question: "Do you feel frustation, anger, irritation over small things?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: 21,
        question: "Are you experiencing any unexplained physical problem like headache, backpain, etc?",
        answer: "Yes",
        options: [
            "Yes",
            "No"
        ]
    }
    
    
]

// JavaScript source code

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["survey"]["username"].value;
    //store username in session
    sessionStorage.setItem("name", name);
    console.log(name);
}
function depressionTest() {
    location.href = "depressionTest.html";
}

let question_count = 0;
let point = 0;

function next() {

    let user_answer = document.querySelector("li.option.activeo").innerHTML;
    if (user_answer == questions[question_count].answer) {
        point += 1;
        sessionStorage.setItem("points", point);
    }
    else {
        point = point;
        sessionStorage.setItem("points", point);
    }
    if (question_count == questions.length - 1) {

        /*let final = "zero";
        sessionStorage.setItem("final", final);

        if (points == 1) {
            let final = "zero";
         }*/

        location.href = "end.html";
        return;
    }

    //take answer from user
    

    question_count++;
    show(question_count);    
}

function show(count) {
    let question = document.getElementById("questions");
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_grp">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        
    </ul>
    `;

    toggleActive();
} 


//toggle to select option
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                //check if active
                if (option[j].classList.contains("activeo")) {
                    //remove  activeo class
                    option[j].classList.remove("activeo");
                }
            }
            //add active
            option[i].classList.add("activeo");
        }
    }
};
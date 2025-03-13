
let questions = [
    {
        id: 1,
        question: "Apa kepanjangan dari RAM?",
        answer:"Random Access Memory",
        options: [
            "Run Accept Memory",
            "Random All Memory",
            "Random Access Memory",
            "None of these"
        ]   
    },
    {
         id: 2,
        question: "Apa Kepanjangan dari CPU?",
        answer: "Central Processing Unit",
        options: [
          "Central Program Unit",
          "Central Processing Unit",
          "Central Preload Unit",
          "None of these"
        ]
      },
      {
        id: 3,
        question: "File mana yang paling sering digunakan untuk lisensi di GitHub?",
        answer: "LICENSE",
        options: [
          "LICENSE.txt",
          "CODE.md",
          "LICENSE",
          "README.md"
        ]
      },
      {
        id: 4,
        question: "Perintah git yang digunakan untuk mengunggah perubahan lokal ke GitHub adalah?",
        answer: "git push",
        options: [
          "git clone",
          "git pull",
          "git push",
          "git commit"
        ]
      },
      {
        id: 5,
        question: "Apa itu FMD?",
        answer: "Fluorescent Multi-Layer Disc",
        options: [
          "Fluorescent Multi-Layer Disc",
          "Flash Media Driver",
          "Fast-Ethernet Measuring Device",
          "None of these"
        ]
      },
      {
        id: 6,
        question: "Berapa banyak bit dalam satu byte?",
        answer: "8",
        options: [
          "32",
          "16",
          "8",
          "64"
        ]
      },
      {
        id: 7,
        question: "GitHub digunakan untuk?",
        answer: "Menyimpan dan berbagi kode program",
        options: [
          "Mengelola database pelanggan",
          "Menyimpan dan berbagi kode program",
          "Membuat desain grafis",
          "Menyusun jadwal pelajaran"
        ]
      },
      {
        id: 8,
        question: "Manakah yang merupakan komputer mainframe awal?",
        answer: "ENIAC",
        options: [
          "ENIAC",
          "EDVAC",
          "UNIC",
          "ABACUS"
        ]
      },
      {
        id: 9,
        question: "Papan sirkuit utama dalam sebuah komputer adalah:",
        answer: "Mother board",
        options: [
          "Harddisk",
          "Mother board",
          "Microprocessor",
          "None of these"
        ]
      },
      {
        id: 10,
        question: "Apa nama file yang biasanya menjelaskan isi proyek di GitHub?",
        answer: "README.md",
        options: [
          "ABOUT.html",
          "NOTES.txt",
          "INFO.pdf",
          "README.md"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}
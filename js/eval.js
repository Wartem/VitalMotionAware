function calculateTrauma() {
    var totalScore = 0;
    var questions = ['traumaRestless', 'traumaConcentration', 'traumaPhysicalSymptoms', 'traumaAvoidance'];
    for (var i = 0; i < questions.length; i++) {
        var answers = document.querySelectorAll('input[name="' + questions[i] + '"]:checked');
        if (answers.length === 0) {
            alert("Vänligen svara på alla frågor.");
            return;
        }
        totalScore += parseInt(answers[0].value);
    }

    var resultText = "";
    if (totalScore <= 6) {
        resultText = "Din traumanivå verkar vara låg.";
    } else if (totalScore <= 10) {
        resultText = "Du har en måttlig traumanivå.";
    } else {
        resultText = "Du kan uppleva hög traumanivå.";
    }

    var standard = "Resultat: ";
    var remember = "Observera att detta traumatest är avsett som ett verktyg för självreflektion och är inte utformat för att ge en omfattande bedömning av din hälsa. Dess syfte är att uppmuntra till eftertanke och självinsikt om dina nuvarande traumanivåer. Resultaten kan ge en översiktlig uppfattning och fungera som en utgångspunkt för vidare funderingar om ditt välbefinnande. Vi rekommenderar att du använder detta test som en del i en större process av personlig utveckling och att du vid behov söker professionell hjälp för en mer djupgående och individanpassad bedömning.";

    document.getElementById("result-trauma").innerHTML = `<p><strong>${standard}${resultText}</strong></p><p>${remember}</p>`;
}

function calculateAnxiety() {
    var totalScore = 0;
    var questions = ['worry', 'restless', 'concentration', 'physicalSymptoms'];
    for (var i = 0; i < questions.length; i++) {
        var answers = document.querySelectorAll('input[name="' + questions[i] + '"]:checked');
        if (answers.length === 0) {
            alert("Vänligen svara på alla frågor.");
            return;
        }
        totalScore += parseInt(answers[0].value);
    }

    var resultText = "";
    if (totalScore <= 6) {
        resultText = "Din ångestnivå verkar vara låg.";
    } else if (totalScore <= 10) {
        resultText = "Du har en måttlig ångestnivå.";
    } else {
        resultText = "Du kan uppleva höga ångestnivåer.";
    }

    var standard = "Resultat: ";
    var remember = "Observera att detta ångesttest är avsett som ett verktyg för självreflektion och är inte utformat för att ge en omfattande bedömning av din hälsa. Dess syfte är att uppmuntra till eftertanke och självinsikt om dina nuvarande ångestnivåer. Resultaten kan ge en översiktlig uppfattning och fungera som en utgångspunkt för vidare funderingar om ditt välbefinnande. Vi rekommenderar att du använder detta test som en del i en större process av personlig utveckling och att du vid behov söker professionell hjälp för en mer djupgående och individanpassad bedömning.";

    document.getElementById("result-anxiety").innerHTML = `<p><strong>${standard}${resultText}</strong></p><p>${remember}</p>`;
}

function calculateStress() {
    var totalScore = 0;
    var questions = ['stress', 'overwhelmed', 'relax', 'physical'];
    for (var i = 0; i < questions.length; i++) {
        var answers = document.querySelectorAll('input[name="' + questions[i] + '"]:checked');
        if (answers.length === 0) {
            alert("Vänligen svara på alla frågor.");
            return;
        }
        totalScore += parseInt(answers[0].value);
    }

    var resultText = "";
    if (totalScore <= 6) {
        resultText = "Din stressnivå verkar vara låg.";
    } else if (totalScore <= 10) {
        resultText = "Du har en måttlig stressnivå.";
    } else {
        resultText = "Du kan uppleva höga stressnivåer.";
    }

    var standard = "Resultat: ";
    var remember = "Observera att detta stresstest är avsett som ett verktyg för självreflektion och är inte utformat för att ge en omfattande bedömning av din hälsa. Dess syfte är att uppmuntra till eftertanke och självinsikt om dina nuvarande stressnivåer. Resultaten kan ge en översiktlig uppfattning och fungera som en utgångspunkt för vidare funderingar om ditt välbefinnande. Vi rekommenderar att du använder detta test som en del i en större process av personlig utveckling och att du vid behov söker professionell hjälp för en mer djupgående och individanpassad bedömning.";

    document.getElementById("result-stress").innerHTML = `<p><strong>${standard}${resultText}</strong></p><p>${remember}</p>`;
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.querySelector('[onclick="openTab(\'' + tabName + '\')"]').className += " active";
}


function initEval() {
    fetch('eval.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('eval-container').innerHTML = html;
        });
}

window.onload = initEval;

















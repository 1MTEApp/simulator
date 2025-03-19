const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('commandInput');

const prompt = ">";

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = commandInput.value;
        processCommand(command);
        commandInput.value = ''; // Clear input after execution
    }
});

function displayOutput(text) {
    const output = document.createElement('p');
    output.textContent = text;
    terminal.appendChild(output);
    terminal.scrollTop = terminal.scrollHeight; // Scroll to bottom
}

function displayPrompt() {
    const newPromptLine = document.createElement('p');
    newPromptLine.classList.add('prompt');
    newPromptLine.textContent = prompt;
    terminal.appendChild(newPromptLine);
    terminal.scrollTop = terminal.scrollHeight; // Scroll to bottom
}

function processCommand(command) {
    displayOutput(prompt + " " + command); // Echo the command
    switch (command.toLowerCase()) {
        case 'help':
            displayOutput("Available commands: help, clear, scan, hack, exit");
            break;
        case 'clear':
            terminal.innerHTML = '';
            displayPrompt();
            break;
        case 'scan':
            scanNetwork();
            break;
        case 'hack':
            startHacking();
            break;
        case 'exit':
            displayOutput("Exiting...");
            setTimeout(() => { window.close(); }, 500); // Simulate exit
            break;
        default:
            displayOutput("Command not found.");
    }
    displayPrompt(); // Add a new prompt after each command
}


function scanNetwork() {
    displayOutput("Scanning network...");
    setTimeout(() => {
        displayOutput("Found 127.0.0.1 (localhost)");
        displayOutput("Found 192.168.1.1 (Router)");
        displayOutput("Found 10.0.0.5 (Target)");
    }, 1000);
}

function startHacking() {
    displayOutput("Initiating hack...");
    let hackProgress = 0;
    const interval = setInterval(() => {
        hackProgress += 5;
        displayOutput(`Hacking progress: ${hackProgress}%`);
        if (hackProgress >= 100) {
            clearInterval(interval);
            displayOutput("Hack complete! Access granted.");
        }
    }, 200);
}

// Initial prompt on page load
displayPrompt();

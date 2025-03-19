const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('commandInput');

const prompt = ">";

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = commandInput.value;
        processCommand(command);
        commandInput.value = '';
    }
});

function displayOutput(text) {
    const output = document.createElement('p');
    output.textContent = text;
    terminal.appendChild(output);
    terminal.scrollTop = terminal.scrollHeight;
}

function displayPrompt() {
    const newPromptLine = document.createElement('p');
    newPromptLine.classList.add('prompt');
    newPromptLine.textContent = prompt;
    terminal.appendChild(newPromptLine);
    terminal.scrollTop = terminal.scrollHeight;
}

function processCommand(command) {
    displayOutput(prompt + " " + command);
    switch (command.toLowerCase()) {
        case 'help':
            displayOutput("Available commands: help, clear, scan, hack, ddos, matrix, exit");
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
        case 'ddos':
            simulateDDoS(command.split(' ')[1]); // Pass target IP
            break;
        case 'matrix':
            startMatrixEffect();
            break;
        case 'exit':
            displayOutput("Exiting...");
            setTimeout(() => { window.close(); }, 500);
            break;
        default:
            displayOutput("Command not found.");
    }
    displayPrompt();
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

function simulateDDoS(targetIP) {
    if (!targetIP) {
        displayOutput("Usage: ddos <ip_address>");
        return;
    }
    displayOutput(`Initiating DDoS attack on ${targetIP}...`);
    let packetsSent = 0;
    const ddosInterval = setInterval(() => {
        packetsSent += 1000;  // Simulate sending packets
        displayOutput(`Sent ${packetsSent} packets to ${targetIP}`);
        if (packetsSent > 10000) { // Simulate completion
            clearInterval(ddosInterval);
            displayOutput("DDoS attack complete (simulated).");
        }
    }, 100);
}

function startMatrixEffect() {
    terminal.innerHTML = ''; // Clear the terminal
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+=_-!@#%^&*()";
    const streamLength = 20; // Length of each stream

    function createStream() {
        const streamElement = document.createElement('div');
        streamElement.classList.add('matrix-stream'); // Add a class for styling
        const x = Math.floor(Math.random() * terminal.offsetWidth); // Random x position
        streamElement.style.left = `${x}px`;

        for (let i = 0; i < streamLength; i++) {
            const charElement = document.createElement('span');
            charElement.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            streamElement.appendChild(charElement);
        }

        terminal.appendChild(streamElement);

        // Animate the stream
        animateStream(streamElement);

        // Clean up after animation
        setTimeout(() => {
            streamElement.remove();
        }, 5000);
    }

    function animateStream(streamElement) {
        let top = 0;
        const animationInterval = setInterval(() => {
            top += 20;  // Adjust speed as needed
            streamElement.style.top = `${top}px`;

            if (top > terminal.offsetHeight) {
                clearInterval(animationInterval);
                streamElement.remove();
            }
        }, 50);
    }


    // Create multiple streams
    for (let i = 0; i < 50; i++) { // Adjust stream count
        setTimeout(createStream, Math.random() * 500); // Stagger the streams
    }
}


displayPrompt();

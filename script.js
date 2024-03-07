//Web speech API
const textToSpeech = "Hello There";
const utterance =
    new SpeechSynthesisUtterance(textToSpeech);
    window.speechSynthesis(utterance);
localStorage.setItem('key', 'value');

    console.log(utterance);
////////////////////////////////////////////////////////////////////////

//Web Storage API (local)

//store data
localStorage.setItem('key', 'value');
//Retrieve data
const storedValue = localStorage.getItem('key');
//Remove item
localStorage.removeItem('key');

//(session)
sessionStorage.setItem('key', 'value');
const storedValue = sessionStorage.getItem('key');
sessionStorage.removeItem('key')

/////////////////////////////////////////////////////////////////////////

    //web fetch API

    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('error:', error));
//////////////////////////////////////////////////////////////////////////

//Web geo-location API
navigator.geolocation.getCurrentPosition(
    position => {
        console.log(`Latitude: ${position.coords.latitude},
        Longitude: ${position.coords.longitude}`);
    },
    error => {
        console.error("Error getting location:", error.message);
    }
);
/////////////////////////////////////////////////////////////////////////

//Canvas API
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 100;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 80);
//////////////////////////////////////////////////////////////////////////

//Web Audio API's
const audioContext = new (window.AudioContext || window.webAudioContext)();
const oscillator = audioContext.createOscillator();
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.connect(audioContext.destination);
oscillator.start();
oscillator.stop(audioContext.currentTime + 1);
/////////////////////////////////////////////////////////////////////////////

//Web Sockets API
const socket = new WebSocket('wss://example.com/socket');
socket.addEventListener('open',
() => socket.send('Hello, server!'));
socket.addEventListener('message',
    event => console.log('Received:', event.data));
socket.addEventListener('close',
   () => console.log('Connection closed.'))
//////////////////////////////////////////////////////////////////////

//Web IndexedDB API

//open (or create) the database
const dbName = 'InstagramPostsDB';
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);
//handles erros that may occur during the database opening process
request.onerror(() => {});
//specifies the actions to be taken when the database structure is being upgraded
request.onupgradeneeded(() => {});
//defines the actions to be taken upon successful opening of the database
request.onsuccess(() => {});
/////////////////////////////////////////////////////////////////////////

//Web file API

<input type="file" id="imageInput" accept="image/*" />
<button onclick="uploadPost()">Upload Post</button>
<script>
    function uploadPost() {
        const file = document.getElementById('imageInput').files[0];
        console.log('Selected file:', file);
    }
</script>
//////////////////////////////////////////////////////////////////////////

//Web Notification API
Notification.requestPermission()
    .then( permission => {
        new Notification('Hello, World!');
    });
/////////////////////////////////////////////////////////////////////////

//Web workers API
const worker = new Worker('worker.js');
worker.postMessage('Hello from main script!');
//////////////////////////////////////////////////////////////////

//web Pointer LOck API

const element = document.getElementById('yourElement');
element.releasePointerLock();
///////////////////////////////////////////////////////////////////

//web battery status API
navigator.getBattery().then(battery => {
    console.log('Battery Level:', battery.level * 100 + '%');
    console.log('Charging:', battery.charging ? 'Yes' : 'No');
});
/////////////////////////////////////////////////////////////////////

//web payment request API
const supportedInstruments = [{ supportedMethods: 'basic-card' }];
const paymentDetails = { total:
        { label: 'Total', amount: { currency: 'USD', value: '10.00' } } };
const paymentPromise = new PaymentRequest(supportedInstruments, paymentDetails);
paymentPromise.show().then(paymentResponse =>
    paymentResponse.complete('success')
    );

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/pblVcTHkm/";

let model, webcam, labelContainer, maxPredictions;
let isRunning = false;

async function init() {

    try {

        // Mencegah webcam dibuka dua kali
        if (isRunning) {
            console.log("Webcam sudah aktif");
            return;
        }

        const flip = true;

        webcam = new tmImage.Webcam(
            300,
            300,
            flip
        );

        await webcam.setup();

        console.log("Setup webcam berhasil");

        await webcam.play();

        console.log("Play webcam berhasil");

        console.log("Canvas:", webcam.canvas);

        const webcamContainer =
            document.getElementById("webcam-container");

        webcamContainer.innerHTML = "";
        webcamContainer.appendChild(webcam.canvas);

        labelContainer =
            document.getElementById("label-container");

        labelContainer.innerHTML = "";

        for (let i = 0; i < maxPredictions; i++) {

            labelContainer.appendChild(
                document.createElement("div")
            );
        }

        isRunning = true;

        window.requestAnimationFrame(loop);

        console.log("Webcam berhasil aktif");

        document.getElementById("status")
            .innerText = "Kamera aktif";

    } catch (error) {

        console.error("ERROR:", error);

        alert(error.message);
    }
}

async function loop() {

    if (!isRunning) return;

    webcam.update();

    try {

        await predict();

    } catch (err) {

        console.error(
            "Predict Error:",
            err
        );
    }

    window.requestAnimationFrame(loop);
}

async function predict() {

    const prediction =
        await model.predict(webcam.canvas);

    let hasil = "";

    prediction.forEach(item => {

        const persen =
            (item.probability * 100)
            .toFixed(2);

        hasil += `
            <div class="prediction-item">

                <div class="prediction-header">
                    <span>${item.className}</span>
                    <span>${persen}%</span>
                </div>

                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width:${persen}%">
                    </div>
                </div>

            </div>
        `;
    });

    labelContainer.innerHTML = hasil;
}

function stopWebcam() {

    if (!webcam) return;

    isRunning = false;

    webcam.stop();

    document.getElementById(
        "webcam-container"
    ).innerHTML = "";

    document.getElementById(
        "label-container"
    ).innerHTML = "";

    document.getElementById("status")
        .innerText = "Kamera dimatikan";

    console.log("Webcam dimatikan");

    webcam = null;
}

// Upload gambar
document.getElementById("imageUpload")
.addEventListener("change", async function(event){

    const file = event.target.files[0];

    if(!file) return;

    const image =
        document.getElementById("previewImage");

    image.src = window.URL.createObjectURL(file);

    image.style.display = "block";

    image.onload = async function(){

        const prediction =
            await model.predict(image);

        tampilkanPrediksi(prediction);
    };
});

// Menampilkan hasil prediksi
function tampilkanPrediksi(prediction){

    let hasil = "";

    prediction.forEach(item => {

        hasil += `
            <div>
                ${item.className}
                :
                ${(item.probability * 100).toFixed(2)}%
            </div>
        `;
    });

    document.getElementById(
        "label-container"
    ).innerHTML = hasil;
}

// Reset
function resetDetection(){

    document.getElementById(
        "label-container"
    ).innerHTML = "";

    document.getElementById(
        "previewImage"
    ).style.display = "none";

    document.getElementById(
        "imageUpload"
    ).value = "";

    document.getElementById("status")
        .innerText = "Siap digunakan";

    console.log("Reset berhasil");
}

async function init() {

    try {

        // Mencegah webcam dibuka dua kali
        if (isRunning) {
            console.log("Webcam sudah aktif");
            return;
        }

        console.log("Memuat model...");

        const modelURL = MODEL_URL + "model.json"
        const metadataURL = MODEL_URL + "metadata.json"

        model = await tmImage.load(
            modelURL,
            metadataURL
        );

        maxPredictions = model.getTotalClasses();

        console.log("Model berhasil dimuat");

        const flip = true;

        webcam = new tmImage.Webcam(
            300,
            300,
            flip
        );

        await webcam.setup();

        console.log("Setup webcam berhasil");

        await webcam.play();

        console.log("Play webcam berhasil");

        console.log("Canvas:", webcam.canvas);

        const webcamContainer =
            document.getElementById("webcam-container");

        webcamContainer.innerHTML = "";
        webcamContainer.appendChild(webcam.canvas);

        labelContainer =
            document.getElementById("label-container");

        labelContainer.innerHTML = "";

        for (let i = 0; i < maxPredictions; i++) {

            labelContainer.appendChild(
                document.createElement("div")
            );
        }

        isRunning = true;

        window.requestAnimationFrame(loop);

        console.log("Webcam berhasil aktif");

        document.getElementById("status")
            .innerText = "Kamera aktif";

    } catch (error) {

        console.error("ERROR:", error);

        alert(error.message);
    }
}

async function loop() {

    if (!isRunning) return;

    webcam.update();

    try {

        await predict();

    } catch (err) {

        console.error(
            "Predict Error:",
            err
        );
    }

    window.requestAnimationFrame(loop);
}

async function predict() {

    const prediction =
        await model.predict(webcam.canvas);

    for (let i = 0; i < maxPredictions; i++) {

        const classPrediction =
            prediction[i].className +
            " : " +
            (prediction[i].probability * 100)
            .toFixed(2) +
            "%";

        labelContainer.childNodes[i].innerHTML =
            classPrediction;
    }
}

function stopWebcam() {

    if (!webcam) return;

    isRunning = false;

    webcam.stop();

    document.getElementById(
        "webcam-container"
    ).innerHTML = "";

    document.getElementById(
        "label-container"
    ).innerHTML = "";

    document.getElementById("status")
        .innerText = "Kamera dimatikan";

    console.log("Webcam dimatikan");

    webcam = null;
}

// Upload gambar
document.getElementById("imageUpload")
.addEventListener("change", async function(event){

    const file = event.target.files[0];

    if(!file) return;

    const image =
        document.getElementById("previewImage");

    image.src = window.URL.createObjectURL(file);

    image.style.display = "block";

    image.onload = async function(){

        const prediction =
            await model.predict(image);

        tampilkanPrediksi(prediction);
    };
});

// Menampilkan hasil prediksi
function tampilkanPrediksi(prediction){

    let hasil = "";

    prediction.forEach(item => {

        const persen =
            (item.probability * 100)
            .toFixed(2);

        hasil += `
            <div class="prediction-item">

                <div class="prediction-header">
                    <span>${item.className}</span>
                    <span>${persen}%</span>
                </div>

                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width:${persen}%">
                    </div>
                </div>

            </div>
        `;
    });

    document.getElementById(
        "label-container"
    ).innerHTML = hasil;
}

// Reset
function resetDetection(){

    document.getElementById(
        "label-container"
    ).innerHTML = "";

    document.getElementById(
        "previewImage"
    ).style.display = "none";

    document.getElementById(
        "imageUpload"
    ).value = "";

    document.getElementById("status")
        .innerText = "Siap digunakan";

    console.log("Reset berhasil");
}

window.onload = async function(){

    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";

    model = await tmImage.load(
        modelURL,
        metadataURL
    );

    maxPredictions =
        model.getTotalClasses();

    console.log(
        "Jumlah class:", maxPredictions);

    console.log(
        "Model siap digunakan"
    );
};
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/pblVcTHkm/";

const foodInfo = {

    "anggur": {
        kategori: "Buah",
        kalori: "69 kcal",
        protein: "0.7 g",
        karbohidrat: "18 g",
        lemak: "0.2 g",
        manfaat: "Mengandung antioksidan dan vitamin C yang baik untuk kesehatan jantung."
    },

    "apel": {
        kategori: "Buah",
        kalori: "52 kcal",
        protein: "0.3 g",
        karbohidrat: "14 g",
        lemak: "0.2 g",
        manfaat: "Membantu menjaga kesehatan pencernaan dan daya tahan tubuh."
    },

    "ayam_goreng": {
        kategori: "Protein Hewani",
        kalori: "260 kcal",
        protein: "27 g",
        karbohidrat: "8 g",
        lemak: "14 g",
        manfaat: "Membantu pembentukan dan perbaikan jaringan tubuh."
    },

    "burger": {
        kategori: "Makanan Cepat Saji",
        kalori: "295 kcal",
        protein: "17 g",
        karbohidrat: "30 g",
        lemak: "12 g",
        manfaat: "Menyediakan energi dan protein bagi tubuh."
    },

    "daging": {
        kategori: "Protein Hewani",
        kalori: "250 kcal",
        protein: "26 g",
        karbohidrat: "0 g",
        lemak: "15 g",
        manfaat: "Kaya zat besi dan protein untuk pembentukan otot."
    },

    "kentang_goreng": {
        kategori: "Karbohidrat",
        kalori: "312 kcal",
        protein: "3.4 g",
        karbohidrat: "41 g",
        lemak: "15 g",
        manfaat: "Sumber energi yang berasal dari karbohidrat."
    },

    "gado_gado": {
        kategori: "Sayuran",
        kalori: "180 kcal",
        protein: "7 g",
        karbohidrat: "20 g",
        lemak: "8 g",
        manfaat: "Mengandung serat dan berbagai vitamin dari sayuran."
    },

    "ikan_goreng": {
        kategori: "Protein Hewani",
        kalori: "206 kcal",
        protein: "22 g",
        karbohidrat: "0 g",
        lemak: "12 g",
        manfaat: "Mengandung protein dan omega-3 yang baik untuk tubuh."
    },

    "mie_goreng": {
        kategori: "Karbohidrat",
        kalori: "320 kcal",
        protein: "8 g",
        karbohidrat: "45 g",
        lemak: "12 g",
        manfaat: "Memberikan energi untuk aktivitas sehari-hari."
    },

    "nasi_goreng": {
        kategori: "Karbohidrat",
        kalori: "267 kcal",
        protein: "6 g",
        karbohidrat: "33 g",
        lemak: "10 g",
        manfaat: "Sumber energi yang cukup tinggi."
    },

    "nasi_padang": {
        kategori: "Makanan Lengkap",
        kalori: "450 kcal",
        protein: "20 g",
        karbohidrat: "50 g",
        lemak: "18 g",
        manfaat: "Mengandung kombinasi karbohidrat, protein, dan lemak."
    },

    "pasta": {
        kategori: "Karbohidrat",
        kalori: "131 kcal",
        protein: "5 g",
        karbohidrat: "25 g",
        lemak: "1.1 g",
        manfaat: "Sumber energi dari karbohidrat kompleks."
    },

    "pisang": {
        kategori: "Buah",
        kalori: "89 kcal",
        protein: "1.1 g",
        karbohidrat: "23 g",
        lemak: "0.3 g",
        manfaat: "Kaya kalium dan membantu menjaga tekanan darah."
    },

    "pizza": {
        kategori: "Makanan Cepat Saji",
        kalori: "266 kcal",
        protein: "11 g",
        karbohidrat: "33 g",
        lemak: "10 g",
        manfaat: "Mengandung karbohidrat dan protein sebagai sumber energi."
    },

    "rawon": {
        kategori: "Makanan Berkuah",
        kalori: "210 kcal",
        protein: "15 g",
        karbohidrat: "8 g",
        lemak: "12 g",
        manfaat: "Mengandung protein dan berbagai rempah khas Indonesia."
    },

    "rendang": {
        kategori: "Protein Hewani",
        kalori: "468 kcal",
        protein: "22 g",
        karbohidrat: "6 g",
        lemak: "35 g",
        manfaat: "Kaya protein dan zat besi untuk tubuh."
    },

    "roti": {
        kategori: "Karbohidrat",
        kalori: "265 kcal",
        protein: "9 g",
        karbohidrat: "49 g",
        lemak: "3.2 g",
        manfaat: "Memberikan energi untuk aktivitas sehari-hari."
    },

    "sate": {
        kategori: "Protein Hewani",
        kalori: "280 kcal",
        protein: "20 g",
        karbohidrat: "8 g",
        lemak: "18 g",
        manfaat: "Membantu memenuhi kebutuhan protein harian."
    },

    "sayur": {
        kategori: "Sayuran",
        kalori: "50 kcal",
        protein: "2 g",
        karbohidrat: "10 g",
        lemak: "0.5 g",
        manfaat: "Kaya vitamin, mineral, dan serat."
    },

    "soto": {
        kategori: "Makanan Berkuah",
        kalori: "150 kcal",
        protein: "10 g",
        karbohidrat: "10 g",
        lemak: "7 g",
        manfaat: "Membantu memenuhi kebutuhan cairan dan protein."
    },

    "tahu": {
        kategori: "Protein Nabati",
        kalori: "144 kcal",
        protein: "15 g",
        karbohidrat: "3 g",
        lemak: "8 g",
        manfaat: "Sumber protein nabati yang baik untuk tubuh."
    },

    "telur": {
        kategori: "Protein Hewani",
        kalori: "155 kcal",
        protein: "13 g",
        karbohidrat: "1.1 g",
        lemak: "11 g",
        manfaat: "Mengandung protein berkualitas tinggi dan vitamin penting."
    },

    "tempe": {
        kategori: "Protein Nabati",
        kalori: "193 kcal",
        protein: "20 g",
        karbohidrat: "9 g",
        lemak: "11 g",
        manfaat: "Tinggi protein dan baik untuk kesehatan pencernaan."
    },

    "bukan_makanan": {
        kategori: "-",
        kalori: "-",
        protein: "-",
        karbohidrat: "-",
        lemak: "-",
        manfaat: "Objek yang terdeteksi bukan makanan."
    }

};

function tampilkanGrafik(info){

    const ctx =
        document.getElementById(
            "nutritionChart"
        );

    if(nutritionChart){
        nutritionChart.destroy();
    }

    nutritionChart =
        new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Protein",
                "Karbohidrat",
                "Lemak"
            ],

            datasets: [{

                label: "Kandungan (gram)",

                data: [

                    parseFloat(info.protein) || 0,
                    parseFloat(info.karbohidrat) || 0,
                    parseFloat(info.lemak) || 0

                ]
            }]
        }
    });
}

let model, webcam, labelContainer, maxPredictions;
let isRunning = false;
let lastClass = "";
let nutritionChart = null;

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

    let bestPrediction = prediction[0];

    prediction.forEach(item => {

        if(item.probability > bestPrediction.probability){
            bestPrediction = item;
        }

    });

    if(bestPrediction.probability < 0.8){
        return;
    }

    if(bestPrediction.className !== lastClass){

        tampilkanPrediksi(prediction);

        lastClass =
            bestPrediction.className;
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

    let bestPrediction = prediction[0];

    prediction.forEach(item => {

        if(item.probability > bestPrediction.probability){
            bestPrediction = item;
        }

    });

    const confidence =
        (bestPrediction.probability * 100)
        .toFixed(2);

    const className =
        bestPrediction.className
        .toLowerCase()
        .replaceAll(" ", "_");

    const info =
        foodInfo[className];

    console.log("CLASS =", className);
    console.log("INFO =", info);
    console.log("MANFAAT =", info?.manfaat);

    let hasil = `
        <div class="result-food">

            <h3>${formatNamaMakanan(bestPrediction.className)}</h3>

            <p>
                Akurasi: ${confidence}%
            </p>

        </div>
    `;

    if(info){

        tampilkanGrafik(info);

        hasil += `
            <div class="nutrition-grid">

                <div class="nutrition-card">
                    <h4>Kategori</h4>
                    <p>${info.kategori}</p>
                </div>

                <div class="nutrition-card">
                    <h4>Kalori</h4>
                    <p>${info.kalori || "-"}</p>
                </div>

                <div class="nutrition-card">
                    <h4>Protein</h4>
                    <p>${info.protein || "-"}</p>
                </div>

                <div class="nutrition-card">
                    <h4>Karbohidrat</h4>
                    <p>${info.karbohidrat || "-"}</p>
                </div>

                <div class="nutrition-card">
                    <h4>Lemak</h4>
                    <p>${info.lemak || "-"}</p>
                </div>

            </div>

            <div class="result-card">

                <h2>Manfaat</h2>

                <p>${info.manfaat}</p>

            </div>
        `;
    }

    document.getElementById(
        "label-container"
    ).innerHTML = hasil;
}

// Reset
function resetDetection(){

    if(nutritionChart){
    nutritionChart.destroy();
    nutritionChart = null;  
    }

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

function formatNamaMakanan(nama){

    return nama
        .replaceAll("_"," ")
        .replace(/\b\w/g,
            huruf => huruf.toUpperCase());
}
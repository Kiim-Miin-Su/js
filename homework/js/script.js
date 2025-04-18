const service_key = "PnJmh5NvwugSalGsPfg2xE4MNybw1VMtlTW6jvhhU8QhlUPRNP9s0dwoXRThk6fdCy9SX5535hkw5Sxf8fuxHw%3D%3D";
let map;
let markers = [];
const soul_reapers = ["이치고", "루키아", "켄파치", "히츠가야", "소이폰"];

const getRandomReaper = () => {
    return soul_reapers[Math.floor(Math.random() * soul_reapers.length)];
}

const playSound = () => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_f7a3bb020e.mp3?filename=big-impact-7057.mp3");
    audio.play();
}

const load_data = () => {
    const url = `https://apis.data.go.kr/6260000/BusanITSINC/INCList?serviceKey=${service_key}&pageNo=1&numOfRows=10&resultType=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const content = data.content;

            if (data.resultCode !== "00") {
                alert("너는 사신이 아니다...");
                return;
            }

            const items = content?.items;
            if (!items || items.length === 0) {
                alert("아직 호로가 출현하지 않았군...");
                return;
            }

            playSound(); // 💥 효과음

            // 지도 마커 초기화
            markers.forEach(marker => marker.setMap(null));
            markers = [];

            let html = `<strong>🧟‍♂️ 호로 출현 수:</strong> ${content.totalCount}<hr>`;

            items.forEach((item, index) => {
                const lat = item.lat;
                const lon = item.lot;
                const reaper = getRandomReaper();

                html += `
                    <strong>🌀 ${index + 1}번 호로</strong><br>
                    ⏰ 발생시간: ${item.ocrnDt}<br>
                    🧭 위치: ${item.incSpotNm}<br>
                    🏢 기관: ${item.instNm}<br>
                    📍 위도/경도: ${lat}, ${lon}<br>
                    🗡️ 출격 사신: <span class="saint">${reaper}</span><br>
                    <img src="./homework/images/${reaper}.jpg" alt="${reaper}" width="250" id="reapers"><br>
                    <hr>
                `;

                if (lat && lon) {
                    const position = new kakao.maps.LatLng(lat, lon);
                    const marker = new kakao.maps.Marker({
                        map: map,
                        position: position,
                        title: `${index + 1}번 호로 (${reaper})`
                    });
                    markers.push(marker);
                    if (index === 0) {
                        map.setCenter(position);
                    }
                }
            });

            document.getElementById("result").innerHTML = html;
        });
};

window.onload = function () {
    kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(35.1796, 129.0756);
        map = new kakao.maps.Map(document.getElementById("map"), {
            center: center,
            level: 6
        });
    });
};
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#reapers').forEach((img) => {
        img.classList.add('glare');
    });
});






// İnsanların məlumatlarını saxlayan array (massiv)
let insanlar = [
    { ad: "Ali", yas: 25, gozRengi: "qara", boy: 175, cins: "kişi" },
    { ad: "Leyla", yas: 30, gozRengi: "mavi", boy: 160, cins: "qadın" },
    { ad: "Mehmet", yas: 40, gozRengi: "qara", boy: 180, cins: "kişi" },
    { ad: "Aylin", yas: 22, gozRengi: "yaşıl", boy: 165, cins: "qadın" },
    { ad: "Samir", yas: 35, gozRengi: "qara", boy: 185, cins: "kişi" }
];

// Funksiya yazılır: göz rənginə əsasən insanları tapıb göstərmək
function gozRengineGoreAxtar() {
    // İstifadəçidən göz rəngini alırıq
    let GozRengi = prompt("Göz rəngini daxil edin:");

    // Göz rənginə uyğun olan insanları tapırıq
    let uygunInsanlar = insanlar.filter(insan => insan.gozRengi.toLowerCase() === GozRengi.toLowerCase());

    // Nəticələri ekranda göstəririk
    if (uygunInsanlar.length > 0) {
        console.log(`${GozRengi} göz rənginə sahib olan insanlar:`);
        uygunInsanlar.forEach(insan => {
            console.log(`Ad: ${insan.ad}, Yaş: ${insan.yas}, Boy: ${insan.boy} cm, Cins: ${insan.cins}`);
        });
    } else {
        console.log(`${GozRengi} göz rənginə sahib heç bir insan tapılmadı.`);
    }
}

// Funksiyanı işə salırıq
gozRengineGoreAxtar();




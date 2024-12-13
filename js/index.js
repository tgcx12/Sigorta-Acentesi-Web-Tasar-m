document.addEventListener("DOMContentLoaded", function () {
    // Modal başlığı ve içerik elemanlarını tanımla
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const modalElement = document.getElementById("dynamicModal");
  
    if (!modalTitle || !modalContent || !modalElement) {
      console.error("Modal öğeleri bulunamadı. Lütfen HTML yapınızı kontrol edin.");
      return;
    }
  
    // Modal açma fonksiyonu
    function openModal(title, content) {
      modalTitle.innerText = title; // Modal başlığı
      modalContent.innerHTML = content; // Modal içeriği
  
      const modal = new bootstrap.Modal(modalElement); // Bootstrap modalını oluştur
      modal.show(); // Modalı göster
    }
  
    // Her bölüm için içerik eşleştirmesi
    const data = {
      duyurular: [
        { title: "Yeni Kampanya Başladı", content: "Tüm sigorta işlemlerinde %15 indirim!<br><small>20 Aralık 2024</small>" },
        { title: "Kaza Tespit Tutanağı", content: '<embed src="pdfs/kaza_tespit.pdf" type="application/pdf" width="100%" height="400px"><br><small>1 Aralık 2024</small>' },
        { title: "Tamamlayıcı Sağlık", content: "Ailenizin sağlığını güvenceye alın!<br><small>15 Aralık 2024</small>" },
        { title: "Sigorta Günü Etkinliği", content: "Katılım için hemen kayıt yaptırın.<br><small>10 Aralık 2024</small>" },
        { title: "Hediye Çekilişi", content: "Sosyal medya üzerinden çekiliş başladı!<br><small>25 Aralık 2024</small>" }
      ],
      firsatlar: [
        { title: "Kasko Sigortasında %20 İndirim", content: "Aracınızı güvence altına alın!<br><small>18 Aralık 2024</small>" },
        { title: "Sağlık Paketinde Özel Fırsat", content: "Sınırlı sayıda sağlık paketinde indirim.<br><small>12 Aralık 2024</small>" },
        { title: "Fiyat Karşılaştırma", content: "Sitemizde tüm sigorta fiyatlarını karşılaştırın.<br><small>14 Aralık 2024</small>" },
        { title: "Kasko Hediyesi", content: "Yıllık kasko yaptıranlara özel fırsat.<br><small>22 Aralık 2024</small>" },
        { title: "Erken Başvuru", content: "Erken başvuru yapanlara özel fırsat.<br><small>20 Aralık 2024</small>" }
      ],
      kampanyalar: [
        { title: "DASK Kampanyası", content: "Deprem sigortasında özel fiyatlar.<br><small>10 Aralık 2024</small>" },
        { title: "Hayat Sigortası Hediyesi", content: "1 yıllık sigorta yaptıranlara özel.<br><small>1 Aralık 2024</small>" },
        { title: "Konut Sigortasında İndirim", content: "Evinizi korumak için özel indirim.<br><small>15 Aralık 2024</small>" },
        { title: "Yaz Kampanyası", content: "Sezonluk sigorta paketlerinde indirim.<br><small>5 Aralık 2024</small>" },
        { title: "Aile Sigortası", content: "Ailenizi güvenceye alın, özel fiyatlarla.<br><small>18 Aralık 2024</small>" }
      ]
    };
  
    // İçeriklere tıklama olaylarını ekleme
    function addClickEvents(sectionId, items) {
      const section = document.getElementById(sectionId);
      if (!section) {
        console.error(`Bölüm bulunamadı: ${sectionId}`);
        return;
      }
  
      const paragraphs = section.querySelectorAll("p");
      paragraphs.forEach((paragraph, index) => {
        paragraph.addEventListener("click", function () {
          const item = items[index];
          openModal(item.title, item.content);
        });
      });
    }
  
    // Duyurular, fırsatlar ve kampanyalar için olayları ekle
    addClickEvents("duyurular", data.duyurular);
    addClickEvents("firsatlar", data.firsatlar);
    addClickEvents("kampanyalar", data.kampanyalar);
  });
  
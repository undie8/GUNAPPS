// config.js - ไฟล์เก็บการตั้งค่าส่วนกลาง
// เปลี่ยน URL ตรงนี้แค่ที่เดียว แล้วทุกไฟล์จะเปลี่ยนตามครับ

const CONFIG = {
    // วาง URL ที่ได้จากการ Deploy Google Apps Script ล่าสุดที่นี่
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwR_cBHWL8aCktDnTQdNYtsNSEY5GnEmLunu343-WhAHJkSnrELMw2QvkQz0nbRGe9c/exec"
};
// ==========================================
// AUTO FAVICON INJECTOR (รูปตัว G)
// ==========================================
(function() {
    // สร้างรูปตัว G (พื้นหลังสีดำ ตัว G สีขาว)
    const iconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect width="512" height="512" rx="100" fill="#0f172a"/> 
        <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="350" fill="#22c55e">G</text>
    </svg>
    `;

    // แปลง SVG เป็น URL
    const iconUrl = "data:image/svg+xml," + encodeURIComponent(iconSVG);

    // หาแท็ก icon เดิม (ถ้ามี) หรือสร้างใหม่
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    
    // ยัดรูปตัว G ใส่เข้าไป
    link.href = iconUrl;
})();
(function() {
    const currentTitle = document.title;
    // ถ้าชื่อเดิมยังไม่มีคำว่า GBase ให้เติมเข้าไปข้างหน้า
    if (!currentTitle.includes("GBase")) {
        // ดึงชื่อแอปเดิมมา แล้วต่อท้าย GBase - 
        document.title = "GBase - " + currentTitle;
    }
})();

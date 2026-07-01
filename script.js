// ตรวจสอบเมื่อ DOM โหลดโครงสร้างเสร็จสิ้น
document.addEventListener("DOMContentLoaded", () => {
    
    const navbar = document.querySelector(".navbar");

    // ลูกเล่นที่ 1: เปลี่ยนรูปแบบแถบเมนูเมื่อมีการ Scroll หน้าจอลงมา
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0";
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 31, 63, 0.2)";
        } else {
            navbar.style.padding = "15px 0";
            navbar.style.backgroundColor = "#ffffff";
            navbar.style.boxShadow = "0 4px 15px rgba(0, 31, 63, 0.1)";
        }
    });

    // ลูกเล่นที่ 2: ดักจับการคลิกลิงก์เมนูเพื่อให้เลื่อนหน้าจอ (Smooth Scroll) อย่างแม่นยำ
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // คำนวณความสูงของ Navbar เพื่อไม่ให้บังหัวข้อตอนเลื่อนไปถึง
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

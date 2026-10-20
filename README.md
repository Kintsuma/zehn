# Zehn 2.1

## Yangi: til testlari va ism-familiya

Til testlari bo‘limida English, Русский va O‘zbekcha tillaridan biri tanlanadi. Har birida so‘z qo‘yish, so‘z topish, so‘zlar ketma-ketligi, tinish belgilari va fe’l zamonlari mavjud. Har mavzuda 10 tadan, jami 150 ta original boshlang‘ich topshiriq bor. Testlar va izohlar tanlangan tilda; qolgan aql o‘yinlari hamda umumiy navigatsiya o‘zbekcha.

Ketma-ketlik mashqida so‘z bo‘laklarini bosib gap tuziladi. Joylangan bo‘lak ustiga bosib uni qaytarish yoki qayta tuzish mumkin. Rus va o‘zbek tillarida vazifada berilgan aniq sxema baholanadi, chunki boshqa tartiblar ham grammatik jihatdan mumkin.

Til testlari 10 savoldan iborat; ularda sun’iy qiyinlik darajalari yoki sprint yo‘q. To‘g‘ri javob yashil, tanlangan xato javob qizil bilan ajratiladi. Noto‘g‘ri tuzilgan gap qizil, namunaviy to‘g‘ri gap yashil ko‘rsatiladi. Til testlarining xatolari ham umumiy xatolar daftariga tushadi.

Birinchi kirishda ism va familiya majburiy. Har maydonda kamida ikki harf talab qilinadi; raqam va yaroqsiz belgilar qabul qilinmaydi. Lotin, kirill, bo‘sh joy, tire va apostrof qo‘llanadi. Ism-familiya shu brauzerda eslab qolinadi va Sozlamalarda o‘zgartiriladi. Bu mahalliy profil formasi; server orqali shaxsni tekshirish yoki parolli autentifikatsiya emas.

Ism-familiya JSON zaxira fayliga ham kiradi. Zaxira tiklashda hozir kirilgan profil almashtirilmaydi. Avvalgi V2 natijalari saqlanadi. Testlarga mos til tanlovi ham eslab qolinadi.

O‘zbek tilidagi aql mashqlari. O‘rnatish yoki ro‘yxatdan o‘tish shart emas.

## Ishga tushirish

`Zehn.html` — hamma kodi bitta faylda joylashgan versiya. Uni brauzerda oching.

ZIP arxivdagi `index.html` ham ishlaydi; `app.js`, `engine.js`, `questions.js` va `style.css` fayllarini uning yonida qoldiring. Saytni istalgan statik hostingga ham qo‘yish mumkin. Asosiy funksiyalar internet talab qilmaydi; Google Fonts yuklanmasa tizim shrifti ishlatiladi.

## O‘yinlar

1. Tezkor hisob: qo‘shish, ayirish, ko‘paytirish, bo‘lish, foiz va amallar tartibi.
2. Xotira kartalari: 6, 8 yoki 10 juftni topish.
3. Mantiq laboratoriyasi: shartli xulosa, narx, tezlik, nisbat va kundalik vaziyatlar.
4. Yashirin qonuniyat: qo‘shish/ayirish, nisbat, o‘suvchi farqlar, ikki oldingi son yig‘indisi va almashuvchi ketma-ketliklar.
5. Diqqat radari: o‘xshash belgilar orasidagi farq.
6. Teskari xotira: 3–7 raqamni ko‘rib, teskari tartibda kiritish.
7. Rang va so‘z: ma’no va yozuv rangini ajratish. Qiyin darajada javob qoidasi almashadi.
8. Kataklar xaritasi: 3×3 yoki 4×4 maydondagi ko‘rsatilgan kataklarni eslab tiklash.

Har bir o‘yinda 3 daraja mavjud. Daraja qiyinlashganda misol hajmi, qoida, eslab qolish uzunligi yoki ko‘rish vaqti o‘zgaradi.

## Rejim va yordamlar

- Erkin mashq: 8 savol; teskari xotira va kataklarda 5 bosqich. Kartalarda barcha juftlar topilguncha davom etadi.
- 60 soniyalik sprint: hisob, mantiq, ketma-ketlik, diqqat va rang-so‘z uchun. Vaqt tugaganda berilgan javoblar asosida yakunlanadi.
- Kunlik ekspeditsiya: kun davomida bir xil bo‘lgan, har kuni yangilanadigan 5 aralash savol. Birinchi to‘liq yakun +50 XP. Takrorlashda qo‘shimcha kunlik bonus berilmaydi.
- Savollarda izoh va yordam. Yordam olinsa shu javob balli yarmiga tushadi.
- Pauza va sahifa yashirilganda avtomatik pauza. Pauza vaqti faol vaqtga qo‘shilmaydi.
- Klaviatura: 1–4 javob, Enter keyingi bosqich, Escape pauza/qaytish.
- Xatolar daftari: noto‘g‘ri javoblangan savollar izohi bilan saqlanadi. Qayta ishlash rejimida to‘g‘ri yechilgan savol daftardan chiqadi. Maxsus xotira o‘yinlari bu daftarga kiritilmaydi.

## Natijalar

To‘g‘ri javob: 20 × daraja (1–3). Ketma-ket uchinchi va keyingi to‘g‘ri javobga +5. Yordamdan keyingi yarim ball butun songa yaxlitlanadi. Xotira kartalarida har bir juft ochish — bir urinish; noto‘g‘ri urinish ball bermaydi va aniqlikni pasaytiradi.

Natijaga qarab daraja tavsiyasi: shu o‘yinning oxirgi 5 alohida mashqi, kamida 2 natija. 85% va yuqori bo‘lsa bir pog‘ona yuqori, 50% dan past bo‘lsa bir pog‘ona past. Kunlik va qayta ishlash natijalari tavsiyaga qo‘shilmaydi. Tavsiya qoidaga asoslangan, sun’iy intellekt emas.

Shaxsiy rekord faqat bir xil o‘yin, rejim va daraja bilan solishtiriladi. Ko‘nikma foizlari o‘yin aniqligi bo‘lib, IQ yoki tibbiy baho emas. 6 ta yutuq belgisi, XP bosqichlari, 14 kunlik faollik va 1/3/5 ta kunlik maqsad mavjud.

## Saqlash

Ma’lumotlar faqat shu brauzer va sayt manzilida saqlanadi. V1 natijalari shu manzilda mavjud bo‘lsa V2 tomonidan o‘qiladi. Faylning joyini, brauzerni yoki sayt manzilini almashtirsangiz avtomatik ko‘chmaydi; Sozlamalarda zaxira yuklab oling va yangi joyda tiklang. Sinxronlash yoki akkaunt tizimi yo‘q.

Oxirgi 500 natija, 100 ta xato, sevimli mashqlar, rang rejimi va maqsad saqlanadi. Tajriba ballari va umumiy statistika saqlangan tarixga asoslanadi. JSON zaxira tiklash tarixga qo‘shadi va bir xil identifikatorlarni takrorlamaydi. CSV — ko‘rish/tahlil uchun; tiklash uchun JSON kerak.

Tugatilmagan mashq sahifa yangilanganda tiklanmaydi. Bu versiyada server, haqiqiy ko‘p foydalanuvchili reyting va onlayn hisob mavjud emas.

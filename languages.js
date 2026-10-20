/* Original introductory language exercises. Each topic contains 10 tasks. */
(function(root){'use strict';
 const bank={en:{
 fill:[
 ['She ___ a doctor.','is','are','am','be','Use “is” with she, he and it.'],
 ['I have ___ apple.','an','a','many','these','Use “an” before a vowel sound.'],
 ['There ___ two books on the desk.','are','is','am','be','“Two books” is plural, so use “are”.'],
 ['He goes ___ school every morning.','to','at','on','from','“Go to school” is the usual phrase for attending school.'],
 ['This is my sister. ___ name is Anna.','Her','His','Their','Our','“Her” refers to a female person.'],
 ['The keys are ___ the table, resting on its surface.','on','under','behind','between','“On” means touching the top surface.'],
 ['I am hungry. I want something to ___.','eat','sleep','walk','listen','We eat food when we are hungry.'],
 ['We need ___ water; the bottle is empty.','some','many','a','an','Water is uncountable; “some water” is correct.'],
 ['My brother is taller ___ me.','than','then','that','to','Comparatives use “than”.'],
 ['You ___ stop when the traffic light is red.','must','might','would','could','“Must” expresses a strong obligation here.']
 ],
 find:[
 ['Which word means the opposite of “hot”?','cold','warm','sunny','dry'],
 ['Which word means the same as “big”?','large','tiny','short','narrow'],
 ['Which word means “a person who teaches”?','teacher','driver','farmer','singer'],
 ['Which word names a place where you borrow books?','library','hospital','airport','bakery'],
 ['Which word means the opposite of “early”?','late','soon','quick','first'],
 ['Which word names a young dog?','puppy','kitten','calf','chick'],
 ['Which word means the opposite of “empty”?','full','open','clean','wide'],
 ['Which word means the same as “begin”?','start','finish','stop','close'],
 ['Which word means “a person who treats sick people”?','doctor','pilot','artist','cook'],
 ['Which word means the opposite of “difficult”?','easy','hard','heavy','slow']
 ],
 order:['I|read|a book','She|likes|music','We|learn|English','They|play|football','He|drinks|water','My mother|cooks|dinner','The children|watch|a film','You|speak|Russian','Anna|writes|a letter','My brother|rides|a bicycle'],
 punctuation:[
 ['Choose the correctly punctuated direct question.','Where do you live?','Where do you live.','Where do you live,','Where, do you live.','A direct question ends with a question mark.'],
 ['Choose the sentence with the correct possessive apostrophe for one girl.','The girl’s bag is blue.','The girls bag is blue.','The girls’ bag is blue.','The girl,s bag is blue.','“Girl’s” means belonging to one girl.'],
 ['Choose the correct contraction of “do not”.','don’t','do’nt','dont’','dont','The apostrophe marks the omitted letter in “do not”.'],
 ['Choose the sentence that correctly separates three items in a list.','I bought apples, pears and plums.','I bought apples pears and plums.','I, bought apples pears and plums.','I bought, apples pears and plums.','Separate the first two items with a comma.'],
 ['Choose the sentence with the person being addressed separated correctly.','Anna, please open the door.','Anna please, open the door.','Anna please open, the door.','Anna please open the, door.','A name used in direct address is separated by a comma.'],
 ['Choose the correctly punctuated statement.','The lesson starts at nine.','The lesson starts at nine,','The lesson starts at nine:','The lesson starts at nine;','An ordinary complete statement ends with a full stop.'],
 ['Choose the correctly punctuated direct question.','Are you ready?','Are you ready.','Are, you ready.','Are you, ready.','Use a question mark for a direct question.'],
 ['Choose the correct contraction of “it is”.','it’s','its','its’','i’ts','“It’s” means “it is”; “its” is possessive.'],
 ['Choose the sentence with correct capital letters and a full stop.','My name is Tom.','my name is Tom.','My name is tom.','my name is tom.','Begin the sentence and a person’s name with capitals.'],
 ['Choose the correct possessive form for one boy.','the boy’s bicycle','the boys bicycle','the boys’ bicycle','the boy,s bicycle','The singular possessive is “boy’s”.']
 ],
 tenses:[
 ['Choose the present simple form: She ___ to school every day.','goes','go','going','gone','A regular habit with “she” uses “goes”.'],
 ['Choose the present continuous form: Look! They ___ football.','are playing','play','played','have played','An action happening now uses “are + -ing”.'],
 ['Choose the past simple form: Yesterday, I ___ my grandmother.','visited','visit','am visiting','will visit','“Yesterday” refers to a finished past time.'],
 ['Choose the future form with “will”: Tomorrow, we ___ the museum.','will visit','visited','visits','are visited','“Will + base verb” forms the simple future.'],
 ['Choose the present perfect form: She ___ just ___ her homework.','has / finished','have / finish','is / finish','did / finished','Present perfect: “has + past participle”.'],
 ['Choose the past simple form: He ___ a new bike last week.','bought','buys','buy','is buying','The past simple of “buy” is “bought”.'],
 ['Choose the present continuous form: I ___ a book right now.','am reading','read','reads','have read','Use “am reading” for an action in progress now.'],
 ['Choose the present simple form: Water ___ at 100°C at standard pressure.','boils','is boiling','boiled','has boiled','General facts usually use the present simple.'],
 ['Choose the past continuous form: At eight yesterday evening, they ___ dinner.','were eating','are eating','eat','have eaten','An action in progress at a past time: “were + -ing”.'],
 ['Choose the correct past simple negative: I ___ the film yesterday.','did not watch','do not watch','did not watched','am not watching','After “did not”, use the base form “watch”.']
 ]},ru:{
 fill:[
 ['Я ___ в школе.','учусь','учится','учишься','учатся','С местоимением «я» употребляется форма «учусь».'],
 ['Это моя мама. ___ зовут Анна.','Её','Его','Их','Нас','О женщине говорят «её зовут».'],
 ['У меня есть два ___.','карандаша','карандаш','карандаши','карандашом','После числительного «два» здесь нужна форма «карандаша».'],
 ['Мы идём ___ школу.','в','на','из','от','Направление движения: «идти в школу».'],
 ['Книга лежит ___ столе.','на','в','под','между','Правильно: «на столе».'],
 ['Он читает интересную ___.','книгу','книга','книге','книгой','Глагол «читает» требует здесь винительного падежа: книгу.'],
 ['Сегодня очень холодно, надень ___.','пальто','сандалии','шорты','купальник','Пальто — верхняя одежда для холодной погоды.'],
 ['Это ___ брат.','мой','моя','моё','мои','Слово «брат» мужского рода: «мой брат».'],
 ['Утром мы завтракаем, а вечером ___.','ужинаем','завтракаем','обедаем','просыпаемся','Вечерний приём пищи — ужин.'],
 ['Я живу ___ Ташкенте.','в','на','из','к','Место проживания: «в Ташкенте».']
 ],
 find:[
 ['Найдите антоним слова «горячий».','холодный','тёплый','жаркий','сухой'],
 ['Найдите синоним слова «большой».','огромный','маленький','узкий','низкий'],
 ['Как называют человека, который лечит больных?','врач','учитель','водитель','певец'],
 ['Где можно взять книги для чтения домой на время?','в библиотеке','в аэропорту','в больнице','в пекарне'],
 ['Найдите антоним слова «рано».','поздно','скоро','быстро','сначала'],
 ['Как называют детёныша кошки?','котёнок','щенок','телёнок','цыплёнок'],
 ['Найдите антоним слова «пустой».','полный','открытый','чистый','широкий'],
 ['Найдите синоним глагола «начать».','приступить','закончить','остановиться','завершить'],
 ['Как называют человека, который учит детей в школе?','учитель','повар','врач','лётчик'],
 ['Найдите антоним слова «трудный».','лёгкий','тяжёлый','сложный','медленный']
 ],
 order:['Я|читаю|книгу','Она|любит|музыку','Мы|изучаем|русский язык','Они|играют|в футбол','Он|пьёт|воду','Мама|готовит|ужин','Дети|смотрят|фильм','Ты|учишь|новые слова','Анна|пишет|письмо','Брат|рисует|картину'],
 punctuation:[
 ['Выберите правильно оформленный прямой вопрос.','Где ты живёшь?','Где ты живёшь.','Где ты живёшь,','Где, ты живёшь.','Прямой вопрос заканчивается вопросительным знаком.'],
 ['Выберите предложение с правильно выделенным обращением.','Мама, я дома.','Мама я, дома.','Мама я дома,','Мама я дома.','Обращение «мама» отделяется запятой.'],
 ['Где правильно разделены однородные члены?','В саду растут яблони, груши и сливы.','В саду растут яблони груши и сливы.','В саду, растут яблони груши и сливы.','В саду растут, яблони груши и сливы.','Между однородными членами без союза нужна запятая.'],
 ['Выберите вариант с запятой перед «но».','Я хотел прийти, но заболел.','Я хотел, прийти но заболел.','Я хотел прийти но, заболел.','Я хотел прийти но заболел.','Перед противительным союзом «но» ставится запятая.'],
 ['Выберите правильно оформленный прямой вопрос.','Ты готов?','Ты готов.','Ты, готов.','Ты готов,','Вопросительный знак обозначает прямой вопрос.'],
 ['Выберите вариант с правильно выделенным обращением.','Анна, открой дверь.','Анна открой, дверь.','Анна открой дверь,','Анна открой дверь.','Имя, использованное как обращение, отделяется запятой.'],
 ['Выберите обычное повествовательное предложение с точкой.','Урок начинается в девять.','Урок начинается в девять,','Урок начинается в девять:','Урок начинается в девять;','Законченное повествовательное предложение завершается точкой.'],
 ['Выберите вариант с правильным оформлением слов «да» и «я согласен».','Да, я согласен.','Да я, согласен.','Да я согласен,','Да я согласен.','Утвердительное «да» отделяется запятой.'],
 ['Выберите вариант с запятой перед «а».','Летом тепло, а зимой холодно.','Летом, тепло а зимой холодно.','Летом тепло а, зимой холодно.','Летом тепло а зимой холодно.','Перед противительным союзом «а» нужна запятая.'],
 ['Выберите предложение с правильными заглавными буквами и точкой.','Меня зовут Анна.','меня зовут Анна.','Меня зовут анна.','меня зовут анна.','Предложение и имя человека начинаются с заглавной буквы.']
 ],
 tenses:[
 ['Выберите форму настоящего времени: Сейчас я ___ книгу.','читаю','читал','буду читать','прочитаю','«Читаю» обозначает действие в настоящем времени.'],
 ['Выберите форму прошедшего времени: Вчера она ___ письмо.','написала','напишет','пишет','будет писать','«Написала» — прошедшее время, женский род.'],
 ['Выберите форму будущего времени глагола «читать»: Завтра я ___.','буду читать','читал','читаю','читающий','Будущее время несовершенного вида: «буду + инфинитив».'],
 ['Выберите настоящее время: Каждый день мы ___ в школу.','ходим','ходили','будем ходить','пошли','«Ходим» здесь обозначает регулярное действие в настоящем.'],
 ['Выберите прошедшее время: В прошлом году они ___ в Самарканде.','жили','живут','будут жить','поживут','Прошедший год требует здесь формы прошедшего времени.'],
 ['Выберите будущее время: Через час он ___ домой.','придёт','пришёл','приходит','приходил','«Придёт» обозначает будущее действие.'],
 ['Какое время у глагола «играла»?','прошедшее','настоящее','будущее','время не выражено','Форма «играла» с суффиксом -л- обозначает прошедшее время.'],
 ['Какое время у формы «будем работать»?','будущее','прошедшее','настоящее','время не выражено','«Будем + инфинитив» — составное будущее время.'],
 ['Выберите настоящее время: Сейчас дети ___ в парке.','играют','играли','будут играть','поиграют','«Играют» — форма настоящего времени.'],
 ['Выберите прошедшее время: Вчера мы ___ фильм.','посмотрели','смотрим','посмотрим','будем смотреть','«Посмотрели» обозначает завершённое действие в прошлом.']
 ]},uz:{
 fill:[
 ['Men har kuni maktabga ___.','boraman','boradi','borasan','borasiz','«Men» bilan birinchi shaxs birlik shakli ishlatiladi: boraman.'],
 ['Bu mening onam. ___ ismi Dilnoza.','Uning','Mening','Sening','Bizning','Gap onaga tegishli ism haqida: «uning ismi».'],
 ['Menda ikkita ___ bor.','qalam','qalamlar','qalamni','qalamga','Sanoq sonidan keyingi ot odatda birlik shaklda keladi.'],
 ['Men kitob___ o‘qidim.','ni','ga','dan','ning','Aniq to‘ldiruvchi tushum kelishigi -ni qo‘shimchasini oladi.'],
 ['Qushlar osmonda ___.','uchadi','suzadi','yuradi','o‘sadi','Qushlarning havodagi harakati «uchadi» bilan ifodalanadi.'],
 ['Biz maktab___ ketyapmiz.','ga','ni','ning','dan','Yo‘nalish jo‘nalish kelishigi -ga bilan ifodalanadi.'],
 ['Bugun havo sovuq. Issiq ___ kiy.','palto','shortik','shippak','cho‘milish kiyimi','Palto sovuq havoda kiyiladigan ustki kiyimdir.'],
 ['Men Toshkent___ yashayman.','da','ga','ni','dan','Yashash joyi o‘rin-payt kelishigi -da bilan ifodalanadi.'],
 ['Tongda quyosh sharqdan ___.','chiqadi','botadi','oqadi','yog‘adi','Quyoshning tonggi ko‘rinishi «chiqadi» bilan ifodalanadi.'],
 ['Ustoz bizga yangi mavzuni ___.','tushuntirdi','tingladi','uxladi','yugurdi','Mavzuni izohlab berish — tushuntirish.']
 ],
 find:[
 ['«Issiq» so‘zining zid ma’nolisini toping.','sovuq','iliq','quruq','yorug‘'],
 ['«Katta» so‘zining ma’nodoshini toping.','ulkan','kichik','tor','past'],
 ['Bemorlarni davolaydigan kasb egasini toping.','shifokor','o‘qituvchi','haydovchi','oshpaz'],
 ['Kitoblarni vaqtincha o‘qishga olish mumkin bo‘lgan joyni toping.','kutubxona','shifoxona','aeroport','novvoyxona'],
 ['«Erta» so‘zining zid ma’nolisini toping.','kech','tez','yaqin','avval'],
 ['«Go‘zal» so‘zining ma’nodoshini toping.','chiroyli','xunuk','qattiq','sokin'],
 ['«Bo‘sh» so‘zining «to‘ldirilmagan» ma’nosiga zid so‘zni toping.','to‘la','ochiq','toza','keng'],
 ['«Boshlamoq» so‘zining zid ma’nolisini toping.','tugatmoq','kirishmoq','ochmoq','yaratmoq'],
 ['Bolalarga maktabda dars beradigan kishini toping.','o‘qituvchi','oshpaz','uchuvchi','sotuvchi'],
 ['«Qiyin» so‘zining zid ma’nolisini toping.','oson','og‘ir','murakkab','sekin']
 ],
 order:['Men|kitob|o‘qiyman','U|musiqa|tinglaydi','Biz|ingliz tilini|o‘rganamiz','Ular|futbol|o‘ynaydi','Akmal|suv|ichadi','Onam|ovqat|pishiradi','Bolalar|film|ko‘radi','Sen|yangi so‘zlarni|yodlaysan','Dilnoza|xat|yozadi','Akam|rasm|chizadi'],
 punctuation:[
 ['To‘g‘ri yozilgan bevosita so‘roq gapni tanlang.','Sen qayerda yashaysan?','Sen qayerda yashaysan.','Sen qayerda yashaysan,','Sen, qayerda yashaysan.','So‘roq gap oxiriga so‘roq belgisi qo‘yiladi.'],
 ['Undalma to‘g‘ri ajratilgan gapni toping.','Ona, men keldim.','Ona men, keldim.','Ona men keldim,','Ona men keldim.','«Ona» undalmasi vergul bilan ajratiladi.'],
 ['Uyushiq bo‘laklar to‘g‘ri ajratilgan gapni tanlang.','Bog‘da olma, nok va o‘rik bor.','Bog‘da olma nok va o‘rik bor.','Bog‘da, olma nok va o‘rik bor.','Bog‘da olma nok, va o‘rik bor.','Bog‘lovchisiz kelgan birinchi ikki uyushiq bo‘lak orasiga vergul qo‘yiladi.'],
 ['«Lekin» oldidagi vergul to‘g‘ri qo‘yilgan gapni toping.','Men bordim, lekin u yo‘q edi.','Men, bordim lekin u yo‘q edi.','Men bordim lekin, u yo‘q edi.','Men bordim lekin u yo‘q edi.','Zidlov bog‘lovchisi «lekin» oldidan vergul qo‘yiladi.'],
 ['To‘g‘ri yozilgan bevosita so‘roq gapni tanlang.','Dars boshlandimi?','Dars boshlandimi.','Dars, boshlandimi.','Dars boshlandimi,','Savolni bildirgan gap so‘roq belgisi bilan tugaydi.'],
 ['Undalma to‘g‘ri ajratilgan gapni tanlang.','Aziza, eshikni och.','Aziza eshikni, och.','Aziza eshikni och,','Aziza eshikni och.','Murojaat qilinayotgan shaxs nomi vergul bilan ajratiladi.'],
 ['Nuqta bilan to‘g‘ri tugallangan darak gapni toping.','Dars soat to‘qqizda boshlanadi.','Dars soat to‘qqizda boshlanadi,','Dars soat to‘qqizda boshlanadi:','Dars soat to‘qqizda boshlanadi;','Tugallangan oddiy darak gap oxiriga nuqta qo‘yiladi.'],
 ['Tasdiq so‘zidan keyingi vergul to‘g‘ri qo‘yilgan gapni toping.','Ha, men roziman.','Ha men, roziman.','Ha men roziman,','Ha men roziman.','Tasdiqni bildirgan «ha» so‘zidan keyin vergul qo‘yiladi.'],
 ['His-hayajonni undov belgisi bilan ifodalagan gapni tanlang.','Qanday go‘zal manzara!','Qanday go‘zal manzara,','Qanday go‘zal manzara:','Qanday go‘zal manzara;','His-hayajon kuchli ifodalanganda undov belgisi ishlatiladi.'],
 ['Bosh harflar va nuqta to‘g‘ri qo‘llangan gapni toping.','Mening ismim Aziz.','mening ismim Aziz.','Mening ismim aziz.','mening ismim aziz.','Gap boshi va kishi ismi bosh harf bilan boshlanadi.']
 ],
 tenses:[
 ['Hozir davom etayotgan harakatni tanlang: Hozir men kitob ___.','o‘qiyapman','o‘qidim','o‘qimoqchiman','o‘qigan edim','-yap shakli hozir davom etayotgan harakatni bildiradi.'],
 ['O‘tgan zamonga mos shaklni tanlang: Kecha u maktabga ___.','bordi','boryapti','bormoqchi','boradi','«Kecha» o‘tgan vaqtni bildiradi; «bordi» shu vaqtga mos.'],
 ['Kelajakdagi niyatni tanlang: Ertaga men muzeyga ___.','bormoqchiman','bordim','borgan edim','borayotgan edim','-moqchi shakli kelajakdagi maqsad yoki niyatni bildiradi.'],
 ['Odatiy harakatga mos shaklni tanlang: Men har kuni erta ___.','turaman','turdim','turgan edim','turayotgan edim','«Har kuni» takroriy odatni bildiradi; hozirgi-kelasi zamon mos keladi.'],
 ['O‘tgan zamonga mos shaklni tanlang: O‘tgan yili biz Samarqandda ___.','yashadik','yashayapmiz','yashamoqchimiz','yashaymiz','«O‘tgan yili» o‘tgan vaqtni bildiradi.'],
 ['Hozir davom etayotgan harakatni tanlang: Hozir bolalar futbol ___.','o‘ynayapti','o‘ynadi','o‘ynagan edi','o‘ynamoqchi','-yap hozir davom etayotgan harakatni ko‘rsatadi.'],
 ['«Yozdi» fe’li qaysi zamonda?','o‘tgan zamon','hozirgi davom zamoni','kelasi zamon maqsad shakli','zamon ifodalanmagan','-di qo‘shimchasi bu shaklda o‘tgan zamonni bildiradi.'],
 ['«Kelyapman» shakli nimani bildiradi?','hozir davom etayotgan harakat','tugallangan o‘tgan harakat','kelajakdagi niyat','buyruq','-yap hozir davom etayotgan harakatni bildiradi.'],
 ['Oldingi niyatni emas, tugallangan o‘tgan harakatni tanlang: Kecha men xat ___.','yozdim','yozyapman','yozmoqchiman','yozaman','«Yozdim» tugallangan o‘tgan harakatni bildiradi.'],
 ['Kelasi maqsad shaklini tanlang.','o‘qimoqchiman','o‘qidim','o‘qiyapman','o‘qigan edim','-moqchi kelajakdagi maqsad yoki niyatni bildiradi.']
 ]}};
 const ui={en:{title:'Language studio',sub:'Choose a topic. Learn one small rule at a time.',fill:'Fill the gap',find:'Find the word',order:'Word order',punctuation:'Punctuation',tenses:'Verb tenses',orderPrompt:'Build the sentence in this order: subject → verb → object.',hint:'Put the subject first, then the verb, then the object.',why:'The requested order is subject → verb → object.',check:'Check sentence',clear:'Start again',select:'Tap the word groups in the correct order.',start:'Start test',correct:'Correct!',wrong:'Not quite. Let’s learn from it.',next:'Next question',finish:'View results',empty:'Use every word group before checking.',choose:'Choose the correct answer.',feedback:'Correct sentence'},ru:{title:'Языковая студия',sub:'Выберите тему. Один небольшой шаг к уверенному языку.',fill:'Вставьте слово',find:'Найдите слово',order:'Порядок слов',punctuation:'Знаки препинания',tenses:'Времена глаголов',orderPrompt:'Составьте предложение по схеме: кто → действие → что / кого.',hint:'Сначала действующее лицо, затем действие, затем объект.',why:'В этом задании требуется схема: кто → действие → объект. Другой порядок может быть грамматичным, но не соответствует заданной схеме.',check:'Проверить',clear:'Сначала',select:'Нажимайте на части предложения в нужном порядке.',start:'Начать тест',correct:'Верно!',wrong:'Есть ошибка. Разберём ответ.',next:'Следующий вопрос',finish:'Результаты',empty:'Используйте все части предложения.',choose:'Выберите правильный ответ.',feedback:'Правильное предложение'},uz:{title:'Til ustaxonasi',sub:'Mavzuni tanlang. Har bir savol bilan yangi qoida o‘rganing.',fill:'So‘z qo‘yish',find:'So‘z topish',order:'So‘zlar ketma-ketligi',punctuation:'Tinish belgilari',tenses:'Fe’l zamonlari',orderPrompt:'Gapni shu tartibda tuzing: ega → to‘ldiruvchi → kesim.',hint:'Avval ish bajaruvchi, keyin to‘ldiruvchi, oxirida harakatni bildiring.',why:'Bu topshiriqda ega → to‘ldiruvchi → kesim tartibi talab qilinadi. Boshqa tartib grammatik jihatdan mumkin bo‘lsa ham, berilgan sxemaga mos emas.',check:'Tekshirish',clear:'Qayta tuzish',select:'So‘z bo‘laklarini kerakli tartibda bosing.',start:'Testni boshlash',correct:'To‘g‘ri!',wrong:'Xato bor. Yechimni ko‘rib olaylik.',next:'Keyingi savol',finish:'Natijani ko‘rish',empty:'Avval barcha so‘z bo‘laklarini joylashtiring.',choose:'To‘g‘ri javobni tanlang.',feedback:'To‘g‘ri gap'}};
 const names={en:'English',ru:'Русский',uz:'O‘zbekcha'},topics=['fill','find','order','punctuation','tenses'];
 function question(locale,topic,index,r){const E=root.ZehnEngine,list=bank[locale][topic],item=list[((index%list.length)+list.length)%list.length],t=ui[locale];if(topic==='order'){const order=item.split('|'),correct=order.join(' ')+'.',options=E.shuffle([correct,[order[1],order[0],order[2]].join(' ')+'.',[order[2],order[1],order[0]].join(' ')+'.',[order[0],order[2],order[1]].join(' ')+'.'],r);return{q:t.orderPrompt,options,answer:options.indexOf(correct),order,locale,why:t.why,hint:t.hint}}
 const options=E.shuffle(item.slice(1,5),r);return{q:item[0],options,answer:options.indexOf(item[1]),locale,why:item[5]||(locale==='en'?`The correct word is “${item[1]}”.`:locale==='ru'?`Правильный ответ: «${item[1]}».`:`To‘g‘ri javob — «${item[1]}».`),hint:locale==='en'?'Read the whole sentence and look for clues.':locale==='ru'?'Прочитайте предложение целиком и найдите подсказку в контексте.':'Gapni to‘liq o‘qing va ma’no hamda grammatik shaklga e’tibor bering.'};}
 root.ZehnLanguages={bank,ui,names,topics,question,games:Object.keys(names).flatMap(locale=>topics.map((topic,i)=>({id:`lang_${locale}_${topic}`,locale,topic,name:ui[locale][topic]+' · '+names[locale],cat:'Til testlari',icon:['Aa','⌕','⇄','?!','◷'][i],art:[locale.toUpperCase(),['___','?','⇄',',','t'][i]],desc:ui[locale].choose,detail:locale==='en'?'10 questions. Read the prompt, answer and learn from the explanation.':locale==='ru'?'10 заданий. Прочитайте условие, ответьте и изучите объяснение.':'10 topshiriq. Shartni o‘qing, javob bering va yechimni tushunib oling.',isNew:true})))};
})(globalThis);

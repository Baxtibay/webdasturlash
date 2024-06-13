const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Kim birinshi programmist atı menen tariyxda qalǵan?",
    a: "Ada Lavs",
    b: "Algol",
    c: "Fon Neyman",
    d: "Paskal"
  },
  {
    quostion: "Elektron esaplaw mashinalarınıń teoriyalıq tiykarları kim tárepinen islep shıǵılǵan?",
    a: "Jon fon Neyman ",
    b: "Jan Atanasov",
    c: "Stiv Jobs",
    d: "Bill Geyts"
  },
  {
    quostion: "Bebbidjdiń analitikalıq mashinası esaplaw nátiyjelerin qaerge shıǵarıwı mólsherlengen edi?",
    a: "perfolentaǵa",
    b: "ekranǵa ",
    c: "shıǵarıw apparatına ",
    d: "perfokartaǵa"
  },
  {
    quostion: "Perfokarta-bul… ",
    a: "kartanıń málim jaylarında teciklerdiń bar ekenligi yamasa joq ekenligi haqqında maǵlıwmat beretuǵın jińishke kartondan tayarlanǵan saqlaw quralı",
    b: "paydalanıwshılardıń máselelerin tayarlaw hám sheshiwdi avtomatlastırıw ushın mólsherlengen texnikalıq hám programmalıq qurallar kompleksi",
    c: "háripler, nomerler, irkilis belgileri hám basqa tuymesheli panel",
    d: "kompyuterde saqlanǵan tekst yamasa grafikalıq maǵlıwmatlardı qattı fizikalıq ortalıqqa, ádetde qaǵaz yamasa polimer plyonkaǵa kishi tirajlarda shıǵarıw ushın mólsherlengen kompyuterdiń periferikalıq apparatı "
  },
  {
    quostion: "ENIAK kompyuteri qashan jaratılǵan?",
    a: "1945 jıl ",
    b: "1949 jıl ",
    c: "1937-1942 jıl ",
    d: "1943 jıl "
  },
  {
    quostion: "ENIAK kompyuterinde neshe lampa bar edi?",
    a: "18000",
    b: "1200",
    c: "8000",
    d: "800"
  },
  {
    quostion: "Programmalar hám maǵlıwmatlardı saqlaw ushın bir yad boslıǵı qollanılǵan arxitektura qanday ataladı",
    a: "Fon Neyman arxitekturası ",
    b: "Garvard arxitekturası ",
    c: "Sistema arxitekturası ",
    d: "Kompyuter arxitekturası "
  },
  {
    quostion: "Birinshi áwlad kompyuterleri ne tiykarında jasalǵan?",
    a: "elektron lampalar ",
    b: "mexanik giltler",
    c: "tranzistorlar",
    d: "mikrosxemalar"
  },
  {
    quostion: "Kompyuterlerdiń ekinshi áwladı neshinshi jıldan baslap islep shıǵarıla baslanǵan?",
    a: "1955 j",
    b: "1948 j",
    c: "1960 j",
    d: "1943 j"
  },
  {
    quostion: "Ekinshi áwlad kompyuterleri ne tiykarında jasalǵan?",
    a: "tranzistorlar",
    b: "mikrosxemalar",
    c: "mexanikalıq giltler",
    d: "elektron lampalar "
  },
  {
    quostion: "Birinshi ret ekinshi áwlad kompyuteri qaysı firma tárepinen islep shıǵılǵan ",
    a: "Bell Laboratories",
    b: "Dell Computers",
    c: "Sell Machines",
    d: "Hall Digital"
  },
  {
    quostion: "Ekinshi áwladqa tiyisli birinshi kompyuter qanday atalǵan?",
    a: "TRADIC",
    b: "ENIAK",
    c: "IBM 360 ",
    d: "PDP-1"
  },
  {
    quostion: "Ekinshi áwladqa tiyisli eń ǵalabalıq kompyuterlerden birin kórsetiń",
    a: "PDP-1",
    b: "IBM 360 ",
    c: "ENIAK",
    d: "TRADIC"
  },
  {
    quostion: "Úshinshi áwlad kompyuterleri ne tiykarında qurılǵan?",
    a: "kishi mikrosxema",
    b: "lampa",
    c: "tranzistor",
    d: "úlken mikrosxema"
  },
  {
    quostion: "Úshinshi áwladqa tiyisli birinshi kompyuterdi kórsetiń",
    a: "IBM 360 ",
    b: "TRADIC",
    c: "ENIAK",
    d: "PDP-1"
  },
  {
    quostion: "Úshinshi áwladqa tiyisli birinshi kompyuter qaysı kompaniya tárepinen islep shıǵarılǵan?",
    a: "IBM",
    b: "Dell",
    c: "Bell",
    d: "DEC"
  },
  {
    quostion: "Tórtinshi áwlad kompyuterleri ne tiykarında qurılǵan?",
    a: "úlken mikrosxema",
    b: "lampa",
    c: "tranzistor",
    d: "kishi mikrosxema"
  },
  {
    quostion: "Házirgi jeke kompyuterler neshinshi áwlad kompyuterlerine tiyisli?",
    a: "ushinshi",
    b: "birinshi",
    c: "tórtinshi",
    d: "ekinshi"
  },
  {
    quostion: "Besinshi áwlad kompyuterler qaysı texnologiyalar tiykarında jaratılıwı kútilip atır?",
    a: "kvant texnologiyaları ",
    b: "veb texnologiyalar ",
    c: "bólistirilgen texnologiyalar ",
    d: "pikatexnologiyalar"
  },
  {
    quostion: "Sistemanı qanday apparat basqaradi?",
    a: "Oraylıq processor",
    b: "tok deregi",
    c: "Yad qurılmaları ",
    d: "Ana plata "
  },
  {
    quostion: "Software degende ne túsiniledi?",
    a: "kompyuterdiń programmalıq támiynatı ",
    b: "«derekti jalǵa hám isle» sisteması ",
    c: "járdemshi programma ",
    d: "kompyuterge jańa qurılmalardı jalǵaw ushın mólsherlengen programma "
  },
  {
    quostion: "SSD diskler nelerden jasaladi?",
    a: "elektron mikrosxemalardan",
    b: "polimer materiallardan ",
    c: "optikalıq ayrıqshalıqlarǵa iye materiallar ",
    d: "magnitikalıq ayrıqshalıqlarǵa iye materiallardan "
  },
  {
    quostion: "Hardware degende ne túsiniledi?",
    a: "kompyuterdiń apparat bólegi",
    b: "IBM PC kompyuterleri ushın mólsherlengen eń ataqlı sistema ",
    c: "jańa programmalardı jaratıwdı támiyinleytuǵın sistema ",
    d: "kompyuterlerdiń apparat hám programmalıq bólimlerin zamanagóylestiriw"
  },
  {
    quostion: "Kompakt disklardıń qaysılarına qayta-qayta jazıw múmkin?",
    a: "CD RW",
    b: "CD R",
    c: "CDROM",
    d: "hámmesine"
  },
  {
    quostion: "Kompakt disklardıń qaysısına tek bir ret jazıw múmkinshiligi bar?",
    a: "CD R",
    b: "CD ROM",
    c: "CDRW",
    d: "hámmesine"
  },
  {
    quostion: "Chipset nege xızmet qıladı?",
    a: "tiykarǵı plata jaratıw ushın ",
    b: "tez yad jıynaw ushın ",
    c: "videoprocessor platasın jıynaw ushın ",
    d: "programmalıq támiynattı basqarıw ushın "
  },
  {
    quostion: "Qaysı qurılmalar ádetde tiykarǵı plataǵa jaylastırılǵan boladı: 1) dawıs platası; 2) jergilikli tarmaq platası; 3) operativ yad?",
    a: "1 hám 2",
    b: "1 hám 3",
    c: "2 hám 3",
    d: "3"
  },
  {
    quostion: "Maǵlıwmatlardı izbe-iz uzatıwshı universal shinani kórsetiń",
    a: "USB ",
    b: "ISA",
    c: "EISA",
    d: "PCI "
  },
  {
    quostion: "Dawıs kartası ádetde qayda jaylasqan boladı?",
    a: "ishki",
    b: "sırtqı",
    c: "jaylastırılǵan",
    d: "qoshımsha"
  },
  {
    quostion: "DVD ROM apparatı ádetde qayerde jaylasqan boladı?",
    a: "ishki",
    b: "sırtqı",
    c: "jaylastırılǵan",
    d: "qoshımsha"
  },
  {
    quostion: "Printer qanday qurılma esaplanadı?",
    a: "sırtqı",
    b: "ishki",
    c: "jaylastırılǵan",
    d: "tiykarǵan"
  },
  {
    quostion: "Gaptoklon-bul…",
    a: "bul olarǵa qol menen tiyiwge múmkinshilik beretuǵın anıq zatlardı jaratıw joybarı",
    b: "kompyuterde saqlanǵan tekst yamasa grafikalıq maǵlıwmatlardı qattı fizikalıq ortalıqqa, ádetde qaǵaz yamasa polimer plyonkaǵa kishi tirajlarda shıǵarıw ushın mólsherlengen kompyuterdiń periferikalıq apparatı ",
    c: "ob'ektti (ádetde súwret, tekst) analiz etip, onıń cifrlı súwretin jaratatuǵın kirisiw úskenesi",
    d: "Bul ámeliy-logikalıq ámellerdi atqaratuǵın qurılma "
  },
  {
    quostion: "Háripler, nomerler, irkilis belgileri hám basqa knopkalı panel-bul…",
    a: "klaviatura",
    b: "monitor",
    c: "printer",
    d: "djoystik"
  },
  {
    quostion: "Jeke kompyuterlerdi basqarıw sisteması túrlerin sanap beriń?",
    a: "software hám hardware",
    b: "Kompyuter qurılmaları Monıtor, sistemalı blok, klaviatura, mıshka",
    c: "Sistemalı blok apparatları ",
    d: "Arifmetikalıq qurılma, basqarıw qurılma, sırtqı qurılma, operativ yad "
  },
  {
    quostion: "Jeke kompyuterler ushın mólsherlengen qatlamlardıń qanday túrlerin bilesiz? ",
    a: "gorizontal (desktop) hám vertikal (tower) túrleri",
    b: "ishki hám sırtqı ",
    c: "rolikli hám planshetli",
    d: "matricalı, sıyalı hám lazerli"
  },
  {
    quostion: "Plotter ne ushın mólsherlengen?",
    a: "grafikalıq informaciyanı qaǵazǵa shıǵarıw ushın ",
    b: "kompyuterge qaǵaz betindegi súwretti skanerlew ushın ",
    c: "kompyuterge informaciyanı kiritiw ushın ",
    d: "qálegen túrdegi informaciyalardı qaǵazǵa shıǵarıw ushın "
  },
  {
    quostion: "Printerlerdiń qanday túrlerin bilesiz?",
    a: "matricali, sıyalı hám lazerli ",
    b: "ishki hám sırtqı ",
    c: "rolikli hám planshetli",
    d: "gorizontal (desktop) hám vertikal (tower"
  },
  {
    quostion: "Diskovod - bul... ?",
    a: "Sırtqı qurılmadaǵı maǵlıwmattı oqıw/jazıw apparatı ",
    b: "Programmada atqarılatuǵın buyrıqlardı saqlaw apparatı ",
    c: "Maǵlıwmatlardı uzaq waqıt saqlaw apparatı ",
    d: "Atqarılatuǵın programmada buyrıqlardı qayta islew apparatı"
  },
  {
    quostion: "Bir bitli yad elementi degende ne túsiniledi?",
    a: "trigger",
    b: "Registr",
    c: "AND-elementi",
    d: "NOT-elementi"
  },
  {
    quostion: "Cifrlı logikalıq júzesiniń obiektleri qanday ataladı?",
    a: "ventillar",
    b: "triggerlar",
    c: "registrlar",
    d: "komparatorlar"
  },
  {
    quostion: "Gruppaǵa birlestirilgen triggerlar járdeminde ne payda etiledi?",
    a: "Registr",
    b: "AND-elementi",
    c: "komparator",
    d: "Invertor"
  },
  {
    quostion: "Elektron esaplaw mashinaları haqqındaǵı qaysı tastıyqlar tuwrı: 1) olar elektr quwatı menen isleydi;2) olar elektron ásbaplar tiykarında jasaladı? ",
    a: "1 ham 2",
    b: "2",
    c: "1",
    d: "hesh biri emes"
  },
  {
    quostion: "Elektron esaplaw mashinaları qaysı sanaq sisteması tiykarında isleydi?",
    a: "ekilik",
    b: "onlıq",
    c: "on altılıq ",
    d: "otız ekilik"
  },
  {
    quostion: "Programmanı tolıq analiz etip, keyin orınlaw ushın kompyuter yadına jazatuǵın sistemalı programma ne dep ataladı? ",
    a: "Translyator",
    b: "Nakladchik",
    c: "Interpretator",
    d: "Otladchik"
  },
  {
    quostion: "Kiritilgen maǵlıwmatlardan (signallardan) logikalıq operaciya nátiyjesin beretuǵın qurılma -….",
    a: "ventil",
    b: "radio",
    c: "chip",
    d: "disk"
  },
  {
    quostion: "Informaciyanıń kompyuterge tán eń kishi ólshem birligi... esaplanadı",
    a: "bit",
    b: "kilobayt",
    c: "bayt",
    d: "megabayt"
  },
  {
    quostion: "Dezyukciya degenimiz ne?",
    a: "Logikalıq qosıw ámeli ",
    b: "Logikalıq biykarlaw ",
    c: "Logikalıq kóbeytiw",
    d: "Tuwrı juwap joq "
  },
  {
    quostion: "Konyunktciya degenimiz ne?",
    a: "Logikalıq kóbeytiw",
    b: "Logikalıq biykarlaw ",
    c: "Logikalıq qosıw ámeli ",
    d: "Tuwrı juwap joq"
  },
  {
    quostion: "Cifrlı logikalıq júze, altı júzeli kompyuterlerdiń qaysı júzesine tiyisli?",
    a: "0 júzesine",
    b: "1 júzesine",
    c: "2 júzesine",
    d: "3 júzesine"
  },
  {
    quostion: "Logikalıq funkciya ózgeriwshileriniń sanı n-ga teń bolsa, bul funkciyanıń shınlıq kestesi neshe qatardan ibarat bolıwı kerek?",
    a: "2^n",
    b: "2^n+1",
    c: "2^n-1",
    d: "2^1+n"
  },
  {
    quostion: "Tórt ózgeriwshili logikalıq funksiyanıń shınlıq kestesi neshe qatardan ibarat boladı?",
    a: "16",
    b: "5",
    c: "8",
    d: "1"
  },
  {
    quostion: "Bes ózgeriwshili logikalıq funciyanıń shınlıq kestesi neshe qatardan ibarat boladı?",
    a: "32",
    b: "6",
    c: "16",
    d: "7"
  },
  {
    quostion: "Nomerlerdi málim muǵdardaǵı nomerler, belgiler menen súwretlew usılları hám qaǵıydalar kompleksi...",
    a: "Sanaq sisteması ",
    b: "Sanlar ",
    c: "Sanlar kompleksi",
    d: "Belgiler sisteması "
  },
  {
    quostion: "Sanaq sistemaların shártli túrde neshe gruppaǵa ajıratıw múmkin hám qanday?",
    a: "2 gruppa, poziciyalıq, poziciyalıq emes",
    b: "3 gruppa, poziciyalıq, poziciyalıq emes, rim cifrları",
    c: "2 gruppa, Rim cifrları hám belgiler",
    d: "Gruppaǵa bólinbeydi"
  },
  {
    quostion: "Poziciyalıq sanaq sistemaları ushın nomer bolıwı múmkin bolǵan hár bir sandaǵı poziciya …deb ataladı",
    a: "san razryadı ",
    b: "san muǵdarı",
    c: "san quwatı ",
    d: "san"
  },
  {
    quostion: "Inversiya degenimiz ne?",
    a: "Logikalıq biykarlaw ",
    b: "Logikalıq kóbeytiw",
    c: "Logikalıq qosıw ámeli ",
    d: "Tuwrı juwap joq "
  },
  {
    quostion: "Qayta konfiguraciya etiletuǵın cifrlı sxemalardı jaratıw ushın isletiletuǵın elektron komponent.",
    a: "Programmalastırılatuǵın logikalıq qurılma (PLD) ",
    b: "Takt generatorı ",
    c: "Monıtor ",
    d: "Klaviatura "
  },
  {
    quostion: "PLIS tipleri qaysı juwapta tuwrı kórsetilgen",
    a: "PAL, GAL, CPLD, FPGA",
    b: "PAL, GAL, DIMM, SIMM",
    c: "DIMM, SIMM, vLIW",
    d: "CPLD, FPGA, ADD, PUSH"
  },
  {
    quostion: "Kompyuterdiń tiykarǵı platası qanday wazıypa orınlaydı?",
    a: "kompyuterdiń basqa qurılmaların bir-biri menen baylanıstıradı ",
    b: "kompyuterdiń barlıq qurılmaların elektr kernewi menen támiyinleydi",
    c: "kompyuterdiı barlıq qurılmaların basqarıp baradı ",
    d: "kompyuterdiń barlıq qurılmaların konfliktsiz islewin támiyinleydi"
  },
  {
    quostion: "Bul arxitektura salıstırǵanda quramalı bolıp, qosımsha qanday signallardı qabıl etedi?",
    a: "Basqarıw signalların qabıl etedi",
    b: "Anolog signallar ",
    c: "Cifrlı signallar ",
    d: "Cifrlı signallar "
  },
  {
    quostion: "…sırtqı ortalıqta (monıtor ekranı, qaǵaz,...) maǵlıwmatlardı usınıw formasın (túrin) xarakteristikalaydı ",
    a: "Maǵlıwmatlar formatı ",
    b: "Maǵlıwmatlar túri",
    c: "Registr",
    d: "Informaciya"
  },
  {
    quostion: "… processordı esapqa almaǵan halda yad hám periferikalıq qurılmalar ortasında maǵlıwmat almasıw usılı",
    a: "PDP rejimi",
    b: "PDR rejimi",
    c: "PHP rejimi",
    d: "POP rejimi"
  },
  {
    quostion: "Izbe-iz interfeys…",
    a: "RS 232 C",
    b: "LTP 232 C",
    c: "PH 232 C",
    d: "LTR 232 C"
  },
  {
    quostion: "Bir USB shina kontrollerine... koncentrator shınjırı arqalı 127 qurılmalar jalǵaw múmkin",
    a: "127",
    b: "45",
    c: "65",
    d: "355"
  },
  {
    quostion: "Sistema elementleri ortasındaǵı óz-ara baylanısıwdıń quralları hám usılları kompleksiniń atı ne",
    a: "interfeys",
    b: "port ",
    c: "kontroller",
    d: "protokol "
  },
  {
    quostion: "Hár qanday kompyuterdi shólkemlestiriw neshe almasıw usılın támiyinleydi:",
    a: "4",
    b: "6",
    c: "2",
    d: "6"
  },
  {
    quostion: "Sinxron almasıw…",
    a: "Eń operativ hám bir mashina buyrıǵı ushın maǵlıwmat uzatıwdı támiyinleydi",
    b: "kompyuter hám tómen tezlikte isleytuǵın sırtqı qurılma ortasındaǵı almasıwdı programmalıq túrde sinxronlastırıwǵa múmkinshilik beredi",
    c: "processordı esapqa almaǵan halda yad hám periferikalıq qurılmalar ortasında maǵlıwmat almasıw usılı.",
    d: "Atqarılatuǵın programmada buyrıqlardı qayta islew apparatı "
  },
  {
    quostion: "Asinxron almasıw…",
    a: "kompyuter hám tómen tezlikte isleytuǵın sırtqı qurılma ortasındaǵı almasıwdı programmalıq túrde sinxronlastırıwǵa múmkinshilik beredi",
    b: "Eń operativ hám bir mashina buyrıǵı ushın maǵlıwmat uzatıwdı támiyinleydi",
    c: "processordı esapqa almaǵan halda yad hám periferikalıq qurılmalar ortasında maǵlıwmat almasıw usılı",
    d: "Atqarılatuǵın programmada buyrıqlardı qayta islew apparatı "
  },
  {
    quostion: "Operand bul ne?",
    a: "bul matematika hám programmalastırıw tillerinde operaciyanıń argumenti esaplanadı, yaǵnıy buyrıq tárepinen qayta islenetuǵın maǵlıwmatlar.",
    b: "bul esap -kitaplardıń parallelligin kórsetetuǵın uzın mashina buyrıǵına iye processor arxitekturası ",
    c: "bul nomerlerdi málim muǵdardaǵı nomerler, belgiler menen súwretlew usılları hám qaǵıydalar kompleksi",
    d: "bul olarǵa qol menen tiyiwge múmkinshilik beretuǵın anıq zatlardı jaratıw joybarı"
  },
  {
    quostion: "Operand formatları",
    a: "mánziller, nomerler, belgiler hám logikalıq maǵlıwmatlar",
    b: "mánziller, nomerler, kitaplar, yacheykalar",
    c: "yacheykalar, sanlar, qurılma ",
    d: "qurılmalar, esaplawlar "
  },
  {
    quostion: "Buyrıqlarda operandlardıń tómendegi kombinaciyaları bar…",
    a: "RR, RS, SR, RI, SI.",
    b: "RP, SS, SP, RP, SI",
    c: "RP, SI, SP, RP",
    d: "RR, SI, SP, RP"
  },
  {
    quostion: "Maǵlıwmatlar (operandlar) menen atqarılatuǵın málim bir matematikalıq yamasa logikalıq háreketti bildiriwshi buyrıq -bul",
    a: "operator ",
    b: "programma ",
    c: "trigger",
    d: "operand"
  },
  {
    quostion: "Qaysı adreslew usılı operandtı atqarılatuǵın programma ishine jaylastırıwdı óz ishine aladı?",
    a: "tuwrıdan-tuwrı adreslew ",
    b: "operand mudamı programma ishinde boladı ",
    c: "tikkeley bolmaǵan adreslew",
    d: "registrli adreslew"
  },
  {
    quostion: "Qaysı buyrıqlar shıǵıw operandın quramaydı?",
    a: "ótiw buyrıqları",
    b: "Jılısıw buyrıqları ",
    c: "logikalıq buyrıqlar ",
    d: "arifmetikalıq buyrıqlar "
  },
  {
    quostion: "Buyrıqlar kompleksi arxitekturası júzesi, altı júzeli kompyuterlerdiń qaysı júzesine tiyisli?",
    a: "2 júzesine",
    b: "4 júzesine",
    c: "5 júzesine",
    d: "3 júzesine"
  },
  {
    quostion: "Apparat tárepinen atqarılatuǵın elementar háreket",
    a: "mashina operaciyası ",
    b: "operand",
    c: "processor",
    d: "mashina sózi"
  },
  {
    quostion: "Mashina programması -bul…",
    a: "bul matematika hám programmalastırıw tillerinde operaciyanıń argumenti esaplanadı, yaǵnıy buyrıq tárepinen qayta islenetuǵın maǵlıwmatlar",
    b: "kiritilgen maǵlıwmatlardan (signallardan) logikalıq operaciya nátiyjesin beretuǵın qurılma ",
    c: "bul mashina buyrıqları izbe-izligi formasında ámelge asırılatuǵın mashqalanı sheshiw algoritmı",
    d: "maǵlıwmatlardı uzaq waqıt saqlaw apparatı "
  },
  {
    quostion: "Arifmetikalıq buyrıqlardı kórsetiń",
    a: "ADD, SUB ",
    b: "MAń, PUSH",
    c: "INC, DEC",
    d: "CMP, RST"
  },
  {
    quostion: "Tolıq buyrıqlar kompleksine iye processor arxitekturası -bul…",
    a: "CISC",
    b: "RISC",
    c: "MISC",
    d: "vLIW"
  },
  {
    quostion: "Qısqartırılǵan buyrıqlar kompleksi menen processor arxitekturası -bul…",
    a: "RISC",
    b: "CISC",
    c: "MISC",
    d: "vLIW"
  },
  {
    quostion: "Minimal buyrıqlar kompleksine iye processor arxitekturası -bul…",
    a: "MISC",
    b: "RISC",
    c: "CISC",
    d: "vLIW"
  },
  {
    quostion: "Esap -kitaplardıń parallelligin kórsetetuǵın uzın mashina buyrıǵına iye processor arxitekturası - bul…",
    a: "vLIW",
    b: "MISC",
    c: "RISC",
    d: "CISC"
  },
  {
    quostion: "Maǵlıwmatlardı kiritiw-shıǵarıw buyrıqların kórsetiń",
    a: "IN, OUT",
    b: "ADD, SUB ",
    c: "MOvE, LOAD",
    d: "INC, DEC"
  },
  {
    quostion: "Qaysı almasıw rejimi eń kóp isletiledi?",
    a: "programma almasıwı ",
    b: "yadǵa tuwrıdan-tuwrı kirisiw arqalı almasıw ",
    c: "úzilisler almasıwı ",
    d: "barlıq rejimler birdey dárejede tez-tez isletiledi"
  },
  {
    quostion: "Stack menen islew buyrıǵı qaysı buyrıqlar toparına kiredi?",
    a: "baǵdarlanǵan buyrıqları ",
    b: "arifmetikalıq buyrıqlar ",
    c: "ótiw buyrıqları ",
    d: "logokalıq buyrıqlar "
  },
  {
    quostion: "Magistral arqalı signal almasıw processine basqalarǵa qaraǵanda hálsiz tásir etedi? ",
    a: "vektorlı úzilis",
    b: "yadqa tuwrıdan-tuwrı kirisiw ",
    c: "radial úzilis ",
    d: "bunı anıq aytıw múmkin emes "
  },
  {
    quostion: "Úzilis qayta islew programmasın orınlaw programma astınan qanday parıq etedi? ",
    a: "programma astı -na shaqırıw programmist tárepinen óz programmasında kodlanǵan hám kompyuter jumısında bólek jaǵday júzege kelip, úzilis isleytuǵın mikroprocessor apparatı tárepinen shaqırıladı ",
    b: "programma astı -na shaqırıw CALL sıyaqlı buyrıqlar menen ámelge asırıladı hám úzilis isleytuǵın ótiw shártsiz ótiw buyrıqları járdeminde ámelge asırıladı ",
    c: "uzilishni qayta islew programması mudamı jańa wazıypa retinde dúziledi",
    d: "barlıq rejimler birdey dárejede tez-tez isletiledi"
  },
  {
    quostion: "Úzilis túri qanday maǵlıwmatlardı óz ishine aladı?",
    a: "uzilis deskriptorlari kestesindegi deskriptor nomeri",
    b: "uzilis sorawınıń ústinligi",
    c: "uzilis islew beretuǵın adresi",
    d: "uzilisti qayta islew programması mudamı jańa wazıypa retinde dúziledi"
  },
  {
    quostion: "Úzilis (ingl. interrupt)-ne?",
    a: "processorǵa tezlik penen itibar talap etetuǵın qandayda bir waqıya júz bergenligi tuwrısında xabar beretuǵın programmalıq támiynat yamasa apparat qurallarınan signal",
    b: "tekstli yamasa grafiklı kórinistegi maǵlıwmatlardı ekranǵa shıǵarıwshı qurılma ",
    c: "málim bir maǵlıwmat saqlanıwshı disktıń atalǵan tarawı",
    d: "bul matematika hám programmalastırıw tillerinde operaciyanıń argumenti esaplanadı, yaǵnıy "
  },
  {
    quostion: "Jılısıw kodları buyrıqları qaysı gruppaǵa tiyisli?",
    a: "logikalıq buyrıqlar ",
    b: "processordi basqarıw buyrıqları ",
    c: "arifmetikalıq buyrıqlar ",
    d: "ótiw toparın baǵdarlaw buyrıqları "
  },
  {
    quostion: "Kompyuter yadın iyerarxiyalıq kóriniste shólkemlestiriwde, iyerarxiyanıń eń joqarı bóleginde jaylasqan yadtı kórsetiń",
    a: "ishki registrler",
    b: "kesh yad ",
    c: "tiykarǵı ",
    d: "magnitli "
  },
  {
    quostion: "Kompyuter yadın iyerarxiyalıq kóriniste shólkemlestiriwde, iyerarxiyanıń ekinshi qatarında jaylasqan yadtı kórsetiń",
    a: "kesh yad ",
    b: "ishki registrlar",
    c: "tiykarǵı yad ",
    d: "magnitli disk "
  },
  {
    quostion: "Kompyuter yadın iyerarxiyalıq kóriniste shólkemlestiriwde, iyerarxiyanıń úshinshi qatarında jaylasqan yadtı kórsetiń",
    a: "tiykarǵı yad ",
    b: "ishki registrlar",
    c: "kesh yad ",
    d: "magnitli disk "
  },
  {
    quostion: "Kompyuter yadın iyerarxiyalıq kóriniste shólkemlestiriwde, iyerarxiyanıń tórtinshi qatarında jaylasqan yadtı kórsetiń",
    a: "magnitli disk ",
    b: "kesh yad ",
    c: "ishki registrlar",
    d: "tiykarǵı yad "
  },
  {
    quostion: "Kompyuter yadın iyerarxiyalıq kóriniste shólkemlestiriwde, iyerarxiyanıń besinshi qatarında jaylasqan yadtı kórsetiń",
    a: "optik disk ",
    b: "ichki registrlar",
    c: "tiykarǵı yad ",
    d: "magnitli disk "
  },
  {
    quostion: "Magnit lenta-bul",
    a: "bul ápiwayı plastik plyonka menen oralǵan magnit jazıw apparatı",
    b: "ekilemshi yad tiykarǵı yadqa qaraǵanda kóbirek kólemge iye bolǵan turaqlı yad blogı ",
    c: "bul oraylıq processor qasında jaylasqan kishi",
    d: "bul matematika hám programmalastırıw tillerinde operaciyanıń "
  },
  {
    quostion: "Tranzistorlardan tayarlanǵan yad bul….",
    a: "SRAM",
    b: "DRAM",
    c: "RISK",
    d: "CISK"
  },
  {
    quostion: "Kondensatorlardan shólkemlesken yad bul…",
    a: "DRAM",
    b: "SRAM",
    c: "RISK",
    d: "CISK"
  },
  {
    quostion: "DRAM yadınıń tiykarǵı kemshilikleri nede",
    a: "tómen tezlik",
    b: "úlken tok tutınadı ",
    c: "joqarıi baha",
    d: "kishi kólem"
  },
  {
    quostion: "Informaciyanı óshiriw hám qayta jazıw múmkin bolǵan programmalanatuǵın turaqlı yad apparatın kórsetiń",
    a: "EPROM",
    b: "PROM",
    c: "ROM",
    d: "DRAM"
  },
  {
    quostion: "Turaqlı saqlawshı qurılma qanday yad túrine kiredi? ",
    a: "Derekke baylanıslı bolmaǵan qurılma ",
    b: "Dinamikalıq ",
    c: "Derekke baylanıslı bolǵan qurılma ",
    d: "Operativ qálegen baylanısqa iye bolǵan "
  },
  {
    quostion: "Operativ sistema programması qay jerde jaylasqan?",
    a: "Turaqlı yadta ",
    b: "Kesh- yadta ",
    c: "CD- diskta ",
    d: "Processorda"
  },
  {
    quostion: "Kompyuter yadın iyerarxiyalıq kóriniste shólkemlestiriwde, iyerarxiyanıń ekinshi qatarında jaylasqan yadtı kórsetiń",
    a: "kesh yad ",
    b: "ishki registrlar",
    c: "tiykarǵı yad ",
    d: "magnitlı disk "
  },
  {
    quostion: "Turaqlı yad ushın mólsherlengen",
    a: "ózgermeytuǵın maǵlıwmatlardı saqlaw ",
    b: "informaciyanı uzaq múddetli saqlaw ",
    c: "házirgi waqıtta maǵlıwmattı qısqa múddetli ",
    d: "kompyuterdiń takt chastotası "
  },
  {
    quostion: "Programmalıq támiynat hám apparat tárepinen túrli dárejelerde isletiletuǵın yadtaǵı málim bir jayǵa silteme …",
    a: "yad adresi",
    b: "yad kólemi",
    c: "yad tezligi",
    d: "yad sıyımlıǵı"
  },
  {
    quostion: "ROM birinshi ret nechinchi jılı isletilingen?",
    a: "1966 25 avgustta ",
    b: "1965 13-aprelde",
    c: "1986 25 avgustta ",
    d: "1946 25 oktyabrde"
  },
  {
    quostion: "Elektr energiyaǵa baylanıslı bolmaǵan qayta programmalanatuǵın yarım ótkizgishli yad bul-….",
    a: "flash yad ",
    b: "kesh yad ",
    c: "turaqlı yad ",
    d: "mikroprocessor"
  },
  {
    quostion: "USB jalǵanıw kabelindegi qansha sımlar maǵlıwmatlardı uzatıw ushın mólsherlengen?",
    a: "2",
    b: "3",
    c: "1",
    d: "5"
  },
  {
    quostion: "Kesh yadı qanday arnawlı qurılma tárepinen basqarıladı",
    a: "kontroller",
    b: "trambler",
    c: "trigger",
    d: "SCAM"
  },
  {
    quostion: "Kesh yadı statikalıq yad chiplarinde ámelge asırıladı",
    a: "SRAM ",
    b: "SCAM",
    c: "SCRAM",
    d: "DRAM"
  },
  {
    quostion: "Kesh yadınıń máqseti ne? ",
    a: "eń kóp isletiletuǵın maǵlıwmatlardı saqlaw ",
    b: "programmanı mikroprocessorda islew múddeti dawamında ",
    c: "maǵlıwmatlar segmentin saqlaw, eger onıń kólemi mikroprocessordıń ",
    d: "ekrannıń dioganalı boyınsha ólshemi"
  },
  {
    quostion: "Kompyuter qosılǵanda Kesh yadında qanday maǵlıwmatlar saqlanadı?",
    a: "Kesh yadınıń barlıq qatarları haqıyqıy emes ",
    b: "programmanıń sınaq nátiyjeleri boyınsha toldırılǵan qatarlar ",
    c: "aldınǵı jumıs sessiyasi nátiyjeleri boyınsha toldırılǵan qatarlar ",
    d: "programmanı mikroprocessorda islew múddeti dawamında saqlaw "
  },
  {
    quostion: "Keri jazıw keshiniń ayrıqsha qásiyetleri qanday?",
    a: "RAM jańalanıwı tek ózgertirilgen Kesh qatarı almastırılǵanda ámelge asırıladı ",
    b: "operativ yad Kesh yadındaǵı maǵlıwmatlar ózgertirilgennen ",
    c: "RAM jańalanıwı barlıq ózgertirilgen Kesh ",
    d: "programmanıń sınaq nátiyjeleri boyınsha toldırılǵan "
  },
  {
    quostion: "Kesh yadınıń natiyjeliligin ne anıqlaydı? ",
    a: "Kesh yadınıń kólemi ",
    b: "RAM kólemi ",
    c: "RAM tezligi",
    d: "ROM kólemi"
  },
  {
    quostion: "Maǵlıwmattı waqtınsha saqlaw ushın kompyuter processorı tárepinen isletiletuǵın joqarı tezliktegi tosınarlı kiriw yadı bul….",
    a: "Kesh yad ",
    b: "Flash yad ",
    c: "ROM",
    d: "Disk "
  },
  {
    quostion: "Programmist programmalardı dúziwde qanday mánzillerden paydalanadı",
    a: "virtual",
    b: "fizikalıq ",
    c: "bar bolǵan mánziller sisteması ",
    d: "turaqlı"
  },
  {
    quostion: "Virtual yad ne?",
    a: "yad, onıń kólemi RAM hám bul kompyuterdiń sırtqı yad qurılmaları jıyındısına teń",
    b: "barlıq yad yacheykaları kompleksi ózinde jámlegen, operativ ",
    c: ", onıń dúziliwi kóp programmalı rejimde bir neshe processlerdiń parallel ",
    d: "bar bolǵan mánziller sisteması programmist tárepinen ǵárezsiz "
  },
  {
    quostion: "RAID tarqatılıwı qanday mánisti ańlatadı",
    a: "Ǵárezsiz disklardıń rezerv dizbegi",
    b: "Birlestirilgen disklardıń tosınarlı ",
    c: "Jasalma intellekt járdeminde ",
    d: "Qáwipti aldın alıwshı aqıllı "
  },
  {
    quostion: "Apparat RAID-dıń programmalıq támiynat RAID-ǵa salıstırǵanda abzallıqları nede?",
    a: "Tez kiriw tezligi hám islewi",
    b: "Apparat RAID hesh qanday artıqmashılıqlarǵa ",
    c: "RAID kontrollerin talap ",
    d: "Arzanlaw qárejetler hám ápiwayı "
  },
  {
    quostion: "Qaysı RAID dárejesi almastırılatuǵın bloklı disktı sáwlelendiriwshige (зеркальному) tiyisli?",
    a: "1-dárejeli RAID",
    b: "2-dárejeli RAID",
    c: "0-dárejeli RAID",
    d: "3-dárejeli RAID"
  },
  {
    quostion: "Optikalıq disk texnologiyasınan paydalanıladı ",
    a: "RAID",
    b: "lazer ",
    c: "DAT",
    d: "spiral "
  },
  {
    quostion: "Sistema yamasa sistema bólimlerin (programma yamasa qurılmalar ) birlestiriw ushın mólsherlengen apparat hám programmalıq támiynat buд….",
    a: "Interfeys",
    b: "Monıtor ",
    c: "Informaсiya",
    d: "Energiya "
  },
  {
    quostion: "Tiykarǵı CPU, RAM hám yadtı bir-biri menen 8, 16 yamasa 32 bitеi uzata alatuǵın kanallar arqalı jalǵaw shinası",
    a: "FRONT BUS ",
    b: "INTERNAL BUS",
    c: "EXTERNAL BUS",
    d: "EXSPANSION BUS"
  },
  {
    quostion: "Kompyuterdiń ishki bólimleri arasındaǵı baylanıs ornatıwshı shinası….",
    a: "INTERNAL BUS",
    b: "FRONT BUS ",
    c: "EXTERNAL BUS",
    d: "EXSPANSION BUS"
  },
  {
    quostion: "kompyuterlerdi skanerler yamasa printerler sıyaqlı periferikalıq qurılmalarǵa jalǵaw shinası….",
    a: "EXTERNAL BUS",
    b: "FRONT BUS ",
    c: "INTERNAL BUS",
    d: "EXSPANSION BUS"
  },
  {
    quostion: "Ana plata komponentlerin jańa qurılmalar yaǵnıy, USB, qattı disk sıyaqlı jańa qurılmalar menen jalǵaw ushın isletiletuǵın shinası … dep ataladı",
    a: "EXSPANSION BUS",
    b: "FRONT BUS ",
    c: "INTERNAL BUS",
    d: "EXTERNAL BUS"
  },
  {
    quostion: "Kompyuter sistemasındaǵı ajıratılǵan ishki hám sırtqı qurılmalardı bir-birmenen óz-ara baylanıs ortalıǵı bul….",
    a: "sistema interfeysleri ",
    b: "qurılmalar sisteması ",
    c: "informaciya sisteması ",
    d: "processor"
  },
  {
    quostion: "Málim signallar kórinisinde anıqlanǵan maǵlıwmatlardı uzatıw ortalıǵı bul….",
    a: "kanal",
    b: "monitor",
    c: "processor",
    d: "interfeys"
  },
  {
    quostion: "Barlıq interfeys liniyalarinıń kompleksi ….",
    a: "magistral",
    b: "interfeys",
    c: "Liniya",
    d: "Soket"
  },
  {
    quostion: "Málim funkcional máqsetlerge sáykes keletuǵın interfeys liniyalari toparı bul ….",
    a: "Shina",
    b: "Monıtor ",
    c: "Processor",
    d: "maǵlıwmat"
  },
  {
    quostion: "Linyalar sanı ….",
    a: "maǵlıwmat shinasınıń keńligi",
    b: "maǵlıwmat shinasınıń ",
    c: "maǵlıwmat uzatıw waqtı ",
    d: "maǵlıwmatlar sanı "
  },
  {
    quostion: "Maǵlıwmatlardı uzatıw usılları boyınsha neshege bólinedi",
    a: "2, parallel hám izbe-iz",
    b: "2, parallel hám gorizontal ",
    c: "3, parallel, gorizontal, izbe",
    d: "tek ǵana izbe-iz uzatıladı "
  },
  {
    quostion: "Bir waqıtta bir neshe adres maǵlıwmatlardı uzatıwdı támiyinleytuǵın shina…",
    a: "parallel shina",
    b: "izbe-iz shina",
    c: "gorizontal shina",
    d: "izbe-iz shina hám parallel shina"
  },
  {
    quostion: "Maǵlıwmatlar bitların izbe-iz, sinxron uzatıw hám maǵlıwmatlar ushın tek bir liniya talap etetuǵın shina….",
    a: "izbe-iz shina",
    b: "parallel shina",
    c: "gorizontal ",
    d: "izbe-iz shina hám "
  },
  {
    quostion: "Anakartadaǵı arqa táreptegi kópir qollap -quwatlaydı",
    a: "Sistema shinası, RAM, video adapter",
    b: "Qattı disklar hám optikalıq disk ",
    c: "Dawıs kartası hám ",
    d: "Klaviatura, tıshqansha, printerler"
  },
  {
    quostion: "Bir kompyuter tárepinen uzatılǵan maǵlıwmattı basqa kompyuter túsiniwi ushın maǵlıwmatlardı uzatıwdıń birden-bir qaǵıydaları … dep ataladı",
    a: "protokol",
    b: "adres",
    c: "informaciya",
    d: "standartlar"
  },
  {
    quostion: "Hár qıylı programmalar ortasında maǵlıwmatlar almasıwın belgileytuǵın logikalıq dárejedegi interfeystiń málim qaǵıydaları yamasa konvenciyalari kompleksi... ",
    a: "baylanıs protokolı ",
    b: "tarmaq protokolı ",
    c: "standartlar",
    d: "adres"
  },
  {
    quostion: "Qurılmalar ortasında maǵlıwmat almasıw ushın zárúr bolǵan maǵlıwmatlardı uzatıw qaǵıydaları kompleksi bul... ",
    a: "standartlar",
    b: "protokol",
    c: "adres",
    d: "informaiya"
  },
  {
    quostion: "Maǵlıwmatlar shinası ne ushın mólsherlengen?",
    a: "islenip atırǵan informaciyanı uzatıw ushın ",
    b: "processor shaqırılıp atırǵan sırtqı ",
    c: "basqarıw signalların uzatıw ",
    d: "processordan kiyatırǵan informaciyalardı"
  },
  {
    quostion: "Maǵlıwmattı processor qandayqılıp qayta isleydi? ",
    a: "ekilik sanaq sistemasında ",
    b: "onlıq sanaq sistemasında ",
    c: "tekst kórinisinde",
    d: "Beysik tilinde"
  },
  {
    quostion: "Maǵlıwmatlar -bul... ?",
    a: "Kompyuter kodına ótkerilgen informaciya bolıp tabıladı",
    b: "Buyrıqlar izbe-izligi ",
    c: "Cifrlı hám tekstli ",
    d: "Dawıslı hám grafiklı "
  },
  {
    quostion: "Kelisiw boyınsha standartı…",
    a: "De-fakto",
    b: "De-yure ",
    c: "De-sure",
    d: "De-forto"
  },
  {
    quostion: "Nızam boyınsha standartı…",
    a: "De-yure ",
    b: "De-fakto",
    c: "De-sure",
    d: "De-forto"
  },
  {
    quostion: "Maǵlıwmatlar uzatıw protokolı",
    a: "TCP/IP",
    b: "HTTP",
    c: "FTP",
    d: "SMTP"
  },
  {
    quostion: "Arnawlı fayl serverinen paydalanıwshı kompyuterine fayllardı uzatıw protokolı",
    a: "FTP",
    b: "HTTP",
    c: "TCP",
    d: "SMTP"
  },
  {
    quostion: "Maǵlıwmattı periferikalıq qurılmadan kompyuter yadrosına uzatıw…",
    a: "kiritiw operaciyası ",
    b: "shıǵarıw operaciyası ",
    c: "maǵlıwmat",
    d: "kanal"
  },
  {
    quostion: "Kompyuter yadrosınan periferikalıq apparatqa uzatıw…",
    a: "shıǵarıw operaciyası ",
    b: "kiritiw operaciyası ",
    c: "maǵlıwmat",
    d: "kanal"
  },
  {
    quostion: "Almasıwdıń qanday túrleri bar",
    a: "Olardıń qatarına yadtı oqıw hám yadqa jazıw kiredi",
    b: "Yad túrleri ",
    c: "Redaktorlaw ",
    d: "Tuwrı juwap joq "
  },
  {
    quostion: "Informaciyalar tiykarlanıp neshe ózgeshelikleri bar?",
    a: "Atributivlik, pragmatiklik, dinamiklik",
    b: "Statikalıq atributivlik, pragmatiklik",
    c: "atributivlik, pragmatiklik, dinamiklik ",
    d: "anıqlılıq túsiniklilik, juwmaqlawshılıq "
  },
  {
    quostion: "«Tıshqansha» manipulyatorı - bul... ",
    a: "maǵlıwmattı kiritiw apparatı bolıp tabıladı",
    b: "modulyaciya hám demodulyaciya apparatı ",
    c: "maǵlıwmattı saqlaw apparatı ",
    d: "maǵlıwmattı oqıw apparatı "
  },
  {
    quostion: "Skaner ne ushın mólsherlengen?",
    a: "qagaz bólegindegi grafikalıq súwretlerdi kompyuterge kiritiw ushın ",
    b: "vizual informaciyanı sáwlelendiriw ushın ",
    c: "telefon tarmaǵı arqalı bir kompyuterden, basqa bir kompyuterge ",
    d: "úlken kólemdegi informaciyanı magnit "
  },
  {
    quostion: "Plotter ne ushın mólsherlengen",
    a: "grafikalıq informaciyanı qaǵazǵa shıǵarıw ushın ",
    b: "kompyuterge qaǵaz betindegi súwretti skanerlew ",
    c: "kompyuterge informaciyanı kiritiw ",
    d: "qálegen túrdegi informaciyalardı "
  },
  {
    quostion: "Printerlerdiń qanday túrlerin bilesiz?",
    a: "matricalı, sıyalı hám lazerli ",
    b: "ishki hám sırtqı ",
    c: "rolikli hám planshetli",
    d: "gorizontal (desktop) hám vertikal "
  },
  {
    quostion: "Kiritiw-shıǵarıw kanallarınıń neshe túri bar",
    a: "3",
    b: "2",
    c: "1",
    d: "4"
  },
  {
    quostion: "Kiritiw-shıǵarıw kanalları tuwrı berilgen juwap",
    a: "Multipleks kanal, selektor kanalı, blok -multipleks kanal",
    b: "Multipleks kanal, selektor kanalı",
    c: "Multipleks kanal, selektor kanalı",
    d: "Multipleks kanal, sektor kanalı, blok -multipleks "
  },
  {
    quostion: "Multipleks kanalı qanday isleydi",
    a: "Kanaldıń ózi tez isleydi, biraq áste sırtqı apparatqa xızmet etedi. Usınıń menen birge, bir apparatqa jalǵanǵan halda, ol bir mashina sózin beredi hám keyin basqasına jalǵanadı",
    b: "Bir apparatqa jalǵanǵannan keyin, ol birpara maǵlıwmatlardı uzatadı. Sonnan keyin ol basqa apparatqa jalǵanadı",
    c: "Kanal tez isleydi hám operativ qurılmalarǵa xızmet etedi",
    d: "Dáwirli úzilislerge xizmet kórsetiwde paydalanıladı "
  },
  {
    quostion: "Kiretuǵın maǵlıwmatlar ushın kanallar sanın, sonıń menen birge shıǵıwshı maǵlıwmatlar hám basqarıw signalları ushın kanallar sanın kóbeytiw ushın aralıqtan kirisiw sistemalarında isletiletuǵın qurılmalar bular…",
    a: "Kiritiw-shıǵarıw modulları ",
    b: "Saqlaw qurılmaları ",
    c: "Esaplaw qurılmaları ",
    d: "Logikalıq qurılma "
  },
  {
    quostion: "Oraylıq processordı ornatıw ushın jalǵawshı ne dep ataladı?",
    a: "Soket",
    b: "Port ",
    c: "Chipset ",
    d: "Shina"
  },
  {
    quostion: "USB jalǵanıw kabelindegi qansha sımlar maǵlıwmatlardı uzatıw ushın mólsherlengen?",
    a: "2",
    b: "1",
    c: "4",
    d: "3"
  },
  {
    quostion: "Izbe-iz port ushın qanday standart isletiledi? ",
    a: "RS-232 C",
    b: "IEC 12207 ",
    c: "IEEE 1284 ",
    d: "IEEE 1394"
  },
  {
    quostion: "SATA jalǵawshısında neshe PIN bar? ",
    a: "7",
    b: "5",
    c: "3",
    d: "2"
  },
  {
    quostion: "Parallel porttı kórsetiń",
    a: "LTP1-LTP4",
    b: "LCD1-LCD4",
    c: "COM1-COM4",
    d: "CON1-CON4"
  },
  {
    quostion: "Izbe-iz porttı kórsetiń",
    a: "COM1-COM4",
    b: "LTP1-LTP4",
    c: "LCD1-LCD4",
    d: "CON1-CON4"
  },
  {
    quostion: "Qaysı túrdegi mikroprocessor sisteması tez-tez islep shıǵılıp atır? ",
    a: "mikrokontroller",
    b: "mikrokompyuter ",
    c: "rawajlanıw talap etilmeydi, tayar sistemalar qollanıladı ",
    d: " b) 	kompyuter "
  },
  {
    quostion: "Tolıq buyrıqlar kompleksine iye kompyuter qanday ataladı?",
    a: "CISC",
    b: "RISC",
    c: "P6 ",
    d: "MIPS"
  },
  {
    quostion: "Qısqartırılǵan buyrıqlar kompleksine iye kompyuter qanday ataladı",
    a: "CISC",
    b: "MIPS",
    c: "P6",
    d: "CISC"
  },
  {
    quostion: "Qısqartırılǵan buyrıqlar kompleksine iye kompyuter qanday ataladı?",
    a: "RISC",
    b: "P6 ",
    c: "CISC",
    d: "MIPS"
  },
  {
    quostion: "Processor cikliniń birinshi basqıshında ne ámelge asırıladı?",
    a: "RS járdeminde orınlanıwı kerek bolǵan buyrıq tańlap alınadı ",
    b: "RS-dıń mánisi asırıladı ",
    c: "buyrıq dekodlanadı",
    d: "buyrıqtı orınlaw ushın kerek bolatuǵın "
  },
  {
    quostion: "Processor cikliniń ekinshi basqıshında ne ámelge asırıladı",
    a: "RS-dıń mánisi asırıladı ",
    b: "RS járdeminde orınlanıwı ",
    c: "buyrıq dekodlanadi",
    d: "buyrıq atqarıladı "
  },
  {
    quostion: "Processor cikliniń úshinshi basqıshında ne ámelge asırıladı?",
    a: "buyrıq dekodlanadı",
    b: "RS járdeminde ",
    c: "buyrıq atqarıladı ",
    d: "RS-dıń mánisi "
  },
  {
    quostion: "Altı júzeli kompyuterlerdiń nolinshi júzesi qanday ataladı?",
    a: "cifrlı logikalıq úst",
    b: "mikroarxitektura júzesi",
    c: "buyrıqlar kompleksi arxitekturası ",
    d: "operacion sistema júzesi"
  },
  {
    quostion: "NOT, NOT-AND, NOT-OR sıyaqlı elementlerdiń kiriw signalları, olardaǵı tranzistorlardıń qaysı ayaqshasına jalǵanǵan?",
    a: "Baza ",
    b: "Kollektor ",
    c: "Emmiter",
    d: "ventil"
  },
  {
    quostion: "NOT, NOT-AND, NOT-OR sıyaqlı elementlerdiń shıǵıw signalları, olardaǵı tranzistorlardıń qaysı ayaqshasınan alınadı?",
    a: "Kollektor ",
    b: "Baza ",
    c: "Emmiter",
    d: "ventil"
  },
  {
    quostion: "64 Kbaytlı tiykarǵı yad adresiniń maksimal mánisi neshege teń?",
    a: "FFFF",
    b: "FFFFF",
    c: "FFFFFF",
    d: "FFFF FFFF"
  },
  {
    quostion: "SPARC áwladına tiyisli processorlar tiykarında qurılǵan kompyuterlerdiń tiykarǵı yadında baytlar qanday tártipte jaylastırıladı? ",
    a: "tuwrı tártipte",
    b: "keri tártipte",
    c: "ońnan-shepke",
    d: "tómennen-joqarıǵa "
  },
  {
    quostion: "Bir sekundtaǵı taktlar sanı ne dep ataladı?",
    a: "Takt chastotası ",
    b: "Kompyuter natiyjeliligi",
    c: "Kesh-yad ",
    d: "Processor razryadlıǵı "
  },
  {
    quostion: "Takt chastotasınıń ólshem birligi ne? ",
    a: "MGts",
    b: "Mbayt",
    c: "Kbayt",
    d: "Bit"
  },
  {
    quostion: "Kompyuterdiń jumıs natiyjeliligi nege baylanıslı? ",
    a: "Processor chastotasına ",
    b: "Derektiń kernewine",
    c: "Tuymelerdiń tez islewine",
    d: "Kommunikaciya tezligine baylanıslı "
  },
  {
    quostion: "Processordıń IP yamasa EIP registri degende qanday registr túsiniledi?",
    a: "buyrıqlardı kórsetiwshi registr",
    b: "birinshi operandanıń registri",
    c: "segment registri",
    d: "flaglar registri"
  },
  {
    quostion: "Kompyuterdiń mikroprocessoridegi tranzistorlardıń bir sekundta óz jaǵdayın ózgertiwleriniń sanı ne dep ataladı?",
    a: "kompyuterdiń takt chastotası ",
    b: "kompyuterdiń quwatı ",
    c: "kompyuterdiń klassı ",
    d: "kompyuterdiń takt uzınlıǵı "
  },
  {
    quostion: "ADC (АТЦ)-",
    a: "analog-cifrlı konvertorlar",
    b: "sanlı-analog konvertorlar",
    c: "sanlı konvertorlar",
    d: "diskret konvertorlar"
  },
  {
    quostion: "DAC (ЦАП)-",
    a: "sanlı-analog konvertorlar",
    b: "analog-cifrlı konvertorlar",
    c: "sanlı konvertorlar",
    d: "diskret konvertorlar"
  },
  {
    quostion: "Jeke kompyuterde maǵlıwmattı qayta islew qaysı qurılmada ámelge asırıladı? ",
    a: "Processorda",
    b: "Adapterde",
    c: "Shinada",
    d: "Klaviaturada "
  },
  {
    quostion: "Tiykarǵı plataǵa ne ornatıladı?",
    a: "Processor",
    b: "Qattı disk ",
    c: "Derek blogı",
    d: "Sistemalı blok "
  },
  {
    quostion: "Kontroller ne ushın mólsherlengen?",
    a: "processordan kiyatırǵan informaciyalardı, qurılmalar jumısın basqarıwshı uyqas signallarına ózgertiw ushın ",
    b: "islenip atırǵan informaciyanı ",
    c: "basqarıw signalların uzatıw ",
    d: "processor shaqırılıp atırǵan sırtqı qurılmalarǵa"
  },
  {
    quostion: "CISC qısqartpası neni ańlatadı",
    a: "Tolıq buyrıqlar kompleksine iye kompyuter",
    b: "Magnitlı disklar ",
    c: "Jalǵanıw noqatları ",
    d: "Tarmaq interfeysiniń apparatı "
  },
  {
    quostion: "RISC qısqartpası neni ańlatadı?",
    a: "Qısqartırılǵan buyrıqlar kompleksine iye kompyuter",
    b: "Magnitlı disklar tiykarında qurılǵan",
    c: "Jalǵanıw noqatları ",
    d: "Tarmaq interfeysiniń "
  },
  {
    quostion: "Kompyuter processorı bolıp, ol óz yadına iye bolǵan, parallel túrde isleytuǵın hám qońsılasları menen maǵlıwmat almasatuǵın ápiwayı processorlardan ibarat tarmaq bul... ",
    a: "Matrica processorı",
    b: "vektor processorı",
    c: "Qozǵalmas útirli processorları",
    d: "Júziwshi útirli processorları"
  },
  {
    quostion: "Birpara buyrıqlardıń operandları buyırtpa etilgen maǵlıwmatlar dızbekleri-vektorlar bolıwı múmkin bolǵan processor",
    a: "vektor processorı",
    b: "Matrica processorı",
    c: "Qozǵalmas útirli processorları",
    d: "Júziwshi útirli processorları"
  },
  {
    quostion: "ADM processorlarındaǵı yadrolar sanın kórsetiń",
    a: "2",
    b: "3",
    c: "4",
    d: "5"
  },
  {
    quostion: "Birinshi ret ǵalabalıq túrde islep shıǵılǵan mikroprocessor neshe razryadlı edi?",
    a: "4",
    b: "1",
    c: "5",
    d: "6"
  },
  {
    quostion: "Qaysı kompaniya segiz razryadlı mikroprocessorlar islep shıǵarmaǵan?",
    a: "Intel",
    b: "Zilog",
    c: "Motorola",
    d: "IBM"
  },
  {
    quostion: "Tómendegilerden qaysısı matematikalıq soprocessor?",
    a: "8086 ",
    b: "8087",
    c: "8088",
    d: "8080"
  },
  {
    quostion: "80486 mikroprocessorlardıń kesh yadı qanshaǵa teń bolǵan?",
    a: "8 kB",
    b: "128 kB",
    c: "64 kB",
    d: "16 kB"
  },
  {
    quostion: "Pentium mikroprocessorları birinshi ret qashan islep shıǵarılǵan?",
    a: "1993",
    b: "1995",
    c: "1997",
    d: "1999 "
  },
  {
    quostion: "Pentium sózi qanday mánisti ańlatadı?",
    a: "beslik",
    b: "qımbatbaha",
    c: "dawamlılıqtı",
    d: "jańalıq"
  },
  {
    quostion: "Birinshi 64 razryadlı mikroprocessor qaysı kompaniya tárepinen islep shıǵarılǵan?",
    a: "Intel",
    b: "Motorola",
    c: "Nvidia",
    d: "AMD"
  },
  {
    quostion: "Birinshi eki yadrolı mikroprocessordı kórsetiń",
    a: "Pentium IV",
    b: "Pentium D",
    c: "Dual Core",
    d: "Core 2 Dual"
  },
  {
    quostion: "i3, i5, i7 mikroprocessorları qashannan islep shıǵarıladı?",
    a: "2010 ",
    b: "2009 ",
    c: "2008",
    d: "2007"
  },
  {
    quostion: "Neyron kompyuterlerdiń islew principlerı nege tiykarlanǵan?",
    a: "insan miyi iskerligi",
    b: "delfinlar toparı háreketlerine",
    c: "mikroblar koloniyasınıń óz-ózin basqarıwına ",
    d: "kvant texnologiyaları tiykarında "
  },
  {
    quostion: "Kompyuter konfiguraciyasi neni ańlatadı?",
    a: "onıń quramına kiretuǵın qurılmalar hám olardıń tiykarǵı parametrleri",
    b: "kompyuterdiń tarmaqta tutqan ornı ",
    c: "támiynat",
    d: "kompyuterge ornatılǵan programmalıq "
  },
  {
    quostion: "Kompyuter háreket principi boyınsha",
    a: "analog (AVM), cifrlı (CVM), gibrid (GVM",
    b: "tekstli, grafikli, cifrlı (CVM",
    c: "tekstli, grafikli",
    d: "tekstli, grafiklı, analog (AvM"
  },
  {
    quostion: "Qaysı processor version 9 SPARC mikroarxitekturasına iye?",
    a: "UltraSPARC III ",
    b: "Pentium ",
    c: "8051",
    d: "SIMM"
  },
  {
    quostion: "Assembler júzesi, altı júzeli kompyuterlerdiń qaysı júzesine tiyisli?",
    a: "4 júzesine",
    b: "3 júzesine",
    c: "5 júzesine",
    d: "1 júzesine"
  },
  {
    quostion: "Mikroprocessor dep nege aytıladı?",
    a: "mikrosxemaǵa jaylastırılǵan processorǵa",
    b: "mikrokompyuter processorına",
    c: "mikrobuyrıqlardı orınlawshı processorǵa",
    d: "durıs juwap joq "
  },
  {
    quostion: "MASM (Macro Assembler) -",
    a: "Microsoft firmasınıń paketi",
    b: "Borland firmasınıń ónimi",
    c: "Watcom firması tárepinen islep shıǵılǵan",
    d: "Intel firması tárepinen islep shıǵılǵan"
  },
  {
    quostion: "TASM (Turbo Assembler) -",
    a: "Borland firmasınıń ónimi",
    b: "Microsoft firmasınıń ",
    c: "Watcom firması tárepinen ",
    d: "Intel firması tárepinen "
  },
  {
    quostion: "WASM (Watcom Assembler) -",
    a: "Watcom firması tárepinen islep shıǵılǵan",
    b: "Microsoft firmasınıń ",
    c: "Borland firmasınıń ",
    d: "Intel firması tárepinen "
  },
  {
    quostion: "Altı júzeli kompyuterlerdiń tórtinshi júzesi qanday ataladı?",
    a: "assembler júzesi",
    b: "mikroarxitektura júzesi",
    c: "buyrıqlar kompleksi arxitekturası júzesi",
    d: "operacion sistema júzesi"
  },
  {
    quostion: "Assembler sózi qaysı tilden alınǵan ",
    a: "ingliz tilinen",
    b: "francuz tilinen",
    c: "arab tilinen",
    d: "nemec tilinen"
  },
  {
    quostion: "Assembler tilindegi programmanı neshe bólekke bólıw múmkin.",
    a: "3 bólekke: data bólimi, bss bólimi, text bólimi",
    b: "2 bólekke: bss bólimi",
    c: "3 bólekke: void bólimi",
    d: "2 bólekke: void bólimi"
  },
  {
    quostion: "Ulıwma máqsetler ushın mólsherlengen registrlardı kórsetiń",
    a: "AX, EAX",
    b: "SI, ESI",
    c: "DI, EDI",
    d: "SP, ESP"
  },
  {
    quostion: "AX yamasa EAX registri degende ne túsiniledi?",
    a: "Akkumulyator",
    b: "buyrıqlar sanaǵıshı ",
    c: "buyrıqlar kórsetkishi ",
    d: "flaglar registri"
  },
  {
    quostion: "Maǵlıwmatlardı kiritiw-shıǵarıw buyrıqların kórsetiń.",
    a: "IN, OUT ",
    b: "MOvE, LOAD",
    c: "INC, DEC",
    d: "ADD, SUB"
  },
  {
    quostion: "Basqarıwdı uzatıw buyrıqların kórsetiń",
    a: "JMP, CALL",
    b: "ADD, SUB ",
    c: "MAń, PUSH",
    d: "INC, DEC"
  },
  {
    quostion: "Bir operanda ústinde ámeller orınlaw buyrıqların kórsetiń",
    a: "INC, DEC ",
    b: "MUL, ADC",
    c: "ADD, SUB",
    d: "AND, OR"
  },
  {
    quostion: "Eki operandalar ústinde ámeller orınlaw buyrıqların kórsetiń",
    a: "ADD, SUB",
    b: "MOvE, LOAD",
    c: "INC, DEC",
    d: "IN, OUT"
  },
  {
    quostion: "Kóshirip jazıw buyrıqların kórsetiń",
    a: "MOV, PUSH",
    b: "CMP, RST",
    c: "INC, DEC",
    d: "ADD, SUB"
  },
];

answersDB().forEach((item, index) => {
  const container = document.createElement('div')

  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})

// elHtml
const elButton = document.querySelector('#generate')
const elAnswerContent = document.querySelector('.result')
// const elsAnswers = document.querySelectorAll('.js-buttons')
// console.log(elsAnswers);

elAnswerContent.innerHTML = ''
const buttonNumber = []

headerContent()
counter(25)
createSendButton('div', 'button-submit', 'Yakunlash', elAnswerContent)
// When clicked, background changed other color
if(elButton) {
  elButton.addEventListener('click', () => {
    const button = document.createElement('button')
    button.classList.add('button-primary')
    button.textContent = 26

    elAnswerContent.appendChild(button)
  })
}

// Clicker function
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-primary')) {
      evt.target.classList.add('background-color')
    }
  })
}

// Generate 50 answers
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-submit')) {
      elAnswerContent.innerHTML = ''

      headerContent()
      counter(50)
      createSendButton('div',
        'button-submit',
        'Yakunlash',
        elAnswerContent
      )
    }
  })
}


// ------------------========= FUNCTIONS START =======-------------

// BUTTON counter
function counter(count) {
  for(let i = 1; i <= count; i++) {
    buttonNumber.push(i)
    createButton()
  }
}


// CREAT BUTTON FUNCTION
function createButton() {
  const button = document.createElement('button')
    button.classList.add('button-primary', 'js-buttons')
    elAnswerContent.appendChild(button)

  buttonNumber.forEach(item => {
    button.textContent = item
  })
}


// Content header maker
function headerContent() {
  const span = document.createElement('span')
  span.classList.add('answer')

  span.innerHTML = `
    <a href="file/novaya.txt" class="answer__link" target="_blank">Javoblar
    </a>
  `
  elAnswerContent.appendChild(span)
}

// CREATE SEND BUTTON
function createSendButton(div, clasName, text, append) {
  div = document.createElement(div)
  div.classList.add(clasName)
  div.style.textAlign = 'center'
  div.textContent = text
  append.appendChild(div)
}

// ------------------========= FUNCTIONS END =======-------------
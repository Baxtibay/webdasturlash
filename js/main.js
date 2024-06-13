const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Kestedegi maǵlıwmattı qaysı funkciya arqalı jańalaw múmkin?",
    a: "UPDATE",
    b: "SELECT",
    c: "DELITE",
    d: "INSERT INTO"
  },
  {
    quostion: "Kestege qaysı funkciya járdeminde maǵlıwmat kiritiw múmkin?",
    a: "INSERT INTO",
    b: "SELECT",
    c: "DELITE",
    d: "UPDATE"
  },
  {
    quostion: "Maǵlıwmatlar bazasına tuwrı jalǵanıwdı kórsetiń.",
    a: "$conn=new mySqli=(“localhost”,”root”, ” ”, ”DBname”);",
    b: "conn=new mySqli=(“localhost”,”user”, ”pass”, ”DBname”);",
    c: "new mySqli=(“localhost”,”root”, ”root”);",
    d: "$conn=new mySqli=localhost mysql mysql DBname"
  },
  {
    quostion: "If(!$conn){Echo(“Jalǵanbadı”);} Else{echo(“Jalǵandı”)} Bul jerde Maǵlıwmatlar bazasına jalǵanbasa ne júz beredi?",
    a: "Jalǵanbadı",
    b: "Jalǵandi",
    c: "Web bette Error Open server index.php on line 37",
    d: "Durıs juwap berilmegen"
  },
  {
    quostion: "Open server de PHP arqalı maǵlıwmatlar bazasına soraw jiberiw ushın fayl qanday tipde saqlanadı?",
    a: ".php",
    b: ".html",
    c: ".css",
    d: ".js"
  },
  {
    quostion: "Open server de islew ushın fayllar qaysı papka ishine saqlanadı?",
    a: "Domains",
    b: "Hosting",
    c: "Modules",
    d: "Userdata"
  },
  {
    quostion: "$sql='INSERT INTO data (Onim,Bahasi) ……… ('$ati','$sum')';Joqarıda kop noqat ornina qaysi funkciya jazılsa tuwrı isleydi?",
    a: "VALUE",
    b: "data",
    c: "WHERE",
    d: "FROM"
  },
  {
    quostion: "$sql='DELETE FROM data ……. id=$oshiriw';",
    a: "WHERE",
    b: "data",
    c: "VALUE",
    d: "FROM"
  },
  {
    quostion: "Javascript de class=”demo” ni ózgertiw ushın qaysı funkciyadan paydalanamız?",
    a: "innerText",
    b: "innerStyle",
    c: "Ózgertip bolmaydı",
    d: "innerPHP"
  },
  {
    quostion: "Qaysı teg hújjettiń stilin ańlatıw ushın isletiledi?",
    a: "Style",
    b: "Head",
    c: "Isindex",
    d: "Body"
  },
  {
    quostion: "HTML de shrift ólshemin ózgertiw ushın qaysı tegdan paydalanıladı?",
    a: "< small >",
    b: "< sup >",
    c: "< sub >",
    d: "< samr >"
  },
  {
    quostion: "Birden-bir adreske iye hám brauzer járdeminde ashıw, oqıw múmkinshiligine iye bolǵan hújjet…",
    a: "Web-bet",
    b: "Elektron magazin",
    c: "Web-sayt",
    d: "Web-server"
  },
  {
    quostion: "JavaScript tilinde qanday obektler ámelde?",
    a: "vstroenniy ob'ektler",
    b: "programmist ózi jaratıwshı brauzer",
    c: "ob'ektler ob'ektleri",
    d: "# Barlıq juwap durıs"
  },
  {
    quostion: "Qaysı teg World Wide Web de hújjetti ataw ushın isletiledi?",
    a: "TITLE",
    b: "Head",
    c: "Meta",
    d: "Sub"
  },
  {
    quostion: "Javascript tilinde qanday logikalıq operatorlar ámelde?",
    a: "||,&&;",
    b: "-, !, ++, --;",
    c: "&, |, ~, ^;",
    d: ">, >=,"
  },
  {
    quostion: "HTML tegler neshe túrli boladı?",
    a: "Jup, taq, arnawlı tegler",
    b: "Taq tegler",
    c: "Jup tegler",
    d: "Korinisi kóp"
  },
  {
    quostion: "Qaysı teg HTML hújjettiń denesin ańlatadı?",
    a: "Body",
    b: "Html",
    c: "Jup tegler",
    d: "Head"
  },
  {
    quostion: "Silteme tuwrı kórsetilgen qatardı tabıń?",
    a: "< a href='http://tuit.uz' >havola< /a >",
    b: "< a pass='index.html' > havola < /a >",
    c: "< a name='/index.html' > havola < /a >",
    d: "< a name'/index.html' > havola < /a >"
  },
  {
    quostion: "PHP de OpenServer arqalı maǵlıwmatlar bazasına  jalǵanıw ushın qaysi serverden paydalanadı?",
    a: "Localhost",
    b: "Global",
    c: "Unikal",
    d: "Barlıǵı"
  },
  {
    quostion: "Súwretler menen islew teglerin qaysı juwapda berilgen?",
    a: "img, map, area, picture",
    b: "image, map, a, picture",
    c: "image, form, area, photo",
    d: "Img, iframe, areas, picture"
  },
  {
    quostion: "< mark > teginiń wazıypası ne?",
    a: "Tekstti ajıratılǵan formada anıqlaw",
    b: "Tekstti óshirilgen formada belgilew",
    c: "Tekstti tigine sızılǵan formada belgilew",
    d: "Tekstti qıya formada belgilew"
  },
  {
    quostion: "< ul >  tegi neni ańlatadı?",
    a: "Tártiplenbegen dizim",
    b: "Tártiplengen dizim",
    c: "Keste yacheykasi",
    d: "Jańa qatarǵa ótiw"
  },
  {
    quostion: "< ul style=”list-style-type:square” > teksti neni ańlatadı?",
    a: "Teg kvadrat formasındaǵı dizim payda etedi",
    b: "Teg sheńber formasındaǵı dizim payda etedi",
    c: "Teg álippe kórinistegi dizimdi payda etedi",
    d: "Teg cifrlı kórinistegi dizimdi payda etedi"
  },
  {
    quostion: "< img > Teginiń májburiy atributın tabıń",
    a: "src",
    b: "title",
    c: "href",
    d: "type"
  },
  {
    quostion: "Qaysı teg forma ishinde qay jerge maǵlıwmat kiritiliwin ańlatadı?",
    a: "< input >",
    b: "< center >",
    c: "< form >",
    d: "< html >"
  },
  {
    quostion: "HTMLde forma elementlerine kiritilgen bahalardı tazalaw ushın qaysı elementten paydalanıladı?",
    a: "Reset",
    b: "Text",
    c: "Submit",
    d: "hidden"
  },
  {
    quostion: "Formada parol kirgiziw kerek bolsa qaysı kirgiziw elementinen paydalanıwǵa tuwrı keledi?",
    a: "Password",
    b: "Image",
    c: "Radio",
    d: "reset"
  },
  {
    quostion: "< textarea > teginde qanday atributlar paydalanıladı?",
    a: "cols, name va rows",
    b: "alt, href type",
    c: "alt, href  name",
    d: "Durıs juwap joq"
  },
  {
    quostion: "< INPUT > teginiń TYPE atribut mánisine tómendegilerdiń qaysısın jaziwǵa bolmaydi?",
    a: "Tops",
    b: "checkbox",
    c: "radio",
    d: "password"
  },
  {
    quostion: "Kesteni shegarasız jaratıw ushın TABLE teginiń BORDER atributına qanday mánis beriw kerek?",
    a: "0",
    b: "2",
    c: "3",
    d: "4"
  },
  {
    quostion: "HTML de kommentariy sintaksisi qanday?",
    a: " < !-- Bul komentarya-- >",
    b: " < ! Bu kommentariy",
    c: " < Bul komentarya >",
    d: " / / Bul komentarya / /"
  },
  {
    quostion: "HTMLda < form > teginiń mánisi qanday?",
    a: "Formani jaratıw",
    b: "Variantlar dizimi",
    c: "Komentarya atı",
    d: "Hújettiń tiykarǵı bólegi"
  },
  {
    quostion: "HTML5 te < video > menen islew tegleri qaysı juwapda keltirilgen?",
    a: "< video >, < source >, < track >",
    b: "< video >, < source >, < href >",
    c: "< video >, < source >, < controls >",
    d: "< videos >, < object >, < track >"
  },
  {
    quostion: "HTML5 te < audio > menen islew atributları qaysı juwapda keltirilgen?",
    a: "controls, src, autoplay",
    b: "controls, loop, audio",
    c: "muted, src, source",
    d: "controls, src, embed"
  },
  {
    quostion: "Jup bolmaǵan tegler qaysı juwapda keltirilgen?",
    a: "< hr >, < br >",
    b: "< hr >, < image >",
    c: "< img >, < p >",
    d: "< br >, < span >"
  },
  {
    quostion: "< ! DOCTYPE html > neni ańlatadı?",
    a: "Hújjettiń HTML5 te ekenligin ańlatadı",
    b: "HTML hújjettiń baslanıwın ańlatadı",
    c: "Hújjettiń meta maǵlıwmatların ańlatadı",
    d: "Hújjettiń meta maǵlıwmatların ańlatadı"
  },
  {
    quostion: "Qaysı juwapda HTML5 te reń tańlaw elementi keltirilgen?",
    a: " < input type='color' >",
    b: " < input type='range' >",
    c: " < input type='image' >",
    d: " < input type='date' >"
  },
  {
    quostion: " WWW dıń tiykarshisi kim?",
    a: " Tim Berners-Lee",
    b: " Bill Gates",
    c: " David Leo",
    d: " Stive Jobs"
  },
  {
    quostion: "CSS di HTML hújet penen durıs baylanıstırıw usılın kórsetiń?",
    a: "<link rel=”stylesheet” href=”style.css” > ",
    b: "<link href=”stylesheet” rel=”style.css” >",
    c: "link href=”stylesheet” rel=”style.css”",
    d: "link relsd”stylesheet” href”style.css”"
  },
  {
    quostion: "HTML5 te qanday tipdagi audio fayllardı betke jaylastırıw múmkin?",
    a: "mp3, ogg, audio",
    b: "audio, ogg, mp4",
    c: "audio, ogg, mp57",
    d: "aud,ogy,mp4"
  },
  {
    quostion: "HTML5 te qanday tipdagi video fayllardı betke jaylastırıw múmkin?",
    a: "mp4, ogg, webm",
    b: "mp4, ogg, video",
    c: "video, ogg, mp47",
    d: "autoplay, src, embed"
  },
  {
    quostion: "CSS di html hújjette shaqırıwdıń  usılları qanday?",
    a: "Ishki, sırtqı hám fayl",
    b: "Sırtqı hám fayl",
    c: "Tek ishki",
    d: "Ishki hám sirtqı"
  },
  {
    quostion: "CSS di fayl járdeminde jalǵawdı kórsetiń",
    a: "< link rel=”stylesheet” href=”style.css” >",
    b: "< h1 style=”color:red;” > text < /h1 >",
    c: "< body > < style > h1 { color : red ; } < / style >< /body >",
    d: "< style >< /style >"
  },
  {
    quostion: "CSS di sırtqı jalǵawdı kórsetiń",
    a: "< style > h1 {  color: red ; } < / style> < /body >",
    b: "< h1 style= ” color : red;” >text< /h1 >",
    c: "< link rel = ”stylesheet” href =” style.css ” >",
    d: "< styl > < /styl >"
  },
  {
    quostion: "H1 elementiniń shegarasi 2px hám qara reńde bolsın?",
    a: "H1{ border: 2px solid black;}",
    b: "H1{border: 2px;",
    c: "Border-color:black;}",
    d: "Boorder: 2px color black"
  },
  {
    quostion: "CSS de ID=img si berilgen onıń keńligi 50px bólıwı kerek. Tómengegi kod qaysisi tuwrı?",
    a: "img{width:50px;}",
    b: "img{margin:50px;}",
    c: "img{height:50px;}",
    d: "img{padding:50px;}"
  },
  {
    quostion: "CSS de text ushın italic shrift wazıypası qanday?",
    a: "Textdi qiya qıladı",
    b: "Text di tuwrı qoyadı",
    c: "Text di shep tárepke qıya qıladı",
    d: "Text ólshemin ózgertedi"
  },
  {
    quostion: "CSSde id yamasa class penen islew ushın qaysı belgiden paydalanıladı?",
    a: "Id # class :",
    b: "Id !  , celass .",
    c: "Id @ classs..",
    d: "Id . claass#"
  },
  {
    quostion: "Html elementde saya payda qılıw ushın qaysi CSS elementinen paydalanıladı?",
    a: "Box- shadow;",
    b: "Box- boorder;",
    c: "Boox- background;",
    d: "Boox-element;"
  },
  {
    quostion: "CSSde arqa fon ólshemin kiritiw ushın qaysi qásiyetinen paydalanıladı?",
    a: "Background-size",
    b: "Background",
    c: "Background-position",
    d: "Backgroundsizee"
  },
  {
    quostion: "CSSde clear : both; qásiyetiniń wazıypası qanday?",
    a: "Belgilengen elementten keying qatardi tazalaydı",
    b: "Belgilengen elementten aldınǵı qatardı kóshiredi",
    c: "Belgilengen elementtiń oń tárepin qosadı",
    d: "Belgilengen elementti hesh nárse islemeydi"
  },
  {
    quostion: "Javascript - tili bul…",
    a: "Statistikalıq web betlerdi qosımsha funksional múmkinshiliklerin qóllaw ushın netscape hám sun microsystems larda islep shıǵılǵan senariylar",
    b: "Tekstti redaktorlawshı til",
    c: "Server kayta isleytuǵın ssenariylar",
    d: "Web-qosımshalardı islep shıǵıwshı instrumental jıynaq"
  },
  {
    quostion: "Javascript tilinde qanday funksiya dúziledi?",
    a: "Function (){};",
    b: "Function();",
    c: "Function{}();",
    d: "Function{};"
  },
  {
    quostion: "Javascript tilinde const qanday ózgeriwshi?",
    a: "Constanta;",
    b: "Local",
    c: "Global;",
    d: "Funksiya;"
  },
  {
    quostion: "parseFloat () funksiya wazıypası?",
    a: "Haqıyqıy sanǵa aylandırıw",
    b: "Pútkil sanǵa aylandırıw",
    c: "Sannı pútinlew",
    d: "Bunday funksiya joq"
  },
  {
    quostion: "Qaysı usıl 0 den 10 ge shekem aradaǵı qálegen sanı qaytaradı?",
    a: "Random",
    b: "Sin",
    c: "Sqrt",
    d: "Round"
  },
  {
    quostion: "Javascripda selectori ('[ href ]') HTML elementleriniń qaysı elementti tańlaydı?",
    a: "Href atributı menen barlıq elementlerdi tańlaydı",
    b: "Barlıq < a > elementlerin",
    c: "Barlıq < a > elementlerin ' _ blank ' ga teń bolǵan atribut mánisi menen tańlaydı",
    d: "Bul usılda tańlaw imkansiz"
  },
  {
    quostion: "Qaysı operator for yamasa while cikl operatorları atqarılıwın toqtatad?",
    a: "Break",
    b: "Continue",
    c: "End",
    d: "Return"
  },
  {
    quostion: "Serverde qayta isleniwshi ssenariy tili bul …",
    a: "PHP",
    b: "Perl",
    c: "Javascript",
    d: "Asp"
  },
  {
    quostion: "Tómendegi PHP tilindegi programmalardan tuwrısın kórsetiń",
    a: "< html >  <  title >< ? php echo 'hello world' ;? > < /title>",
    b: "< html > < title ><  hello world > < /title > < /html >",
    c: "< html > < title >< print 'hello world!'; >< /title > < /html >",
    d: "< html > < title > print 'hello world!'< /title >  < /html >"
  },
  {
    quostion: "DOM sóziniń keńeytpesi?",
    a: "Document Object Model",
    b: "Document Orant Model",
    c: "Doctype Object Model",
    d: "Document Object Method"
  },
  {
    quostion: "Document. createElement (element) struktura ne wazıypanı atqaradı?",
    a: "HTML elementti jaratıw",
    b: "Document jaratıw",
    c: "Id jaratıw",
    d: "Class jaratıw"
  },
  {
    quostion: "PHP de ózgeriwshiler qanday belgi menen baslanadı?",
    a: "$",
    b: "?",
    c: "@",
    d: "&"
  },
  {
    quostion: "Javascript tiykarınan qanday formatda saqlanıwı múmkin?",
    a: "Js",
    b: "HTML",
    c: "PHP",
    d: "Java"
  },
  {
    quostion: "Javascriptte math. random () neni esaplaydı?",
    a: "Tuwrı juwap joq",
    b: "exp ni esaplaw",
    c: "a ni maximumin tabıw",
    d: "Ekubn anıqlaw"
  },
  {
    quostion: "Java scriptte jazılǵan programma kodın kompilyasiya qılıw shártbe?",
    a: "shárt emes hám etilmeydi",
    b: "kompilyasiya qılıw shárt",
    c: "exe fayl qılıw shárt",
    d: "Tuwrı juwap joq"
  },
  {
    quostion: "PHP programmalastırıw tilinde paydalanıwshı tárepinen jaratılǵan funksiyalar______ gilt sózi menen baslanadı.",
    a: "Function",
    b: "Declare",
    c: "Def",
    d: "Procedure"
  },
  {
    quostion: "HTMLdegi &copy  belgisiniń mánisi ne?",
    a: "Copyright belgisi",
    b: "Qost’rnaq",
    c: "Bos jay",
    d: "Kishi belgi"
  },
  {
    quostion: "Tómendegilerden qay-qaysısı maǵlıwmatlar bazasın basqarıw sisteması esaplanadı?",
    a: "Microsoft SQL Server",
    b: "Red Hat",
    c: "ThunderBird",
    d: "Delphi"
  },
  {
    quostion: "PHP hám MySQL di jalǵawda qaysi funksiyasınan paydalanamız?",
    a: "mysql_connect()",
    b: "mysqlconnect()",
    c: "php_connect()",
    d: "phpconnect()"
  },
  {
    quostion: "CMS sóziniń keńeytpesin qaysı qatarda berilgen?",
    a: "Content Management System",
    b: "Content Manager System",
    c: "Content Markup System",
    d: "Content Made System"
  },
  {
    quostion: "PHP de kóp qatarlı kommentari (túsindirme) qanday jazıladı?",
    a: "/* VA */",
    b: "//",
    c: "#",
    d: "< ? VA ? >"
  },
  {
    quostion: "Web bet jaratıwda html tilindegi tómendegi tegning mánisi ne? &lt; I N P U T &gt;",
    a: "Kirgiziw maydanı",
    b: "Bos orın",
    c: "variantlar dizimi",
    d: "Hújjettiń bas bet bólegi"
  },
  {
    quostion: "PHP de DELETE funkciyasınıń wazıypası qanday?",
    a: "Maǵlıwmatlar bazasınan maǵlıwmat óshiriw",
    b: "Maǵlıwmatlar bazasınada maǵlıwmatdı jańalaw",
    c: "Maǵlıwmatlar bazasınan maǵlıwmat alıw",
    d: "Maǵlıwmatlar bazasına maǵlıwmat jiberiw"
  },
  {
    quostion: "< ol type=”I” > teksti neni ańlatadı?",
    a: "Teg I., II., III., Iv. hám t.b kórinisindegi dizimdi payda etedi",
    b: "Teg cifrlı kórinistegi dizimdi payda etedi",
    c: "Teg kvadrat formasındaǵı dizim payda etedi",
    d: "Teg 1., 2., 3., 4. hám t.b kórinisindegi dizimdi payda etedi"
  },
  {
    quostion: "Qaysı teg formada maǵlıwmat kirgiziwde paydalanıwshı bir neshe variantlardan birin tańlawdan paydalanıwdı ańlatadı?",
    a: "# < input type ='radio' >",
    b: "< input type='text' >",
    c: "< input type='checkbox' >",
    d: "< input type='image' >"
  },
  {
    quostion: "Qaysı element járdeminde formada berilgen bir neshe dizim ishinen birin tańlaw ámelge asıriladı?",
    a: "< select >",
    b: "< title >",
    c: "< input >",
    d: "< option >"
  },
  {
    quostion: "Birden-bir adreske iye hám brauzer járdeminde ashıw, oqıw múmkinshiligine iye bolǵan hújjet…",
    a: "Web-bet",
    b: "Elektron magazin",
    c: "Web-sayt",
    d: "Web-server"
  },
  {
    quostion: "HTMLdegi &reg; belgisiniń mánisi ne?",
    a: "Dizimnen ótkenlik belgisi",
    b: "Túsindirme qoyıw",
    c: "Úlken belgisi",
    d: "Copyright belgisi"
  },
  {
    quostion: "HTMLdagi &sum belgisiniń mánisi ne?",
    a: "Jıyındı esaplaw belgisi",
    b: "Kishi belgisi",
    c: "& belgisi",
    d: "Bos orın"
  },
  {
    quostion: "HTML forma elementleriniń atributları berilgen juwaptı tabıń.",
    a: "value, readonly, size, rows, cols",
    b: "value, border, size, rowspan, colspan",
    c: "disabled, height, size, rows, colspan",
    d: "value, readonly, size, rowspan, colspan"
  },
  {
    quostion: "HTML5 te kirgiziw elementiniń májburiyligin qaysı atribut arqalı belgilenedi?",
    a: "Required",
    b: "Placeholder",
    c: "Pattern",
    d: "Input"
  },
  {
    quostion: "Qaysı teg arqalı JavaScript járdeminde veb -betke grafikalar sızıw múmkin?",
    a: "< canvas >",
    b: "< svg >",
    c: "< image >",
    d: "< img >"
  },
  {
    quostion: "Javascript tilinde qanday unar operatorlar ámelde?",
    a: "!, ++, --;",
    b: "-, +, /, %;",
    c: "&, |, ~, ^;",
    d: ">>,>>>,"
  },
  {
    quostion: "CSS de ……… text kólemi siymay qalǵan jaǵdayda paydalanıwshıǵa qanday xabar beriwdi belgileydi.",
    a: "Text-overflow",
    b: "Text-justify",
    c: "Text-align",
    d: "Word-wrap"
  },
  {
    quostion: "CSS de text qatarların gorizontal hám vertical jaǵdayda jaylasıwın belgilewshi qásiyet qaysı?",
    a: "Writing-mode",
    b: "Word-wrap",
    c: "Word-break",
    d: "Text-align-last"
  },
  {
    quostion: "CSS de elementtiń X hám Y oǵında 2 ólshewli kóshiriwdi ámelge asırıwshı funkcya qaysı?",
    a: "translate(X,Y)",
    b: "scale(X,Y)",
    c: "scaleX()",
    d: "scaleY()"
  },
  {
    quostion: "belgili bir múyesh astında 2 ólshewli aylantırıwdı ámelge asırıwshı funkciya qaysı.",
    a: "# scale(X,Y)",
    b: "rotate(angle)",
    c: "skew(x-angle,y-angle)",
    d: "translate(X,Y)"
  },
  {
    quostion: "Web betke maǵlıwmatlar bazasınan maǵlıwmatlardı qaysı funkciya arqalı shaqıramız?",
    a: "SELECT",
    b: "UPDATE",
    c: "DELITE",
    d: "INSERT INTO"
  },
  {
    quostion: "Kestedegi maǵlıwmattı qaysı funkciya arqalı oshıriw múmkin?",
    a: "DELITE",
    b: "UPDATE",
    c: "SELECT",
    d: "INSERT INTO"
  },
  {
    quostion: "Serverde qayta isleniwshi cenariy tili bul...",
    a: "PHP",
    b: "JS",
    c: "C++",
    d: "HTML"
  },
  {
    quostion: "Web bet jaratıwda html tilindegi tómendegi tegning mánisi ne? &lt; ! -- тектс ! --- &gt;",
    a: "Túsindirme qoyıw",
    b: "Freym (ramka ) dıń ózgeshelikleri",
    c: "Kishi belgisi",
    d: "Tırnaqsha"
  },
  {
    quostion: "CSS diń tarqatpasi qanday?",
    a: "#Cascading style sheets",
    b: "Central stylesheet systems",
    c: "Css",
    d: "Tarqatpasi joq"
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
// AngularJs
var app = angular.module("MyApp", []);

app.controller("myCtrl", function ($scope, $timeout) {

  $scope.loading = true;

  $timeout(function(){
    $scope.loading = false;
  }, 5000);


  /**========================================================================
   * *                              App Items
   *========================================================================**/
  $scope.items = [

    /**========================================================================
     * *                              breackFast
     *========================================================================**/
    {
      name: "وافل بیکن و تخم مرغ",
      price: 220,
      disposition: "وافل، بیکن گوساله، تخم مرغ، سبزیجات میکروگرین",
      category: "breakfast",
      time: "10",
      img: "sob1.jpg",
      selected: false,
    },
    {
      name: "فریتاتا",
      price: 240,
      disposition:
        "تخم مرغ، بیکن، فلفل دلمه، گوجه فرنگی، پنیر پیتزا، سبزیجات میکروگرین",
      category: "breakfast",
      time: "10",
      img: "sob2.jpg",
      selected: false,
    },
    {
      name: "املت زیتون",
      price: 175,
      disposition: "پوره زیتون، تخم مرغ، نان سنگک",
      category: "breakfast",
      time: "15",
      img: "sob3.jpg",
      selected: false,
    },
    {
      name: "املت اسفناج",
      price: 150,
      disposition: "اسفناج، قارچ، تخم مرغ، پارمژان، نان سنگک",
      category: "breakfast",
      time: "15",
      img: "sob4.jpg",
      selected: false,
    },
    {
      name: "سوسیس تخم‌مرغ",
      price: 150,
      disposition: "سوسیس شکاری، تخم مرغ، نان سنگک",
      category: "breakfast",
      time: "10",
      img: "sob5.jpg",
      selected: false,
    },
    {
      name: "املت",
      price: 100,
      disposition: "تخم مرغ؛رب،",
      category: "breakfast",
      time: "10",
      img: "omlet-robi.jpg",
      selected: false,
    },



    
    /**========================================================================
     * *                              Coffee
     *========================================================================**/
    {
      name: "اسپرسو کامرشیال",
      price: 88,
      disposition: "یک شات اسپرسو غلیط",
      category: "coffee",
      time: "0",
      img: "./coffee/espresso.jpg",
      selected: false,
    },
    {
      name: "اسپرسو اسپیشیال",
      price: 98,
      disposition: "یک شات اسپرسو غلیط",
      category: "coffee",
      time: "0",
      img: "./coffee/espresso.jpg",
      selected: false,
    },
    {
      name: "امریکانو",
      price: 97,
      disposition:
        "یک شات اسپرسو + آب جوش، برای دوستانی که قهوه تلخ دوست ندارن!",
      category: "coffee",
      time: "0",
      img: "amricano.webp",
      selected: false,
    },

    {
      name: "اسپرسو ماکیاتو",
      price: 97,
      disposition: "",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },

    {
      name: "رومانو",
      price: 97,
      disposition: "رومانو یک نوشیدنی ساده و جسورانه است که ترکیبی از اسپرسو و کمی آب‌لیمو تازه برای طعمی تلخ و ترش است.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },


    {
      name: "کاپوچینو",
      price: 102,
      disposition: "کاپوچینو نوشیدنی قهوه‌ای است که از ترکیب یک سوم اسپرسو، یک سوم شیر بخار داده‌شده، و یک سوم فوم شیر تشکیل می‌شود و معمولاً با پودر کاکائو یا دارچین تزئین می‌شود.",
      category: "coffee",
      time: "0",
      img: "capuchino.webp",
      selected: false,
    },

    {
      name: "لته",
      price: 117,
      disposition: "لاته آرت یک نوشیدنی قهوه‌ای است که از اسپرسو و شیر بخار داده‌شده تشکیل شده و روی سطح آن با فوم شیر طرح‌های هنری و زیبا ایجاد می‌شود.",
      category: "coffee",
      time: "0",
      img: "./coffee/art.jpg",
      selected: false,
    },


    {
      name: "کارامل ماکیاتو",
      price: 127,
      disposition: "کارامل ماکیاتو نوشیدنی قهوه‌ای متعادل از اسپرسو، شیر بخار داده‌شده و شیره‌ی کارامل است که طعمی شیرین و لطیف دارد.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },
   




    {
      name: "موکا",
      price: 127,
      disposition: "موکا نوشیدنی قهوه‌ای است که ترکیبی از اسپرسو، شیر بخار داده‌شده و سس شکلات است، معمولاً با خامه زده‌شده یا پودر کاکائو تزئین می‌شود و طعمی غنی و شکلاتی دارد.",
      category: "coffee",
      time: "0",
      img: "mocha.jpg",
      selected: false,
    },
    {
      name: "موکا نوتلا",
      price: 137,
      disposition: "موکا نوتلا یک نوشیدنی قهوه‌ای است که از ترکیب اسپرسو، شیر بخار داده‌شده، سس شکلاتی نوتلا و خامه زده‌شده تهیه می‌شود و طعمی غنی و شکلاتی با عطر خاص نوتلا دارد.",
      category: "coffee",
      time: "0",
      img: "mocha.jpg",
      selected: false,
    },
 
    
    {
      name: "کن پانا",
      price: 112,
      disposition: "قهوه ترک یک نوشیدنی سنتی غلیظ است که از دم‌کردن پودر قهوه بسیار ریز آسیاب‌شده در آب جوش، معمولاً با شکر، تهیه می‌شود و بدون فیلتر سرو می‌گردد.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },

  
  
    {
      name: "قهوه ترک",
      price: 107,
      disposition: "قهوه ترک یک نوشیدنی سنتی غلیظ است که از دم‌کردن پودر قهوه بسیار ریز آسیاب‌شده در آب جوش، معمولاً با شکر، تهیه می‌شود و بدون فیلتر سرو می‌گردد.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },

    {
      name: "قهوه فرانسه",
      price: 108,
      disposition: "قهوه فرانسه یک نوشیدنی ملایم است که با عبور آب داغ از دانه‌های قهوه متوسط آسیاب‌شده در دستگاه فرنچ پرس یا قهوه‌ساز قطره‌ای تهیه می‌شود و بافتی شفاف‌تر و طعمی ملایم‌تر دارد.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },


    {
      name: "قهوه یونانی",
      price: 117,
      disposition: "قهوه یونانی مشابه قهوه ترک است و از دم‌کردن قهوه ریز آسیاب‌شده در آب تهیه می‌شود، اما با طعمی کمی متفاوت که به دلیل روش دم‌کردن و قهوه مورد استفاده ایجاد می‌شود.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },
    {
      name: "کمکس",
      price: 158,
      disposition: "قهوه یونانی مشابه قهوه ترک است و از دم‌کردن قهوه ریز آسیاب‌شده در آب تهیه می‌شود، اما با طعمی کمی متفاوت که به دلیل روش دم‌کردن و قهوه مورد استفاده ایجاد می‌شود.",
      category: "coffee",
      time: "0",
      img: "coffee.jpg",
      selected: false,
    },


  
    // {
    //   name: "آفوگاتو",
    //   price: 80,
    //   disposition: "آفوگاتو دسر-نوشیدنی ساده و خوشمزه‌ای است که از ترکیب یک اسکوپ بستنی وانیلی با شات اسپرسوی داغ تهیه می‌شود و تضاد دلپذیری از گرما و سرمای طعم‌ها ایجاد می‌کند.",
    //   category: "coffee",
    //   time: "0",
    //   img: "coffee.jpg",
    //   selected: false,
    // },
    // {
    //   name: "چاکلت آفوگاتو",
    //   price: 80,
    //   disposition: "چاکلت آفوگاتو ترکیبی از بستنی شکلاتی و شات اسپرسوی داغ است که طعمی غنی‌تر و شکلاتی‌تر نسبت به آفوگاتوی کلاسیک ارائه می‌دهد.",
    //   category: "coffee",
    //   time: "0",
    //   img: "coffee.jpg",
    //   selected: false,
    // },

    // cocktail
    {
      name: "لیموناد",
      price: 97,
      disposition: "سیروپ لیمو + اب لیمو تازه + سودا",
      category: "cocktail",
      time: "0",
      img: "limonad.jpg",
      selected: false,
    },


    {
      name: "موهیتو",
      price: 102,
      disposition: "سیروپ نعنا + اب لیمو تازه + نعنا بش شده + سودا",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },

    {
      name: "رد موهیتو",
      price: 117,
      disposition: "سیروپ کرن بری + اب میوه های قرمز + میوه های قرمز + اب لیمو تازه + نعنا بش شده + سودا",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },

    {
      name: "اورنج لمون",
      price: 117,
      disposition: "سیروپ پشن فروت + سیروپ لیمو + اب لیمو تازه + اب پرتقال + سودا",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },





    {
      name: "بلولمون",
      price: 117,
      disposition: "سیروپ بلو کارسائو + اب لیمو تازه + اب پرتقال + سودا",
      category: "cocktail",
      time: "0",
      img: "cocktail.jpg",
      selected: false,
    },



  
    {
      name: "پیناکولادا",
      price: 122,
      disposition: "سیروپ نارگیل + اب اناناس + کمی شیر",
      category: "cocktail",
      time: "0",
      img: "pina.jpg",
      selected: false,
    },



    {
      name: "بلک لایت",
      price: 132,
      disposition: "اب پرتقال + اب اناناس + اب انبه + کربن فعال شده",
      category: "cocktail",
      time: "0",
      img: "cocktail.jpg",
      selected: false,
    },
    {
      name: "کاکتوس یری",
      price: 137,
      disposition: "سیروپ کرن بری + توت فرنگی + اب لیمو تازه + اب میوه کاکتوس",
      category: "cocktail",
      time: "0",
      img: "cocktail.jpg",
      selected: false,
    },


    {
      name: "سایروس",
      price: 138,
      disposition: "سیروپ کرن بری + اب لیمو تازه + اب سیب + نمک + سودا",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },

    {
      name: "نیروانا",
      price: 142,
      disposition: "سیروپ بلوبری + الوئورا + اب لیمو تازه + اب پرتقال + چای ترش",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },


    {
      name: "کوئین",
      price: 142,
      disposition: "اب هلو + اب البالو +اب زرشک + سیروپ کرن بری + فانتا",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },





    {
      name: "پینک فلوید",
      price: 148,
      disposition: "سیروپ گام + سیروپ گرانادین + پرتقال خونی + اب لیمو تازه + ابمیوه کاکتوس",
      category: "cocktail",
      time: "0",
      img: "cocktail.jpg",
      selected: false,
    },


    {
      name: "بلک سبث",
      price: 148,
      disposition: "سیروپ گرانادین + نمشک وحشی + اب البالو + اب زرشک + نمک ریم شده ",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },


    {
      name: "سوپرایز",
      price: 158,
      disposition: "...",
      category: "cocktail",
      time: "0",
      img: "mojito.webp",
      selected: false,
    },






    // milkshake
    {
      name: "شیک فیوردی لاته",
      price: 90,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک شکلات بلژیکی",
      price: 165,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک پیستاچی",
      price: 210,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک بیسکوئیت لوتوس",
      price: 160,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک تلخ",
      price: 150,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک نارگیل",
      price: 150,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک قهوه",
      price: 150,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک توت فرنگی",
      price: 150,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
   
    {
      name: "شیک تیرامیسو",
      price: 150,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },
    {
      name: "شیک فندق",
      price: 150,
      disposition: "",
      category: "milkshake",
      time: "0",
      img: "milkshake.jpg",
      selected: false,
    },

    // hookah
     {
      name: "دوسیب",
      price: 328,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },

     {
      name: "سیب یخ",
      price: 328,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
  {
      name: "هندوانه یخ",
      price: 328,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
   {
      name: "بلوبری",
      price: 328,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },

    {
      name: "آدامس دارچین",
      price: 328,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
   {
      name: "پرتقال خامه",
      price: 328,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
    
    {
      name: "گیلاس",
      price: 348,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
     {
      name: "تمشک بستنی",
      price: 348,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
   {
      name: "لاو",
      price: 348,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
    {
      name: "شب های مسکو.",
      price: 358,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
 {
      name: "شب های بغداد",
      price: 358,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },


    {
      name: "شهریار",
      price: 368,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },
   

 
   
 
    {
      name: "استوایی",
      price: 368,
      disposition: "",
      category: "hookah",
      time: "0",
      img: "hookah.jpg",
      selected: false,
    },

  

    //  herbal
    {
      name: "چای لاهیجان",
      price: 60,
      disposition: "",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "چای دارچین",
      price: 68,
      disposition: "",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },
    {
      name: "چای زنجبیل",
      price: 68,
      disposition: "",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },
    {
      name: "چای زعفران",
      price: 98,
      disposition: "",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },
    {
      name: "چای باقلوا",
      price: 128,
      disposition: "",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },
    {
      name: "گیلان",
      price: 87,
      disposition: "چای سبز + لیمو",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "هرمزگان",
      price: 97,
      disposition: "چای ترش",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "آبادان",
      price: 107,
      disposition: "زنجبیل+ لیمو + عسل + نعنا",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "تهران",
      price: 107,
      disposition: "گل گاو زبان + لیمو امانی + تخم گشنیز + بابونه + اب لیمو",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "اصفهان",
      price: 102,
      disposition: "چای به + دارچین",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "سبلان",
      price: 107,
      disposition: "اویشن + لیمو + عسل",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "دماوند",
      price: 107,
      disposition: "چای سیب + دارچین",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },

    {
      name: "شیراز",
      price: 102,
      disposition: "بهار نارنج + به لیمو + اویشن + میخک",
      category: "herbal",
      time: "0",
      img: "herbal.jpg",
      selected: false,
    },



    // cake
    {
      selected: false,
      name: "تیرامیسو",
      price: 100,
      disposition: "",
      category: "cake",
      time: "0",
      img: "cake.jpg",
    },
    {
      selected: false,
      name: "کیک شکلات",
      price: 95,
      disposition: "",
      category: "cake",
      time: "0",
      img: "cake.jpg",
    },
    {
      selected: false,
      name: "کروسان",
      price: 100,
      disposition: "",
      category: "cake",
      time: "0",
      img: "cake.jpg",
    },
    {
      selected: false,
      name: "پنکیک",
      price: 80,
      disposition: "",
      category: "cake",
      time: "0",
      img: "cake.jpg",
    },
    {
      selected: false,
      name: "وافل مخصوص کافه",
      price: 250,
      disposition: "",
      category: "cake",
      time: "15",
      img: "cake.jpg",
    },
    {
      selected: false,
      name: "موچی",
      price: 80,
      disposition: "",
      category: "cake",
      time: "15",
      img: "mochi.jpg",
    },

    //  appetizer
    {
      selected: false,
      name: "نان سیر",
      price: 265,
      disposition: "نان مخصوص، سیر تفت داده شده در کره، پنیر موزارلا",
      category: "appetizer",
      time: "0",
      img: "fastfood/a1.webp",
    },

     {
      selected: false,
      name: "سیب زمینی مخصوص",
      price: 355,
      disposition:
        "یک نفره، سیب زمینی سرخ شده، ژامبون گوشت 90%، قارچ، پنیر موزارلا",
      category: "appetizer",
      time: "0",
      img: "fastfood/a2.webp",
    },

       {
      selected: false,
      name: "سیب زمینی سرخ شده",
      price: 165,
      disposition: "یک نفره، سیب زمینی سرخ شده ساده",
      category: "appetizer",
      time: "0",
      img: "fastfood/a3.webp",
    },

      {
      selected: false,
      name: "سالاد سزار  فیله مرغ سوخاری 2 تکه",
      price: 435,
      disposition:
        "یک نفره، فیله مرغ پنیری سوخاری شده، نان سیر دار، کاهو، گوجه گیلاسی، سس سزار، پ" +
        "نیر پارمیسان، زیتون سیاه",
      category: "appetizer",
      time: "0",
      img: "fastfood/a4.webp",
    },
    {
      selected: false,
      name: "سالاد سزار فیله مرغ سوخاری 3 نکه",
      price: 495,
      disposition:
        "یک نفره، فیله مرغ پنیری سوخاری شده، نان سیر دار، کاهو، گوجه گیلاسی، سس سزار، پ" +
        "نیر پارمیسان، زیتون سیاه",
      category: "appetizer",
      time: "0",
      img: "fastfood/a4.webp",
    },


      {
      selected: false,
      name: "کراکت پنیری",
      price: 185,
      disposition: "2 عدد کراکت پنیری",
      category: "appetizer",
      time: "0",
      img: "fastfood/a9.webp",
    },

 {
      selected: false,
      name: "سالاد وینگار موستاردو",
      price: 385,
      disposition:
        "یک نفره، کاهو، گوجه گیلاسی، زیتون، کنجد سفید، گردو، کشمش، کلم بروکلی، نان تست،" +
        " قارچ خام، تخم هندونه، سس موستاردو، پنیر پارمسان",
      category: "appetizer",
      time: "0",
      img: "fastfood/a5.webp",
    },

      {
      selected: false,
      name: "قارچ سوخاری",
      price: 265,
      disposition: "یک نفره، قارچ سوخاری شده، سیب زمینی سرخ شده",
      category: "appetizer",
      time: "0",
      img: "fastfood/a7.webp",
    },
  {
      selected: false,
      name: "سالاد کلم بروکلی",
      price: 165,
      disposition: "یک نفره، کلم بروکلی با سس مخصوص",
      category: "appetizer",
      time: "0",
      img: "fastfood/a6.webp",
    },

     {
      selected: false,
      name: "سیب زمینی با سس قارچ",
      price: 235,
      disposition: "550 گرم سیب زمینی سرخ شده، سس قارچ",
      category: "appetizer",
      time: "0",
      img: "fastfood/a8.webp",
    },

        {
      selected: false,
      name: "پیاز حلقه ای",
      price: 115,
      disposition: "",
      category: "appetizer",
      time: "0",
      img: "",
    },
   
   

    {
      selected: false,
      name: "سالاد سزار با فیله مرغ گریل",
      price: 395,
      disposition:
        "یک نفره، 2 نکه فیله مرغ گریل شده، نان سیر دار، کاهو، گوجه گیلاسی، سس سزار، پنی" +
        "ر پارمیسان، زیتون",
      category: "appetizer",
      time: "0",
      img: "fastfood/a4.webp",
    },
  
   
  
  
 
   
  
    

    // hotdrink
    {
      selected: false,
      name: "هات چاکلت",
      price: 89,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },
    {
      selected: false,
      name: "وایت چاکلت",
      price: 89,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },
    {
      selected: false,
      name: "پبنک چاکلت",
      price: 92,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },
    {
      selected: false,
      name: " ماسالا",
      price: 92,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },

    {
      selected: false,
      name: "چای کرک",
      price: 118,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },

    {
      selected: false,
      name: "چای پسته",
      price: 118,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },



    {
      selected: false,
      name: "شیر عسل",
      price: 102,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },



    {
      selected: false,
      name: "شیر عسل دارچین",
      price: 107,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },

    {
      selected: false,
      name: "شیر عسل زنجبیل",
      price: 107,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },

    {
      selected: false,
      name: "شیر عسل زعفران",
      price: 127,
      disposition: "",
      category: "hotdrink",
      time: "0",
      img: "hotdrink.jpg",
    },

    // ice coffee
    //v.02
    {
      selected: false,
      name: "آیس امریکانو",
      price: 98,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },
    {
      selected: false,
      name: "تونیک اسپرسو",
      price: 118,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },

    {
      selected: false,
      name: "آیس لته",
      price: 128,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },


    {
      selected: false,
      name: "آیس موکا",
      price: 138,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },
  
    {
      selected: false,
      name: "آیس کارامل ماکیاتو",
      price: 138,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },

    {
      selected: false,
      name: "افوگاتو",
      price: 122,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },

    {
      selected: false,
      name: "چاکلت افوگاتو",
      price: 127,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },
    {
      selected: false,
      name: "اوشن پیک",
      price: 138,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },

    {
      selected: false,
      name: "کوک اسپرسو",
      price: 138,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },


    {
      selected: false,
      name: "هایپ اسپرسو",
      price: 148,
      disposition: "",
      category: "cold",
      time: "0",
      img: "icecoffee.jpg",
    },

    // juice
    {
      selected: false,
      name: "آب هویچ",
      price: 50,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب پرتقال",
      price: 100,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب انبه",
      price: 100,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب آناناس",
      price: 120,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب توت فرنگی",
      price: 110,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب سیب",
      price: 80,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب هندوانه",
      price: 0,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },
    {
      selected: false,
      name: "آب کرفس",
      price: 0,
      disposition: "",
      category: "juice",
      time: "0",
      img: "juice.jpg",
    },

    // ice cream
    {
      selected: false,
      name: "ویتامینه مخصوص",
      price: 200,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "سوپر ویتامینه مخصوص",
      price: 300,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "شیرپسته ویژه",
      price: 180,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "بستنی سه اسکوپ",
      price: 80,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "بستنی پنج اسکوپ",
      price: 120,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "شیرموز",
      price: 90,
      disposition: "شیر تازه + موز تازه",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "شیرموز بستنی",
      price: 130,
      disposition: "شیر + موز تازه + بستنی سنتی اصیل",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "فالوده",
      price: 80,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },
    {
      selected: false,
      name: "فالوده بستنی",
      price: 120,
      disposition: "",
      category: "icecream",
      time: "0",
      img: "icecream.jpg",
    },

    /**========================================================================
     * *                              Drinks
     *========================================================================**/
    {
      selected: false,
      name: "نوشابه کوکا",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "drink.jpg",
    },
    {
      selected: false,
      name: "نوشابه پپسی",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "pepsi.webp",
    },
    {
      selected: false,
      name: "نوشیدنی مالت (کلاسیک)",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "/drinks/drink1.jpg",
    },
    {
      selected: false,
      name: "نوشیدنی مالت (استوایی)",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "/drinks/drink2.jpg",
    },
    {
      selected: false,
      name: "نوشیدنی مالت (سیب)",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "/drinks/drink3.jpg",
    },
    {
      selected: false,
      name: "نوشیدنی مالت (لیمو)",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "/drinks/drink3.jpg",
    },
    {
      selected: false,
      name: "نوشابه فانتا",
      price: 30,
      disposition: "",
      category: "coca",
      time: "0",
      img: "/drinks/drink4.jpg",
    },




    {
      selected: false,
      name: "آب معدنی",
      price: 10,
      disposition: "",
      category: "coca",
      time: "0",
      img: "water.jpg",
    },





    // foods
    {
      selected: false,
      name: "پیتزا آمریکایی",
      type: "heading",
      category: "foods",
      class: "text-bg-warning",
    },
    {
      selected: false,
      name: "مخلوط ",
      price: 425,
      disposition:
        "خمیر پیتزا آمریکایی، مخلوط ژامبون گوشت و مرغ 90%، گوشت گوساله چرخ شده، قارچ، ف" +
        "لفل دلمه، گوجه فرنگی، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c1.webp",
    },
    {
      selected: false,
      name: "گوشت و قارچ",
      price: 435,
      disposition:
        "خمیر پیتزا آمریکایی، گوشت گوساله چرخ شده، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c2.webp",
    },
    {
      selected: false,
      name: "پپرونی",
      price: 355,
      disposition:
        "خمیر پیتزا آمریکایی، کالباس پپرونی، پنیر موزارلا، سس مخصوص تند",
      category: "foods",
      time: "0",
      img: "fastfood/c3.webp",
    },
    {
      selected: false,
      name: "رویال",
      price: 415,
      disposition:
        "خمیر پیتزا آمریکایی، کالباس پپرونی، گوشت گوساله چر شده، پنیر موزارلا، کنجد، سس" +
        " مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c4.webp",
    },
    {
      selected: false,
      name: "فیلتا",
      price: 595,
      disposition:
        "خمیر پیتزا آمریکایی، گوشت گوساله ریش ریش شده ، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c5.webp",
    },
    {
      selected: false,
      name: "چیکن",
      price: 395,
      disposition:
        "خمیر پیتزا آمریکایی، فیله مرغ، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c6.webp",
    },
    {
      selected: false,
      name: "فیلتا چیکن.",
      price: 445,
      disposition:
        "خمیر پیتزا آمریکایی، گوشت گوساله ریش ریش شده، فیله مرغ، قارچ، پنیر موزارلا، سس" +
        " مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c7.webp",
    },
    {
      selected: false,
      name: "مکزیکی",
      price: 375,
      disposition:
        "خمیر پیتزا آمریکایی، فیله مرغ، ژامبون گوشت 90%، ذرت، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c8.webp",
    },
    {
      selected: false,
      name: "چهارفصل",
      price: 385,
      disposition:
        "خمیر پیتزا آمریکایی، یک چهارم پیتزا مخلوط، یک چهارم پیتزا گوشت و قارچ، یک چهار" +
        "م پیتزا پپرونی، یک چهارم پیتزا سبزیجات",
      category: "foods",
      time: "0",
      img: "fastfood/c9.webp",
    },
    {
      selected: false,
      name: "بلونیا",
      price: 445,
      disposition:
        "خمیر پیتزا آمریکایی، گوشت گوساله ریش ریش شده، قارچ، کالباس پپرونی، پنیر موزارل" +
        "ا، سس مخصوص تند",
      category: "foods",
      time: "0",
      img: "fastfood/c10.webp",
    },
    {
      selected: false,
      name: "مارگاریتا",
      price: 335,
      disposition: "خمیر پیتزا آمریکایی، گوجه، ریحان، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c11.webp",
    },
    {
      selected: false,
      name: "قارچ و پنیر",
      price: 315,
      disposition: "خمیر پیتزا آمریکایی، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c12.webp",
    },
    {
      selected: false,
      name: "سبزیجات",
      price: 355,
      disposition:
        "خمیر پیتزا آمریکایی، ذرت، نخود فرنگی، هویج، فلفل دلمه ای، گوجه فرنگی، قارچ، پن" +
        "یر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/c13.webp",
    },


    {
      selected: false,
      name: "پیتزا ایتالیایی",
      type: "heading",
      category: "foods",
      class: "text-bg-info",
    },
    {
      selected: false,
      name: "چانو",
      price: 525,
      disposition:
        "خمیر پیتزا ایتالیایی، استیک گوشت گوساله، قارچ، فلفل دلمه ای، پنیر مخصوص، سس مخ" +
        "صوص",
      category: "foods",
      time: "0",
      img: "fastfood/f1.webp",
    },
    {
      selected: false,
      name: "بیف",
      price: 545,
      disposition:
        "خمیر پیتزا ایتالیایی، گوشت بیف استراگانوف، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f10.webp",
    },
    {
      selected: false,
      name: "آفریکانو",
      price: 445,
      disposition:
        "خمیر پیتزا ایتالیایی، فیله مرغ، قارچ، فلفل دلمه ای، پنیر مخصوص، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f3.webp",
    },
    {
      selected: false,
      name: "کنیباله",
      price: 495,
      disposition:
        "خمیر پیتزا ایتالیایی، گوشت گوساله ریش ریش شده، فیله مرغ، قارچ، سس خامه، فلفل د" +
        "لمه، پنیر مخصوص، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f4.webp",
    },
    {
      selected: false,
      name: "مکزیکانو",
      price: 445,
      disposition:
        "خمیر پیتزا ایتالیایی، گوشت گوساله چرخ شده، قارچ، فلفل دلمه، گوجه فرنگی، پنیر م" +
        "خصوص، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f5.webp",
    },
    {
      selected: false,
      name: "کاپری چیوسا",
      price: 425,
      disposition:
        "خمیر پیتزا ایتالیایی، مخلوط ژامبون گوشت و مرغ 90%، گوشت گوساله چرخ شده، قارچ، " +
        "فلفل دلمه، زیتون، پنیر مخصوص، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f6.webp",
    },
    {
      selected: false,
      name: "پپرونی",
      price: 395,
      disposition:
        "خمیر پیتزا ایتالیایی، کالباس پپرونی، هالوپینو، پنیر مخصوص، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f7.webp",
    },
    {
      selected: false,
      name: "استاف کراست",
      price: 455,
      disposition:
        "خمیر پیتزا ایتالیایی، مخلوط ژامبون گوشت و مرغ 90%، گوشت گوساله چرخ شده، قارچ، " +
        "فلفل دلمه، گوجه فرنگی، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f8.webp",
    },
    {
      selected: false,
      name: "کیوب کراست",
      price: 455,
      disposition:
        "خمیر پیتزا ایتالیایی، گوشت گوساله ریش ریش شده، فیله مرغ، قارچ، سس مخصوص، پنیر،" +
        " فلفل دلمه، فلفل سبز",
      category: "foods",
      time: "0",
      img: "fastfood/f9.webp",
    },
    {
      selected: false,
      name: "استار بیف",
      price: 485,
      disposition:
        "خمیر پیتزا ایتالیایی، گوشت بیف استراگانوف، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f2.webp",
    },
    {
      selected: false,
      name: "استار چیکن",
      price: 435,
      disposition:
        "خمیر پیتزا ایتالیایی، فیله مرغ، سس خامه، قارچ، پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f2.webp",
    },
    {
      selected: false,
      name: "یونانی",
      price: 415,
      disposition:
        "خمیر پیتزا ایتالیایی، مخلوط ژامبون گوشت و مرغ 90%، گوشت گوساله چرخ شده، قارچ، " +
        "پنیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/f11.webp",
    },
    {
      selected: false,
      name: "ویجیتاله",
      price: 355,
      disposition:
        "خمیر پیتزا ایتالیایی، ذرت، نخود فرنگی، هویج، فلفل دلمه ای، گوجه فرنگی، قارچ، پ" +
        "نیر موزارلا، سس مخصوص",
      category: "foods",
      time: "0",
      img: "fastfood/x.webp",
    },


    {
      selected: false,
      name: "استیک و خوراک",
      type: "heading",
      category: "foods",
      class: "text-bg-success",
    },
    {
      selected: false,
      name: "استیک گوشت",
      price: 745,
      disposition:
        "400 گرم استیک فیله گوساله، دورچین: سس ماشروم، سبزیجات، سیب زمینی تنوری",
      category: "foods",
      time: "0",
      img: "fastfood/b1.webp",
    },
    {
      selected: false,
      name: "استیک مرغ",
      price: 525,
      disposition:
        "400 گرم استیک سینه مرغ، دورچین: سس ماشروم، سبزیجات، سیب زمینی تنوری",
      category: "foods",
      time: "0",
      img: "fastfood/b2.webp",
    },
    {
      selected: false,
      name: "میکس استیک",
      price: 635,
      disposition: "فیله گوساله 200 گرم، سینه مرغ 200 گرماستیک گوشت",
      category: "foods",
      time: "0",
      img: "fastfood/b3.webp",
    },
    {
      selected: false,
      name: "بیف استراگانف",
      price: 545,
      disposition:
        "گوشت فیله گوساله ریش ریش شده 300 گرم، سس ماشروم، پنیر پارمیسان",
      category: "foods",
      time: "0",
      img: "fastfood/b7.webp",
    },
    {
      selected: false,
      name: "چیکن استراگانف",
      price: 425,
      disposition: "سینه مرغ ریش ریش شده 300 گرم، سس ماشروم، پنیر پارمیسان",
      category: "foods",
      time: "0",
      img: "fastfood/b6.webp",
    },
    {
      selected: false,
      name: "پاستا آلفردو",
      price: 375,
      disposition:
        "230 گرم، پنه، فیله مرغ مزه دار شده 140 گرم، سس آلفردو، قارچ، پنیر پارمیسان",
      category: "foods",
      time: "0",
      img: "fastfood/b5.webp",
    },
    {
      selected: false,
      name: "میکس دیش",
      price: 655,
      disposition:
        "2 عدد فیله مرغ سوخاری، 80 گرم بال سوخاری، 5 عدد قارچ سوخاری، بیف استراگانف 100" +
        " گرم، 3 عدد پیاز حلقه ایی، 6 عدد کراکت پنیری، سیب زمینی سرخ شده، سالاد کلم، سب" +
        "زیجات",
      category: "foods",
      time: "0",
      img: "fastfood/b4.webp",
    },



    {
      selected: false,
      name: "برگر و ساندویچ",
      type: "heading",
      category: "foods",
      class: "text-bg-secondary",
    },
    {
      selected: false,
      name: "جنرال یرگر",
      price: 345,
      disposition:
        "ک عدد برگر دست ساز گوشت گوساله 150 گرمی، گوجه فرنگی، کاهو، سس مخصوص، خیارشور، " +
        "نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d1.webp",
    },
    {
      selected: false,
      name: "چیز برگر",
      price: 355,
      disposition:
        "یک عدد برگر دست ساز گوشت گوساله 150 گرمی، یک ورق پنیر گودا، گوجه فرنگی، کاهو، " +
        "سس مخصوص، خیارشور، نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d3.webp",
    },
    {
      selected: false,
      name: "ماشروم برگر",
      price: 355,
      disposition:
        "یک عدد برگر دست ساز گوشت گوساله 150 گرمی، قارچ، گوجه فرنگی، کاهو، سس مخصوص، خی" +
        "ارشور، نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d4.webp",
    },
    {
      selected: false,
      name: "کینگ برگر",
      price: 365,
      disposition:
        "یک عدد برگر دست ساز گوشت گوساله 150 گرمی، قارچ، یک ورق پنیر گودا، گوجه فرنگی، " +
        "کاهو، سس مخصوص، خیارشور، نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d5.webp",
    },
    {
      selected: false,
      name: "بیکن برگر",
      price: 385,
      disposition:
        "یک عدد برگر دست ساز گوشت گوساله 150 گرمی، یک ورق بیکن 97%، قارچ، یک ورق پنیر گ" +
        "ودا، گوجه فرنگی، کاهو، سس مخصوص، خیارشور، نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d6.webp",
    },
    {
      selected: false,
      name: "دوبل برگر",
      price: 435,
      disposition:
        "2 عدد برگر دست ساز گوشت گوساله 150 گرمی، قارچ، یک ورق پنیر گودا، گوجه فرنگی، ک" +
        "اهو، سس مخصوص، خیارشور، نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d2.webp",
    },
    {
      selected: false,
      name: "چیکن زینگر",
      price: 315,
      disposition:
        "فیله مرغ سوخاری 120 گرم، پنیر گودا، کاهو، گوجه، خیار شور، سس مخصوص، نان برگر",
      category: "foods",
      time: "0",
      img: "fastfood/d7.webp",
    },
    // {
    //   selected: false,
    //   name: "چیکن تویستر",
    //   price: 235,
    //   disposition: "",
    //   category: "foods",
    //   time: "0",
    //   img: "fastfood/c2.webp",
    // },
    {
      selected: false,
      name: "هات داگ",
      price: 265,
      disposition: "",
      category: "foods",
      time: "0",
      img: "fastfood/c2.webp",
    },
    {
      selected: false,
      name: "هات داگ ویژه",
      price: 315,
      disposition: "",
      category: "foods",
      time: "0",
      img: "fastfood/c2.webp",
    },
    {
      selected: false,
      name: "چیز رست بیف",
      price: 445,
      disposition: "",
      category: "foods",
      time: "0",
      img: "fastfood/c2.webp",
    },
    {
      selected: false,
      name: "سوخاری",
      type: "heading",
      category: "foods",
      class: "text-bg-danger",
    },
    {
      selected: false,
      name: "کنتاکی 3 تیکه",
      price: 355,
      disposition:
        "سه تیکه مرغ سوخاری،سیب زمینی سرخ شده، سالاد کلم، همراه نان مک و سس چیلی",
      category: "foods",
      time: "0",
      img: "fastfood/e1.webp",
    },
    {
      selected: false,
      name: "کنتاکی دو تیکه",
      price: 315,
      disposition:
        "دو  تیکه مرغ سوخاری،سیب زمینی سرخ شده، سالاد کلم، همراه نان مک و سس چیلی",
      category: "foods",
      time: "0",
      img: "fastfood/e1.webp",
    },
    {
      selected: false,
      name: "کریسپی 3 تیکه",
      price: 365,
      disposition:
        "سه تیکه مرغ تند سوخاری،سیب زمینی سرخ شده،سالاد کلم، همراه نان مک و سس چیلی",
      category: "foods",
      time: "0",
      img: "fastfood/e2.webp",
    },
    {
      selected: false,
      name: "کریسپی دو تیکه",
      price: 325,
      disposition:
        "دو تیکه مرغ تند سوخاری، سیب زمینی سرخ شده، سالاد کلم، همراه نان مک و سس چیلی",
      category: "foods",
      time: "0",
      img: "fastfood/e1.webp",
    },
    {
      selected: false,
      name: "بال سوخاری",
      price: 225,
      disposition: "شش عدد بال سوخاری + سیب زمینی",
      category: "foods",
      time: "0",
      img: "fastfood/e3.webp",
    },
    {
      selected: false,
      name: "نرمال استریپس",
      price: 365,
      disposition:
        "چهار تیکه فیله سوخاری،سیب زمینی سرخ شده،سالاد کلم، همراه نان مک و سس چیلی",
      category: "foods",
      time: "0",
      img: "fastfood/e1.webp",
    },
    {
      selected: false,
      name: "اسپایسی استریپس",
      price: 375,
      disposition:
        "چهار تیکه فیله تند سوخاری،سیب زمینی سرخ شده،سالاد کلم، همراه نان مک و سس چیلی",
      category: "foods",
      time: "0",
      img: "fastfood/e1.webp",
    },
    {
      selected: false,
      name: "سبد کودک",
      price: 335,
      disposition:
        "یک تیکه فیله سوخاری، سه تیکه ناگت مرغ،سه عدد کراکت پنیری به همراه سیب زمینی",
      category: "foods",
      time: "0",
      img: "fastfood/e1.webp",
    },
  ];

/**========================================================================
 * *                              Add To Card
 *========================================================================**/
$scope.selectedItems = [];
$scope.totalPrice = 0;
$scope.finalPrice = null; // مبلغ نهایی پس از تخفیف
$scope.discountCode = ""; // کد تخفیف وارد شده توسط کاربر
$scope.discountMessage = ""; // پیام خطا یا موفقیت تخفیف

// لیست کدهای تخفیف معتبر
$scope.validDiscountCodes = {
  "mg10": 10, // 10 درصد تخفیف
  "mg15": 15, // 20 درصد تخفیف
  "mg20": 20,  // 30 درصد تخفیف
  "Ice": '100'  // تخفیف 100 درصد (قیمت صفر)
};

// متغیر جستجو
$scope.searchQuery = "";

// افزودن یا حذف از سبد خرید
$scope.toggleSelection = function (item) {
    var index = $scope.selectedItems.indexOf(item);
    if (index === -1) {
        // افزودن آیتم به سبد و تنظیم تعداد به 1
        item.quantity = 1;
        $scope.selectedItems.push(item);
        item.selected = true; // وضعیت انتخاب شده
    } else {
        // حذف آیتم در صورت انتخاب شدن قبلی
        $scope.selectedItems.splice(index, 1);
        item.selected = false; // وضعیت غیر انتخابی
    }
    // به‌روزرسانی قیمت کل
    $scope.updateTotal();
};

// حذف آیتم از سبد
$scope.removeItem = function (item) {
    var index = $scope.selectedItems.indexOf(item);
    if (index !== -1) {
        $scope.selectedItems.splice(index, 1);
        item.selected = false; // وضعیت به false تغییر می‌کند
    }
    // به‌روزرسانی قیمت کل
    $scope.updateTotal();
};

// افزایش تعداد (+)
$scope.increaseQuantity = function (item) {
    item.quantity++;
    $scope.updateTotal();
};

// کاهش تعداد (-)
$scope.decreaseQuantity = function (item) {
    if (item.quantity > 1) {
        item.quantity--;
        $scope.updateTotal();
    }
};

// محاسبه قیمت کل
$scope.updateTotal = function () {
    $scope.totalPrice = 0;
    angular.forEach($scope.selectedItems, function (item) {
        // اگر تعداد آیتم از نوع عدد است و بزرگتر از 0 باشد
        if (angular.isNumber(item.quantity) && item.quantity > 0) {
            $scope.totalPrice += item.price * item.quantity;
        }
    });
    $scope.finalPrice = null; // بازنشانی مبلغ نهایی پس از تخفیف
};

// تابع اعمال کد تخفیف
$scope.applyDiscount = function () {

  if ($scope.discountCode in $scope.validDiscountCodes) {
      var discountPercentage = $scope.validDiscountCodes[$scope.discountCode];
      if (discountPercentage === '100') {
          $scope.finalPrice = 0;  // قیمت صفر در صورت تخفیف 100 درصد
          $scope.totalPrice = 0;  // قیمت صفر در صورت تخفیف 100 درصد
      } else {
          $scope.finalPrice = $scope.totalPrice - ($scope.totalPrice * discountPercentage / 100);
      }
      $scope.discountMessage = "کد تخفیف با موفقیت اعمال شد!";
  } else {
      $scope.finalPrice = null; // بازنشانی مبلغ نهایی
      $scope.discountMessage = "کد تخفیف معتبر نیست!";
  }
};

  /**========================================================================
   * *                              Send Cart to Email
   * *                            cafegellino@gmail.com
   *========================================================================**/

  // Emailjs data
  $scope.serverName = "service_29p01ea";
  $scope.templateName = "template_95jec0s";

  $scope.isEmailSend = false;
  $scope.isEmailSended = false;
  $scope.isloading = false;
  $scope.msg = "";
  $scope.selectedValue = ""; // مقدار پیش‌فرض خالی است

  $scope.sendEmail = function () {
    $scope.isEmailSend = true; // دکمه را بلافاصله غیرفعال می‌کنیم
    $scope.isloading = true;
    if (!$scope.selectedValue) {
      alert("لطفاً شماره میز خود را انتخاب کنید!");
      return;
    }

    var orderDetails = "";
    angular.forEach($scope.selectedItems, function (item) {
      //orderDetails += item.name + " - " + item.quantity + " عدد - " + (item.price * item.quantity) + " تومان\n";
      orderDetails +=
        "<tr>" +
            "<td style='width: 50%; text-align: right; padding: 1rem; border-collapse: collapse; border: 1px solid black;'>" +
                item.name +
            "</td>" +
            "<td style='text-align: center; padding: 1rem;border-collapse: collapse; border: 1px solid black;'>" +
                item.price +
            "</td>" +
            "<td style='text-align: center; padding: 1rem;border-collapse: collapse; border: 1px solid black;'>" +
                item.quantity +
            "</td>" +
            "<td style='text-align: right; padding: 1rem;border-collapse: collapse; border: 1px solid black;'>" +
                item.price * item.quantity +
            "</td>" +
        "</tr>";
    });

    /**  Gregorian & Jalali (Hijri_Shamsi,Solar) Date Converter Functions
    Author: JDF.SCR.IR =>> Download Full Version :  http://jdf.scr.ir/jdf
    License: GNU/LGPL _ Open Source & Free :: Version: 2.81 : [2020=1399]
    ---------------------------------------------------------------------
    355746=361590-5844 & 361590=(30*33*365)+(30*8) & 5844=(16*365)+(16/4)
    355666=355746-79-1 & 355668=355746-79+1 &  1595=605+990 &  605=621-16
    990=30*33 & 12053=(365*33)+(32/4) & 36524=(365*100)+(100/4)-(100/100)
    1461=(365*4)+(4/4) & 146097=(365*400)+(400/4)-(400/100)+(400/400)  */
    function gregorian_to_jalali(_,$,r){var a,n,o,i,t,e;return a=[0,31,59,90,120,151,181,212,243,273,304,334],t=$>2?_+1:_,n=-1595+33*~~((e=355666+365*_+~~((t+3)/4)-~~((t+99)/100)+~~((t+399)/400)+r+a[$-1])/12053),e%=12053,n+=4*~~(e/1461),(e%=1461)>365&&(n+=~~((e-1)/365),e=(e-1)%365),e<186?(o=1+~~(e/31),i=1+e%31):(o=7+~~((e-186)/30),i=1+(e-186)%30),[n,o,i]}function jalali_to_gregorian(_,$,r){var a,n,o,i,t;for(_+=1595,n=400*~~((t=-355668+365*_+8*~~(_/33)+~~((_%33+3)/4)+r+($<7?($-1)*31:($-7)*30+186))/146097),(t%=146097)>36524&&(n+=100*~~(--t/36524),(t%=36524)>=365&&t++),n+=4*~~(t/1461),(t%=1461)>365&&(n+=~~((t-1)/365),t=(t-1)%365),i=t+1,a=[0,31,n%4==0&&n%100!=0||n%400==0?29:28,31,30,31,30,31,31,30,31,30,31,],o=0;o<13&&i>a[o];o++)i-=a[o];return[n,o,i]}

    //
    ndt = new Date();
    g_y = ndt.getFullYear();
    g_m = ndt.getMonth() + 1;
    g_d = ndt.getDate();

    // دریافت تاریخ و زمان
    $scope.getTime = "";
    const h = ndt.getHours();
    const m = ndt.getMinutes();

    //
    shamsi = gregorian_to_jalali(g_y, g_m, g_d);
    $scope.getTime = shamsi[0] + "/" + shamsi[1] + "/" + shamsi[2];
    $scope.getclock = h + ":" + m;

    var emailParams = {
      table_number: $scope.selectedValue,
      date: $scope.getTime,
      time: $scope.getclock,
      price: $scope.totalPrice,
      finalPrice: $scope.finalPrice,
      msg: $scope.msg,
      itemsCart: orderDetails,
    };

    emailjs.send($scope.serverName, $scope.templateName, emailParams).then(
      function (response) {
        $scope.$apply(function () {
          $scope.isEmailSend = true; // دکمه غیرفعال باقی می‌ماند
          $scope.isEmailSended = true; // دکمه غیرفعال باقی می‌ماند
          $scope.isloading = false; // نشانگر بارگذاری را خاموش می‌کنیم
        });
        console.log("Email sent successfully!");
      },
      function (error) {
        $scope.$apply(function () {
          $scope.isEmailSend = false; // در صورت خطا دکمه دوباره فعال می‌شود
          $scope.isloading = false; // نشانگر بارگذاری را خاموش می‌کنیم
        });
        console.error("Error in sending email:", error);
      }
    );
  };

  /**========================================================================
   * *                              App Items Category
   *========================================================================**/
  $scope.categorys = [

    {
      cat: "breackfast",
      name: "صبحانه",
      icon: "breackfast.svg",
      activeClass: "color1",
      pg: 1,
    },


    {
      cat: "coffee",
      name: "کافئین بار",
      icon: "coffee.svg",
      activeClass: "color2",
      pg: 2,
    },
 
    {
      cat: "cocktail",
      name: "ماکتل",
      icon: "cocktail.svg",
      activeClass: "color3",
      pg: 3,
    },
    {
      cat: "milkshake",
      name: "کافه شیک",
      icon: "ice-cream-glas.svg",
      activeClass: "color4",
      pg: 4,
    },
    {
      cat: "hookah",
      name: "قلیان",
      icon: "hookah.svg",
      activeClass: "color13",
      pg: 5,
    },
    {
      cat: "french",
      name: "دمنوش بار",
      icon: "french-press.svg",
      activeClass: "color5",
      pg: 6,
    },
    {
      cat: "cake",
      name: "دسر و کیک",
      icon: "cake-slice.svg",
      activeClass: "color6",
      pg: 7,
    },
    {
      cat: "appetizer",
      name: "پیش غذا",
      icon: "fries.svg",
      activeClass: "color7",
      pg: 8,
    },

    {
      cat: "hotdrink",
      name: "بار گرم",
      icon: "hot-chocolate.svg",
      activeClass: "color8",
      pg: 9,
    },
    {
      cat: "icecoffee",
      name: "آیس کافی",
      icon: "refreshing-cold.svg",
      activeClass: "color9",
      pg: 10,
    },
    {
      cat: "juice",
      name: "آبمیوه ها",
      icon: "fruit-drink.svg",
      activeClass: "color10",
      pg: 11,
    },
    {
      cat: "icecreame",
      name: "بستنی",
      icon: "ice-cream.svg",
      activeClass: "color11",
      pg: 12,
    },
    {
      cat: "drink",
      name: "نوشیدنی",
      icon: "drink-can-soda.svg",
      activeClass: "color12",
      pg: 13,
    },
    {
      cat: "foods",
      name: "غذا",
      icon: "pizza.svg",
      activeClass: "color2",
      pg: 14,
    },
  ];

  /**========================================================================
   * *                              App Banner
   *========================================================================**/
  $scope.appBanner = {
    title: "فیلم های سینمایی بروز",
    thumb: "new-movies.webp",
    time: "هرشب در کافه",
    clock: "20:00",
  };

  /**=======================
   *      Text angizeshi
   *========================**/
  $scope.angizeshiArray = [
    "موفقیت این نیست که هرگز اشتباه نکنیم، بلکه این است که یک اشتباه را دوباره تکرا" +
      "ر نکنیم.",
    "میتونی از دور ببینی و حسرت بخوری. میتونی بگی من بدستش میارم و لذتشو ببری",
    "شاید هم در دنیای دیگری، بخواهی من را انتخاب کنی",
    "افکار منفی رو دور بندازید، اونها علف های هرز ذهنی هستن و باعث نابودی شما میشن",
    "بازنده ها در هر جواب مشکلی را می بینند، ولی برنده در هر مشکلی جوابی را می بیند",
    "گاهی برنده می شوی و گاهی می آموزی.",
    "تغییر خود تو هستی، آدم‌های کوچیک برای تغییر کردن اطراف‌شون غر می‌زنن اما آدم‌های بزرگ خودشون دست به تغییر دادن می‌زنن",
    "اهداف تا زمانی که برنامه مشخصی برای رسیدن به آن‌ها نداشته باشید، یک فانتزی هستند!",
    "انسان تا زمانی که افسوس‌هایش جای رویاهایش را نگرفته، کهنسال نیست",
    "می‌دونی فرمول واقعی موفقیت چیه؟ یک درصد شانس، یک درصد استعداد و ۹۸ درصد هرگز تسلیم نشدن!",
    "تنها وقتی موفق میشی که موفقیت به اندازه‌ی نفس کشیدن برات مهم باشه",
    "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    "",
    "",
    "",
  ];
  $scope.rand =
    $scope.angizeshiArray[
      Math.floor(Math.random() * $scope.angizeshiArray.length)
    ];

  // pages
  $scope.page = 1;
  $scope.go = function (g) {
    $scope.page = g;
  };

  $scope.goup = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // swiper
  var swiper = new Swiper(".menuSwiper", {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    slideToClickedSlide: true,
    speed: 800,
    spaceBetween: 10,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    on: {
      slideChange: function () {
        console.log(this.realIndex + 1); // write it to console

        $scope.$apply(function () {
          $scope.page = swiper.realIndex + 1;
        });
      },
      touchEnd: function () {
        //  console.log(this.realIndex + 1);  write it to console
      },
    },
  });
}); //app




app.directive('autoFocus', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var modal = element[0].closest('.modal'); // تبدیل element به یک المنت خام

      if (modal) {
        modal.addEventListener('shown.bs.modal', function () {
          $timeout(function () {
            element[0].focus();
          }, 100);
        });
      }
    }
  };
});




// تنظیم EmailJS
emailjs.init("9BzDQOhRfJ3UgVkmE");


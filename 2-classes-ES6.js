//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
    constructor(a, b, c) {
      this.title = a;
      this.author = b;
      this.year = c;
      this.ozetFunction = function () {
        return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`;
      };
    }
    //?bu alt süslüye yazdıklarımız direk kalıbın prototype alanına gider (ES6 ile biz belirtmeden)
    yilHesapla() {
      return 2024 - this.year;
    }
  }
  
  //? new keyword ü  Book Constructor ı parametrelerle çağırır.
  //? Constructor, Book object in bir örneğini kalıbını oluşturur.
  //? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance a çocuklara) eklenir
  const book1 = new Book("safahat", "m.akif ersoy", 1910);
  const book2 = new Book("nutuk", "m.kemal atatürk", 1920);
  
  console.log(book1);
  console.log(book1.year);
  console.log(book1.ozetFunction());
  console.log(book1.yilHesapla());
  
  console.log(book2);
  
  //?INHERITANCE
  
  //*Book object kalıbından Dergi object ine kalıp getir
  
  class Dergi extends Book{
  
  constructor( title,author, year, d){
  super(title,author, year)
  
  this.mounth=d
  
  
  }
  
  
  
  }
  
  const dergi1=new Dergi("kasagı", "ömer seyfettin", 1900, "aralık")
  
  const dergi2=new Dergi("ask-ı memnu", "halit ziya","","eylül")
  console.log(dergi2);
  
  //! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz
  
  console.log(dergi1);
  console.log(dergi1.ozetFunction());
  console.log(dergi1.yilHesapla());
  
  
  
  
  
  
  
import poster1 from '../assets/images/poster1.jpg'
import poster2 from '../assets/images/poster2.jpg'
import poster3 from '../assets/images/poster3.jpg'
import poster4 from '../assets/images/poster4.jpg'
import poster5 from '../assets/images/poster5.jpg'
import poster6 from '../assets/images/poster6.jpg'
import poster7 from '../assets/images/poster7.jpg'
import poster8 from '../assets/images/poster8.jpg'
import poster9 from '../assets/images/poster9.jpg'
import poster10 from '../assets/images/poster10.jpg'
import poster11 from '../assets/images/poster11.jpg'
import poster12 from '../assets/images/poster12.jpg'
import poster13 from '../assets/images/poster13.jpg'
import poster14 from '../assets/images/poster14.jpg'
import poster15 from '../assets/images/poster15.jpg'
import poster16 from '../assets/images/poster16.jpg'
import poster17 from '../assets/images/poster17.jpg'
import poster18 from '../assets/images/poster18.jpg'
import poster19 from '../assets/images/poster19.jpg'
import poster20 from '../assets/images/poster20.jpg'

type animeType = {
  posterUrl: string
  name: string
  description: string
  episodes: number
}[]

export const animeList: animeType = [
  {
    posterUrl: poster1,
    name: 'moriarty the patriot',
    description:
      'მე-19 საუკუნის ბოლოს, ბრიტანეთის იმპერიის თავადაზნაურობა მართავს სახელმწიფოს, ხოლო მუშათა კლასი მათგან იტანჯება. უილიამ ჯეიმს მორიარტის, რომელიც თანაუგრძნობს მათ მდგომარეობას, სურს ამ ყველაფრის დამხობა. სისტემური უთანასწორობის გამო იმედგაცრუებული მორიარტი მთელი ერის გამოსწორების სტრატეგიას გეგმავს. დეტექტივი შერლოკ ჰოლმსიც კი ვერ დაუდგება წინ მის გზას. დროა დანაშაულმა მოახდინოს რევოლუცია მსოფლიოში!',
    episodes: 48,
  },
  {
    posterUrl: poster2,
    name: 'bongou stray dogs',
    description:
      'ნაკაჯიმა აცუში ობოლთა თავშესაფრიდან გააგდეს და ახლა არც წასასვლელი აქვს სადმე და არც საჭმელი. შიმშილის ზღვარზე მისული ნაკაჯიმა გადაარჩენს მამაკაცს, რომელსაც თავის მოკვლა სურს. ეს კაცი დაზაი ოსამუა, რომელიც თავის პარტნიორთან, კუნიკიდასთან, ერთად განსაკუთრებული საგამოძიებო სააგენტოს წევრია. მათ ზებუნებრივი შესაძლებლობები აქვთ და იღებენ საქმეებს, რომლებიც ძალიან სახიფათოა პოლიციისა და სამხედროებისათვის',
    episodes: 89,
  },
  {
    posterUrl: poster3,
    name: 'death note',
    description:
      'სიუჟეტი ვითარდება, სტუდენტის, იაგამი ლაიტას ირგვლივ. რომელმაც გადაწყვიტა გაანთავისუფლოს სამყარო ბოროტი ადამიანებისგან. იაგამს აქვს „სიკვდილის რვეული“ ამ რვეულში საკმარისია ჩაწერო ვინმეს სახელი და ის მოკვდება, მაგრამ მხოლოდ სახელი არ ყოფილა საკმარისი, თურმე იმ პიროვნების გარეგნობაც უნდა იცოდე. იაგამი ლაიტი იწყებს დამნაშავეების მასობრივ მკვლელობებს მთელი მსოფლიოს მაშტაბით...',
    episodes: 24,
  },
  {
    posterUrl: poster4,
    name: 'evangelion',
    description:
      'მეორე ზემოქმედების შემდეგ, ტოკიო-3-ს თავს ესხმიან გიგანტური მონსტრები, სახელად ანგელოზები, რომლებიც ცდილობენ კაცობრიობის მოსპობას. შინჯის მიზანია ებრძოლოს ანგელოზებს ერთ-ერთი იდუმალი ევანგელიონის მექა ერთეულის პილოტით.',
    episodes: 24,
  },
  {
    posterUrl: poster5,
    name: 'hunter x hunter',
    description:
      'იცოდით, რომ სწორედ მონადირეები ფლობენ განსაკუთრებულ შესაძლებლობებს? მაგალითად მხოლოდ მათთვისაა ცნობილი სადაა დაკარგული მიწები ან უძველესი განძი. მათთვის ცნობილია სამყაროს ყველაზე დიდი საიდუმლოებები! ხოლო მათში ყველაზე რჩეულებს მინიჭებული აქვთ, სისხლიანი შურისძიების, უფლება, მკვლელობა და ადამიანების სიცოცხლეზე ნადირობაც კი. გონ ფრიქსი, 12 წლის ახალგაზრდაა კუნძულ კიტოვოგოდან და ყველაფერი ამის შესახებ მან ძალიან კარგად იცის, ასევე მისთვის ცნობილია რომ მონადირეები ამ კანდიდატურაზე ძალიან ყურადღებით არჩევენ ახლებს. როგორც ყველა მისი ასაკის ბიჭს გონსაც მოუნდება ამ გამოცდის ჩაბარება, მაგრამ მისი ბაბუა მიტო სასტიკად წინააღმდეგია ამ ფაქტის, რადგან შეიძლება იგი საკუთარი მამის კვალს გაყვეს, რომელმაც ნადირობის გამო ყველაფერი დატოვა, საკუთარი ოჯახიც კი',
    episodes: 120,
  },
  {
    posterUrl: poster6,
    name: "jojo's bizare adventure",
    description:
      'JoJo Bizarre Adventure მოგვითხრობს Joestar-ების ოჯახის შესახებ, ოჯახის, რომლის სხვადასხვა წევრები აღმოაჩინონ, რომ მათ ბედისწერაა რომ უნიკალური და ზებუნებრივი ძალების მქონე მტერი გაანადგურონ იმ განსაკუთრებული ძალებით რომელსაც ფლობენ და რომლებსაც მოიპოვებენ, რის შესახებაც უფრო ვრცლად ანიმაციაში გაიგებთ.',
    episodes: 150,
  },
  {
    posterUrl: poster7,
    name: 'banana fish',
    description:
      'სიუჟეტში აღწერილია ომი მაფიის უფროსის, სახელად დინოს და ბანდის ახალგაზრდა ლიდერს შორის. 2006 წელს ერაყში ჯარისკაცმა, ნარკოტიკის ზემოქმედების ქვეშ მყოფმა საკუთარი რაზმი ამოხოცა და შემდეგ მისმა მეგობარმა დაჭრა, რომ ის შეეჩერებინა. მისი ბოლო სიტყვები “ბანანა ფიში” იყო. მრავალი წლის შემდეგ ნიუ-იორკში, აშ ლინქსს, ბანდის ახალგაზრდა ლიდერს, მომაკვდავმა კაცმა იდუმალი ფლაკონი გადასცა, რომლის ბოლო სიტყვები ასევე “ბანანა ფიში” იყო. აში და იაპონელი ფოტოგრაფი, ვისთანაც მეგობრობს, იკვლევენ “ბანანა ფიშის” წარმოშობას, აღმოაჩენენ შეთქმულებას, რომელიც მსოფლიოს ემუქრება.',
    episodes: 123,
  },
  {
    posterUrl: poster8,
    name: 'one punch man',
    description:
      'გქონიათ ოდესმე სურვილი, რომ სუპერგმირი გამხდარიყავით?! - აი ჩვენი ანიმეს მთავარ გმირს ეს სურვილი ქონდა და აიხდინა კიდეც, მან მიიღო წარმოუდგენლად დიდი ძალა. რა მოხდა ამის შემდეგ? როგორი გახდა ის?',
    episodes: 65,
  },
  {
    posterUrl: poster9,
    name: 'SK8 the infinity',
    description:
      'საშუალო სკოლის მოსწავლე რეკი კიანი ერთი რამით არის გატაცებული: სკეიტბორდით. როდესაც დაღამდება, ის მიემართება "S" - ისკენ, არალეგალური მიწისქვეშა რბოლა შახტის შიგნით, სადაც მოციგურავეები ძალზე საშიშ სიტუაციებში ასპარეზობენ.',
    episodes: 24,
  },
  {
    posterUrl: poster10,
    name: 'mieruko chan',
    description:
      'ანიმე მოგვითხრობს სკოლის მოსწავლე გოგონაზე, რომელიც ხედავს მიცვალებულ ადამიანებს, ეს მას ძალიან აშინებს და ცდილობს არ შეიმჩნიოს მათი არსებობა, თუმცა ეს ყველაფერი მის პირად ცხოვრებას თავდაყირა აყენებს',
    episodes: 44,
  },
  {
    posterUrl: poster11,
    name: 'one piece',
    description:
      'სანამ ჩალის ქუდები ტკბებიან სანაპიროზე, მათი გემი მთელი თავისი აღჭურვილობითა და იარაღით მოიპარეს. ერთი კვირის შემდეგ ისინი ერთკაციანი ნავით მიდიან დაკარგული საკუთრების საძებნელად. ზღვაზე ხვდებიან ბიჭი აკიზუ და ახალგაზრდა ბოროდო. ისინი საკუთარ თავს ქურდ ძმებს უწოდებენ და აცხადებენ, რომ ეძებენ ცნობილ საგანძურს, რომელსაც ეწოდება ბრილიანტის საათი საათის მექანიზმის კუნძულიდან.',
    episodes: 66,
  },
  {
    posterUrl: poster12,
    name: 'naruto',
    description:
      'ერთხელ სოფელ კონოჰას ცხრაკუდა მელიამ შეუტია. მელია ძალიან ძლიერი იყო და შეეძლო ერთი კუდის მოქნევით მთები დაენგრია. იგი ხალხს აწიკოკებდა. ამიტომაც მეოთხე ჰოკაგემ ( სოფელის მთავარი მმართველი) დათმო საკუთარი სიცოცხლე და ცხრაკუდა მელია ახალდაბადებულ ნარუტოში მოაქცია. როდესაც ნარუტო იზრდებოდა, ხალხი მას ცუდად ეპყრობოდა, რადგან მხოლოდ ცხრაკუდა მელას ხედავდნენ მასში. მესამე მმართველმა ხალხს აურძალა ცხრაკუდა მელაზე საუბარი, რათა ნარუტოს არ გაეგო სიმართლე. ნინძების აკადემიაში ნარუტო ყველაზე ცუდი მოსწავლე იყო, იგი ვერ იტანდა კლონირების ტექნიკას, რადგან არ გამოსდიოდა, მაგრამ მომავალში კლონირების ტექნიკა მისთვის ყველაზე საყვარელი გახდა. მისი სურვილია რომ გახდეს სოფლის ჰოკაგე, ამ ოცნების განსახორციებლად კი ყველაფერს აკეთებს.',
    episodes: 700,
  },
  {
    posterUrl: poster13,
    name: 'bleach',
    description:
      'კუროსაკი იჩიგო უბრალო 15 წლის ბიჭუნა არაა, რადგან რაც თავი ახსოვს ადამიანებისათვის უხილავ სულებთან შეუძლია საუბარი. ერთ საბედისწერო დღეს მას',
    episodes: 556,
  },
  {
    posterUrl: poster14,
    name: 'attack on titan',
    description:
      'კაცობრიობამ პროგრესის მაგივრად განიცადა რეგრესი გიგანტების რასის გამოჩენის გამო. უზარმაზარ ჰუმანოიდებს არც აზროვნება შეეძლოთ და არც ლაპარაკი, სამაგიეროდ უაზროდ ჭამდნენ ადამიანებს, ჩვეულებრივი XIX საუკუნის იარაღი გამოუსადეგარი აღმოჩნდა მათ წინაამღდეგ საბრძოლველად...',
    episodes: 86,
  },
  {
    posterUrl: poster15,
    name: 'demon slayer',
    description:
      'ტაიშოს ეპოქა, იაპონია. ტანჯირო, ნახშირით მოვაჭრე გულკეთილი ბიჭი, თავის ოჯახს დემონის მიერ მოკლულს პოულობს. თითქოსდა ეს საკმარისი არ ყოფილიყო, მისი უმცროსი და, ნეზუკო, დემონად იქნა გადაქცეული. ამ მწარე რეალობით განადგურებული ტანჯირო გადაწყვეტს რომ დემონების მკვლელი გახდეს, რათა დაუბრუნოს თავის დას ადამიანობა და მოკლას დემონი, რომელმაც მისი ოჯახი ამოწყვიტა ...',
    episodes: 24,
  },
  {
    posterUrl: poster16,
    name: 'jujutsu kaisen',
    description:
      'სინოფსისი სამყაროში, სადაც დემონები სტრესიან ადამიანებზე იკვებებიან, ლეგენდარული და საშიში დემონის  რიომენ სუკუნას ფრაგმენტები დაიკარგა და მიმოფანტა. თუ რომელიმე დემონი მოიხმარს სუკუნას სხეულის ნაწილებს, მათ მიერ მოპოვებული ძალით შეეძლებათ სამყაროს განადგურება, როგორც ვიცით. საბედნიეროდ, არსებობს მებრძოლი ჯადოქრების იდუმალი სკოლა, რომელიც არსებობს იმისთვის, რომ დაიცვას ცხოვრების უვნებელი არსებობა უპატრონობისგან!',
    episodes: 73,
  },
  {
    posterUrl: poster17,
    name: 'berserk',
    description:
      'ფილმი მოგვითხრობს ერთი საოცრად ძლიერი მეომრის შესახებ რომელიც ბრძოლაში საკუთარ თავს წააგებს და არანაკლებ საოცარი მეომრის გუნდში მოხვდება...',
    episodes: 24,
  },
  {
    posterUrl: poster18,
    name: 'a silent voice',
    description:
      'იშიდა შოია ამცირებს მის თანაკლასელ გოგონას, ნიშიმია შოუკოს, რომელსაც სმენა აქვს დაქვეითებული, რის შედეგადაც მისი თანაკლასელები პირიქით მას დაუწყებენ დამცირებას. ანიმე მოგვითხრობს მეგობრების და მომავლის გეგმების გარეშე დარჩენილი იშიდა შოიას დანაშაულის გამოსყიდვის მცდელობის ისტორიას.',
    episodes: 12,
  },
  {
    posterUrl: poster19,
    name: 'platinum end',
    description:
      'მირაი კაკეჰაში არის ახალგაზრდა სტუდენტი, რომელიც დაღლილია ცხოვრებით. თვითმკვლელობის მცდელობის შემდეგ იგი მფარველმა ანგელოზმა გადაარჩინა. მას მოუწევს შეებრძოლოს 12 ადამიანს, რომელთა შორის გამარჯვებული სამყაროს მომდევნო ღმერთი გახდება. მირაის აქვს მიზანი: მოიგოს ეს სიკვდილის თამაში კონკურენტების მოკვლის გარეშე.',
    episodes: 24,
  },
  {
    posterUrl: poster20,
    name: 'the promised neverland',
    description:
      'ტყითა გარშემორტყმულ თავშესაფარში ერთი დიდი ოჯახივით ბედნიერად ცხოვრობენ ობოლი ბავშვები, მათზე კი ზრუნავს "დედა" -  იზაბელა.  ბავშვები თავისუფლად ატარებენ დროს ისე, როგორც საჭიროდ მიიჩნევენ, თამაშობენ გარეთ, მაგრამ ერთი მთავარი წესი უნდა დაიცვან- თავშესაფრიდან ძალიან შორს არ უნდა წავიდნენ. თუმცა ყველაფერ კარგს აქვს დასასრული - რამოდენიმე თვეში ერთხელ ბავშვებს აშვილებენ და მათგან აღარაფერი ისმის. სამ ძმას კი ეჭვი აქვს იმაზე, თუ რა ხდება სინამდვილეში.',
    episodes: 48,
  },
  {
    posterUrl: poster1,
    name: 'moriarty the patriot',
    description:
      'მე-19 საუკუნის ბოლოს, ბრიტანეთის იმპერიის თავადაზნაურობა მართავს სახელმწიფოს, ხოლო მუშათა კლასი მათგან იტანჯება. უილიამ ჯეიმს მორიარტის, რომელიც თანაუგრძნობს მათ მდგომარეობას, სურს ამ ყველაფრის დამხობა. სისტემური უთანასწორობის გამო იმედგაცრუებული მორიარტი მთელი ერის გამოსწორების სტრატეგიას გეგმავს. დეტექტივი შერლოკ ჰოლმსიც კი ვერ დაუდგება წინ მის გზას. დროა დანაშაულმა მოახდინოს რევოლუცია მსოფლიოში!',
    episodes: 48,
  },
  {
    posterUrl: poster2,
    name: 'bongou stray dogs',
    description:
      'ნაკაჯიმა აცუში ობოლთა თავშესაფრიდან გააგდეს და ახლა არც წასასვლელი აქვს სადმე და არც საჭმელი. შიმშილის ზღვარზე მისული ნაკაჯიმა გადაარჩენს მამაკაცს, რომელსაც თავის მოკვლა სურს. ეს კაცი დაზაი ოსამუა, რომელიც თავის პარტნიორთან, კუნიკიდასთან, ერთად განსაკუთრებული საგამოძიებო სააგენტოს წევრია. მათ ზებუნებრივი შესაძლებლობები აქვთ და იღებენ საქმეებს, რომლებიც ძალიან სახიფათოა პოლიციისა და სამხედროებისათვის',
    episodes: 89,
  },
  {
    posterUrl: poster3,
    name: 'death note',
    description:
      'სიუჟეტი ვითარდება, სტუდენტის, იაგამი ლაიტას ირგვლივ. რომელმაც გადაწყვიტა გაანთავისუფლოს სამყარო ბოროტი ადამიანებისგან. იაგამს აქვს „სიკვდილის რვეული“ ამ რვეულში საკმარისია ჩაწერო ვინმეს სახელი და ის მოკვდება, მაგრამ მხოლოდ სახელი არ ყოფილა საკმარისი, თურმე იმ პიროვნების გარეგნობაც უნდა იცოდე. იაგამი ლაიტი იწყებს დამნაშავეების მასობრივ მკვლელობებს მთელი მსოფლიოს მაშტაბით...',
    episodes: 24,
  },
  {
    posterUrl: poster4,
    name: 'evangelion',
    description:
      'მეორე ზემოქმედების შემდეგ, ტოკიო-3-ს თავს ესხმიან გიგანტური მონსტრები, სახელად ანგელოზები, რომლებიც ცდილობენ კაცობრიობის მოსპობას. შინჯის მიზანია ებრძოლოს ანგელოზებს ერთ-ერთი იდუმალი ევანგელიონის მექა ერთეულის პილოტით.',
    episodes: 24,
  },
  {
    posterUrl: poster5,
    name: 'hunter x hunter',
    description:
      'იცოდით, რომ სწორედ მონადირეები ფლობენ განსაკუთრებულ შესაძლებლობებს? მაგალითად მხოლოდ მათთვისაა ცნობილი სადაა დაკარგული მიწები ან უძველესი განძი. მათთვის ცნობილია სამყაროს ყველაზე დიდი საიდუმლოებები! ხოლო მათში ყველაზე რჩეულებს მინიჭებული აქვთ, სისხლიანი შურისძიების, უფლება, მკვლელობა და ადამიანების სიცოცხლეზე ნადირობაც კი. გონ ფრიქსი, 12 წლის ახალგაზრდაა კუნძულ კიტოვოგოდან და ყველაფერი ამის შესახებ მან ძალიან კარგად იცის, ასევე მისთვის ცნობილია რომ მონადირეები ამ კანდიდატურაზე ძალიან ყურადღებით არჩევენ ახლებს. როგორც ყველა მისი ასაკის ბიჭს გონსაც მოუნდება ამ გამოცდის ჩაბარება, მაგრამ მისი ბაბუა მიტო სასტიკად წინააღმდეგია ამ ფაქტის, რადგან შეიძლება იგი საკუთარი მამის კვალს გაყვეს, რომელმაც ნადირობის გამო ყველაფერი დატოვა, საკუთარი ოჯახიც კი',
    episodes: 120,
  },
  {
    posterUrl: poster6,
    name: "jojo's bizare adventure",
    description:
      'JoJo Bizarre Adventure მოგვითხრობს Joestar-ების ოჯახის შესახებ, ოჯახის, რომლის სხვადასხვა წევრები აღმოაჩინონ, რომ მათ ბედისწერაა რომ უნიკალური და ზებუნებრივი ძალების მქონე მტერი გაანადგურონ იმ განსაკუთრებული ძალებით რომელსაც ფლობენ და რომლებსაც მოიპოვებენ, რის შესახებაც უფრო ვრცლად ანიმაციაში გაიგებთ.',
    episodes: 150,
  },
  {
    posterUrl: poster7,
    name: 'banana fish',
    description:
      'სიუჟეტში აღწერილია ომი მაფიის უფროსის, სახელად დინოს და ბანდის ახალგაზრდა ლიდერს შორის. 2006 წელს ერაყში ჯარისკაცმა, ნარკოტიკის ზემოქმედების ქვეშ მყოფმა საკუთარი რაზმი ამოხოცა და შემდეგ მისმა მეგობარმა დაჭრა, რომ ის შეეჩერებინა. მისი ბოლო სიტყვები “ბანანა ფიში” იყო. მრავალი წლის შემდეგ ნიუ-იორკში, აშ ლინქსს, ბანდის ახალგაზრდა ლიდერს, მომაკვდავმა კაცმა იდუმალი ფლაკონი გადასცა, რომლის ბოლო სიტყვები ასევე “ბანანა ფიში” იყო. აში და იაპონელი ფოტოგრაფი, ვისთანაც მეგობრობს, იკვლევენ “ბანანა ფიშის” წარმოშობას, აღმოაჩენენ შეთქმულებას, რომელიც მსოფლიოს ემუქრება.',
    episodes: 123,
  },
  {
    posterUrl: poster8,
    name: 'one punch man',
    description:
      'გქონიათ ოდესმე სურვილი, რომ სუპერგმირი გამხდარიყავით?! - აი ჩვენი ანიმეს მთავარ გმირს ეს სურვილი ქონდა და აიხდინა კიდეც, მან მიიღო წარმოუდგენლად დიდი ძალა. რა მოხდა ამის შემდეგ? როგორი გახდა ის?',
    episodes: 65,
  },
  {
    posterUrl: poster9,
    name: 'SK8 the infinity',
    description:
      'საშუალო სკოლის მოსწავლე რეკი კიანი ერთი რამით არის გატაცებული: სკეიტბორდით. როდესაც დაღამდება, ის მიემართება "S" - ისკენ, არალეგალური მიწისქვეშა რბოლა შახტის შიგნით, სადაც მოციგურავეები ძალზე საშიშ სიტუაციებში ასპარეზობენ.',
    episodes: 24,
  },
  {
    posterUrl: poster10,
    name: 'mieruko chan',
    description:
      'ანიმე მოგვითხრობს სკოლის მოსწავლე გოგონაზე, რომელიც ხედავს მიცვალებულ ადამიანებს, ეს მას ძალიან აშინებს და ცდილობს არ შეიმჩნიოს მათი არსებობა, თუმცა ეს ყველაფერი მის პირად ცხოვრებას თავდაყირა აყენებს',
    episodes: 44,
  },
  {
    posterUrl: poster11,
    name: 'one piece',
    description:
      'სანამ ჩალის ქუდები ტკბებიან სანაპიროზე, მათი გემი მთელი თავისი აღჭურვილობითა და იარაღით მოიპარეს. ერთი კვირის შემდეგ ისინი ერთკაციანი ნავით მიდიან დაკარგული საკუთრების საძებნელად. ზღვაზე ხვდებიან ბიჭი აკიზუ და ახალგაზრდა ბოროდო. ისინი საკუთარ თავს ქურდ ძმებს უწოდებენ და აცხადებენ, რომ ეძებენ ცნობილ საგანძურს, რომელსაც ეწოდება ბრილიანტის საათი საათის მექანიზმის კუნძულიდან.',
    episodes: 66,
  },
  {
    posterUrl: poster12,
    name: 'naruto',
    description:
      'ერთხელ სოფელ კონოჰას ცხრაკუდა მელიამ შეუტია. მელია ძალიან ძლიერი იყო და შეეძლო ერთი კუდის მოქნევით მთები დაენგრია. იგი ხალხს აწიკოკებდა. ამიტომაც მეოთხე ჰოკაგემ ( სოფელის მთავარი მმართველი) დათმო საკუთარი სიცოცხლე და ცხრაკუდა მელია ახალდაბადებულ ნარუტოში მოაქცია. როდესაც ნარუტო იზრდებოდა, ხალხი მას ცუდად ეპყრობოდა, რადგან მხოლოდ ცხრაკუდა მელას ხედავდნენ მასში. მესამე მმართველმა ხალხს აურძალა ცხრაკუდა მელაზე საუბარი, რათა ნარუტოს არ გაეგო სიმართლე. ნინძების აკადემიაში ნარუტო ყველაზე ცუდი მოსწავლე იყო, იგი ვერ იტანდა კლონირების ტექნიკას, რადგან არ გამოსდიოდა, მაგრამ მომავალში კლონირების ტექნიკა მისთვის ყველაზე საყვარელი გახდა. მისი სურვილია რომ გახდეს სოფლის ჰოკაგე, ამ ოცნების განსახორციებლად კი ყველაფერს აკეთებს.',
    episodes: 700,
  },
  {
    posterUrl: poster13,
    name: 'bleach',
    description:
      'კუროსაკი იჩიგო უბრალო 15 წლის ბიჭუნა არაა, რადგან რაც თავი ახსოვს ადამიანებისათვის უხილავ სულებთან შეუძლია საუბარი. ერთ საბედისწერო დღეს მას',
    episodes: 556,
  },
  {
    posterUrl: poster14,
    name: 'attack on titan',
    description:
      'კაცობრიობამ პროგრესის მაგივრად განიცადა რეგრესი გიგანტების რასის გამოჩენის გამო. უზარმაზარ ჰუმანოიდებს არც აზროვნება შეეძლოთ და არც ლაპარაკი, სამაგიეროდ უაზროდ ჭამდნენ ადამიანებს, ჩვეულებრივი XIX საუკუნის იარაღი გამოუსადეგარი აღმოჩნდა მათ წინაამღდეგ საბრძოლველად...',
    episodes: 86,
  },
  {
    posterUrl: poster15,
    name: 'demon slayer',
    description:
      'ტაიშოს ეპოქა, იაპონია. ტანჯირო, ნახშირით მოვაჭრე გულკეთილი ბიჭი, თავის ოჯახს დემონის მიერ მოკლულს პოულობს. თითქოსდა ეს საკმარისი არ ყოფილიყო, მისი უმცროსი და, ნეზუკო, დემონად იქნა გადაქცეული. ამ მწარე რეალობით განადგურებული ტანჯირო გადაწყვეტს რომ დემონების მკვლელი გახდეს, რათა დაუბრუნოს თავის დას ადამიანობა და მოკლას დემონი, რომელმაც მისი ოჯახი ამოწყვიტა ...',
    episodes: 24,
  },
  {
    posterUrl: poster16,
    name: 'jujutsu kaisen',
    description:
      'სინოფსისი სამყაროში, სადაც დემონები სტრესიან ადამიანებზე იკვებებიან, ლეგენდარული და საშიში დემონის  რიომენ სუკუნას ფრაგმენტები დაიკარგა და მიმოფანტა. თუ რომელიმე დემონი მოიხმარს სუკუნას სხეულის ნაწილებს, მათ მიერ მოპოვებული ძალით შეეძლებათ სამყაროს განადგურება, როგორც ვიცით. საბედნიეროდ, არსებობს მებრძოლი ჯადოქრების იდუმალი სკოლა, რომელიც არსებობს იმისთვის, რომ დაიცვას ცხოვრების უვნებელი არსებობა უპატრონობისგან!',
    episodes: 73,
  },
  {
    posterUrl: poster17,
    name: 'berserk',
    description:
      'ფილმი მოგვითხრობს ერთი საოცრად ძლიერი მეომრის შესახებ რომელიც ბრძოლაში საკუთარ თავს წააგებს და არანაკლებ საოცარი მეომრის გუნდში მოხვდება...',
    episodes: 24,
  },
  {
    posterUrl: poster18,
    name: 'a silent voice',
    description:
      'იშიდა შოია ამცირებს მის თანაკლასელ გოგონას, ნიშიმია შოუკოს, რომელსაც სმენა აქვს დაქვეითებული, რის შედეგადაც მისი თანაკლასელები პირიქით მას დაუწყებენ დამცირებას. ანიმე მოგვითხრობს მეგობრების და მომავლის გეგმების გარეშე დარჩენილი იშიდა შოიას დანაშაულის გამოსყიდვის მცდელობის ისტორიას.',
    episodes: 12,
  },
  {
    posterUrl: poster19,
    name: 'platinum end',
    description:
      'მირაი კაკეჰაში არის ახალგაზრდა სტუდენტი, რომელიც დაღლილია ცხოვრებით. თვითმკვლელობის მცდელობის შემდეგ იგი მფარველმა ანგელოზმა გადაარჩინა. მას მოუწევს შეებრძოლოს 12 ადამიანს, რომელთა შორის გამარჯვებული სამყაროს მომდევნო ღმერთი გახდება. მირაის აქვს მიზანი: მოიგოს ეს სიკვდილის თამაში კონკურენტების მოკვლის გარეშე.',
    episodes: 24,
  },
  {
    posterUrl: poster20,
    name: 'the promised neverland',
    description:
      'ტყითა გარშემორტყმულ თავშესაფარში ერთი დიდი ოჯახივით ბედნიერად ცხოვრობენ ობოლი ბავშვები, მათზე კი ზრუნავს "დედა" -  იზაბელა.  ბავშვები თავისუფლად ატარებენ დროს ისე, როგორც საჭიროდ მიიჩნევენ, თამაშობენ გარეთ, მაგრამ ერთი მთავარი წესი უნდა დაიცვან- თავშესაფრიდან ძალიან შორს არ უნდა წავიდნენ. თუმცა ყველაფერ კარგს აქვს დასასრული - რამოდენიმე თვეში ერთხელ ბავშვებს აშვილებენ და მათგან აღარაფერი ისმის. სამ ძმას კი ეჭვი აქვს იმაზე, თუ რა ხდება სინამდვილეში.',
    episodes: 48,
  },
]

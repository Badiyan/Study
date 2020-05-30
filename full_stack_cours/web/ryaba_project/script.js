//header animation
jQuery(document).ready(function(){
   $('.header-text').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('.header-text').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});

//vars constatnts

const var1Node = $('.var1');
const var2Node = $('.var2');
const var3Node = $('.var3');
const var4Node = $('.var4');
const var5Node = $('.var5');
const var6Node = $('.var6');
const speachNode = $('.speach');

// buttons
const btnCreate = $('.btn_create_txt');
const btnChange = $('.btn_change_var');
const btnAutoInputs = $('.btn_rnd_inputs');

// texts

const textStart = 
  {"text":
  ["Жили-были {var1} да {var2}",
  "Была у них {var3}",
  "Снесла {var3} {var4}, не простое - золотое",
  "- {var1} бил, бил - не разбил",
  "- {var2} била, била - не разбила",
  "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
  "{var1} плачет, {var2} плачет, а {var3} кудахчет:",
  "{speach}"
]
};

const textOutput = $('.output_text');

//functions
  
btnCreate.click(function() {
  textOutput.html(textStart.text);
})

btnChange.click(function() {
  const var1 = var1Node.val();
  const var2 = var2Node.val();
  const var3 = var3Node.val();
  const var4 = var4Node.val();
  const var5 = var5Node.val();
  const var6 = var6Node.val();
  const speach = speachNode.val();
  
  const textNew = 
    {"text":
    [`Жили-были ${var1} да ${var2}.`,
    ` Была у них ${var3}.`,
    ` Снесла ${var3} ${var4}, не простое - золотое`,
    `- ${var1} бил, бил - не разбил`,
    `- ${var2} била, била - не разбила `,
    ` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
    `${var1} плачет, ${var2} плачет, а ${var3} кудахчет: `,
    `${speach}`
  ]
  };
  textOutput.html(textNew.text);
})


function getRandom() {
  return randomIndex = Math.floor(Math.random() * 11);
}

btnAutoInputs.click(function() {
  var rndVar1List = ['дедушка', 'крокодильчик', 'отец', 'смурф','король','вор','картежник','охотник','снегирь','мужик','волшебник','дворянин']
  var rndVar2List = ['бабушка', 'королева', 'стрекоза', 'актриса','ведьма','целительница','старуха','царевна','принцесса','крокодилица','панда','бревно']
  var rndVar3List = ['ветрянка', 'малая', 'курица', 'Курочка Ряба','мечта','дверь','кладовка','домашняя акула','собака','атомная боеголовка','булка хлеба','принцесса']
  var rndVar4List = ['яичко', 'лицо с разбега', 'идею', 'кучу','стену','дверь','тортик','носилки','канделябр','мужика','зеркало','замок']
  var rndVar5List = ['мишка', 'слонишка', 'зебришка', 'старуха','принцеска','воришка','алкашка','тень','повариха','бегунья','спортсменка','мурашка']
  var rndVar6List = ['хвостиком', 'ручкой', 'головой', 'головкой','ножкой','языком','волосом','веером','гривой','пальцем','сумочкой','крылом']
  var rndVarSList = ['ко-ко-ко-ко-ко-ко!!', '№:?"%?;!?%;?"!;:*?!%;', 'Ти шо ти шо, ай-яй-яй, горе то яке', 'None','nonetype object is not subscriptable','*нецензурная брань*','ля, шо це таке то ото робиться??? людоньки','В міліцію звоніть! бира','опчики брики и в дамки','кондьохаем веселей','упс, вот это пападос', 'kudkudah!']

 // var randomIndex = Math.floor(Math.random() * 11);
  var randomIndex = getRandom(); 
  var rndVar1 = rndVar1List.randomIndex;
 // var rndVar1List2 = ['дедушка', 'крокодильчик', 'отец', 'смурф','король','вор','картежник','охотник','снегирь','мужик','волшебник','дворянин']
 // var randomIndex2 = Math.floor(Math.random() * 11);
 // var rndVar2 = rndVar1List2[randomIndex2];
 // $('.var2').val(rndVar2);
 
 
 
 // $('.var2').val(rndVar2);
  $('.var1').val(rndVar1);

})


//1. table sorters
var index1SortUp = document.getElementById("index1SortUp");
var index1SortDown = document.getElementById("index1SortDown");
var index4SortUp = document.getElementById("index4SortUp");
var index4SortDown = document.getElementById("index4SortDown");
var index5SortUp = document.getElementById("index5SortUp");
var index5SortDown = document.getElementById("index5SortDown");
var index6SortUp = document.getElementById("index6SortUp");
var index6SortDown = document.getElementById("index6SortDown");
var index7SortUp = document.getElementById("index7SortUp");
var index7SortDown = document.getElementById("index7SortDown");
var index8SortUp = document.getElementById("index8SortUp");
var index8SortDown = document.getElementById("index8SortDown");
var index9SortUp = document.getElementById("index9SortUp");
var index9SortDown = document.getElementById("index9SortDown");
var index10SortUp = document.getElementById("index10SortUp");
var index10SortDown = document.getElementById("index10SortDown");

//2. filter confirm button
var FilterCloseBtn = document.getElementById("FilterCloseBtn");
var FilterCloseX = document.getElementById("FilterCloseX");

//3. filter checkers
var FilClsSaber = document.getElementById("FilClsSaber");
var FilClsArcher = document.getElementById("FilClsArcher");
var FilClsLancer = document.getElementById("FilClsLancer");
var FilClsRider = document.getElementById("FilClsRider");
var FilClsCaster = document.getElementById("FilClsCaster");
var FilClsAssassin = document.getElementById("FilClsAssassin");
var FilClsBerserker = document.getElementById("FilClsBerserker");
var FilClsRuler = document.getElementById("FilClsRuler");
var FilClsAvenger = document.getElementById("FilClsAvenger");
var FilClsMooncancer = document.getElementById("FilClsMooncancer");
var FilClsAlterego = document.getElementById("FilClsAlterego");
var FilClsForeigner = document.getElementById("FilClsForeigner");
var FilClsAllCkd = document.getElementById("FilClsAllCkd");
var FilClsAllUnCkd = document.getElementById("FilClsAllUnCkd");

var FilRare1 = document.getElementById("FilRare1");
var FilRare2 = document.getElementById("FilRare2");
var FilRare3 = document.getElementById("FilRare3");
var FilRare4 = document.getElementById("FilRare4");
var FilRare5 = document.getElementById("FilRare5");
var FilRareAllCkd = document.getElementById("FilRareAllCkd");
var FilRareAllUnCkd = document.getElementById("FilRareAllUnCkd");

var FilNPLev1 = document.getElementById("FilNPLev1");
var FilNPLev2 = document.getElementById("FilNPLev2");
var FilNPLev3 = document.getElementById("FilNPLev3");
var FilNPLev4 = document.getElementById("FilNPLev4");
var FilNPLev5 = document.getElementById("FilNPLev5");
var FilNPLevInd = document.getElementById("FilNPLevInd");

var FourATK = document.getElementById("FourATK");
var CraftATK = document.getElementById("CraftATK");

var CraftBufBuster = document.getElementById("CraftBufBuster");
var CraftBufBusterAtk = document.getElementById("CraftBufBusterAtk");
var CraftBufBusterNp = document.getElementById("CraftBufBusterNp");

var CraftBufArts = document.getElementById("CraftBufArts");
var CraftBufArtsAtk = document.getElementById("CraftBufArtsAtk");
var CraftBufArtsNp = document.getElementById("CraftBufArtsNp");

var CraftBufQuick = document.getElementById("CraftBufQuick");
var CraftBufQuickAtk = document.getElementById("CraftBufQuickAtk");
var CraftBufQuickNp = document.getElementById("CraftBufQuickNp");

var FilNPExtraOnly = document.getElementById("FilNPExtraOnly");
var FilClsDmgMul = document.getElementById("FilClsDmgMul");
var FilClsExtraDmgMul = document.getElementById("FilClsExtraDmgMul");

var GotoTop = document.getElementById("GotoTop");
var GotoMain = document.getElementById("GotoMain");


const CommIndex = {
    "buster" : 0,
    "arts" : 1,
    "quick" : 2
}//커멘드 텍스트 인덱스 테이블
const NpTypeIndex = {
    "unit" : 0,
    "army" : 1
}//보구 타입 인덱스 테이블

const ClassIndex=
    {
        "saber" : 0,
        "archer" : 1,
        "lancer" : 2,
        "rider" : 3,
        "caster" : 4,
        "assassin" : 5,
        "berserker" : 6,
        "sheilder" : 7,
        "ruler" : 8,
        "avenger" : 9,
        "mooncancer" : 10,
        "alterego" : 11,
        "foreigner" : 12
    };//클래스 텍스트 인덱스 테이블

const ClassDmgMagTable = new Array (1,0.95,1.05,1,0.9,0.9,1.1,1,1.1,1.1,1,1,1);//클래스 보정계수
const ClassNameKor = new Array("세이버", "아처", "랜서", "라이더", "캐스터", "어새신", "버서커", "실더", "룰러",
    "어벤저", "문캔서", "얼터에고", "포리너");
const CommTextHTML = [
    "<span style=\"color:#c00000; font-weight:bold; \">Buster</span>",
    "<span style=\"color:#0059da; font-weight:bold; \">Arts</span>",
    "<span style=\"color:#08be47; font-weight:bold; \">Quick</span>"
];

const NpDmTableBusterArmy = [
    [300,400,450,475,500],
    [400,500,550,575,600],
    [450,550,600,625,650],//흑밥
    [400,550,625,662.5,700]//세릴리
];
const NpDmTableBusterUnit = [
    [600,800,900,950,1000],
    [800,1000,1100,1150,1200],
    [700,900,1000,1050,1100]//베오
];
const NpDmTableArtsArmy = [
    [450,600,675,712.5,750],
    [600,750,825,862.5,900],
    [400,500,550,575,600]//파라켈
];
const NpDmTableArtsUnit = [
    [900,1200,1350,1425,1500],
    [1200,1500,1650,1725,1800],
    [1200,1200,1200,1200,1200],//에우리알레
    [150*12,200*12,225*12,237*12,250*12]//에우리알레 남성특공 계수
];
const NpDmTableQuickArmy = [
    [600,800,900,950,1000],
    [800,1000,1100,1150,1200],
    [900,1100,1200,1250,1300]//프랑
];
const NpDmTableQuickUnit = [
    [1200,1600,1800,1900,2000],
    [1600,2000,2200,2300,2400],
    [1400,1800,2000,2100,2200]//잭
];
//보구 계수 대군대인 [NpTypeIndex[보구유형문자],CommIndex[커멘드문자],npmul,보구레벨]
const NpDmTable = [
    [NpDmTableBusterUnit,NpDmTableArtsUnit,NpDmTableQuickUnit],
    [NpDmTableBusterArmy,NpDmTableArtsArmy,NpDmTableQuickArmy]
];

//클래스 상성계수 출력 배열 : [공격][방어] ClassIndexTable 활용
const ClassDefMag =
    [
        [1,0.5,2,1,1,1,2,1,0.5,1,1,1,1],//saber
        [2,1,0.5,1,1,1,2,1,0.5,1,1,1,1],//archer
        [0.5,2,1,1,1,1,2,1,0.5,1,1,1,1],//lancer
        [1,1,1,1,2,0.5,2,1,0.5,1,1,1,1],//rider
        [1,1,1,0.5,1,2,2,1,0.5,1,1,1,1],//caster
        [1,1,1,2,0.5,1,2,1,0.5,1,1,1,1],//assassin
        [1.5,1.5,1.5,1.5,1.5,1.5,1.5,1,1.5,1.5,1.5,1.5,0.5],//berserker
        [1,1,1,1,1,1,1,1,1,1,1,1,1],//sheilder
        [1,1,1,1,1,1,2,1,1,0.5,2,1,1],//ruler
        [1,1,1,1,1,1,2,1,2,1,0.5,1,1],//avenger
        [1,1,1,1,1,1,2,1,0.5,2,1,1,1],//mooncancer
        [0.5,0.5,0.5,1.5,1.5,1.5,2,1,1,1,1,1,2],//alterego
        [1,1,1,1,1,1,2,1,1,1,1,0.5,2]//foreigner

    ];

const CommMagTable = new Array(1.5,1,0.8);//커멘드 보정계수



var ResultTbl = document.getElementById("ResultTbl");
var colserv = document.getElementById("colserv");
var colclass = document.getElementById("colclass");
var colcmd = document.getElementById("colcmd");

var NpTable;

function getData(){
    var data = Papa.parse("https://raw.githubusercontent.com/Cass07/FgoCalc/master/Data/NpTableServData.csv",{
        delimiter : ",",
        download: true,
        header:true,
        dynamicTyping:true,
        complete: function(results){
            NpTable = results.data;


            for(var i = 0; i < NpTable.length - 1; i++)
            {
                if(IsServFilt(NpTable[i]))
                {
                    var gRows = ResultTbl.insertRow();
                    var oCell = new Array();
                    for(var j = 0; j < ResultTbl.rows[0].cells.length; j++) {
                        oCell[j] = gRows.insertCell();
                    }
                    oCell[0].innerHTML = NpTable[i]["name"];
                    oCell[1].innerHTML = ClassNameKor[ClassIndex[NpTable[i]["class"]]];
                    oCell[2].innerHTML = CommTextHTML[CommIndex[NpTable[i]["npcmd"]]];
                    for(j = 1; j < 6; j++) {
                        oCell[j+2].innerHTML = NpDamageCalcFin(NpTable[i], j);
                    }

                }
            }

                TableSortingDown(ResultTbl,3);

            $('#ResultTbl tr > *:nth-child(9)').hide();
            $('#ResultTbl tr > *:nth-child(10)').hide();

        }
    });
}

document.addEventListener('DOMContentLoaded',function () {

    getData();

    //$('#ResultTbl tr > *:nth-child(9)').hide();

},false);

FilClsAllCkd.addEventListener("click",function(){
    $('#FilClsSaber').prop('checked', true);
    $('#FilClsArcher').prop('checked', true);
    $('#FilClsLancer').prop('checked', true);
    $('#FilClsRider').prop('checked', true);
    $('#FilClsCaster').prop('checked', true);
    $('#FilClsAssassin').prop('checked', true);
    $('#FilClsBerserker').prop('checked', true);
    $('#FilClsRuler').prop('checked', true);
    $('#FilClsAvenger').prop('checked', true);
    $('#FilClsMooncancer').prop('checked', true);
    $('#FilClsAlterego').prop('checked', true);
    $('#FilClsForeigner').prop('checked', true);
})//클래스 필터 전체 선택 버튼 이벤트

FilClsAllUnCkd.addEventListener("click",function(){
    $('#FilClsSaber').prop('checked', false);
    $('#FilClsArcher').prop('checked', false);
    $('#FilClsLancer').prop('checked', false);
    $('#FilClsRider').prop('checked', false);
    $('#FilClsCaster').prop('checked', false);
    $('#FilClsAssassin').prop('checked', false);
    $('#FilClsBerserker').prop('checked', false);
    $('#FilClsRuler').prop('checked', false);
    $('#FilClsAvenger').prop('checked', false);
    $('#FilClsMooncancer').prop('checked', false);
    $('#FilClsAlterego').prop('checked', false);
    $('#FilClsForeigner').prop('checked', false);
})//클래스 필터 전체 선택해제 버튼 이벤트

FilRareAllCkd.addEventListener("click",function(){
    $('#FilRare1').prop('checked', true);
    $('#FilRare2').prop('checked', true);
    $('#FilRare3').prop('checked', true);
    $('#FilRare4').prop('checked', true);
    $('#FilRare5').prop('checked', true);
})//레어도 필터 전체 선택 버튼 이벤트

FilRareAllUnCkd.addEventListener("click",function() {
    $('#FilRare1').prop('checked', false);
    $('#FilRare2').prop('checked', false);
    $('#FilRare3').prop('checked', false);
    $('#FilRare4').prop('checked', false);
    $('#FilRare5').prop('checked', false);
})//레어도 필터 전체 선택해제 버튼 이벤트

index1SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUpText(ResultTbl,0);
})//오름&내림차순 버튼 이벤트
index1SortDown.addEventListener("click",function () {
    TableSortingDownText(ResultTbl,0);
})
index4SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,3);
})
index4SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,3);
})
index5SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,4);
})
index5SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,4);
})
index6SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,5);
})
index6SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,5);
})
index7SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,6);
})
index7SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,6);
})
index8SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,7);
})
index8SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,7);
})
index9SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,8);
})
index9SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,8);
})
index10SortUp.addEventListener("click",function () {
    //ResultTbl.deleteRow(ResultTbl.rows.length-1);
    TableSortingUp(ResultTbl,9);
})
index10SortDown.addEventListener("click",function () {
    TableSortingDown(ResultTbl,9);
})

FilNPLevInd.addEventListener("change",function()
{
    if($('#FilNPLevInd').is(":checked"))
    {
        alert("반드시 세부 필터링을 한 후 사용하세요! 정렬 알고리즘 최적화를 안해서 속도가 끔찍하게 느립니다!");
        $('#FilNPLev1').prop('disabled',true);
        $('#FilNPLev2').prop('disabled',true);
        $('#FilNPLev3').prop('disabled',true);
        $('#FilNPLev4').prop('disabled',true);
        $('#FilNPLev5').prop('disabled',true);
    }else
    {
        $('#FilNPLev1').prop('disabled',false);
        $('#FilNPLev2').prop('disabled',false);
        $('#FilNPLev3').prop('disabled',false);
        $('#FilNPLev4').prop('disabled',false);
        $('#FilNPLev5').prop('disabled',false);
    }
})

//함수

var mytimer;
function TableSortingUp(table, colindex)
{
    var tablerows = table.rows.length;//행 크기
    wrapWindowLoadingMask();

    clearTimeout(mytimer);

    mytimer = setTimeout(function()
    {
        for(var i = tablerows -1;i > 1; i--)
        {
            for(var j = 1; j < i; j++)
            {
                if(Number(table.rows[j].cells[colindex].innerHTML)>Number(table.rows[j+1].cells[colindex].innerHTML))
                {
                    TableRowsSwap(table.rows[j],table.rows[j+1]);
                }
            }

        }
        closeLoadingMask();
    },0);

}

function TableSortingDown(table,colindex)
{
    var tablerows = table.rows.length;//행 크기
    wrapWindowLoadingMask();

    clearTimeout(mytimer);

    mytimer = setTimeout(function()
    {
        for(var i = tablerows -1;i > 1; i--)
        {
            for(var j = 1; j < i; j++)
            {
                if(Number(table.rows[j].cells[colindex].innerHTML)<Number(table.rows[j+1].cells[colindex].innerHTML))
                {
                    TableRowsSwap(table.rows[j],table.rows[j+1]);
                }
            }

        }
        closeLoadingMask();
    },0);
}

function TableSortingUpText(table, colindex)
{
    var tablerows = table.rows.length;//행 크기
    wrapWindowLoadingMask();

    clearTimeout(mytimer);

    mytimer = setTimeout(function()
    {
        for(var i = tablerows -1;i > 1; i--)
        {
            for(var j = 1; j < i; j++)
            {
                if(table.rows[j].cells[colindex].innerHTML>table.rows[j+1].cells[colindex].innerHTML)
                {
                    TableRowsSwap(table.rows[j],table.rows[j+1]);
                }
            }

        }
        closeLoadingMask();
    },0);
}

function TableSortingDownText(table,colindex)
{
    var tablerows = table.rows.length;//행 크기
    wrapWindowLoadingMask();

    clearTimeout(mytimer);

    mytimer = setTimeout(function()
    {
        for(var i = tablerows -1;i > 1; i--)
        {
            for(var j = 1; j < i; j++)
            {
                if(table.rows[j].cells[colindex].innerHTML<table.rows[j+1].cells[colindex].innerHTML)
                {
                    TableRowsSwap(table.rows[j],table.rows[j+1]);
                }
            }

        }
        closeLoadingMask();
    },0);
}

function TableRowsSwap(row1, row2)
{
    for(var i = 0; i < row1.cells.length; i++)
    {
        var tbltemp = row1.cells[i].innerHTML;
        row1.cells[i].innerHTML = row2.cells[i].innerHTML;
        row2.cells[i].innerHTML = tbltemp;
    }
}

function TableDeleteAll(table)//1열빼고 다지우기
{
    while(table.rows.length>1)
    {
        table.deleteRow(table.rows.length-1);
    }
}

function NpDamageCalc(ServFinalATK, ServClass, ClassMagMul, NpCmd, NpType, NpMul,NpLev, AtkBuf, CmdBuff, NpBuf, NpExtraMul, DmgPlus, HpProNpDmg)
{
    var NpDmg = ServFinalATK*0.23*CommMagTable[CommIndex[NpCmd]]*ClassDmgMagTable[ClassIndex[ServClass]]*ClassMagMul*(100+AtkBuf)/100*(100+CmdBuff)/100*
        (100+NpBuf)/100;
    if(NpExtraMul > 0)
    {
        NpDmg = NpDmg*NpExtraMul/100;
    }

    return Math.floor(NpDmg * (NpDmTable[NpTypeIndex[NpType]][CommIndex[NpCmd]][NpMul][NpLev - 1] + HpProNpDmg) / 100 + DmgPlus);

}

function NpDamageCalcFin(Serv, NpLev)//NpTable[i] 형식의 입력, 추가버프 같이 계산
{
    var ServFinalATK = Number(Serv["atk"]) + Number(FourATK.value) + Number(CraftATK.value);
    var ClassMagMul = 1;
    if ((Number(Serv["isclassmul"]) == 1) || (Serv["class"] == "berserker"))
        ClassMagMul = 1.5;
    if ($('#FilClsDmgMul').is(":checked")) {
        if ((Serv["class"] == "saber") || (Serv["class"] == "archer") || (Serv["class"] == "lancer") || (Serv["class"] == "rider")
            || (Serv["class"] == "caster") || (Serv["class"] == "assassin")) {
            ClassMagMul = 2;
        }
    }
    if ($('#FilClsExtraDmgMul').is(":checked")) {
        if ((Serv["class"] == "ruler") || (Serv["class"] == "avenger") || (Serv["class"] == "mooncancer")) {
            ClassMagMul = 2;
        }
    }
    var AtkBuf = Number(Serv["atkbuf"]);
    var CmdBuf = Number(Serv["cmdbuf"]);
    var NpBuf = Number(Serv["npbuf"]);
    if (Serv["npcmd"] == "buster") {
        AtkBuf += Number(CraftBufBusterAtk.value);
        CmdBuf += Number(CraftBufBuster.value);
        NpBuf += Number(CraftBufBusterNp.value);
    } else if (Serv["npcmd"] == "arts") {
        AtkBuf += Number(CraftBufArtsAtk.value);
        CmdBuf += Number(CraftBufArts.value);
        NpBuf += Number(CraftBufArtsNp.value);
    } else if (Serv["npcmd"] == "quick") {
        AtkBuf += Number(CraftBufQuickAtk.value);
        CmdBuf += Number(CraftBufQuick.value);
        NpBuf += Number(CraftBufQuickNp.value);
    }

    //console.log("최종공 : "+ServFinalATK + "상성배율 : "+ ClassMagMul + Serv["npcmd"]+Serv["nptype"]+Number(Serv["npmul"])+"보렙 : "+NpLev
    //+"공벞 : "+AtkBuf+"색벞" +CmdBuf + "보벞"+NpBuf+ "특공보구 : "+Number(Serv["npextramul"]));

    return NpDamageCalc(ServFinalATK,Serv["class"],ClassMagMul, Serv["npcmd"],Serv["nptype"], Number(Serv["npmul"]), NpLev,
        AtkBuf, CmdBuf, NpBuf, Number(Serv["npextramul"]),Number(Serv["dmgplus"]), Number(Serv["hppronp"]));

}

function IsServFilt(Serv)//NpTable[i]형식의 입력, 필터 처리 함수
{
    //클래스
    if(!$('#FilClsSaber').is(":checked") && (Serv["class"] == "saber"))
        return false;
    if(!$('#FilClsArcher').is(":checked") && (Serv["class"] == "archer"))
        return false;
    if(!$('#FilClsLancer').is(":checked") && (Serv["class"] == "lancer"))
        return false;
    if(!$('#FilClsRider').is(":checked") && (Serv["class"] == "rider"))
        return false;
    if(!$('#FilClsCaster').is(":checked") && (Serv["class"] == "caster"))
        return false;
    if(!$('#FilClsAssassin').is(":checked") && (Serv["class"] == "assassin"))
        return false;
    if(!$('#FilClsBerserker').is(":checked") && (Serv["class"] == "berserker"))
        return false;
    if(!$('#FilClsRuler').is(":checked") && (Serv["class"] == "ruler"))
        return false;
    if(!$('#FilClsAvenger').is(":checked") && (Serv["class"] == "avenger"))
        return false;
    if(!$('#FilClsMooncancer').is(":checked") && (Serv["class"] == "mooncancer"))
        return false;
    if(!$('#FilClsAlterego').is(":checked") && (Serv["class"] == "alterego"))
        return false;
    if(!$('#FilClsForeigner').is(":checked") && (Serv["class"] == "foreigner"))
        return false;
    //레어
    if(!$('#FilRare1').is(":checked") && (Serv["rare"] == "1"))
        return false;
    if(!$('#FilRare2').is(":checked") && (Serv["rare"] == "2"))
        return false;
    if(!$('#FilRare3').is(":checked") && (Serv["rare"] == "3"))
        return false;
    if(!$('#FilRare4').is(":checked") && (Serv["rare"] == "4"))
        return false;
    if(!$('#FilRare5').is(":checked") && (Serv["rare"] == "5"))
        return false;
    //보구커멘
    if(!$('#FilNPCommBuster').is(":checked") && (Serv["npcmd"] == "buster"))
        return false;
    if(!$('#FilNPCommArts').is(":checked") && (Serv["npcmd"] == "arts"))
        return false;
    if(!$('#FilNPCommQuick').is(":checked") && (Serv["npcmd"] == "quick"))
        return false;
    //보구타입
    if(!$('#FilNPTypeArmy').is(":checked") && (Serv["nptype"] == "army"))
        return false;
    if(!$('#FilNPTypeUnit').is(":checked") && (Serv["nptype"] == "unit"))
        return false;


    return true;

}

function GetFilteredResult()
{
    for(var i = 0; i < NpTable.length - 1; i++)
    {
        if($('#FilNPLevInd').is(":checked"))
        {
            if(IsServFilt(NpTable[i]))
            {
                for(var j = 0; j < 5; j++)
                {
                    var gRows = ResultTbl.insertRow();
                    var oCell = new Array();
                    for(var k = 0; k < ResultTbl.rows[0].cells.length;k++)
                    {
                        oCell[k] = gRows.insertCell();
                    }
                    oCell[0].innerHTML = NpTable[i]["name"];
                    oCell[1].innerHTML = ClassNameKor[ClassIndex[NpTable[i]["class"]]];
                    oCell[2].innerHTML = CommTextHTML[CommIndex[NpTable[i]["npcmd"]]];
                    oCell[8].innerHTML = Number(j+1);
                    oCell[9].innerHTML = NpDamageCalcFin(NpTable[i], j+1);
                }
            }
        }else{
            if(IsServFilt(NpTable[i]))
            {
                var gRows = ResultTbl.insertRow();
                var oCell = new Array();
                for(var j = 0; j < ResultTbl.rows[0].cells.length; j++) {
                    oCell[j] = gRows.insertCell();
                }
                oCell[0].innerHTML = NpTable[i]["name"];
                oCell[1].innerHTML = ClassNameKor[ClassIndex[NpTable[i]["class"]]];
                oCell[2].innerHTML = CommTextHTML[CommIndex[NpTable[i]["npcmd"]]];
                for(j = 1; j < 6; j++) {
                    oCell[j+2].innerHTML = NpDamageCalcFin(NpTable[i], j);
                }
            }
        }
    }


}

function GetNpLevFilteredResult()
{
    $('#ResultTbl tr > *:nth-child(4)').show();
    $('#ResultTbl tr > *:nth-child(5)').show();
    $('#ResultTbl tr > *:nth-child(6)').show();
    $('#ResultTbl tr > *:nth-child(7)').show();
    $('#ResultTbl tr > *:nth-child(8)').show();
    $('#ResultTbl tr > *:nth-child(9)').hide();
    $('#ResultTbl tr > *:nth-child(10)').hide();

    ResultTbl.style.width = 100+"%";
    colserv.style.width = 17+"%";
    colclass.style.width = 8+"%";
    colcmd.style.width = 8+"%";
    var cnt = 0;

    if($('#FilNPLevInd').is(":checked"))
    {
        $('#ResultTbl tr > *:nth-child(4)').hide();
        $('#ResultTbl tr > *:nth-child(5)').hide();
        $('#ResultTbl tr > *:nth-child(6)').hide();
        $('#ResultTbl tr > *:nth-child(7)').hide();
        $('#ResultTbl tr > *:nth-child(8)').hide();
        $('#ResultTbl tr > *:nth-child(9)').show();
        $('#ResultTbl tr > *:nth-child(10)').show();
        ResultTbl.style.width = 60+"%";
        colserv.style.width = 28+"%";
        colclass.style.width = 12+"%";
        colcmd.style.width = 12+"%";


    }
    if(!$('#FilNPLev1').is(":checked"))
    {
        $('#ResultTbl tr > *:nth-child(4)').hide();
        cnt++;
    }
    if(!$('#FilNPLev2').is(":checked"))
    {
        $('#ResultTbl tr > *:nth-child(5)').hide();
        cnt++;
    }
    if(!$('#FilNPLev3').is(":checked"))
    {
        $('#ResultTbl tr > *:nth-child(6)').hide();
        cnt++;
    }
    if(!$('#FilNPLev4').is(":checked"))
    {
        $('#ResultTbl tr > *:nth-child(7)').hide();
        cnt++;
    }
    if(!$('#FilNPLev5').is(":checked"))
    {
        $('#ResultTbl tr > *:nth-child(8)').hide();
        cnt++;
    }

    if(cnt >2)
    {
        ResultTbl.style.width = 60+"%";
        colserv.style.width = 28+"%";
        colclass.style.width = 12+"%";
        colcmd.style.width = 12+"%";
    }
}

function wrapWindowLoadingMask()
{

    var maskHeight = $(document).height();
    var maskWidth = window.document.body.clientWidth;

    var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    var loadingImg = '';

    loadingImg += "<div id='loadingImg' style='position:absolute; left:50%; top:40%; display:none; z-index:10000;'>";
    loadingImg += "<img src='../Data/image/loading.gif'/>";
    loadingImg += "</div>";


    $('body')
        .append(mask)
        .append(loadingImg)

    $("#mask").css({
        'width' : maskWidth,
        'height' : maskHeight,
        'opacity' : '0.3'
    });

    $('#mask').show();
    $('#loadingImg').show();

    console.log("mask show");

}

function closeLoadingMask()
{
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty();

    console.log("mask hide");
}

$("#HiddenModal").on('hidden.bs.modal',function(){

    TableDeleteAll(ResultTbl);

    GetFilteredResult();
    GetNpLevFilteredResult();
    if($('#FilNPLevInd').is(":checked"))
    {
        TableSortingDown(ResultTbl,9);
    }else
    {
        TableSortingDown(ResultTbl,3);
    }

})

//기타
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

GotoTop.addEventListener("click",function(){
    var body = document.getElementsByTagName("body")[0];
    window.scroll({
        behavior:'smooth',
        left:0,
        top:body.offsetTop
    });
})

//main버튼 클릭 이벤트 함수
GotoMain.addEventListener("click",function()
{
    window.location = '../';
})
// function gpa(){
//     var credit1=document.getElementsByClassName('credit1')[0].value;
//     // document.getElementsByClassName('credit1')[0].value = credit1;
//     var point1=document.getElementsByClassName('credit1')[0].value;
//     // document.getElementsByClassName('credit1')[0].value = point1;
    // if (point1=="A"){
    //     point1=3.37;
    // }
    // else if(point1=="B"){
    //     point1=3.0;
    // }
    // else if(point1=="B-"){
    //     point1=2.5;
    // }
//     var a=credit1*point1;

//     var credit2=document.getElementsByClassName('credit2')[0].value;
//     // document.getElementsByClassName('credit2')[0].value = credit2
//     var point2=document.getElementsByClassName('credit2')[0].value;
//     // document.getElementsByClassName('credit2')[0].value = point2;
//     if (point2=="A"){
//         point2=3.37;
//     }
//     else if(point2=="B"){
//         point2=3.0;
//     }
//     else if(point2=="B-"){
//         point2=2.5;
//     }
//     var b=credit2*point2;

//     var credit3=document.getElementsByClassName('credit3')[0].value;
//     // document.getElementsByClassName('credit3')[0].value = credit3
//     var point3=document.getElementsByClassName('credit3')[0].value;
//     // document.getElementsByClassName('credit1')[0].value = point3;
//     if (point3=="A"){
//         point3=3.37;
//     }
//     else if(point3=="B"){
//         point3=3.0;
//     }
//     else if(point3=="B-"){
//         point3=2.5;
//     }
//     var c=credit3*point3;
    
//     var credit4=document.getElementsByClassName('credit4')[0].value;
//     // document.getElementsByClassName('credit4')[0].value = credit4
//     var point4=document.getElementsByClassName('credit4')[0].value;
//     // document.getElementsByClassName('credit1')[0].value = point4;
//     if (point4=="A"){
//         point4=3.37;
//     }
//     else if(point4=="B"){
//         point4=3.0;
//     }
//     else if(point4=="B-"){
//         point4=2.5;
//     }
//     var d=credit4*point4;

//     var credit5=document.getElementsByClassName('credit5')[0].value;
//     // document.getElementsByClassName('credit5')[0].value = credit5
//     var point5=document.getElementsByClassName('credit5')[0].value;
//     // document.getElementsByClassName('credit1')[0].value = point5;
//     if (point5=="A"){
//         point5=3.37;
//     }
//     else if(point5=="B"){
//         point5=3.0;
//     }
//     else if(point5=="B-"){
//         point5=2.5;
//     }
//     var e=credit5*point5;

//     var credit6=document.getElementsByClassName('credit6')[0].value;
//     // document.getElementsByClassName('credit6')[0].value = credit6
//     var point6=document.getElementsByClassName('credit6')[0].value;
//     // document.getElementsByClassName('credit1')[0].value = point6;
//     if (point6=="A"){
//         point6=3.37;
//     }
//     else if(point6=="B"){
//         point6=3.0;
//     }
//     else if(point6=="B-"){
//         point6=2.5;
//     }
   
//     var f=credit6*point6;
//     var total=a+b+c+d+e+f;
//     alert(total);
//     var totalCredit=credit1+credit2+credit3+credit4+credit5+credit6;
//     alert(totalCredit);
//     var gpa=totalCredit/total;
//     alert(gpa)

// }


function points(){
    var crhour1 = document.getElementsByClassName('credit1')[0].value;
    document.getElementsByClassName('credit1')[0].value = crhour1
    crhour1 =parseFloat(crhour1);
    if (crhour1){
        crhour1=crhour1;
    }
    else{
        crhour1=0
    }
    console.log(crhour1)

    var crhour2 = document.getElementsByClassName('credit2')[0].value;
    document.getElementsByClassName('credit2')[0].value = crhour2
    crhour2 =parseFloat(crhour2);
    if (crhour2){
        crhour2=crhour2;
    }
    else{
        crhour2=0
    }
    console.log(crhour2)

    var crhour3 = document.getElementsByClassName('credit3')[0].value;
    document.getElementsByClassName('credit3')[0].value = crhour3
    crhour3 =parseFloat(crhour3);
    if (crhour3){
        crhour3=crhour3;
    }
    else{
        crhour3=0
    }
    console.log(crhour3)

    var crhour4 = document.getElementsByClassName('credit4')[0].value;
    document.getElementsByClassName('credit4')[0].value = crhour4
    crhour4 =parseFloat(crhour4);
    if (crhour4){
        crhour4=crhour4;
    }
    else{
        crhour4=0
    }
    console.log(crhour4)

    var crhour5 = document.getElementsByClassName('credit5')[0].value;
    document.getElementsByClassName('credit5')[0].value = crhour5
    crhour5 =parseFloat(crhour5);
    if (crhour5){
        crhour5=crhour5;
    }
    else{
        crhour5=0
    }
    console.log(crhour5)

    var crhour6 = document.getElementsByClassName('credit6')[0].value;
    document.getElementsByClassName('credit6')[0].value = crhour6
    crhour6 =parseFloat(crhour6);
    if (crhour6){
        crhour6=crhour6;
    }
    else{
        crhour6=0
    }
    console.log(crhour6)

    var totalCredit=crhour1+crhour2+crhour3+crhour4+crhour5+crhour6;
    console.log(totalCredit)

    var grade1 = document.getElementsByClassName('grade1')[0].value;
    document.getElementsByClassName('grade1')[0].value = grade1
    console.log(grade1)
    if (grade1=="A+"){
        point1=4;
    }
    else if(grade1=="A"){
        point1=3.70;
    }
    else if(grade1=="B+"){
        point1=3.40;
    }
    else if(grade1=="B"){
        point1=3.00;
    }
    else if(grade1=="B-"){
        point1=2.50;
    }
    else if(grade1=="C+"){
        point1=2.00;
    }
    else if(grade1=="C"){
        point1=1.50;
    }
    else if(grade1=="D"){
        point1=1.00;
    }
    else if(grade1=="F"){
        point1=0.00;
    }
    else if(grade1=="-"){
        point1=0.00;
    }
    else{
        alert("please select corect grade")
    }
    var point1=point1*crhour1;
    console.log(point1)

    var grade2 = document.getElementsByClassName('grade2')[0].value;
    document.getElementsByClassName('grade2')[0].value = grade2
    console.log(grade2)
    if (grade2=="A+"){
        point2=4;
    }
    else if(grade2=="A"){
        point2=3.70;
    }
    else if(grade2=="B+"){
        point2=3.40;
    }
    else if(grade2=="B"){
        point2=3.00;
    }
    else if(grade2=="B-"){
        point2=2.50;
    }
    else if(grade2=="C+"){
        point2=2.00;
    }
    else if(grade2=="C"){
        point2=1.50;
    }
    else if(grade2=="D"){
        point2=1.00;
    }
    else if(grade2=="F"){
        point2=0.00;
    }
    else if(grade2=="-"){
        point2=0.00;
    }
    else{
        alert("please select corect grade")
    }
    var point2=point2*crhour2;
    console.log(point2)

    var grade3 = document.getElementsByClassName('grade3')[0].value;
    document.getElementsByClassName('grade3')[0].value = grade3
    console.log(grade3)
    if (grade3=="A+"){
        point3=4;
    }
    else if(grade3=="A"){
        point3=3.70;
    }
    else if(grade3=="B+"){
        point3=3.40;
    }
    else if(grade3=="B"){
        point3=3.00;
    }
    else if(grade3=="B-"){
        point3=2.50;
    }
    else if(grade3=="C+"){
        point3=2.00;
    }
    else if(grade3=="C"){
        point3=1.50;
    }
    else if(grade3=="D"){
        point3=1.00;
    }
    else if(grade3=="F"){
        point3=0.00;
    }
    else if(grade3=="-"){
        point3=0.00;
    }
    else{
        alert("please select corect grade")
    }
    var point3=point3*crhour3;
    console.log(point3)

    var grade4 = document.getElementsByClassName('grade4')[0].value;
    document.getElementsByClassName('grade4')[0].value = grade4
    console.log(grade4)
    if (grade4=="A+"){
        point4=4;
    }
    else if(grade4=="A"){
        point4=3.70;
    }
    else if(grade4=="B+"){
        point4=3.40;
    }
    else if(grade4=="B"){
        point4=3.00;
    }
    else if(grade4=="B-"){
        point4=2.50;
    }
    else if(grade4=="C+"){
        point4=2.00;
    }
    else if(grade4=="C"){
        point4=1.50;
    }
    else if(grade4=="D"){
        point4=1.00;
    }
    else if(grade4=="F"){
        point4=0.00;
    }
    else if(grade4=="-"){
        point4=0.00;
    }
    else{
        alert("please select corect grade")
    }
    var point4=point4*crhour4;
    console.log(point4)

    var grade5 = document.getElementsByClassName('grade5')[0].value;
    document.getElementsByClassName('grade5')[0].value = grade5
    console.log(grade5)
    if (grade5=="A+"){
        point5=4;
    }
    else if(grade5=="A"){
        point5=3.70;
    }
    else if(grade5=="B+"){
        point5=3.40;
    }
    else if(grade5=="B"){
        point5=3.00;
    }
    else if(grade5=="B-"){
        point5=2.50;
    }
    else if(grade5=="C+"){
        point5=2.00;
    }
    else if(grade5=="C"){
        point5=1.50;
    }
    else if(grade5=="D"){
        point5=1.00;
    }
    else if(grade5=="F"){
        point5=0.00;
    }
    else if(grade5=="-"){
        point5=0.00;
    }
    else{
        alert("please select corect grade")
    }
    var point5=point5*crhour5;
    console.log(point5)

    var grade6 = document.getElementsByClassName('grade6')[0].value;
    document.getElementsByClassName('grade6')[0].value = grade6
    console.log(grade6)
    if (grade6=="A+"){
        point6=4;
    }
    else if(grade6=="A"){
        point6=3.70;
    }
    else if(grade6=="B+"){
        point6=3.40;
    }
    else if(grade6=="B"){
        point6=3.00;
    }
    else if(grade6=="B-"){
        point6=2.50;
    }
    else if(grade6=="C+"){
        point6=2.00;
    }
    else if(grade6=="C"){
        point6=1.50;
    }
    else if(grade6=="D"){
        point6=1.00;
    }
    else if(grade6=="F"){
        point6=0.00;
    }
    else if(grade6=="-"){
        point6=0.00;
    }
    else{
        alert("please select corect grade")
    }
    var point6=point6*crhour6;
    console.log(point6)

    var totalpoints=point1+point2+point3+point4+point5+point6;
    console.log(totalpoints)


    var gpa=totalpoints/totalCredit;
    console.log(gpa);

    var data = gpa
    if(data){
        document.getElementsByClassName('textview')[0].value = Math.round(data * 100) / 100 + " GPA";
    }
    
}

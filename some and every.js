let marks=[80,90,75,95];

let lowMarks=marks.some((mark)=>mark<40);
console.log(lowMarks); 

let higherMarks=marks.every((mark)=>mark>=40);
console.log(higherMarks);

let myCourse =()=>{
    return new Promise((resolve,reject)=>{
        let courses = [{
            firstCourse:'Computing',
            secondCourse:'Management',
            thirdCourse:'Commerce',
        }]
       if (courses.length > 0){
            resolve(courses);
       }else{
            reject('Sorry no any courses found');
       }
    })
}



myCourse().then((result) => console.log(result))
.catch((error) => console.log(error))
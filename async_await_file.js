function myCourses(){
    let courses = {
    	firstCourse: 'Computing',
    	secondCourse: 'Management',
    	thirdCourse: 'Commerce'
    }
    return courses;
}

async function getCourse(){
	try{
		let courses= await myCourses();
		console.log(courses);

	}
	catch(e){
		console.log("Error is :", e)

	}
}
getCourse();
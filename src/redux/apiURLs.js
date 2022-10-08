

export const apiBaseURL = 'http://127.0.0.1:8000';
// export const apiBaseURL = 'http://194.163.152.51';
// export const apiBaseURL = 'http://pentutors.com';


// Utility URLs 

export const get_all_countries = '/api/utility/get_all_countries/';
// export const get_states = '/api/utility/get_states/?country=' ;
export const get_cities = '/api/utility/get_cities/?country=';
export const get_all_category = '/api/course/get_all_category/';


// Authentication URLs 
export const login_user = '/api/authentication/login/'
export const register_user = '/api/authentication/register/'; // This URL will be use to create,
export const user_api = '/api/authentication/user/'; // THis URL is to GET User data and Update


export const create_student_query = '/api/utility/create_student_query/'

// Profile URLs 

export const profile = '/api/profile/';

// Tutors URLs

export const get_all_tutors = '/api/profile/get_all_tutors/';
export const get_tutor = '/api/profile/get_tutor/';
export const get_featured_tutors_url = '/api/profile/get_featured_tutors/';


export const get_all_courses = '/api/course/get_all_courses/';
export const get_my_courses = '/api/course/get_my_courses/';
export const create_course = '/api/course/create_course/'
export const create_course_chapter = '/api/course/create_course_chapter/'
export const create_chapter_video = '/api/course/create_chapter_video/'
export const get_course = '/api/course/get_course/'
export const delete_course = '/api/course/delete_course/'
export const delete_chapter_video = '/api/course/delete_chapter_video/'
export const delete_course_chapter = '/api/course/delete_course_chapter/'

export const add_to_cart_url = '/api/course/add_to_cart/'
export const get_cart_items = '/api/course/get_my_cart/'
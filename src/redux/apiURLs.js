

export const apiBaseURL = 'http://127.0.0.1:8000';
// export const apiBaseURL = 'http://192.168.100.5:8000';
// export const apiBaseURL = 'http://192.168.100.47:8000';
// export const apiBaseURL = 'http://pentutor-backend.redexpo.co.uk';
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
export const request_demo_class_url = '/api/video_chat/request-tutor-demo-class/';
export const get_tutor_demo_classes_requests = '/api/video_chat/get_tutor_demo_classes_requests/';
export const get_student_demo_classes_requests = '/api/video_chat/get_student_demo_classes_requests/';
export const accept_reject_demo_class = '/api/video_chat/accept_reject_demo_class/';
export const get_video_sessions = '/api/video_chat/get_user_video_chats/';


export const get_all_courses = '/api/course/get_all_courses/';
export const get_my_courses = '/api/course/get_my_courses/';
export const create_course = '/api/course/create_course/'
export const create_course_chapter = '/api/course/create_course_chapter/'
export const create_chapter_video = '/api/course/create_chapter_video/'
export const get_course = '/api/course/get_course/'
export const get_user_courses_url = '/api/course/get_user_courses/'
export const delete_course = '/api/course/delete_course/'
export const delete_chapter_video = '/api/course/delete_chapter_video/'
export const delete_course_chapter = '/api/course/delete_course_chapter/'

export const add_to_cart_url = '/api/course/add_to_cart/'
export const get_cart_items = '/api/course/get_my_cart/'
export const remove_from_cart = '/api/course/delete_cart/'

export const get_blog_posts_url = '/api/blog/get_blog_posts/'
export const get_single_blog_url = '/api/blog/get_single_blog/'

export const add_qualification_url = '/api/profile/add_qualification/'
export const add_experience_url = '/api/profile/add_experience/'

export const create_user_job = '/api/job/create_job/'
export const get_my_jobs = '/api/job/get_my_jobs/'
export const get_jobs = '/api/job/get_jobs/'
export const get_single_job = '/api/job/get_single_job/'
export const apply_job = '/api/job/apply_job/'



export const checkout_order_url = '/api/order/checkout_course/'

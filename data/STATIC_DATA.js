import iconGroup from '../assets/icon_group.svg';
import iconBook from '../assets/icon_book.svg';
import iconTeacher from '../assets/icon_teacher.svg';
import marketingImage from '../assets/Marketing.png';
import htmlImage from '../assets/Html.png';
import gsapImage from '../assets/Gsap.png';
import figmaImage from '../assets/Figma.png';

const advantages = [
    {
        "id" : 0,
        "title" : "Get new friends",
        "image" : iconGroup,
        "description" : "You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!"
    },
    {
        "id" : 1,
        "title" : "Expert and Fun Mentor",
        "image" : iconTeacher,
        "description" : "Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors."
    },
    {
        "id" : 2,
        "title" : "Flexible access",
        "image" : iconBook,
        "description" : "You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!"
    }
]

const courses = [
    {
        "id" : 0,
        "title" : "Digital Marketing Strategy",
        "field" : "Technology",
        "aim" : "This course aims to give you deeper understanding of core processes ...",
        "mentor" : "Ibrokhim Jalalov",
        "image" : marketingImage,
        "videoLessons" : 3,
        "mentorImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwx5ksyU2ag71075k0lFtC13pivcXjieyR6vgyh3W8qS-giolLS-B-VFYt5Lo3IW9laA&usqp=CAU"
    },
    {
        "id" : 1,
        "title" : "Figma Fundamental",
        "field" : "Design",
        "aim" : "These lessons and exercises will help you start designing with Figma ...",
        "mentor" : "Ibrokhim Jalalov",
        "image" : figmaImage,
        "videoLessons" : 2,
        "mentorImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwx5ksyU2ag71075k0lFtC13pivcXjieyR6vgyh3W8qS-giolLS-B-VFYt5Lo3IW9laA&usqp=CAU"
    },
    {
        "id" : 2,
        "title" : "HTML Fundamental",
        "field" : "Coding",
        "aim" : "Well organized and easy to make you understand tutorials with lots of ...",
        "mentor" : "Ibrokhim Jalalov",
        "image" : htmlImage,
        "videoLessons" : 4,
        "mentorImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwx5ksyU2ag71075k0lFtC13pivcXjieyR6vgyh3W8qS-giolLS-B-VFYt5Lo3IW9laA&usqp=CAU"
    },
    {
        "id" : 3,
        "title" : "GSAP animations",
        "field" : "Coding",
        "aim" : "Create awesome web animations with GSAP and have a chance...",
        "mentor" : "Ibrokhim Jalalov",
        "image" : gsapImage,
        "videoLessons" : 5,
        "mentorImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwx5ksyU2ag71075k0lFtC13pivcXjieyR6vgyh3W8qS-giolLS-B-VFYt5Lo3IW9laA&usqp=CAU"
    }
]

export { advantages, courses }
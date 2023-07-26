import profilepic from '../images/profile-image.webp';
import { faBuilding as farBuilding } from '@fortawesome/free-regular-svg-icons';
import { faCalendar as farCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFlag as farFlag } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap as fasGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faMap as farMap } from '@fortawesome/free-regular-svg-icons';

/**
 * About section
 */
export const aboutData = {
  name: "Justin Toler",
  occupation: "Full Stack Software Engineer",
  profileImage: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
    to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
    in.`,
  aboutItems: [
    { label: 'Location', text: 'Mooresville, NC', icon: farMap },
    { label: 'Age', text: '33', icon: farCalendar },
    { label: 'Nationality', text: 'Canadian / Irish', icon: farFlag },
    { label: 'Study', text: 'University of NC at Charlotte', icon: fasGraduationCap },
    { label: 'Employment', text: 'University of NC at Charlotte', icon: farBuilding },
  ],
};

import Img_1 from './components/images/suneel.jpg';
import Img_2 from './components/images/suneel2.jpg';
import Img_3 from './components/images/Suneel3.jpg';
import Img_4 from './components/images/Suneel4.jpg';
import Img_5 from './components/images/Suneel5.jpg';
import Img_6 from './components/images/logo2.png';
import Img_7 from './components/images/logo3.png';

const images = [
    {
        post: `${Img_2}`,
        likes: 12,
        comment: 'Amazing pic',
        comments: 16
    },
    {
        post: `${Img_3}`,
        likes: 10,
        comment: 'Superb',
        comments: 6
    },
    {
        post: `${Img_4}`,
        likes: 72,
        comment: 'Lovely',
        comments: 1
    },
    {
        post: `${Img_5}`,
        likes: 11,
        comment: 'Marvelouse',
        comments: 9
    },
    {
        post: `${Img_6}`,
        likes: 32,
        comment: 'Looking Good',
        comments: 6
    },
    {
        post: `${Img_7}`,
        likes: 22,
        comment: 'Excellent.',
        comments: 26
    }
];

const profile_details = [
   {
    pic: `${Img_1}`,
    t_name: 'Suneel.Sweety',
    b_name: 'lovely_suneel',
    bio: 'Frontend Devloper, Web Disigner',
    posts: 7,
    followers: 110,
    following: 92
   }
];

export {images, profile_details};
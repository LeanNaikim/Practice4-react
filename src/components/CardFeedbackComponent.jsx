
import { Avatar, Blockquote, Rating } from 'flowbite-react';

const CardFeedbackComponent = () => {
    return (
    <figure className="max-w-sm bg-slate-300 p-5 rounded-md " >
        <div className="mb-4 flex items-center">
          <Rating size="md">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
          </Rating>
        </div>
        <Blockquote>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            "Plants are divided into different groups based on their characteristics."
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex items-center space-x-3">
          <Avatar rounded size="xs" img="./src/assets/feedback1.jpg" alt="profile picture" />
          <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
          </div>
        </figcaption>
    </figure>
    );
}
export default CardFeedbackComponent;